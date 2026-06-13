const darkBtn =
document.getElementById("darkModeBtn");

darkBtn.addEventListener("click",()=>{

document.body.classList.toggle("dark-mode");

});

const translations = {

en:{

heroTitle:
"Smart Agriculture Intelligence Platform",

heroText:
"AI Powered Crop Profit Prediction, Risk Analysis, Plant Stress Detection and Weather Monitoring for Indian Farmers.",

profit:
"Crop Profit Prediction",

risk:
"Crop Risk Prediction",

stress:
"Plant Stress Detection",

weather:
"Weather Information",

expense:
"Farm Expense Dashboard"

},

hi:{

heroTitle:
"स्मार्ट कृषि इंटेलिजेंस प्लेटफॉर्म",

heroText:
"कृषि लाभ पूर्वानुमान, जोखिम विश्लेषण, पौधों की बीमारी पहचान और मौसम निगरानी।",

profit:
"फसल लाभ पूर्वानुमान",

risk:
"फसल जोखिम पूर्वानुमान",

stress:
"पौध तनाव पहचान",

weather:
"मौसम जानकारी",

expense:
"कृषि खर्च डैशबोर्ड"

},

mr:{

heroTitle:
"स्मार्ट कृषी बुद्धिमत्ता प्रणाली",

heroText:
"पीक नफा अंदाज, जोखीम विश्लेषण, वनस्पती ताण शोध आणि हवामान निरीक्षण.",

profit:
"पीक नफा अंदाज",

risk:
"पीक जोखीम अंदाज",

stress:
"वनस्पती ताण शोध",

weather:
"हवामान माहिती",

expense:
"शेती खर्च डॅशबोर्ड"

}

};

const languageSelect =
document.getElementById("language");

languageSelect.addEventListener("change",(e)=>{

const lang = e.target.value;

document.getElementById("heroTitle").innerText =
translations[lang].heroTitle;

document.getElementById("heroText").innerText =
translations[lang].heroText;

document.getElementById("profitTitle").innerText =
translations[lang].profit;

document.getElementById("riskTitle").innerText =
translations[lang].risk;

document.getElementById("stressTitle").innerText =
translations[lang].stress;

document.getElementById("weatherTitle").innerText =
translations[lang].weather;

document.getElementById("expenseTitle").innerText =
translations[lang].expense;

});
// Animated Counter

const counters =
document.querySelectorAll(".card-value");

counters.forEach(counter=>{

let start=0;

const end=
parseInt(counter.innerText);

const update=()=>{

start += Math.ceil(end/50);

if(start < end){

counter.innerText=start;

requestAnimationFrame(update);

}else{

counter.innerText=end;

}

}

update();

});

// Dark Mode

const toggle =
document.getElementById("themeToggle");

if(toggle){

toggle.addEventListener("click",()=>{

document.body.classList.toggle("dark");

localStorage.setItem(
"theme",
document.body.classList.contains("dark")
);

});

}

// Restore Theme

if(localStorage.getItem("theme")==="true"){

document.body.classList.add("dark");

}

// Scroll Animation

const observer =
new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

document
.querySelectorAll(".card")
.forEach(el=>observer.observe(el));