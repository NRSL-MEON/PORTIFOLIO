import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-firestore.js";

// Firebase Configuration
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

import { db } from "./firebase-config.js";
import { collection, getDocs } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-firestore.js";

// Fetch and Display Projects
const projectsContainer = document.querySelector(".services");

async function fetchProjects() {
    const querySnapshot = await getDocs(collection(db, "projects"));
    projectsContainer.innerHTML = "";
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

fetchProjects();
