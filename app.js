
window.addEventListener('scroll', function() {
    const header = document.querySelector('header')
    header.classList.toggle('sticky', window.scrollY > 0);
});



const link = document.getElementsByClassName("link")

for (let i = 0; i < link.length; i++) {
 
    link[i].addEventListener('click', function() {
        
        var current = document.getElementsByClassName("activeLink");

        // If there's no active class
        if (current.length > 0) {
          current[0].className = current[0].className.replace(" activeLink", "");
        }
    
        // Add the active class to the current/clicked button
        this.className += " activeLink";
    }) 
}



function toggleMenu() {
    const menuToggle = document.querySelector('.menuToggle');
    const navigation = document.querySelector('.navigation');
    menuToggle.classList.toggle('active');
    navigation.classList.toggle('active');
}

// const tl = new TimelineMax({ delay: 0.5 });
// const titleText = document.querySelectorAll('.titleText')

// tl.fromTo(titleText, 0.5, { opacity: 0, x: -500 }, { opacity: 1, x: 0})