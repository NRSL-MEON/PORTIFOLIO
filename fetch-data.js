import { db } from "./firebase-config.js"; // Import Firestore database
import { collection, getDocs } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-firestore.js";

// Fetch and Display Projects
const projectsContainer = document.querySelector(".services"); // Adjust class if needed

async function fetchProjects() {
    try {
        const querySnapshot = await getDocs(collection(db, "projects"));
        projectsContainer.innerHTML = ""; // Clear previous content
        querySnapshot.forEach((doc) => {
            const project = doc.data();
            const projectDiv = document.createElement("div");
            projectDiv.classList.add("service");
            projectDiv.innerHTML = `
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <a href="${project.link}" target="_blank" class="btn btn-primary">View Project</a>
            `;
            projectsContainer.appendChild(projectDiv);
        });
    } catch (error) {
        console.error("Error fetching projects:", error);
    }
}

// Fetch and Display Testimonials
const testimonialsContainer = document.querySelector(".testimonials"); // Adjust class if needed

async function fetchTestimonials() {
    try {
        const querySnapshot = await getDocs(collection(db, "testimonials"));
        testimonialsContainer.innerHTML = ""; // Clear previous content
        querySnapshot.forEach((doc) => {
            const testimonial = doc.data();
            const testimonialDiv = document.createElement("div");
            testimonialDiv.classList.add("testimonial");
            testimonialDiv.innerHTML = `
                <p>"${testimonial.feedback}"</p>
                <h4>- ${testimonial.name}</h4>
                <h5>${testimonial.role}</h5>
            `;
            testimonialsContainer.appendChild(testimonialDiv);
        });
    } catch (error) {
        console.error("Error fetching testimonials:", error);
    }
}

// Call fetch functions when the page loads
fetchProjects();
fetchTestimonials();
