let burgerButton = document.querySelector(".burger-button");
let mobileMenu = document.querySelector(".mobile-main-menu");
let navItems = document.querySelector(".mobile-nav__items");
let crossIcon = document.querySelector(".cross-icon");
const skillsList = {
    html: {
        name: 'HTML',
        image: 'images/icons/html.svg'
    },
    css: {
        name: 'CSS',
        image: 'images/icons/css.svg'
    },
    sass: {
        name: 'Sass',
        image: 'images/icons/sass.svg'
    },
    javascript: {
        name: 'Javascript',
        image: 'images/icons/javascript.svg'
    },
    bootstrap: {
        name: 'Bootstrap',
        image: 'images/icons/bootstrap.svg'
    },
    react: {
        name: 'React',
        image: 'images/icons/react.svg'
    },
    figma: {
        name: 'Figma',
        image: 'images/icons/figma.svg'
    }
}

const testimonialsList = {
    testimonial1: {
        image: 'images/icons/Testimonial1.png',
        alt: 'testimonial image 1',
        text: 'Lorem ipsum dolor sit amet, consectetur\n' +
            '                        adipiscing elit. Fusce vel urna ultrices, commodo mauris sed,\n' +
            '                        ullamcorper justo. Interdum et malesuada fames ac ante ipsum\n' +
            '                        primis in faucibus. Sed viverra nisl sit amet nisi rutrum, at\n' +
            '                        fermentum nulla vestibulum.',
        name: 'John Doe',
        position: 'Creative Lead, Company Y'
    },
    testimonial2: {
        image: 'images/icons/Testimonial2.png',
        alt: 'testimonial image 2',
        text: 'Nullam viverra orci est. Duis eu facilisis augue. Fusce tellus dui, ' +
            'accumsan non molestie at, mollis et tellus. Cras porttitor augue ac vulputate ' +
            'faucibus. Curabitur vel nibh eget eros bibendum porttitor vitae eget est. ' +
            'Fusce dapibus imperdiet ultrices.',
        name: 'Felix Goldman',
        position: 'CEO, Company X'
    },
    testimonial3: {
        image: 'images/icons/Testimonial3.png',
        alt: 'testimonial image 3',
        text: 'Sed ullamcorper ipsum sit amet tortor auctor, sit amet tincidunt dolor hendrerit. ' +
            'In non rutrum nulla. Nullam ultricies velit arcu, id egestas quam pulvinar a. Mauris ' +
            'a nisl a nibh laoreet suscipit ac ac augue.',
        name: 'Gabriella Müller',
        position: 'Manager, Company Z'
    }
}

// -------- BURGER MENU ---------------
burgerButton.addEventListener("click", function() {
    mobileMenu.classList.add("open");
});

crossIcon.addEventListener("click", function() {
    mobileMenu.classList.remove("open");
});

/*itemMenu.addEventListener("click", function() {
    console.log('Item clicked!');
    mobileMenu.classList.remove("open");
});*/
navItems.addEventListener("click", function() {
    mobileMenu.classList.remove("open");

});

// -------- SKILLS ------------------
// Dynamically generated HMTL elements (#1)
Object.values(skillsList).forEach(function (values) {
    // Pre-processed skill name (with no spaces nor '/') --> i.e.: UX/UI
    const nameInClass = values.name.toLowerCase().replace(/\s/g, "").replace("/", "");
    // p text
    let parSkillText = document.createElement("p");
    parSkillText.className = nameInClass + '-text';
    parSkillText.textContent = values.name;
    // img
    let skillImg = document.createElement("img");
    skillImg.className = nameInClass + '-image';
    skillImg.src = values.image;
    skillImg.alt = nameInClass + ' icon';
    // div skill
    let divSkill = document.createElement("div");
    divSkill.className = nameInClass + '-skill';
    // --> append (skill img + skill name)
    divSkill.appendChild(skillImg);
    divSkill.appendChild(parSkillText);
    // GET skill-list AND append div
    let skillList = document.querySelector(".skills-list");
    skillList.appendChild(divSkill);
});

// ----------- TESTIMONIALS --------------
// Dynamically generated HMTL elements (#2)
let i = 1;
let testimonialsSlide = document.querySelector(".testimonials-slide");

Object.values(testimonialsList).forEach(function (values) {
    // P position
    let parTestimonialPosition = document.createElement("p");
    parTestimonialPosition.className = "testimonial-" + i + "-position";
    parTestimonialPosition.textContent = values.position;
    // P name
    let parTestimonialName = document.createElement("p");
    parTestimonialName.className = "testimonial-" + i + "-name";
    parTestimonialName.textContent = values.name;
    // P text
    let parTestimonialText = document.createElement("p");
    parTestimonialText.className = "testimonial-" + i + "-text";
    parTestimonialText.textContent = values.text;
    // IMG
    let imgTestimonial = document.createElement("img");
    imgTestimonial.src = values.image;
    imgTestimonial.alt = values.alt;
    // DIV testimonial
    let divTestimonial = document.createElement("div");
    divTestimonial.className = "testimonial-" + i;
    // -> append all elements to DIV testimonial
    divTestimonial.appendChild(imgTestimonial);
    divTestimonial.appendChild(parTestimonialText);
    divTestimonial.appendChild(parTestimonialName);
    divTestimonial.appendChild(parTestimonialPosition);
    // DIV slide
    let divSlide = document.createElement("div");
    divSlide.className = "slide";
    // -> append to DIV slide
    divSlide.appendChild(divTestimonial);
    // -> append to DIV '.testimonials-slide'
    testimonialsSlide.appendChild(divSlide);
    // Increase counter
    i += 1;
});

// -------- SLIDES --------------
let index = 1;
showSlides(index);

function moveSlide(n) {
    showSlides(index += n);
}

function currentSlide(n) {
    showSlides(index = n);
}

function showSlides(n) {
    let i;
    let slides = document.querySelectorAll(".slide");
    let dots = document.querySelectorAll(".dot");
    // make slides' index circular
    if (n > slides.length) {
        index = 1;
    }
    if (n < 1) {
        index = slides.length;
    }
    // Default values when not active
    for (i = 0; i < slides.length; i++) {
        slides[i] .style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    // When active
    slides[index-1].style.display = "block";
    dots[index-1].className += " active";

}





