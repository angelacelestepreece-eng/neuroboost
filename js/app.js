/* Lesson finder page: filters (AND logic), chips, tiles. */
(function () {
  const LESSONS = window.LESSONS, CATEGORIES = window.CATEGORIES, ICONS = window.ICONS, esc = window.esc;
  const ALL = LESSONS.length;

  // ---- State lives in the URL (?f=Math|High Energy) so Back from a lesson restores the same results ----
  const params = new URLSearchParams(location.search);
  const selected = new Set((params.get("f") || "").split("|").filter(Boolean));
  const order = [...selected]; // order filters were picked, for the chip row

  const matches = (lesson, tags) => [...tags].every(t => lesson.filterTags.has(t));
  const filtered = tags => LESSONS.filter(l => matches(l, tags));

  // ---- Build the filter panel once ----
  const groups = document.getElementById("filterGroups");
  CATEGORIES.forEach((cat, ci) => {
    const d = document.createElement("details");
    d.dataset.cat = cat.name;
    if (cat.name === "Subject" || cat.options.some(o => selected.has(o))) d.open = true;
    d.innerHTML =
      `<summary><span class="tri" aria-hidden="true"></span><span>${esc(cat.name)}</span><span class="sel-count" hidden></span></summary>` +
      `<ul class="opts">` +
      cat.options.map((o, oi) => {
        const id = `f-${ci}-${oi}`;
        return `<li class="opt"><label for="${id}"><input type="checkbox" id="${id}" value="${esc(o)}"><span>${esc(o)}</span><span class="n"></span></label></li>`;
      }).join("") +
      `</ul>`;
    groups.appendChild(d);
  });

  groups.addEventListener("change", e => {
    if (e.target.type !== "checkbox") return;
    toggle(e.target.value, e.target.checked);
  });

  function toggle(tag, on) {
    if (on) { selected.add(tag); if (!order.includes(tag)) order.push(tag); }
    else { selected.delete(tag); order.splice(order.indexOf(tag), 1); }
    render();
  }

  // ---- Mobile filter toggle ----
  const panel = document.getElementById("filters");
  const toggleBtn = document.getElementById("filtersToggle");
  toggleBtn.addEventListener("click", () => {
    const open = panel.classList.toggle("collapsed") === false;
    toggleBtn.setAttribute("aria-expanded", open);
  });

  // ---- Render ----
  const x = `<svg viewBox="0 0 12 12" aria-hidden="true"><path d="M2 2l8 8M10 2l-8 8"/></svg>`;
  const arrow = `<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M3 8h10M9 4l4 4-4 4"/></svg>`;

  function render() {
    const results = filtered(selected);

    // URL
    history.replaceState(null, "", selected.size ? "?f=" + encodeURIComponent(order.join("|")) : location.pathname);

    // Checkboxes: the same tag can live in several categories; keep every copy in sync.
    // Each option shows how many lessons you'd get if you added it (feedforward, so AND-filtering doesn't dead-end by surprise).
    groups.querySelectorAll("details").forEach(d => {
      let n = 0;
      d.querySelectorAll("input").forEach(inp => {
        const tag = inp.value, on = selected.has(tag);
        inp.checked = on;
        if (on) n++;
        const would = on ? results.length : filtered(new Set([...selected, tag])).length;
        const li = inp.closest(".opt");
        li.querySelector(".n").textContent = would;
        li.classList.toggle("zero", !on && would === 0);
        inp.closest("label").title = on ? "Selected" : `${would} lesson${would === 1 ? "" : "s"} if added`;
      });
      const badge = d.querySelector(".sel-count");
      badge.hidden = n === 0;
      badge.textContent = n;
    });

    // Chips
    const chips = document.getElementById("chips");
    if (selected.size) {
      chips.innerHTML = order.map(t =>
        `<button class="chip" data-tag="${esc(t)}" aria-label="Remove filter: ${esc(t)}">${x}${esc(t)}</button>`
      ).join("") + (selected.size > 1 ? `<button class="clear-all" id="clearAll">Clear all</button>` : "");
    } else {
      chips.innerHTML = `<span class="hint">Pick filters to narrow the list. Each one you add must also match.</span>`;
    }
    document.getElementById("toggleCount").textContent = selected.size ? `${selected.size} selected` : "";

    // Count
    document.getElementById("count").innerHTML = selected.size
      ? `Showing <strong>${results.length}</strong> of ${ALL} lessons that match <strong>all</strong> selected filters`
      : `Showing all <strong>${ALL}</strong> lessons`;

    // Tiles or empty state
    const tiles = document.getElementById("tiles");
    const from = selected.size ? "&from=" + encodeURIComponent(order.join("|")) : "";
    if (results.length) {
      tiles.innerHTML = results.map(l => `
        <li><a class="tile" href="lesson.html?id=${l.id}${from}">
          <div class="strip">${ICONS[l.subject]}<span>${esc(l.subject)}</span></div>
          <div class="body">
            <h3>${esc(l.title)}</h3>
            <p>${esc(l.desc)}</p>
            <div class="meta">
              <span><span class="sr-only">Time: </span>${esc(l.time)}</span>
              <span>${esc(l.cost)}</span>
              <span class="go">View lesson plan ${arrow}</span>
            </div>
          </div>
        </a></li>`).join("");
    } else {
      // Recovery: show what removing each filter would bring back.
      const fixes = order.map(t => {
        const rest = new Set(selected); rest.delete(t);
        return { t, n: filtered(rest).length };
      }).filter(f => f.n > 0).sort((a, b) => b.n - a.n);
      tiles.innerHTML = `<li class="empty">
        <h3>No lessons match all ${selected.size} filters yet</h3>
        <p>${selected.has("Expert") ? "We haven't added Expert lessons yet. " : ""}Try removing one filter:</p>
        <ul>${fixes.map(f => `<li><button data-tag="${esc(f.t)}">Remove “${esc(f.t)}” → ${f.n} lesson${f.n === 1 ? "" : "s"}</button></li>`).join("")}</ul>
      </li>`;
    }
  }

  document.addEventListener("click", e => {
    const b = e.target.closest("[data-tag]");
    if (b) { toggle(b.dataset.tag, false); return; }
    if (e.target.id === "clearAll") { selected.clear(); order.length = 0; render(); }
  });

  render();
})();
