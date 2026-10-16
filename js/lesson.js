/* Lesson plan page. Smoothie Recipe Multiplier has a full plan; other lessons use the template with placeholders. */
(function () {
  const esc = window.esc, ICONS = window.ICONS, CATEGORIES = window.CATEGORIES;
  const params = new URLSearchParams(location.search);
  const lesson = window.LESSONS.find(l => l.id === params.get("id"));
  const from = params.get("from");
  const backHref = "index.html" + (from ? "?f=" + encodeURIComponent(from) : "");
  const root = document.getElementById("lesson");
  const back = `<a class="back" href="${backHref}"><svg viewBox="0 0 16 16" aria-hidden="true"><path d="M13 8H3M7 4L3 8l4 4"/></svg>Back to ${from ? "your results" : "all lessons"}</a>`;

  if (!lesson) {
    root.innerHTML = `${back}<h1 class="page-title">We couldn't find that lesson</h1><p>It may have been renamed. Head back to the lesson finder to browse all ${window.LESSONS.length} lessons.</p>`;
    return;
  }
  document.title = `${lesson.title} · Neuroboost`;

  // ---- Full plans (only one written so far) ----
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
      safety: "Only adults handle the blender blade and plug. Check for food allergies (dairy, nuts in some yogurts) before starting."
    }
  };
  const full = FULL[lesson.id];

  // ---- Shared pieces ----
  const facts = Object.assign({
    "Time": lesson.time, "Cost": lesson.cost, "Subject": lesson.subject,
    "Level": [...lesson.filterTags].filter(t => ["Beginner", "Intermediate", "Expert"].includes(t)).join(" / ") || "—"
  }, full ? full.facts : {});

  // Group this lesson's filter tags by category (each tag shown once). Each tag links back to the finder.
  const shown = new Set();
  const tagGroups = CATEGORIES.filter(c => c.name !== "Subject").map(c => {
    const tags = c.options.filter(o => lesson.filterTags.has(o) && !shown.has(o));
    tags.forEach(t => shown.add(t));
    return tags.length ? `<div class="tag-group"><b>${esc(c.name)}</b><div class="taglist">${tags.map(t =>
      `<a href="index.html?f=${encodeURIComponent(t)}" title="Find more ${esc(t)} lessons">${esc(t)}</a>`).join("")}</div></div>` : "";
  }).join("");

  const ph = name => `<div class="placeholder">Your team will write the ${name} for this lesson.</div>`;
  const list = arr => `<ul>${arr.map(i => `<li>${esc(i)}</li>`).join("")}</ul>`;

  let mainHtml;
  if (full) {
    mainHtml = `
      <section><h2>Learning goal</h2><p>${esc(full.goal)}</p></section>
      <section><h2>What you'll need</h2>${list(full.materials)}</section>
      <section><h2>Before you start</h2>${list(full.prep)}</section>
      <section><h2>Lesson steps</h2>
        <p>Show your child this plan first. Knowing the order helps reduce surprises.</p>
        <div class="flow" aria-label="Lesson order">${full.flow.map((f, i) => `${i ? "<i>→</i>" : ""}<span>${i + 1}. ${f}</span>`).join("")}</div>
        <ol class="steps" style="margin-top:16px">${full.steps.map(([t, time, body, say]) => `
          <li><h3>${esc(t)} <small>${esc(time)}</small></h3><p>${esc(body)}</p>${say ? `<span class="say"><b>Say together:</b> “${esc(say)}”</span>` : ""}</li>`).join("")}
        </ol>
      </section>
      <section><h2>Multiplier chart</h2>
        <p>Print this or copy it onto paper. Your child fills in the blank columns.</p>
        <table class="chart">
          <thead><tr><th>Ingredient</th><th>1× recipe</th><th>2× (double)</th><th>3× (triple)</th></tr></thead>
          <tbody>
            ${[["Frozen fruit", "1 cup"], ["Banana", "1"], ["Yogurt", "½ cup"], ["Milk", "½ cup"], ["Honey", "1 tbsp"]]
              .map(([a, b]) => `<tr><td>${a}</td><td>${b}</td><td class="blank">______</td><td class="blank">______</td></tr>`).join("")}
          </tbody>
        </table>
      </section>
      <section><h2>Sensory &amp; regulation tips</h2><div class="callout">${list(full.sensory)}</div></section>
      <section><h2>Adapt it</h2>${Object.entries(full.adapt).map(([k, v]) => `<p><b>${esc(k)}:</b> ${esc(v)}</p>`).join("")}</section>
      <section><h2>Check for understanding</h2>${list(full.check)}</section>
      <section><h2>Safety</h2><div class="callout warn">${esc(full.safety)}</div></section>`;
  } else {
    mainHtml = `
      <div class="draft-banner"><b>Draft lesson.</b> The full plan for this lesson is still being written. The overview and tags are final.</div>
      ${["Learning goal", "What you'll need", "Before you start", "Lesson steps", "Sensory & regulation tips", "Adapt it", "Check for understanding"]
        .map(s => `<section><h2>${esc(s)}</h2>${ph(s.toLowerCase())}</section>`).join("")}`;
  }

  root.innerHTML = `
    <nav class="crumbs" aria-label="Breadcrumb"><a href="${backHref}">Find your lesson plan</a> › ${esc(lesson.title)}</nav>
    ${back}
    <div class="lesson-hero">
      <div class="strip">${ICONS[lesson.subject]}<span>${esc(lesson.subject)}</span></div>
      <div class="body">
        <h1>${esc(lesson.title)}</h1>
        <p>${esc(lesson.desc)}</p>
        <div class="facts">${Object.entries(facts).map(([k, v]) => `<div class="fact"><b>${esc(k)}</b><span>${esc(v)}</span></div>`).join("")}</div>
      </div>
    </div>
    <div class="lesson-layout">
      <div class="lesson-main">${mainHtml}</div>
      <aside class="side">
        <div class="card"><h2>This lesson is…</h2>${tagGroups}<p style="font-size:.8rem;color:var(--muted);margin:4px 0 0">Tap a tag to find similar lessons.</p></div>
        <button class="btn" onclick="window.print()">Print this lesson</button>
      </aside>
    </div>`;
})();
