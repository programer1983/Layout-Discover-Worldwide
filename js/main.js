const menuBtn = document.getElementById("menu-btn")
const navLinks = document.getElementById("nav-links")
const menuBtnIcon = menuBtn.querySelector("i")

menuBtn.addEventListener("click", (e) => {
    navLinks.classList.toggle("open")

    const isOpen =  navLinks.classList.contains("open")
    menuBtnIcon.setAttribute("class",  isOpen ? "ri-close-line" : "ri-menu-line")
})

navLinks.addEventListener("click", (e) => {
    navLinks.classList.remove("open")
    menuBtnIcon.setAttribute("class", "ri-menu-line")
})


/* ==========================================================================================  */

const headerImage = document.querySelector(".header__image")

headerImage.addEventListener("animationend", (e) => {
   setTimeout(() => {
      headerImage.classList.add('reveal')
   })
}, {once: true})

/* ============================================================================================ */

const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
  };
  
  ScrollReveal().reveal(".header__content h1", {
    ...scrollRevealOption,
    delay: 1500,
  });
  ScrollReveal().reveal(".header__content h2", {
    ...scrollRevealOption,
    delay: 2000,
  });
  ScrollReveal().reveal(".header__content p", {
    ...scrollRevealOption,
    delay: 2500,
  });
  ScrollReveal().reveal(".header__content div", {
    ...scrollRevealOption,
    delay: 3000,
  });



/* ========================================================================================  */
  
  const animItems = document.querySelectorAll('.nav__links')

  if (animItems.length > 0){
      window.addEventListener('scroll', animOnScroll)
      function animOnScroll(){
          for (let index = 0; index < animItems.length; index++){
              const animItem = animItems[index]
              const animItemHeight = animItem.offsetHeight
              const animItemOffset = offset(animItem).top
              const animStart = 4
  
              let animItemPoint = window.innerHeight - animItemHeight / animStart
  
              if (animItemHeight > window.innerHeight){
                  animItemPoint = window.innerHeight - window.innerHeight  / animStart
              }
  
              if ((pageYOffset > animItemOffset - animItemPoint ) && pageYOffset < (animItemOffset + animItemHeight)){
                  animItem.classList.add('active')
              }else{
                  if (!animItem.classList.contains('anim-no-haight')){
                      animItem.classList.remove('active')
                  }
              }
          }
      }
      function offset(el){
          const rect = el.getBoundingClientRect()
          scrollLeft = window.pageXOffset || document.documentElement.scrollLeft
          scrollTop = window.pageYOffset || document.documentElement.scrollTop
          return {top: rect.top + scrollTop, left: rect.left + scrollLeft}
      }
      setTimeout(() => {
          animOnScroll()
      }, 4500)
  }