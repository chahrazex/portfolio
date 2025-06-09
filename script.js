// Add smooth scrolling for new publications section
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        navLinks.classList.remove('active');
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add active class to current section in navigation
const sections = document.querySelectorAll('section');
window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if(pageYOffset >= sectionTop - 300){
            current = section.getAttribute('id');
        }
    });
    
    document.querySelectorAll('nav ul li a').forEach(a => {
        a.classList.remove('active');
        if(a.getAttribute('href').includes(current)){
            a.classList.add('active');
        }
    });
});
