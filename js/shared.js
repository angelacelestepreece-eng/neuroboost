/* Shared helpers: subject icons, filter categories, and tag normalization. */

// All icons share one 48x48 grid and a 2px stroke so their line weight matches.
window.ICONS = {
  "Math": `<svg viewBox="0 0 48 48" aria-hidden="true"><rect x="5" y="5" width="17" height="17" rx="3"/><rect x="26" y="5" width="17" height="17" rx="3"/><rect x="5" y="26" width="17" height="17" rx="3"/><rect x="26" y="26" width="17" height="17" rx="3"/><path d="M13.5 9v9M9 13.5h9M30 13.5h9M30.5 30.5l8 8M38.5 30.5l-8 8M17.5 30l-8 9"/><circle cx="10" cy="30.5" r="1.6"/><circle cx="17" cy="38.5" r="1.6"/></svg>`,
  "Reading and Writing": `<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M24 13c-5-3-12-3.5-17-2v25c5-1.5 12-1 17 2 5-3 12-3.5 17-2V11c-5-1.5-12-1-17 2z"/><path d="M24 13v25"/><path d="M4 15v25c6-1.5 14-1 20 2 6-3 14-3.5 20-2V15"/><path d="M11 17c3-.6 6.5-.3 9 .8M11 22c3-.6 6.5-.3 9 .8M37 17c-3-.6-6.5-.3-9 .8M37 22c-3-.6-6.5-.3-9 .8"/></svg>`,
  "Geography": `<svg viewBox="0 0 48 48" aria-hidden="true"><circle cx="24" cy="24" r="19"/><path d="M10 13c3 1 5 0 7 2s0 4 2 6 5 1 5 4-3 3-3 6 2 4 1 7c-3-1-5-4-6-7s-4-4-5-7-3-4-4-5"/><path d="M27 6c-1 3 1 4 3 5s4 0 5 2-2 3-1 5 4 1 5 3c1 2 0 4 2 5"/><path d="M33 31c2-1 4 0 5 2s-1 4-3 5-3-1-3-3 0-3 1-4z"/></svg>`,
  "History": `<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M9.5 24A15 15 0 1 1 14 34.6"/><path d="M5 19.5l4.5 5 4.5-5"/><path d="M24.5 15v10l7 4"/></svg>`,
  "Science": `<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M19 7h10M21 7v12L10.5 38a3 3 0 0 0 2.7 4.5h21.6a3 3 0 0 0 2.7-4.5L27 19V7"/><path d="M15 31h18"/><circle cx="20" cy="36.5" r="1.4"/><circle cx="27" cy="35" r="1"/><circle cx="29.5" cy="38.5" r="1.4"/><circle cx="31" cy="4" r="1.5"/><circle cx="35" cy="9" r="1"/></svg>`
};

// Filter hierarchy, in the order shown in the team's wireframe.
window.CATEGORIES = [
  { name: "Subject", options: ["Math", "Reading and Writing", "History", "Geography", "Science"] },
  { name: "Lesson Structure", options: ["Independent Work", "Requiring Adult Support", "Group Focused/Social", "Highly Structured", "Flexible", "Time Sensitive", "Multi-day", "Low Sensory", "High Sensory", "High Energy", "Low Energy", "Gamification", "Scaffolding"] },
  { name: "Methods of Teaching", options: ["Hands On/Tactile", "Scaffolding", "Video", "Worksheet", "Gamification", "Online", "Offline", "Inside", "Outside"] },
  { name: "Preparations & Planning", options: ["High Energy", "Low Energy", "Time Sensitive", "Low Preparation Needed", "High Preparation Needed", "Requiring Adult Support", "Independent Work", "Less than $5", "Between $5–10", "More than $10"] },
  { name: "Work Environment", options: ["Inside", "Outside", "Online", "Offline", "Requiring Adult Support", "Independent Work"] },
  { name: "Sensory Focus", options: ["Hands On/Tactile", "Auditory Focused", "Visual Focused", "Smell Focused", "Taste Focused", "Multimodal Sensory", "Low Sensory", "High Sensory"] },
  { name: "Difficulty Levels", options: ["Beginner", "Intermediate", "Expert"] },
  { name: "Time", options: ["Less than an hour", "More than an hour", "Multi-day", "Time Sensitive", "High Preparation Needed", "Low Preparation Needed", "Flexible"] }
];

// Spreadsheet wording -> filter wording. A value can expand to several filters.
const TAG_MAP = {
  "hands on/tactile": ["Hands On/Tactile"],
  "auditory focused": ["Auditory Focused"], "visual focused": ["Visual Focused"],
  "smell focused": ["Smell Focused"], "taste focused": ["Taste Focused"],
  "multimodal sensory": ["Multimodal Sensory"],
  "high energy": ["High Energy"], "low energy": ["Low Energy"],
  "group focused/social": ["Group Focused/Social"], "group/social focused": ["Group Focused/Social"],
  "individual/group": ["Group Focused/Social"],
  "beginner": ["Beginner"], "beginner/intermediate": ["Beginner", "Intermediate"],
  "intermediate": ["Intermediate"], "expert": ["Expert"],
  "teacher dependent": ["Requiring Adult Support"], "requires adult support": ["Requiring Adult Support"],
  "independent work": ["Independent Work"],
  "less than an hour": ["Less than an hour"], "more than an hour": ["More than an hour"],
  "multi-day": ["Multi-day"],
  "video": ["Video"], "worksheet": ["Worksheet"],
  "online": ["Online"], "offline": ["Offline"], "offline or online": ["Offline", "Online"],
  "inside": ["Inside"], "outside": ["Outside"], "outside/nature": ["Outside"],
  "inside or outside/nature": ["Inside", "Outside"],
  "high sensory": ["High Sensory"], "low sensory": ["Low Sensory"],
  "low sensory/high sensory*": ["Low Sensory", "High Sensory"],
  "low preparation": ["Low Preparation Needed"], "high preparation": ["High Preparation Needed"],
  "flexible": ["Flexible"], "highly structured": ["Highly Structured"],
  "time sensitive": ["Time Sensitive"], "gamification": ["Gamification"], "scaffolding": ["Scaffolding"]
};

// Cost bucket uses the TOP of the range, so a parent never sees a lesson that could cost more than they picked.
function costBucket(cost) {
  const nums = (cost.match(/\d+/g) || ["0"]).map(Number);
  const top = Math.max(...nums);
  if (top < 5) return "Less than $5";
  if (top <= 10) return "Between $5–10";
  return "More than $10";
}

function slugify(s) {
  return s.toLowerCase().replace(/’|'/g, "").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

window.LESSONS.forEach(l => {
  const set = new Set([l.subject, costBucket(l.cost)]);
  l.tags.split(",").map(t => t.trim().toLowerCase()).forEach(t => (TAG_MAP[t] || []).forEach(x => set.add(x)));
  l.filterTags = set;
  l.id = slugify(l.title);
});

window.esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
