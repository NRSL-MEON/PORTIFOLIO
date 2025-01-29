
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.querySelector('.nav-menu');

menuToggle.addEventListener('click', () => {
navMenu.classList.toggle('active');
});

// Smooth Scroll for Navigation Links
const navLinks = document.querySelectorAll('.nav-menu a');

navLinks.forEach(link => {
link.addEventListener('click', (e) => {
e.preventDefault();
const targetId = link.getAttribute('href');
document.querySelector(targetId).scrollIntoView({
    behavior: 'smooth',
});
navMenu.classList.remove('active'); // Close menu after clicking a link
});
});

// Form Submission Alert
const contactForm = document.getElementById('contact-form');
if (contactForm) {
contactForm.addEventListener('submit', (e) => {
e.preventDefault();
alert('Thank you for reaching out! I will get back to you soon.');
contactForm.reset();
});
}



var typed=new Typed(".multiple-text",{
    strings: [ "An activist","A Debator","A Public Speaker","A go-getter"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop:true
    
    })

    //dynamic handling/.......
    // Dynamic Data Arrays
    const testimonials = [
        {
            name: "John Doe",
            role: "CEO, Example Inc.",
            feedback: "An exceptional developer who delivers high-quality work on time.",
        },
        {
            name: "Jane Smith",
            role: "CTO, TechWorld",
            feedback: "Innovative solutions and great attention to detail! Highly recommended.",
        },
    ];
    
    // Render Projects Dynamically
    
    
    // Render Testimonials Dynamically
    const testimonialsContainer = document.querySelector(".testimonials");
    testimonials.forEach((testimonial) => {
        const testimonialDiv = document.createElement("div");
        testimonialDiv.classList.add("testimonial");
        testimonialDiv.innerHTML = `
            <p>"${testimonial.feedback}"</p>
            <h4>- ${testimonial.name}</h4>
            <h5>${testimonial.role}</h5>
        `;
        testimonialsContainer.appendChild(testimonialDiv);
    });
    
    


 
