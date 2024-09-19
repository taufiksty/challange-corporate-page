function applyScriptBasedOnDevice() { 
    const mobile = window.matchMedia("(max-width: 767px)");
    const tablet = window.matchMedia("(min-width: 768px) and (max-width: 1024px)");
    const desktop = window.matchMedia("(min-width: 1025px)");

    if (mobile.matches || tablet.matches) {
        navbarMenuMobile();
        testimonySliderMobile();
    } else if (desktop.matches) {
        testimonySliderDesktop();
    }
}

function navbarMenuMobile() {
    let isOpen = false;
    const hamburger = document.querySelector(".icon-hamburger");
    const main = document.querySelector("main");
    const navMenuMobile = document.getElementById("nav-menu-mobile");

    hamburger.addEventListener("click", () => {
        if (!isOpen) {
            main.style.display = "none";
            navMenuMobile.style.display = "block";
            isOpen = true;
        } else {
            navMenuMobile.style.display = "none";
            main.style.display = "block";
            isOpen = false;
        }
    });
}

function testimonySliderMobile() {
    // Slider Testimony Mobile
    let indexCardTestimony = 0;
    const sliderTestimony = document.querySelector(".testimony-slider");
    const cardTestimony = document.querySelectorAll(".testimony-card");
    const testimonyIndicator = document.querySelector(".testimony-indicator-current");
    const btnTestimonyNext = document.getElementById("btn-testimony-next");
    const btnTestimonyPrev = document.getElementById("btn-testimony-prev");
    const totalCards = cardTestimony.length;
    
    testimonyIndicator.style.width = `${90 / totalCards}%`;
    
    function showTestimony(index) {
        cardTestimony.forEach((card, i) => {
            if (i == index) {
                card.style.opacity = "1";
            } else {
                card.style.opacity = "0.5";
            }
        });
        if (index >= totalCards - 1) {
            btnTestimonyNext.disabled = true; 
            btnTestimonyPrev.disabled = false;
        } else if (index <= 0) {
            btnTestimonyNext.disabled = false;
            btnTestimonyPrev.disabled = true;
        } 
        sliderTestimony.style.transform = `translateX(-${index * 100}%)`;
        const percentage = (index / totalCards) * totalCards*120;
        testimonyIndicator.style.transform = `translateX(${percentage}%)`;
    }
    
    btnTestimonyNext.addEventListener('click', () => { 
        indexCardTestimony = (indexCardTestimony + 1) % totalCards;
        showTestimony(indexCardTestimony);
    });
    
    btnTestimonyPrev.addEventListener('click', () => { 
        indexCardTestimony = (indexCardTestimony - 1 + totalCards) % totalCards;
        showTestimony(indexCardTestimony);
    });
    
    showTestimony(indexCardTestimony);
}

function testimonySliderDesktop() { 
    // Slider Testimony Desktop
    let indexCardTestimony = 0;
    const sliderTestimony = document.querySelector(".testimony-slider");
    const cardTestimony = document.querySelectorAll(".testimony-card");
    const testimonyIndicator = document.querySelector(".testimony-indicator-current");
    const btnTestimonyNext = document.getElementById("btn-testimony-next");
    const btnTestimonyPrev = document.getElementById("btn-testimony-prev");
    const totalCards = cardTestimony.length;
    const indexLength = Math.ceil(totalCards / 3);
    
    testimonyIndicator.style.width = `${100 / indexLength}%`;
    
    function showTestimony(index) {
        cardTestimony.forEach((card, i) => {
            if (i < (index+1)*3 && i >= index*3) {
                card.style.opacity = "1";
            } else {
                card.style.opacity = "0.5";
            }
        });
        if (index >= indexLength - 1) {
            btnTestimonyNext.disabled = true; 
            btnTestimonyPrev.disabled = false;
        } else if (index <= 0) {
            btnTestimonyNext.disabled = false;
            btnTestimonyPrev.disabled = true;
        } 
        sliderTestimony.style.transform = `translateX(-${index * 100}%)`;
        const percentage = (index / indexLength) * indexLength*100;
        testimonyIndicator.style.transform = `translateX(${percentage}%)`;
    }
    
    btnTestimonyNext.addEventListener('click', () => { 
        indexCardTestimony = (indexCardTestimony + 1) % indexLength;
        showTestimony(indexCardTestimony);
    });
    
    btnTestimonyPrev.addEventListener('click', () => { 
        indexCardTestimony = (indexCardTestimony - 1 + indexLength) % indexLength;
        showTestimony(indexCardTestimony);
    });
    
    showTestimony(indexCardTestimony);
}

// Button submit form
const btnFormSubmit = document.querySelector(".btn-form-submit");
const checkboxInput = document.querySelector(".checkbox-input");
checkboxInput.addEventListener("change", () => {
    if (checkboxInput.checked) {
        btnFormSubmit.disabled = false;
        btnFormSubmit.style.backgroundColor = "#172ca3";
    } else {
        btnFormSubmit.disabled = true;
        btnFormSubmit.style.backgroundColor = "#a7a6a6";
    }
});

// // Dropdown FAQ
const dropdownItems = document.querySelectorAll(".dropdown-item");
dropdownItems.forEach((item) => {
    const question = item.querySelector(".dropdown-question");
    const answer = item.querySelector(".answer");
    const iconChevronUp = item.querySelector(".icon-chevron-up");
    const iconChevronDown = item.querySelector(".icon-chevron-down");
    question.addEventListener("click", () => { 
        answer.classList.toggle("active");
        if (answer.classList.contains("active")) { 
            iconChevronUp.style.display = "block";
            iconChevronDown.style.display = "none";
        } else {
            iconChevronUp.style.display = "none";
            iconChevronDown.style.display = "block";
        }
    });
})


applyScriptBasedOnDevice();
window.addEventListener('resize', applyScriptBasedOnDevice());