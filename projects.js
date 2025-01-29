

import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA1op0FLerr4F7OuVgix3IZsrNOj33wa4s",
  authDomain: "nrsl-b54ff.firebaseapp.com",
  projectId: "nrsl-b54ff",
  storageBucket: "nrsl-b54ff.appspot.com",
  messagingSenderId: "305283921720",
  appId: "1:305283921720:web:57fdba21fc82f8b834f3cd",
  measurementId: "G-PF7BVQZ6VF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Add a project (example function for adding new data)
async function addProject(title, description, link) {
    try {
        const docRef = await addDoc(collection(db, "projects"), {
            title,
            description,
            link
        });
        console.log("Project added with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding project: ", e);
    }
}

// Fetch all projects and render dynamically
async function fetchProjects() {
    const projectsContainer = document.querySelector(".services");
    const querySnapshot = await getDocs(collection(db, "projects"));
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
}


/*const projects1 = [];
 
// Render Projects Dynamically
const projectsContainer = document.querySelector(".projects-container");
if(projects1 == 0){
    const projectcontaindiv = document.createElement("div");
    projectcontaindiv.innerHTML =`
    <h1> No projects "yet"</h1>
    `;
    projectsContainer.appendChild( projectcontaindiv);

}else{


projects1.forEach((project) => {
    const projectDiv = document.createElement("div");
    projectDiv.classList.add("project");
    projectDiv.innerHTML = `
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <a href="${project.link}" target="_blank" class="btn btn-primary">View Project</a>
    `;
    projectsContainer.appendChild(projectDiv);
});
}



/*8
const projects = [
    {
        title: "Project One",
        description: "A responsive website built with HTML, CSS, and JavaScript.",
        link: "#",
    },
    {
        title: "Project Two",
        description: "A web app showcasing dynamic data loading using JSON.",
        link: "#",
    },
    {
        title: "Project Three",
        description: "A portfolio featuring advanced CSS animations.",
        link: "#",
    },
];

const testimoniees = [
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
const projectsContainer = document.querySelector(".services");
projects.forEach((project) => {
    const projectDiv = document.createElement("div");
    projectDiv.classList.add("service");
    projectDiv.innerHTML = `
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <a href="${project.link}" target="_blank" class="btn btn-primary">View Project</a>
    `;
    projectsContainer.appendChild(projectDiv);
});


8*/