/* Shared helpers: subject icons, filter categories, and tag normalization. */

// All icons share one 48x48 grid and a 2px stroke so their line weight matches.
window.ICONS = {
  "Math": `<svg viewBox="0 0 48 48" aria-hidden="true"><rect x="5" y="5" width="17" height="17" rx="3"/><rect x="26" y="5" width="17" height="17" rx="3"/><rect x="5" y="26" width="17" height="17" rx="3"/><rect x="26" y="26" width="17" height="17" rx="3"/><path d="M13.5 9v9M9 13.5h9M30 13.5h9M30.5 30.5l8 8M38.5 30.5l-8 8M17.5 30l-8 9"/><circle cx="10" cy="30.5" r="1.6"/><circle cx="17" cy="38.5" r="1.6"/></svg>`,
  "Reading and Writing": `<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M24 13c-5-3-12-3.5-17-2v25c5-1.5 12-1 17 2 5-3 12-3.5 17-2V11c-5-1.5-12-1-17 2z"/><path d="M24 13v25"/><path d="M4 15v25c6-1.5 14-1 20 2 6-3 14-3.5 20-2V15"/><path d="M11 17c3-.6 6.5-.3 9 .8M11 22c3-.6 6.5-.3 9 .8M37 17c-3-.6-6.5-.3-9 .8M37 22c-3-.6-6.5-.3-9 .8"/></svg>`,
  "Geography": `<svg viewBox="0 0 48 48" aria-hidden="true"><circle cx="24" cy="24" r="19"/><path d="M10 13c3 1 5 0 7 2s0 4 2 6 5 1 5 4-3 3-3 6 2 4 1 7c-3-1-5-4-6-7s-4-4-5-7-3-4-4-5"/><path d="M27 6c-1 3 1 4 3 5s4 0 5 2-2 3-1 5 4 1 5 3c1 2 0 4 2 5"/><path d="M33 31c2-1 4 0 5 2s-1 4-3 5-3-1-3-3 0-3 1-4z"/></svg>`,
  "History": `<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M9.5 24A15 15 0 1 1 14 34.6"/><path d="M5 19.5l4.5 5 4.5-5"/><path d="M24.5 15v10l7 4"/></svg>`,
  "Science": `<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M19 7h10M21 7v12L10.5 38a3 3 0 0 0 2.7 4.5h21.6a3 3 0 0 0 2.7-4.5L27 19V7"/><path d="M15 31h18"/><circle cx="20" cy="36.5" r="1.4"/><circle cx="27" cy="35" r="1"/><circle cx="29.5" cy="38.5" r="1.4"/><circle cx="31" cy="4" r="1.5"/><circle cx="35" cy="9" r="1"/></svg>`
};

// ---- Sliders ----
// A slider is one filter with several stops. When it's on, its tag is "Name: Stop" (e.g. "Physical Activity Level: Low"),
// so it works with the same AND-matching, chips and URLs as the checkboxes.
window.SLIDERS = {
  "Physical Activity Level": { stops: ["Low", "Medium", "High"] },
  "Preparation Level": { stops: ["Low", "Medium", "High"] },
  "Teacher Participation Level": { stops: ["Low", "Medium", "High"] },
  "Sensory Level": { stops: ["Low", "Medium", "High"] },
  "Cost": { stops: ["Free", "Up to $2", "Up to $5", "Up to $10", "Up to $15"], short: ["$0", "$2", "$5", "$10", "$15"], defaultStop: 2 }
};
window.sliderTag = (name, i) => `${name}: ${window.SLIDERS[name].stops[i]}`;

// Filter hierarchy, in the order of the team's updated design. A { slider } entry is drawn as a slider.
window.CATEGORIES = [
  { name: "Subject", options: ["Math", "Reading and Writing", "History", "Science", "Geography"] },
  { name: "Preparations", options: [{ slider: "Preparation Level" }, { slider: "Teacher Participation Level" }, { slider: "Cost" }] },
  { name: "Lesson Structure", options: [{ slider: "Teacher Participation Level" }, "Independent Work", "Group Focused/Social", "Highly Structured", "Flexible Structure", "Time Sensitive", "Multi-day", "Scaffolding"] },
  { name: "Methods of Teaching", options: [{ slider: "Physical Activity Level" }, "Hands On/Tactile", "Scaffolding", "Gamification", "Video", "Worksheet", "Online", "Offline", "Inside", "Outside"] },
  { name: "Sensory Focus", options: [{ slider: "Sensory Level" }, "Hands On/Tactile", "Auditory Focused", "Visual Focused", "Taste Focused", "Smell Focused", "Multimodal Sensory"] },
  { name: "Work Environment", options: ["Inside", "Outside", "Online", "Offline"] },
  { name: "Time", options: ["Less than half an hour", "About an hour", "More than an hour", "Multi-day", "Time Sensitive", "Flexible Structure"] },
  { name: "Difficulty Level", options: ["Beginner", "Intermediate", "Expert"] }
];

