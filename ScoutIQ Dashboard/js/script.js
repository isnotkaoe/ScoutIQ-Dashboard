const line = document.querySelector("#line");

const length = line.getTotalLength();

line.style.strokeDasharray = length;
line.style.strokeDashoffset = length;

setTimeout(() => {

    line.style.transition = "stroke-dashoffset 2.2s ease";

    line.style.strokeDashoffset = 0;

},300);

//========================
// Entrada da Sidebar
//========================

const sidebar = document.querySelector(".sidebar");

setTimeout(()=>{

    sidebar.style.transition="1s";

    sidebar.style.transform="translateX(0)";

    sidebar.style.opacity="1";

},200);


//========================
// Hero
//========================

const hero = document.querySelector(".hero");

setTimeout(()=>{

    hero.style.transition=".9s";

    hero.style.opacity="1";

    hero.style.transform="translateY(0)";

},600);


//========================
// Cards
//========================

const stats = document.querySelector(".stats");

setTimeout(()=>{

    stats.style.transition=".9s";

    stats.style.opacity="1";

    stats.style.transform="translateY(0)";

},900);


//========================
// Graph
//========================

const graph = document.querySelector(".graph");

setTimeout(()=>{

    graph.style.transition=".9s";

    graph.style.opacity="1";

    graph.style.transform="translateY(0)";

},1200);

const counters = document.querySelectorAll(".counter");

function animateCounter(counter){

    const target = Number(counter.dataset.target);

    let current = 0;

    const increment = target / 120;

    const timer = setInterval(()=>{

        current += increment;

        if(current >= target){

            current = target;

            clearInterval(timer);

        }

        if(target >= 1000){

            if(target >= 10000){

                counter.innerText = Math.floor(current/1000)+"K+";
            }

            else{

                counter.innerText=(current/1000).toFixed(1)+"K+";
            }

        }

        else{

            counter.innerText=Math.floor(current)+"+";

        }

    },15);

}

setTimeout(()=>{

    counters.forEach(counter=>{

        animateCounter(counter);

    });

},1000);

const bars = document.querySelectorAll(".progress div");

setTimeout(()=>{

    bars.forEach(bar=>{

        const width = bar.style.width;

        bar.style.width = "0";

        setTimeout(()=>{

            bar.style.transition = "1.5s ease";

            bar.style.width = width;

        },100);

    });

},1500);    

//========================
// Sidebar Toggle
//========================

const toggle = document.querySelector(".menu-toggle");
const sidebarMenu = document.querySelector(".sidebar");

toggle.addEventListener("click", ()=>{

    sidebarMenu.classList.toggle("collapsed");

});

//========================
// Relógio
//========================

const time = document.querySelector("#time");
const date = document.querySelector("#date");

function updateClock(){

    const now = new Date();

    const horas = now.toLocaleTimeString("pt-BR",{

        hour:"2-digit",

        minute:"2-digit",

        second:"2-digit"

    });

    const data = now.toLocaleDateString("pt-BR",{

        weekday:"long",

        day:"2-digit",

        month:"long"

    });

    time.textContent = horas;

    date.textContent = data;

}

updateClock();

setInterval(updateClock,1000);

const donut = document.querySelector(".donut-progress");

const radius = 90;

const circumference = 2 * Math.PI * radius;

donut.style.strokeDasharray = circumference;

donut.style.strokeDashoffset = circumference;

const percentage = 74;

setTimeout(()=>{

    donut.style.transition="2s ease";

    donut.style.strokeDashoffset =
        circumference -
        (percentage / 100) * circumference;

},1800);

const spark = document.querySelector(".spark-line");

const sparkLength = spark.getTotalLength();

spark.style.strokeDasharray = sparkLength;

spark.style.strokeDashoffset = sparkLength;

setTimeout(()=>{

    spark.style.transition="2s ease";

    spark.style.strokeDashoffset=0;

},2200);

const panels = document.querySelectorAll(".panel");

panels.forEach(panel=>{

    panel.addEventListener("mouseenter",()=>{

        const shine = panel.querySelector("::after");

    });

});

const cards = document.querySelectorAll(".card");

cards.forEach(card=>{

    card.addEventListener("mousemove",(e)=>{

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;

        const y = e.clientY - rect.top;

        card.style.setProperty("--x",x+"px");

        card.style.setProperty("--y",y+"px");

    });

});