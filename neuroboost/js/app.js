/* Lesson finder page: filters (AND logic), sliders, chips, tiles. */
(function () {
  const LESSONS = window.LESSONS, CATEGORIES = window.CATEGORIES, SLIDERS = window.SLIDERS, ICONS = window.ICONS, esc = window.esc, sliderTag = window.sliderTag;
  const ALL = LESSONS.length;

  // ---- State lives in the URL (?f=Math|Cost: Up to $5) so Back from a lesson restores the same results ----
  const params = new URLSearchParams(location.search);
  const selected = new Set((params.get("f") || "").split("|").filter(Boolean));
  const order = [...selected]; // order filters were picked, for the chip row

  // Each slider remembers its position even while it's switched off.
  const sliderPos = {};
  Object.entries(SLIDERS).forEach(([name, s]) => { sliderPos[name] = s.defaultStop || 0; });
  selected.forEach(t => {
    const name = Object.keys(SLIDERS).find(n => t.startsWith(n + ": "));
    if (name) sliderPos[name] = Math.max(0, SLIDERS[name].stops.indexOf(t.slice(name.length + 2)));
  });
  const activeSliderTag = name => [...selected].find(t => t.startsWith(name + ": "));

  const matches = (lesson, tags) => [...tags].every(t => lesson.filterTags.has(t));
  const filtered = tags => LESSONS.filter(l => matches(l, tags));

  // ---- Build the filter panel once ----
  const groups = document.getElementById("filterGroups");
  CATEGORIES.forEach((cat, ci) => {
    const d = document.createElement("details");
    d.dataset.cat = cat.name;
    const catTags = cat.options.map(o => typeof o === "string" ? o : o.slider);
    if (cat.name === "Subject" || catTags.some(t => [...selected].some(s => s === t || s.startsWith(t + ": ")))) d.open = true;
    d.innerHTML =
      `<summary><span class="tri" aria-hidden="true"></span><span>${esc(cat.name)}</span><span class="sel-count" hidden></span></summary>` +
      `<ul class="opts">` +
      cat.options.map((o, oi) => {
        const id = `f-${ci}-${oi}`;
        if (typeof o === "string") {
          return `<li class="opt"><label for="${id}"><input type="checkbox" id="${id}" value="${esc(o)}"><span>${esc(o)}</span><span class="n"></span></label></li>`;
        }
        const s = SLIDERS[o.slider], labels = s.short || s.stops;
        return `<li class="opt slider" data-slider="${esc(o.slider)}">
          <label for="${id}"><input type="checkbox" id="${id}" data-slider="${esc(o.slider)}"><span>${esc(o.slider)}</span><span class="n"></span></label>
          <div class="range">
            <input type="range" min="0" max="${s.stops.length - 1}" step="1" data-slider="${esc(o.slider)}" aria-label="${esc(o.slider)}">
            <div class="stops" aria-hidden="true">${labels.map(l => `<span>${esc(l)}</span>`).join("")}</div>
          </div>
        </li>`;
      }).join("") +
      `</ul>`;
    groups.appendChild(d);
  });

  groups.addEventListener("change", e => {
    const el = e.target, name = el.dataset.slider;
    if (el.type === "checkbox" && !name) toggle(el.value, el.checked);
    else if (el.type === "checkbox") setSlider(name, el.checked);
  });
  groups.addEventListener("input", e => {
    const el = e.target;
    if (el.type !== "range") return;
    sliderPos[el.dataset.slider] = +el.value;
    setSlider(el.dataset.slider, true);
  });

  function toggle(tag, on) {
    if (on) { selected.add(tag); if (!order.includes(tag)) order.push(tag); }
    else if (selected.has(tag)) { selected.delete(tag); order.splice(order.indexOf(tag), 1); }
    render();
  }

  function setSlider(name, on) {
    const old = activeSliderTag(name), next = sliderTag(name, sliderPos[name]);
    if (old) {
      selected.delete(old);
      if (on) { selected.add(next); order[order.indexOf(old)] = next; } // keep its chip in place
      else order.splice(order.indexOf(old), 1);
    } else if (on) { selected.add(next); order.push(next); }
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
  const plural = n => `${n} lesson${n === 1 ? "" : "s"}`;

  function render() {
    const results = filtered(selected);

    // URL
    history.replaceState(null, "", selected.size ? "?f=" + encodeURIComponent(order.join("|")) : location.pathname);

    // Each option shows how many lessons you'd get with it (feedforward, so AND-filtering doesn't dead-end by surprise).
    // The same filter can live in several categories; every copy stays in sync.
    const wouldWith = tag => filtered(new Set([...selected, tag])).length;
    groups.querySelectorAll("details").forEach(d => {
      let n = 0;
      d.querySelectorAll(".opt").forEach(li => {
        const box = li.querySelector('input[type="checkbox"]');
        let on, would;
        if (li.classList.contains("slider")) {
          const name = li.dataset.slider, tag = sliderTag(name, sliderPos[name]), act = activeSliderTag(name);
          on = !!act;
          const rest = new Set(selected); if (act) rest.delete(act);
          rest.add(tag);
          would = filtered(rest).length;
          const range = li.querySelector('input[type="range"]');
          range.value = sliderPos[name];
          range.setAttribute("aria-valuetext", SLIDERS[name].stops[sliderPos[name]]);
          li.querySelectorAll(".stops span").forEach((s, i) => s.classList.toggle("cur", i === sliderPos[name]));
          box.closest("label").title = `${SLIDERS[name].stops[sliderPos[name]]}: ${plural(would)}`;
        } else {
          const tag = box.value;
          on = selected.has(tag);
          would = on ? results.length : wouldWith(tag);
          box.closest("label").title = on ? "Selected" : `${plural(would)} if added`;
        }
        box.checked = on;
        if (on) n++;
        li.classList.toggle("on", on);
        li.querySelector(".n").textContent = would;
        li.classList.toggle("zero", !on && would === 0);
      });
      const badge = d.querySelector(".sel-count");
      badge.hidden = n === 0;
      badge.textContent = n;
    });

    // Chips
    const chips = document.getElementById("chips");
    chips.innerHTML = order.map(t =>
      `<button class="chip" data-tag="${esc(t)}" aria-label="Remove filter: ${esc(t)}">${x}${esc(t)}</button>`
    ).join("") + (selected.size > 1 ? `<button class="clear-all" id="clearAll">Clear all</button>` : "");
    chips.hidden = !selected.size;
    document.getElementById("toggleCount").textContent = selected.size ? `${selected.size} selected` : "";

    // Count
    document.getElementById("count").innerHTML = selected.size
      ? `Showing <strong>${results.length}</strong> of ${ALL} lessons`
      : `Showing all <strong>${ALL}</strong> lessons`;

    // Tiles or empty state
    const tiles = document.getElementById("tiles");
    const from = selected.size ? "&from=" + encodeURIComponent(order.join("|")) : "";
    if (results.length) {
      tiles.innerHTML = results.map(l => `
        <li><a class="tile" href="lesson.html?id=${l.id}${from}">
          <div class="strip">${ICONS[l.subject]}</div>
          <div class="body">
            <h3>${esc(l.title)}</h3>
            <p>${esc(l.desc)}</p>
            <div class="meta">
              <span><span class="sr-only">Subject: </span>${esc(l.subject)}</span>
              <span><span class="sr-only">Time: </span>${esc(l.time)}</span>
              <span><span class="sr-only">Cost: </span>${esc(l.cost)}</span>
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
      const soon = selected.has("Expert") ? "We haven't added Expert lessons yet. "
        : selected.has("Preparation Level: Medium") ? "No lessons are marked Medium preparation yet. " : "";
      tiles.innerHTML = `<li class="empty">
        <h3>No lessons match all ${selected.size} filters yet</h3>
        <p>${soon}Try removing one filter:</p>
        <ul>${fixes.map(f => `<li><button data-tag="${esc(f.t)}">Remove “${esc(f.t)}” → ${plural(f.n)}</button></li>`).join("")}</ul>
      </li>`;
    }
  }

  document.addEventListener("click", e => {
    const b = e.target.closest("[data-tag]");
    if (b) { toggle(b.dataset.tag, false); return; }
    if (e.target.id === "clearAll") { selected.clear(); order.length = 0; render(); }
  });

  // ---- Recently viewed row (only shows once a lesson has been opened) ----
  const recentBox = document.getElementById("recent");
  function renderRecent() {
    const ids = window.recent.get().slice(0, 4);
    recentBox.hidden = !ids.length;
    recentBox.innerHTML = ids.length ? `<div class="recent-head"><h2>Recently viewed</h2><button type="button" class="recent-clear" id="recentClear">Clear</button></div>
      <div class="recent-row">${ids.map(id => window.recentPill(window.lessonById(id))).join("")}</div>` : "";
  }
  recentBox.addEventListener("click", e => {
    if (e.target.id === "recentClear") { window.recent.clear(); renderRecent(); }
  });
  renderRecent();

  render();
})();
