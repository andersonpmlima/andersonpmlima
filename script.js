
onload = scrollContainer2()

function scrollContainer2() {
    let wrapper = document.createElement('a')
    let myDiv = document.getElementById('arrow-down')
    wrapper.appendChild(myDiv.cloneNode(true))
    myDiv.parentNode.replaceChild(wrapper, myDiv)
    wrapper.setAttribute("id", "link-container")
    wrapper.href = "#container3"
    
}

 
function removeLink() {
    let link = document.getElementById("link-container")
    link.removeAttribute("href")
}

function addLink() {
    let link = document.getElementById("link-container")
    link.setAttribute("href", "#container3")
}


function containerBigger () {
    let container = document.getElementById("container2")
    let invisibleContainer = document.getElementById("container3")
    let arrowBtn = document.getElementById("arrow-btn")
    arrowBtn.addEventListener("click", ()=>{
        invisibleContainer.style.height = "78vh"
        invisibleContainer.style.top = "-20vh"
        container.style.animationName = "container2-big"
        container.style.animationDuration = "0.8s"
        container.style.animationFillMode = "forwards"
        
        container.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"})

    })
   
}

containerBigger()

/* DETECT SCROLL AND HIDE SCROLL */

window.onscroll = ()=>{hideScrollArrow()}

function hideScrollArrow() {
    let arrowBtn = document.getElementById("arrow-btn")
    
    if (document.documentElement.scrollTop > 10) {
        arrowBtn.style.animationName = "arrow-fade"
        arrowBtn.style.animationDuration = "0.8s"
        arrowBtn.style.animationDelay = "-0.2s"
        arrowBtn.style.animationFillMode = "forwards"
        arrowBtn.style.animationIterationCount = "1"
      } else {
        
        arrowBtn.style.animationDelay = "-0.5s"
        arrowBtn.style.animationName = "arrow-fade-out"
        arrowBtn.style.animationDuration = "0.7s"
        arrowBtn.style.animationFillMode = "forwards"
        arrowBtn.style.animationIterationCount = "1"
      }

      if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight) {
        arrowBtn.style.animationName = "arrow-up"
        arrowBtn.style.animationDuration = "0.8s"
        arrowBtn.style.animationDelay = "-0.2s"
        arrowBtn.style.animationFillMode = "forwards"
        arrowBtn.style.animationIterationCount = "1"
      } 
      
      if (document.documentElement.scrollTop > 500) {
        removeLink()
        scrollTop()
      } else {
        addLink()
      }
 
    }

function scrollTop() {
    let arrowBtn = document.getElementById("arrow-btn")
    if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight) {
        arrowBtn.addEventListener("click", ()=>{
            window.scrollTo(0,0)
        })
    } 
}


let ball = document.getElementById("ball")
let lang = document.getElementById("lang")
if (ball.style.left ="5px"){
    lang.setAttribute( "onClick", "slideBallLang()")

}
if (ball.style.left == "40px") {
    lang.setAttribute( "onClick", "slideBallLang2()")
}

let ball2 = document.getElementById("ball2")
let darkMode = document.getElementById("dark-mode")
if (ball2.style.left = "90px"){
    darkMode.setAttribute( "onClick", "slideBallDmode()")

}
if (ball2.style.left == "125px") {
    darkMode.setAttribute( "onClick", "slideBallDmode2()")
}





function slideBallLang() {
    let lang = document.getElementById("lang")
    let ball = $("#ball")
        $("#lang").click( ()=>{
            ball.css({
                "animation-name" : "ballslideright1",
                "animation-direction" : "normal",
                "animation-fill-mode" : "forwars",
                "animation-duration" : "0.5s",
                "left" : "40px"  
            })
            lang.setAttribute( "onClick", "slideBallLang2()")
            langEn()
        })
}

function slideBallLang2() {
    let lang = document.getElementById("lang")
    let ball = $("#ball")
    $("#lang").on("click", ()=>{
        ball.css({ 
            "animation-name" : "ballslideright1",
            "animation-direction" : "reverse",
            "animation-fill-mode" : "forwars",
            "animation-duration" : "0.5s",
            "left" : "5px"
        })
        lang.setAttribute( "onClick", "slideBallLang()")
        langPt()
    })
}

function slideBallDmode() {
    let darkMode = document.getElementById("dark-mode")
    let ball2 = $("#ball2")
    $("#dark-mode").on("click", ()=>{
        ball2.css({ 
            "animation-name" : "ballslideright2",
            "animation-direction" : "normal",
            "animation-fill-mode" : "forwars",
            "animation-duration" : "0.5s",
            "left" : "125px"
        })
        darkMode.setAttribute( "onClick", "slideBallDmode2()")
        lightModeF()

    })
}

function slideBallDmode2() {
    let darkMode = document.getElementById("dark-mode")
    let ball2 = $("#ball2")
    $("#dark-mode").on("click", ()=>{
        ball2.css({ 
            "animation-name" : "ballslideright2",
            "animation-direction" : "reverse",
            "animation-fill-mode" : "forwars",
            "animation-duration" : "0.5s",
            "left" : "90px"
        })
        darkMode.setAttribute( "onClick", "slideBallDmode()")
        darkModeF()
    })
}

function lightModeF() {
    let container1 = document.getElementById("container1")
    let container2 = document.getElementById("container2")
    let text = document.getElementById("text")
    let dot = document.getElementById("dot")
    let title = document.getElementById("title")
    let bigContainer = document.getElementById("big-container")

    container1.className = "container1-light"
    container2.className = "container2-light"
    text.className = "text-light"
    dot.className = "dot-light"
    title.className = "title-light"
    bigContainer.className = "big-container-light"
}

