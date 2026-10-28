/* Header search: type to find a lesson by title, subject, description or tag. Works on every page. */
(function () {
  const LESSONS = window.LESSONS, ICONS = window.ICONS, esc = window.esc;
  const header = document.querySelector(".site-header");
  if (!header) return;

  const wrap = document.createElement("div");
  wrap.className = "search";
  wrap.innerHTML = `
    <svg class="search-icon" viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="M20 20l-4-4"/></svg>
    <input type="search" id="lessonSearch" placeholder="Search lessons" autocomplete="off"
      role="combobox" aria-label="Search lessons" aria-expanded="false" aria-controls="searchResults" aria-autocomplete="list">
    <ul class="search-results" id="searchResults" role="listbox" hidden></ul>`;
  header.appendChild(wrap);

  const input = wrap.querySelector("input"), list = wrap.querySelector("ul");
  let hits = [], active = -1;

  // Every word typed must appear somewhere. Title matches rank first.
  function find(q) {
    const words = q.toLowerCase().split(/\s+/).filter(Boolean);
    if (!words.length) return [];
    return LESSONS.map(l => {
      const title = l.title.toLowerCase();
      const all = [title, l.subject, l.desc, [...l.filterTags].join(" ")].join(" ").toLowerCase();
      if (!words.every(w => all.includes(w))) return null;
      const score = words.filter(w => title.includes(w)).length * 10 + (title.startsWith(words[0]) ? 5 : 0);
      return { l, score };
    }).filter(Boolean).sort((a, b) => b.score - a.score).slice(0, 6).map(x => x.l);
  }

  function show() {
    const q = input.value.trim();
    hits = find(q);
    active = hits.length ? 0 : -1;
    if (!q) { close(); return; }
    list.innerHTML = hits.length
      ? hits.map((l, i) => `<li role="option" id="sr-${i}" data-id="${l.id}">${ICONS[l.subject]}<span><b>${esc(l.title)}</b><small>${esc(l.subject)} · ${esc(l.time)}</small></span></li>`).join("")
      : `<li class="none">No lessons match “${esc(q)}”</li>`;
    list.hidden = false;
    input.setAttribute("aria-expanded", "true");
    highlight();
  }
  function highlight() {
    list.querySelectorAll("[role=option]").forEach((li, i) => li.classList.toggle("active", i === active));
    if (active >= 0) input.setAttribute("aria-activedescendant", "sr-" + active);
    else input.removeAttribute("aria-activedescendant");
  }
  function close() {
    list.hidden = true; input.setAttribute("aria-expanded", "false"); input.removeAttribute("aria-activedescendant");
  }
  const go = id => { location.href = "lesson.html?id=" + id; };

  input.addEventListener("input", show);
  input.addEventListener("focus", () => input.value.trim() && show());
  input.addEventListener("keydown", e => {
    if (e.key === "ArrowDown" && hits.length) { e.preventDefault(); active = (active + 1) % hits.length; highlight(); }
    else if (e.key === "ArrowUp" && hits.length) { e.preventDefault(); active = (active - 1 + hits.length) % hits.length; highlight(); }
    else if (e.key === "Enter" && active >= 0) { e.preventDefault(); go(hits[active].id); }
    else if (e.key === "Escape") { input.value = ""; close(); }
  });
  list.addEventListener("mousedown", e => {
    const li = e.target.closest("[data-id]");
    if (li) { e.preventDefault(); go(li.dataset.id); }
  });
  document.addEventListener("click", e => { if (!wrap.contains(e.target)) close(); });
})();
