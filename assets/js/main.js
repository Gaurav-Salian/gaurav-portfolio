//------------------------------- CHANGE BACKGROUND HEADDER----------------------------
const scrollHeader = () =>{
    const header = document.getElementById('header')
    // Add a class if the bottom offset is greater than 50 of the viewport
    this.scrollY >= 50 ? header.classList.add('scroll-header') 
                       : header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)


// -------------------------------------SERVICE MODAL------------------------------------------------

const modalViews = document.querySelectorAll('.services__modal')
const modalBtns = document.querySelectorAll('.services__button')
const modalClose = document.querySelectorAll('.services__modal-close')

let modal = function(modalClick){
    modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((mb, i) => {
    mb.addEventListener('click', () =>{
        modal(i)
    })
})

modalClose.forEach((mc) =>{
    mc.addEventListener('click', ()=>{
        modalViews.forEach((mv) =>{
            mv.classList.remove('active-modal')
        })
    })
})

// -----------------------------------MIX  FILTER  PORTFOLIO----------------------------------------------------
let mixerPortfolio = mixitup('.work__container', {
    selectors: {
        target: '.work__card'
    },
    animation: {
        duration: 300
    }
});

// --------------------------------------LINK ACTIVE WORK-------------------
const linkWork= document.querySelectorAll('.work__item')

function activeWork(){
    linkWork.forEach(l=> l.classList.remove('active-work'))
    this.classList.add('active-work')
}

linkWork.forEach(l=> l.addEventListener('click', activeWork))

// --------------------------------------SWIPER TESTIMONIAL---------------------------------------------------------
let swiperTestimonial = new Swiper(".testimonial__container", {
    spaceBetween: 24,
    loop:true,
    grabCursor: true,

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    breakpoints: {
        576: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        // 1024: {
        //   slidesPerView: 5,
        //   spaceBetween: 50,
        // },
      },
});
  
// ------------------------------------------SCROLL SECTIONS ACTIVE LINK---------------------------------------------------------
const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollDown = window.scrollY

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

		if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)
// -----------------------------------------LIGHT DARK THEME-------------------------------------------------------

const themeButton = document.getElementById('theme-button')
const lightTheme = 'light-theme'
const iconTheme = 'bx-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(lightTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx bx-moon' : 'bx bx-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](lightTheme)
  themeButton.classList[selectedIcon === 'bx bx-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the light / icon theme
    document.body.classList.toggle(lightTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

// ------------------------------------------SCROLL REVEAL ANIMATION----------------------------------------------------------
//----------OLD--------
// const sr = ScrollReveal({
//     origin: 'top',
//     distance: '60px',
//     duration:2500,
//     delay:400,
//     // rest:true,
// })

// sr.reveal(`.home__data`)
// sr.reveal(`.home__handle`, {delay:700})
// sr.reveal(`.home__social, .home__scroll`, {delay:900, origin:'bottom'})

// sr.reveal(`.about__img`, {origin:'left'})
// sr.reveal(`.about__info`, {delay:700, origin:'right'})
// sr.reveal(`.about__discription`, {delay:900, origin:'right'})

//----UPDATE------
const sr = ScrollReveal({
    origin: "top",
    distance: "60px",
    duration: 2500,
    delay: 400,
    reset: true,
  });
  
  sr.reveal(`.nav__menu`, {
    delay: 100,
    scale: 0.1,
    origin: "bottom",
    distance: "300px",
  });
  
  sr.reveal(`.home__data`);
  sr.reveal(`.home__handle`, {
    delay: 100,
  });
  
  sr.reveal(`.home__social, .home__scroll`, {
    delay: 100,
    origin: "bottom",
  });
  
  sr.reveal(`.about__img`, {
    delay: 100,
    origin: "left",
    scale: 0.9,
    distance: "30px",
  });
  
  sr.reveal(`.about__data, .about__description, .about__button-contact`, {
    delay: 100,
    scale: 0.9,
    origin: "right",
    distance: "30px",
  });
  
  sr.reveal(`.skills__content`, {
    delay: 100,
    scale: 0.9,
    origin: "bottom",
    distance: "30px",
  });
  
  sr.reveal(`.services__title, services__button`, {
    delay: 100,
    scale: 0.9,
    origin: "top",
    distance: "30px",
  });
  
  sr.reveal(`.work__card`, {
    delay: 100,
    scale: 0.9,
    origin: "bottom",
    distance: "30px",
  });
  
  sr.reveal(`.testimonial__container`, {
    delay: 100,
    scale: 0.9,
    origin: "bottom",
    distance: "30px",
  });
  
  sr.reveal(`.contact__info, .contact__title-info`, {
    delay: 100,
    scale: 0.9,
    origin: "left",
    distance: "30px",
  });
  
  sr.reveal(`.contact__form, .contact__title-form`, {
    delay: 100,
    scale: 0.9,
    origin: "right",
    distance: "30px",
  });
  
  sr.reveal(`.footer, footer__container`, {
    delay: 100,
    scale: 0.9,
    origin: "bottom",
    distance: "30px",
  });





// ------------
// -----------------------IMAGE FADE--------------



// const image1 = document.querySelector('.image1');
// const image2 = document.querySelector('.image2');

// function fadeInOut() {
//     image1.style.opacity = 1;
//     setTimeout(() => {
//         // image1.style.opacity = 0;
//         // setTimeout(() => {
//             image2.style.opacity = 1;
//             setTimeout(() => {
//                 image2.style.opacity = 0;
//                 fadeInOut();
//             }, 1000); // Time for the second image
//         //}, 5); // Time for the first image
//     }, 1000); // Time before starting the fade effect
// }

// fadeInOut(); // Start the fading effect


// _______-------------------------UPDATED

// const image1 = document.querySelector('.image1');
// const image2 = document.querySelector('.image2');

// function fadeInOut() {
//     image1.style.opacity = 0;
//     image2.style.opacity = 1;

//     setTimeout(() => {
//         image1.style.opacity = 1;
//         image2.style.opacity = 0;
//     }, 1000); // Time for the fade effect, adjust as needed
// }

// setInterval(() => {
//     fadeInOut();
// }, 2000);

//--------NEW UPDATE

const cards = document.querySelectorAll('.work__card');

function fadeInOut(images) {
    if (images.length > 1) {
        let currentImageIndex = 0;

        function updateOpacity() {
            images.forEach((image, index) => {
                image.style.opacity = index === currentImageIndex ? 1 : 0;
            });

            currentImageIndex = (currentImageIndex + 1) % images.length;
        }

        setInterval(() => {
            updateOpacity();
        }, 1000); // Interval between fade effects, adjust as needed
    }
}

cards.forEach(card => {
    const images = card.querySelectorAll('.work__img');
    fadeInOut(images);
});