// Spreadsheet wording -> checkbox filter wording. A value can expand to several filters.
const TAG_MAP = {
  "hands on/tactile": ["Hands On/Tactile"],
  "auditory focused": ["Auditory Focused"], "visual focused": ["Visual Focused"],
  "smell focused": ["Smell Focused"], "taste focused": ["Taste Focused"],
  "multimodal sensory": ["Multimodal Sensory"],
  "group focused/social": ["Group Focused/Social"], "group/social focused": ["Group Focused/Social"],
  "individual/group": ["Group Focused/Social"],
  "beginner": ["Beginner"], "beginner/intermediate": ["Beginner", "Intermediate"],
  "intermediate": ["Intermediate"], "expert": ["Expert"],
  "independent work": ["Independent Work"],
  "multi-day": ["Multi-day"],
  "video": ["Video"], "worksheet": ["Worksheet"],
  "online": ["Online"], "offline": ["Offline"], "offline or online": ["Offline", "Online"],
  "inside": ["Inside"], "outside": ["Outside"], "outside/nature": ["Outside"],
  "inside or outside/nature": ["Inside", "Outside"],
  "flexible": ["Flexible Structure"], "highly structured": ["Highly Structured"],
  "time sensitive": ["Time Sensitive"], "gamification": ["Gamification"], "scaffolding": ["Scaffolding"]
};

// Slider levels from the spreadsheet's High/Low tags. The data has no "Medium" tag, so:
//  - Physical Activity: tagged neither High nor Low Energy -> Medium
//  - Sensory: tagged both High and Low, or neither -> Medium
//  - Teacher Participation: both adult-supported AND independent -> Medium
//  - Preparation: every lesson is High or Low today, so Medium is empty until a lesson sets it.
// To set a level by hand, add e.g.  levels: { "Preparation Level": "Medium" }  to a lesson in lessons.js.
function sliderLevels(l, t) {
  const has = s => t.includes(s);
  const hiLo = (hi, lo) => hi && !lo ? "High" : lo && !hi ? "Low" : "Medium";
  const adult = has("teacher dependent") || has("requires adult support"), indep = has("independent work");
  const out = {
    "Physical Activity Level": hiLo(has("high energy"), has("low energy")),
    "Sensory Level": hiLo(has("high sensory"), has("low sensory")),
    "Preparation Level": has("high preparation") ? "High" : has("low preparation") ? "Low" : null,
    "Teacher Participation Level": adult && indep ? "Medium" : adult ? "High" : indep ? "Low" : null
  };
  return Object.assign(out, l.levels || {});
}

// Cost uses the TOP of the range, so a parent never sees a lesson that could cost more than they picked.
const COST_LIMITS = [0, 2, 5, 10, 15];
function costTop(cost) {
  return Math.max(...(cost.match(/\d+/g) || ["0"]).map(Number));
}

// Time: read the minutes range ("20–30 min"). A range that crosses a cutoff counts in both groups.
function timeBuckets(time) {
  const m = time.match(/(\d+)\s*(?:[–-]\s*(\d+))?\s*min/);
  if (!m) return [];
  const lo = +m[1], hi = +(m[2] || m[1]), out = [];
  if (lo < 30) out.push("Less than half an hour");
  if (hi > 30 && lo <= 75) out.push("About an hour");
  if (hi > 75) out.push("More than an hour");
  return out;
}

function slugify(s) {
  return s.toLowerCase().replace(/’|'/g, "").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

window.LESSONS.forEach(l => {
  const t = l.tags.toLowerCase();
  const set = new Set([l.subject, ...timeBuckets(l.time)]);
  t.split(",").map(x => x.trim()).forEach(x => (TAG_MAP[x] || []).forEach(y => set.add(y)));
  Object.entries(sliderLevels(l, t)).forEach(([name, level]) => level && set.add(`${name}: ${level}`));
  const top = costTop(l.cost);
  COST_LIMITS.forEach((lim, i) => top <= lim && set.add(window.sliderTag("Cost", i)));
  l.filterTags = set;
  l.id = slugify(l.title);
});

window.esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

// ---- Recently viewed lessons (remembered in this browser only) ----
window.recent = (function () {
  const KEY = "neuroboost-recent", MAX = 6;
  const get = () => {
    try { return (JSON.parse(localStorage.getItem(KEY)) || []).filter(id => window.LESSONS.some(l => l.id === id)); }
    catch (e) { return []; }
  };
  const save = ids => { try { localStorage.setItem(KEY, JSON.stringify(ids.slice(0, MAX))); } catch (e) {} };
  return {
    get,
    add: id => save([id, ...get().filter(x => x !== id)]),
    clear: () => { try { localStorage.removeItem(KEY); } catch (e) {} }
  };
})();
window.lessonById = id => window.LESSONS.find(l => l.id === id);
// Small pill used in the "Recently viewed" rows.
window.recentPill = (l, extra) =>
  `<a class="recent-pill" href="lesson.html?id=${l.id}${extra || ""}">${window.ICONS[l.subject]}<span>${window.esc(l.title)}</span></a>`;
