document.body.style.fontFamily = "Arial";
document.body.style.background = "#eef7ee";
document.body.style.padding = "15px";

/* ===== DATA ===== */
const L = {
  en: {
    title: "Smart Agro Advisor",
    area: "Area (Acre)",
    ph: "Soil pH",
    light: "Light (Lux)",
    soil: "Soil Type",
    calc: "Get Recommendation",
    rec: "Recommended Crops",
    yield: "Expected Yield",
    soils: {
      black: "Black Soil",
      red: "Red Soil",
      loam: "Loamy Soil",
      clay: "Clay Soil",
      sandy: "Sandy Soil",
      alluvial: "Alluvial Soil",
      marshy: "Marshy Soil"
    }
  }
};

const crops = [
  { name: "Rice", soil: ["alluvial", "clay", "marshy"], ph: [5.5, 6.5], light: [20000, 30000], yield: 25 },
  { name: "Wheat", soil: ["loam", "alluvial"], ph: [6, 7], light: [15000, 25000], yield: 18 },
  { name: "Cotton", soil: ["black"], ph: [6, 8], light: [30000, 50000], yield: 10 }
];

/* ===== HELPERS ===== */
function create(tag, text = "", parent = document.body) {
  const el = document.createElement(tag);
  if (text) el.innerText = text;
  parent.appendChild(el);
  return el;
}

/* ===== TITLE ===== */
const title = create("h2", "🌾 " + L.en.title);
title.style.textAlign = "center";
title.style.color = "#2e7d32";

/* ===== CARD ===== */
const card = create("div");
card.style.background = "#fff";
card.style.padding = "15px";
card.style.borderRadius = "10px";

/* ===== INPUTS ===== */
create("label", L.en.area, card);
const area = create("input", "", card);
area.type = "number";

create("label", L.en.ph, card);
const ph = create("input", "", card);
ph.type = "number";

create("label", L.en.light, card);
const light = create("input", "", card);
light.type = "number";

create("label", L.en.soil, card);
const soil = create("select", "", card);
Object.keys(L.en.soils).forEach(s =>
  soil.appendChild(new Option(L.en.soils[s], s))
);

/* ===== BUTTON ===== */
const btn = create("button", L.en.calc, card);
btn.style.background = "#2e7d32";
btn.style.color = "white";
btn.style.border = "none";
btn.style.padding = "10px";
btn.style.borderRadius = "8px";

/* ===== RESULT ===== */
const result = create("div");
result.style.background = "#fff";
result.style.marginTop = "15px";
result.style.padding = "15px";
result.style.borderRadius = "10px";

/* ===== LOGIC ===== */
btn.onclick = () => {
  const a = +area.value;
  const p = +ph.value;
  const l = +light.value;
  const s = soil.value;

  let output = `<h3>${L.en.rec}</h3>`;
  let found = false;

  crops.forEach(c => {
    if (
      c.soil.includes(s) &&
      p >= c.ph[0] && p <= c.ph[1] &&
      l >= c.light[0] && l <= c.light[1]
    ) {
      found = true;
      output += `
        <div style="border:1px solid #c8e6c9;padding:10px;margin-top:10px;border-radius:8px">
          🌾 <b>${c.name}</b><br>
          📈 ${L.en.yield}: ${(c.yield * a).toFixed(1)}
        </div>`;
    }
  });

  if (!found) output += "⚠ No suitable crop found.";
  result.innerHTML = output;
};
