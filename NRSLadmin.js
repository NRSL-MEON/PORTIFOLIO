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
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// Add Project
const projectForm = document.getElementById('add-project-form');
projectForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const title = document.getElementById('project-title').value;
    const description = document.getElementById('project-description').value;
    const link = document.getElementById('project-link').value;

    db.collection('projects').add({
        title,
        description,
        link,
    }).then(() => {
        alert('Project added successfully!');
        projectForm.reset();
    }).catch((error) => {
        console.error('Error adding project: ', error);
    });
});

// Add Testimonial
const testimonialForm = document.getElementById('add-testimonial-form');
testimonialForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('testimonial-name').value;
    const role = document.getElementById('testimonial-role').value;
    const feedback = document.getElementById('testimonial-feedback').value;

    db.collection('testimonials').add({
        name,
        role,
        feedback,
    }).then(() => {
        alert('Testimonial added successfully!');
        testimonialForm.reset();
    }).catch((error) => {
        console.error('Error adding testimonial: ', error);
    });
});
