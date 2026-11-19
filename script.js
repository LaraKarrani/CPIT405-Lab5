/* ================= DARK MODE ================= */

// Select the theme toggle button
const themeButton = document.getElementById("theme-toggle");

// Toggle dark mode when the button is clicked
themeButton.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    // Update the accessible button label
    if (document.body.classList.contains("dark-mode")) {
        themeButton.setAttribute("aria-label", "Switch to light mode");
    } else {
        themeButton.setAttribute("aria-label", "Switch to dark mode");
    }
});


/* ================= SHOW MORE / SHOW LESS ================= */

// Select the About Me paragraph and button
const aboutButton = document.getElementById("about-toggle");
const moreAbout = document.getElementById("more-about");

// Show or hide the additional paragraph when clicked
aboutButton.addEventListener("click", function () {

    // Toggle the paragraph visibility
    moreAbout.hidden = !moreAbout.hidden;

    // Update the button text
    if (moreAbout.hidden) {
        aboutButton.textContent = "Show More";
    } else {
        aboutButton.textContent = "Show Less";
    }

});


/* ================= DYNAMIC PROJECTS ================= */

// Store project information in an array of objects
const projects = [
    {
        title: "Ask Your Data",
        description: "AI-powered web application that allows users to ask natural-language questions about data and generates SQL queries automatically.",
        link: "https://github.com/Lara-Karrani/sejelCOOP_AskYourDataProject.git",
        linkText: "View on GitHub",
        category: "Web"
    },
    {
        title: "Restaurant Catering System - XBite",
        description: "Designed and structured a catering management system, including requirements analysis, workflow design, and database structure.",
        link: "https://drive.google.com/drive/folders/1xHtd7fdBmue1B0RWOZJ-zIFfN7wWLP6X",
        linkText: "View on Drive",
        category: "Programming"
    },
    {
        title: "Request for Quotation System - NexCore",
        description: "Developed an RFQ system for managing supplier quotations and parts requests using Java and database design.",
        link: "https://drive.google.com/drive/folders/14b7zSAoFrF1sil_2HCYw-QwSeXZ1mtU9",
        linkText: "View on Drive",
        category: "Programming"
    },
    {
        title: "Sanad - Accident Support System",
        description: "Designed an accident support system that helps users report incidents and supports emergency response workflows.",
        link: "https://drive.google.com/drive/folders/1YmB79hDg8Qzkp3MQMpZ9hB93M0L4gH8c",
        linkText: "View on Drive",
        category: "Web"
    },
    {
        title: "E-Pager System Development",
        description: "Designed a digital communication system to reduce delays in healthcare environments and improve real-time staff coordination.",
        link: "https://drive.google.com/drive/folders/1mP6TxcfL2_rVi1LvfdcjAVk-Yup6l-y5",
        linkText: "View on Drive",
        category: "Programming"
    },
    {
        title: "Palm Tree Monitoring Hardware Project",
        description: "Hardware-based smart agriculture project focused on monitoring palm trees using sensors and continuous testing.",
        link: "https://drive.google.com/drive/folders/1xmNx-iZdNhW1463CGziVFsKfvzJx2KXw",
        linkText: "View on Drive",
        category: "Programming"
    }
];

// Select the container where projects will be displayed
const projectList = document.getElementById("project-list");

// Create and display project cards dynamically
function displayProjects(projectArray) {

    // Clear existing project cards
    projectList.innerHTML = "";

    // Loop through the project array
    projectArray.forEach(function (project) {

        // Create a project card
        const projectCard = document.createElement("article");
        projectCard.classList.add("project-card");

        // Create the project title
        const projectTitle = document.createElement("h3");
        projectTitle.textContent = project.title;

        // Create the project description
        const projectDescription = document.createElement("p");
        projectDescription.textContent = project.description;

        // Create the project link
        const projectLink = document.createElement("a");
        projectLink.href = project.link;
        projectLink.textContent = project.linkText;
        projectLink.target = "_blank";
        projectLink.rel = "noopener noreferrer";

        // Add elements to the project card
        projectCard.appendChild(projectTitle);
        projectCard.appendChild(projectDescription);
        projectCard.appendChild(projectLink);

        // Add the project card to the page
        projectList.appendChild(projectCard);

    });
}

// Display all projects when the page loads
displayProjects(projects);


/* ================= PROJECT FILTERING ================= */

// Select all project filter buttons
const filterButtons = document.querySelectorAll(".filter-btn");

// Add a click event to each filter button
filterButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        // Get the selected project category
        const selectedCategory = button.dataset.category;

        // Remove the active class from all filter buttons
        filterButtons.forEach(function (filterButton) {
            filterButton.classList.remove("active");
            filterButton.setAttribute("aria-pressed", "false");
        });

        // Highlight the selected filter button
        button.classList.add("active");
        button.setAttribute("aria-pressed", "true");

        // Display all projects if All is selected
        if (selectedCategory === "All") {
            displayProjects(projects);
        } else {

            // Filter projects based on the selected category
            const filteredProjects = projects.filter(function (project) {
                return project.category === selectedCategory;
            });

            // Display only matching projects
            displayProjects(filteredProjects);
        }

    });

});


/* ================= PRINT / SAVE PDF ================= */

// Select the print button
const printButton = document.getElementById("print-btn");

// Open the browser print dialog
if (printButton) {
    printButton.addEventListener("click", function () {
        window.print();
    });
}