function darkModeF() {
    let container1 = document.getElementById("container1")
    let container2 = document.getElementById("container2")
    let text = document.getElementById("text")
    let dot = document.getElementById("dot")
    let title = document.getElementById("title")
    let bigContainer = document.getElementById("big-container")

    container1.className = "container1"
    container2.className = "container2"
    text.className = "text"
    dot.className = "dot"
    title.className = "title"
    bigContainer.className = "big-container"
}

function langEn() {
    let text = document.getElementById("text")
    let title = document.getElementById("title")
    
    text.style.animationName = "translate"
    text.style.animationDuration = "0.5s"
    title.style.animationName = "translate"
    title.style.animationDuration = "0.5s"
    title.innerHTML = `Hello, world<span id="dot" class="dot">|</span>`
    text.innerHTML = `<span>🧑‍💻</span> Front End Developer;<br>
    <span>&#x1F4D6</span> 27 years, six months studying;<br>
    <span>&#x1F524</span> Knowledge in HTML, CSS, Javascript, jQuery e Bootstrap;<br>
    <span>&#x26BD</span> Passionate about sports and technology;<br>
    <span>&#x1F44B</span> Seeking the first opportunity in the market;`

    setTimeout(()=>{
        text.style.animationName = ""
        text.style.animationDuration = ""
        title.style.animationName = ""
        title.style.animationDuration = ""
    }, 500)
}

function langPt() {
    let text = document.getElementById("text")
    let title = document.getElementById("title")

    title.innerHTML = `Olá, mundo<span id="dot" class="dot">|</span>`
    text.innerHTML = `<span>🧑‍💻</span> Desenvolvedor Front End;<br>
    <span>&#x1F4D6</span> 27 anos, estudante de programação há 6 meses;<br>
    <span>&#x1F524</span> Conhecimentos em HTML, CSS, Javascript, jQuery e Bootstrap;<br>
    <span>&#x26BD</span> Apaixonado por esportes e tecnologia;<br>
    <span>&#x1F44B</span> Buscando a primeira oportunidade no mercado;`
}

/* MOBILE VIEW*/

setInterval( ()=>{

    let text = document.getElementById("text-title")
    let mobileDiv = document.getElementById("mobile-text")
    if(window.matchMedia("(orientation: portrait)").matches && window.innerWidth <= 767){
    
        mobileTextF()
    } else {
        text.style.display = ""
        mobileDiv.innerHTML = ""
    }
}, 100)

function mobileTextF() {
    let text = document.getElementById("text-title")
    let mobileDiv = document.getElementById("mobile-text")

        text.style.display = "none"
        mobileDiv.innerHTML = `<hr><h3 class="text-mobile"><span>🧑‍💻</span> Desenvolvedor Front End;<br><hr>
        <span>&#x1F4D6</span> 27 anos, estudante de programação há 6 meses;<br><hr>
        <span>&#x1F524</span> Conhecimentos em HTML, CSS, Javascript, jQuery e Bootstrap;<br><hr>
        <span>&#x26BD</span> Apaixonado por esportes e tecnologia;<br><hr>
        <span>&#x1F44B</span> Buscando a primeira oportunidade no mercado;<hr>
         </h3>`

}

/* mobileOpts()

function mobileOpts() {
    let options = document.getElementById("options")
    let hitbox = document.getElementById("hitbox")

    if (options.style.left = "-220px") {
        
 
    } if(options.style.left = "-40px") {
        hitbox.addEventListener("click", ()=>{
            options.style.left = "-220px"
        })

        
    }
} */

if(window.matchMedia("(orientation: portrait)").matches && window.innerWidth <= 767) {
    let options = document.getElementById("options")
    let hitbox = document.getElementById("hitbox")
    
    if(options.style.left == "-220px") {
        hitbox.setAttribute("onClick", "mobileOptsSlideIn()")

    }
    if(options.style.left == "-40px") {
        hitbox.setAttribute("onClick", "mobileOptsSlideOut()")
    }

}

function mobileOptsSlideOut(){
    let options = document.getElementById("options")
    let hitbox = document.getElementById("hitbox")
    options.style.animationName = "slide-opts"
    options.style.animationDirection = "reverse"
    options.style.animationFillMode = "forwards"
    options.style.animationDuration = "1s"
   
    
    hitbox.setAttribute("onClick", "mobileOptsSlideIn()")
    hitbox.style.left = "-50px"

    setTimeout(()=>{
        removeAnimationOpts2()
    },2000)
    

}

function mobileOptsSlideIn() {
    let options = document.getElementById("options")
    let hitbox = document.getElementById("hitbox")
    options.style.animationName = "slide-opts"
    options.style.animationDirection = "normal"
    options.style.animationFillMode = "forwards"
    options.style.animationDuration = "1s"
    
    hitbox.setAttribute("onClick", "mobileOptsSlideOut()")
    hitbox.style.left = "80px"

    setTimeout(()=>{
        removeAnimationOpts()
    },2000)
    
    
}

function removeAnimationOpts() {
    let options = document.getElementById("options")
    
    options.style.animationName = ""
    options.style.animationDirection = ""
    options.style.animationFillMode = ""
    options.style.animationDuration = ""
    options.style.left = "-40px"
    
}

function removeAnimationOpts2() {
    let options = document.getElementById("options")
    
    options.style.animationName = ""
    options.style.animationDirection = ""
    options.style.animationFillMode = ""
    options.style.animationDuration = ""
    options.style.left = "-220px"
    
}


