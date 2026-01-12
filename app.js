document.body.style.fontFamily = "Arial";
document.body.style.background = "#eef7ee";
document.body.style.padding = "15px";

/* ===== LABELS ===== */
const L = {
  title: "Smart Agro Advisor",
  area: "Area (Acre)",
  ph: "Soil pH",
  light: "Light (Lux)",
  soil: "Soil Type",
  calc: "Get Recommendation",
  rec: "Recommended Crops",
  yield: "Expected Yield (Quintals)",
  subsidy: "Government Subsidies",
  india: "🇮🇳 India",
  maha: "🌾 Maharashtra"
};

/* ===== SOILS ===== */
const soils = {
  black: "Black Soil",
  loam: "Loamy Soil",
  clay: "Clay Soil",
  alluvial: "Alluvial Soil",
  sandy: "Sandy Soil",
  marshy: "Marshy Soil",
  red: "Red Soil"
};

/* ===== CROPS DATA ===== */
const crops = [

  /* 🌽 Cereals */
  { name:"Rice (भात)", soil:["alluvial","clay","marshy"], ph:[5.5,6.5], light:[20000,30000], yield:25,
    subsidy:{ india:"₹3,000/acre (NFSM)", maha:"₹5,000/acre support" } },

  { name:"Wheat (गहू)", soil:["loam","alluvial"], ph:[6,7], light:[15000,25000], yield:18,
    subsidy:{ india:"₹2,500/acre", maha:"₹4,000/acre" } },

  { name:"Maize (मका)", soil:["loam","alluvial"], ph:[5.8,7.2], light:[25000,40000], yield:20,
    subsidy:{ india:"₹2,000/acre", maha:"₹3,500/acre" } },

  { name:"Jowar (ज्वारी)", soil:["black","loam"], ph:[6,8], light:[20000,35000], yield:15,
    subsidy:{ india:"₹2,000/acre", maha:"₹3,000/acre" } },

  { name:"Bajra (बाजरी)", soil:["sandy","black"], ph:[5.5,7.5], light:[30000,50000], yield:12,
    subsidy:{ india:"₹2,000/acre", maha:"₹3,000/acre" } },

  { name:"Ragi (नाचणी)", soil:["red","loam"], ph:[5.5,7], light:[20000,30000], yield:10,
    subsidy:{ india:"₹1,500/acre", maha:"₹2,500/acre" } },

  /* 🫘 Pulses */
  { name:"Tur (तूर)", soil:["black","loam"], ph:[6.5,7.5], light:[30000,45000], yield:9,
    subsidy:{ india:"₹4,000/acre (NFSM)", maha:"₹5,000/acre" } },

  { name:"Moong (मुग)", soil:["loam","sandy"], ph:[6.2,7.2], light:[25000,35000], yield:7,
    subsidy:{ india:"₹3,000/acre", maha:"₹4,000/acre" } },

  { name:"Urad (उडीद)", soil:["black","loam"], ph:[6,7.5], light:[25000,35000], yield:8,
    subsidy:{ india:"₹3,000/acre", maha:"₹4,000/acre" } },

  { name:"Chickpea (हरभरा)", soil:["black","loam"], ph:[6,7.5], light:[20000,30000], yield:10,
    subsidy:{ india:"₹3,500/acre", maha:"₹4,500/acre" } },

  /* 🌻 Oilseeds */
  { name:"Soybean (सोयाबीन)", soil:["black","loam"], ph:[6,7.5], light:[25000,40000], yield:12,
    subsidy:{ india:"₹4,000/acre", maha:"₹5,000/acre" } },

  { name:"Groundnut (भुईमूग)", soil:["sandy","loam"], ph:[6,7], light:[30000,45000], yield:14,
    subsidy:{ india:"₹4,000/acre", maha:"₹5,500/acre" } },

  { name:"Sunflower (सूर्यफूल)", soil:["loam","black"], ph:[6,7.5], light:[35000,50000], yield:10,
    subsidy:{ india:"₹3,000/acre", maha:"₹4,000/acre" } },

  /* 🍬 Cash crops */
  { name:"Sugarcane (ऊस)", soil:["loam","alluvial"], ph:[6,7.5], light:[25000,40000], yield:40,
    subsidy:{ india:"₹6,000/acre", maha:"₹8,000/acre" } },

  { name:"Cotton (कापूस)", soil:["black"], ph:[6,8], light:[30000,50000], yield:10,
    subsidy:{ india:"₹4,000/acre", maha:"₹6,000/acre" } },

  /* 🥬 Vegetables */
  { name:"Tomato (टोमॅटो)", soil:["loam"], ph:[6,7], light:[25000,35000], yield:20,
    subsidy:{ india:"₹2,000/acre", maha:"₹3,000/acre" } },

  { name:"Onion (कांदा)", soil:["loam","black"], ph:[6,7.5], light:[25000,35000], yield:22,
    subsidy:{ india:"₹2,500/acre", maha:"₹4,000/acre" } },

  { name:"Potato (बटाटा)", soil:["loam"], ph:[5.5,6.5], light:[20000,30000], yield:25,
    subsidy:{ india:"₹2,000/acre", maha:"₹3,500/acre" } },

  /* 🍎 Fruits */
  { name:"Pomegranate (डाळिंब)", soil:["loam","black"], ph:[6.5,7.5], light:[30000,45000], yield:15,
    subsidy:{ india:"₹8,000/acre", maha:"₹10,000/acre" } },

  /* 🌿 Spices */
  { name:"Turmeric (हळद)", soil:["loam","black"], ph:[6,7.5], light:[20000,30000], yield:12,
    subsidy:{ india:"₹5,000/acre", maha:"₹7,000/acre" } },

  { name:"Ginger (आले)", soil:["loam"], ph:[6,7], light:[20000,30000], yield:10,
    subsidy:{ india:"₹5,000/acre", maha:"₹7,000/acre" } }

];

