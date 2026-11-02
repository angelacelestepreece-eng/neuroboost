/* Lesson plan page. Smoothie Recipe Multiplier has a full plan; other lessons use the template with placeholders. */
(function () {
  const esc = window.esc, ICONS = window.ICONS, CATEGORIES = window.CATEGORIES;
  const params = new URLSearchParams(location.search);
  const lesson = window.LESSONS.find(l => l.id === params.get("id"));
  const from = params.get("from");
  const backHref = "index.html" + (from ? "?f=" + encodeURIComponent(from) : "");
  const root = document.getElementById("lesson");
  const backLabel = `Back to ${from ? "your results" : "all lessons"}`;
  const back = `<a class="back" href="${backHref}" aria-label="${backLabel}" title="${backLabel}"><svg viewBox="0 0 16 16" aria-hidden="true"><path d="M13 8H3M7 4L3 8l4 4"/></svg></a>`;

  if (!lesson) {
    root.innerHTML = `${back}<h1 class="page-title">We couldn't find that lesson</h1><p>It may have been renamed. Head back to the lesson finder to browse all ${window.LESSONS.length} lessons.</p>`;
    return;
  }
  document.title = `${lesson.title} · Neuroboost`;

  const fromQ = from ? "&from=" + encodeURIComponent(from) : "";

  // ---- Recently viewed: read the list before adding this lesson to it ----
  const recentIds = window.recent.get().filter(id => id !== lesson.id).slice(0, 4);
  window.recent.add(lesson.id);
  const linkQ = fromQ; // links to other lessons keep the user's filters for the breadcrumb
  const recentHtml = recentIds.length ? `
    <section class="recent" aria-labelledby="recentTitle">
      <h2 id="recentTitle">Recently viewed</h2>
      <div class="recent-row">${recentIds.map(id => window.recentPill(window.lessonById(id), linkQ)).join("")}</div>
    </section>` : "";

  // ---- Full plans: Smoothie is written here; the other 35 are in js/plans.js ----
  const FULL = {
    "smoothie-recipe-multiplier": {
      goal: "Your child multiplies kitchen measurements by 2 and 3, and sees that multiplying is the same as adding a scoop again and again.",
      facts: { "Prep": "About 15 min", "Group size": "1 child + 1 adult, or siblings" },
      materials: [
        "Blender (adult handles the blade and plug)",
        "Measuring cups (1 cup and ½ cup) and a tablespoon",
        "1 cup frozen fruit, 1 banana, ½ cup yogurt, ½ cup milk, 1 tbsp honey — multiplied by 2 or 3",
        "Printed recipe card and multiplier chart (below)",
        "Pencil, cups for serving, a towel for spills",
        "Optional: ear defenders or noise-canceling headphones for the blender"
      ],
      prep: [
        "Print the recipe card in large type with a small picture next to each ingredient.",
        "Draw the multiplier chart: one row per ingredient, columns for 1×, 2× and 3×.",
        "Set out ingredients left to right in recipe order, so the table matches the card.",
        "Check for food allergies and texture dislikes. Swap fruits freely (berries, mango, peach).",
        "Tell your child ahead of time that the blender is loud and short, and show them where they can stand."
      ],
      flow: ["Read", "Multiply", "Measure", "Blend", "Taste"],
      steps: [
        ["Preview the plan", "3 min", "Show the five-step strip above. Point to each picture so your child knows exactly what happens and when it ends.", "First we read, then we multiply, then we measure, then we blend, then we taste."],
        ["Read the recipe aloud", "5 min", "Your child reads each measurement off the card while you point. If reading is tiring today, you read and they repeat.", "One cup of frozen fruit. One banana. Half a cup of yogurt…"],
        ["Pick double or triple", "2 min", "Ask how many people want smoothies. Two people means double; three means triple. Letting them choose gives a sense of control."],
        ["Multiply together", "10 min", "For each ingredient, say the multiplied amount out loud together, then your child writes it in the chart. Show it with the cup: two scoops of one cup is two cups.", "One cup, times two, is two cups!"],
        ["Measure it out", "10 min", "Your child scoops each ingredient into the blender, counting scoops aloud. The number of scoops should match the chart."],
        ["Blend", "2 min", "Count down from three before pressing the button. Your child can press it, cover their ears, or step out of the room — whatever feels best."],
        ["Pour, taste and check", "5 min", "Pour equal servings. Ask how many cups you made and whether it matches the chart. Celebrate the math!"]
      ],
      sensory: [
        "Blender noise: give a countdown, offer headphones, or let your child leave and come back.",
        "Textures: frozen fruit is cold and sticky. Offer a spoon or tongs instead of hands.",
        "Taste: keep the flavors familiar. A new fruit is fine as an option, never a requirement.",
        "If attention fades, pause after any step. The chart shows exactly where to pick up."
      ],
      adapt: {
        "Make it easier": "Only double, use whole-number ingredients (skip the ½ cups), and use picture cards instead of words.",
        "Make it harder": "Triple the half-cup items (½ × 3 = 1½), halve the recipe, or ask how much you'd need for a whole class."
      },
      check: ["How many cups of fruit did we use for the double recipe?", "If one recipe needs 1 banana, how many do 3 recipes need?", "What is another way to say 'two times one cup'?"],
      chart: {
        title: "Multiplier chart",
        intro: "Print this or copy it onto paper. Your child fills in the blank columns.",
        head: ["Ingredient", "1× recipe", "2× (double)", "3× (triple)"],
        rows: [["Frozen fruit", "1 cup", "", ""], ["Banana", "1", "", ""], ["Yogurt", "½ cup", "", ""], ["Milk", "½ cup", "", ""], ["Honey", "1 tbsp", "", ""]]
      },
      safety: "Only adults handle the blender blade and plug. Check for food allergies (dairy, nuts in some yogurts) before starting."
    }
  };
  Object.assign(FULL, window.PLANS || {});
  const full = FULL[lesson.id];

  // ---- Shared pieces ----
  const facts = Object.assign({
    "Time": lesson.time, "Cost": lesson.cost, "Subject": lesson.subject,
    "Level": [...lesson.filterTags].filter(t => ["Beginner", "Intermediate", "Expert"].includes(t)).join(" / ") || "—"
  }, full ? full.facts : {});

  // Group this lesson's filter tags by category (each tag shown once). Each tag links back to the finder.
  const shown = new Set();
  const tagGroups = CATEGORIES.filter(c => c.name !== "Subject").map(c => {
    // Checkbox options show as-is; a slider shows its level (e.g. "Sensory Level: High"). Cost is already in the facts.
    const tags = c.options.flatMap(o => typeof o === "string" ? [o]
      : o.slider === "Cost" ? [] : [...lesson.filterTags].filter(t => t.startsWith(o.slider + ": ")))
      .filter(o => lesson.filterTags.has(o) && !shown.has(o));
    tags.forEach(t => shown.add(t));
    return tags.length ? `<div class="tag-group"><b>${esc(c.name)}</b><div class="taglist">${tags.map(t =>
      `<a href="index.html?f=${encodeURIComponent(t)}" title="Find more ${esc(t)} lessons">${esc(t)}</a>`).join("")}</div></div>` : "";
  }).join("");

  // ---- Suggestions: same subject, ranked by shared Sensory Focus tags; matching Sensory Level breaks ties ----
  const sensoryOpts = CATEGORIES.find(c => c.name === "Sensory Focus").options.filter(o => typeof o === "string");
  const levelOf = l => [...l.filterTags].find(t => t.startsWith("Sensory Level: "));
  const suggestions = window.LESSONS
    .filter(l => l !== lesson && l.subject === lesson.subject)
    .map((l, i) => ({ l, i,
      shared: sensoryOpts.filter(o => l.filterTags.has(o) && lesson.filterTags.has(o)).length,
      sameLevel: levelOf(l) && levelOf(l) === levelOf(lesson) ? 1 : 0 }))
    .sort((a, b) => b.shared - a.shared || b.sameLevel - a.sameLevel || a.i - b.i)
    .slice(0, 3).map(x => x.l);
  const arrow = `<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M3 8h10M9 4l4 4-4 4"/></svg>`;
  const suggestHtml = suggestions.length ? `
    <section class="suggestions" aria-labelledby="sugTitle">
      <h2 id="sugTitle">You might also like</h2>
      <ul class="sug-grid">${suggestions.map(l => `
        <li><a class="sug-card" href="lesson.html?id=${l.id}${linkQ}">
          <div class="sug-head">${ICONS[l.subject]}<h3>${esc(l.title)}</h3></div>
          <p>${esc(l.desc)}</p>
          <span class="go">View lesson plan ${arrow}</span>
        </a></li>`).join("")}
      </ul>
    </section>` : "";

  // ---- Collapsible sections ----
  // Each section is a <details> block. Learning goal and Lesson steps start open; the rest start closed.
  // The hint on the right says what's inside while it's closed. Printing opens every section (see the end of this file).
  const sec = (title, body, hint, open) => `
      <details class="sec"${open ? " open" : ""}>
        <summary><h2>${esc(title)}</h2>${hint ? `<span class="sec-hint">${esc(hint)}</span>` : ""}</summary>
        <div class="sec-body">${body}</div>
      </details>`;
  const count = (n, word) => `${n} ${word}${n === 1 ? "" : "s"}`;

  // Printable chart or worksheet; "" cells are blanks for your child to fill in.
  const chartHtml = c => sec(c.title, `${c.intro ? `<p>${esc(c.intro)}</p>` : ""}
        <table class="chart"><thead><tr>${c.head.map(h => `<th>${esc(h)}</th>`).join("")}</tr></thead>
        <tbody>${c.rows.map(r => `<tr>${r.map(v => v === "" ? `<td class="blank">______</td>` : `<td>${esc(v)}</td>`).join("")}</tr>`).join("")}</tbody></table>`, "Printable", false);

  const ph = name => `<div class="placeholder">Your team will write the ${name} for this lesson.</div>`;
  const list = arr => `<ul>${arr.map(i => `<li>${esc(i)}</li>`).join("")}</ul>`;
  const tools = `<div class="sec-tools"><button type="button" data-sections="open">Expand all</button><button type="button" data-sections="close">Collapse all</button></div>`;

  let mainHtml;
  if (full) {
    mainHtml = tools +
      sec("Learning goal", `<p>${esc(full.goal)}</p>`, "", true) +
      sec("What you'll need", list(full.materials), count(full.materials.length, "item"), false) +
      sec("Before you start", list(full.prep), count(full.prep.length, "task"), false) +
      sec("Lesson steps", `
        <p>Show your child this plan first. Knowing the order helps reduce surprises.</p>
        <div class="flow" aria-label="Lesson order">${full.flow.map((f, i) => `${i ? "<i>→</i>" : ""}<span>${i + 1}. ${esc(f)}</span>`).join("")}</div>
        <ol class="steps" style="margin-top:16px">${full.steps.map(([t, time, body, say]) => `
          <li><h3>${esc(t)} <small>${esc(time)}</small></h3><p>${esc(body)}</p>${say ? `<span class="say"><b>Say together:</b> “${esc(say)}”</span>` : ""}</li>`).join("")}
        </ol>`, `${count(full.steps.length, "step")} · ${lesson.time}`, true) +
      (full.chart ? chartHtml(full.chart) : "") +
      sec("Sensory & regulation tips", `<div class="callout">${list(full.sensory)}</div>`, count(full.sensory.length, "tip"), false) +
      sec("Adapt it", Object.entries(full.adapt).map(([k, v]) => `<p><b>${esc(k)}:</b> ${esc(v)}</p>`).join(""), "Easier · Harder", false) +
      sec("Check for understanding", list(full.check), count(full.check.length, "question"), false) +
      (full.safety ? sec("Safety", `<div class="callout warn">${esc(full.safety)}</div>`, "", false) : "");
  } else {
    mainHtml = `
      <div class="draft-banner"><b>Draft lesson.</b> The full plan for this lesson is still being written. The overview and tags are final.</div>
      ${["Learning goal", "What you'll need", "Before you start", "Lesson steps", "Sensory & regulation tips", "Adapt it", "Check for understanding"]
        .map((t, i) => sec(t, ph(t.toLowerCase()), "", i === 0 || i === 3)).join("")}`;
  }

  root.innerHTML = `
    <nav class="crumbs" aria-label="Breadcrumb">${back}<a href="${backHref}">Find Your Lesson Plan</a><span aria-hidden="true">›</span><span aria-current="page">${esc(lesson.title)}</span></nav>
    <div class="lesson-hero">
      <div class="strip">${ICONS[lesson.subject]}</div>
      <div class="body">
        <div class="hero-top">
          <h1>${esc(lesson.title)}</h1>
          <button class="print-btn" type="button" onclick="window.print()"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 9V3h12v6M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><path d="M6 14h12v7H6z"/></svg>Print</button>
        </div>
        <p>${esc(lesson.desc)}</p>
        <div class="facts">${Object.entries(facts).map(([k, v]) => `<div class="fact"><b>${esc(k)}</b><span>${esc(v)}</span></div>`).join("")}</div>
      </div>
    </div>
    <div class="lesson-layout">
      <div class="lesson-main">${mainHtml}</div>
      <aside class="side">
        <div class="card"><h2>Find similar lessons</h2>${tagGroups}</div>
      </aside>
    </div>
    ${recentHtml}
    ${suggestHtml}`;

  // ---- Expand all / Collapse all ----
  root.addEventListener("click", e => {
    const b = e.target.closest("[data-sections]");
    if (!b) return;
    const open = b.dataset.sections === "open";
    root.querySelectorAll("details.sec").forEach(d => { d.open = open; });
  });

  // ---- Printing: open every section so nothing is left off the page, then put them back ----
  let before = null;
  window.addEventListener("beforeprint", () => {
    const all = [...root.querySelectorAll("details.sec")];
    before = all.map(d => d.open);
    all.forEach(d => { d.open = true; });
  });
  window.addEventListener("afterprint", () => {
    if (!before) return;
    root.querySelectorAll("details.sec").forEach((d, i) => { d.open = before[i]; });
    before = null;
  });
})();