/* ===== HELPER ===== */
function create(tag, text="", parent=document.body){
  const el=document.createElement(tag);
  if(text) el.innerText=text;
  parent.appendChild(el);
  return el;
}

/* ===== UI ===== */
const title=create("h2","🌾 "+L.title);
title.style.textAlign="center";
title.style.color="#2e7d32";

const card=create("div");
card.style.background="#fff";
card.style.padding="15px";
card.style.borderRadius="10px";

create("label",L.area,card);
const area=create("input","",card); area.type="number";

create("label",L.ph,card);
const ph=create("input","",card); ph.type="number";

create("label",L.light,card);
const light=create("input","",card); light.type="number";

create("label",L.soil,card);
const soil=create("select","",card);
Object.keys(soils).forEach(s=>soil.appendChild(new Option(soils[s],s)));

const btn=create("button",L.calc,card);
btn.style.marginTop="10px";
btn.style.padding="10px";
btn.style.background="#2e7d32";
btn.style.color="#fff";
btn.style.border="none";
btn.style.borderRadius="8px";

const result=create("div");
result.style.marginTop="15px";
result.style.padding="15px";
result.style.background="#fff";
result.style.borderRadius="10px";

/* ===== LOGIC ===== */
btn.onclick=()=>{
  const a=+area.value, p=+ph.value, l=+light.value, s=soil.value;
  let html=`<h3>${L.rec}</h3>`;
  let found=false;

  crops.forEach(c=>{
    if(c.soil.includes(s)&&p>=c.ph[0]&&p<=c.ph[1]&&l>=c.light[0]&&l<=c.light[1]){
      found=true;
      html+=`
        <div style="border:1px solid #c8e6c9;padding:10px;margin-top:10px;border-radius:8px">
          🌾 <b>${c.name}</b><br>
          📈 ${L.yield}: ${(c.yield*a).toFixed(1)}<br>
          💰 ${L.india}: ${c.subsidy.india}<br>
          🌾 ${L.maha}: ${c.subsidy.maha}
        </div>`;
    }
  });

  if(!found) html+="⚠ No suitable crop found.";
  result.innerHTML=html;
};
