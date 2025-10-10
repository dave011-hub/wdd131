






document.addEventListener("DOMContentLoaded", () => {
    // --- WELCOME MESSAGE ---
    if (!localStorage.getItem("visited")) {
        alert("Welcome to Rent & Build!");
        localStorage.setItem("visited", "true");
    }

    // --- DARK / LIGHT MODE TOGGLE ---
    const body = document.body;
    const modeBtn = document.createElement("button");
    modeBtn.textContent = "Toggle Dark Mode";
    modeBtn.className = "mode-toggle";
    document.querySelector("header").appendChild(modeBtn);

    // Load saved theme
    if (localStorage.getItem("theme") === "dark") {
        body.classList.add("dark");
    }

    modeBtn.addEventListener("click", () => {
        body.classList.toggle("dark");
        if (body.classList.contains("dark")) {
            localStorage.setItem("theme", "dark");
        } else {
            localStorage.setItem("theme", "light");
        }
    });

    // --- PROPERTY SEARCH ---
    const searchInput = document.createElement("input");
    searchInput.placeholder = "Search properties...";
    searchInput.className = "search-box";

    const cardsSection = document.querySelector(".cards");
    if (cardsSection) {
        document.querySelector("main").insertBefore(searchInput, cardsSection);

        searchInput.addEventListener("input", () => {
            const query = searchInput.value.toLowerCase();
            document.querySelectorAll(".card").forEach(card => {
                const text = card.textContent.toLowerCase();
                card.style.display = text.includes(query) ? "block" : "none";
            });
        });
    }

    // --- BUILD REQUEST FORM ---
    const buildForm = document.getElementById("buildForm");
    if (buildForm) {
        buildForm.addEventListener("submit", (e) => {
            e.preventDefault();

            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const budget = parseInt(document.getElementById("budget").value, 10);
            const details = document.getElementById("details").value.trim();

            if (!name || !email || !budget || !details) {
                alert("Please fill out all fields.");
                return;
            }

            if (budget < 100) {
                alert("Budget must be at least $100.");
                return;
            }






            // Save to localStorage
            const request = { name, email, budget, details };
            localStorage.setItem("buildRequest", JSON.stringify(request));

            alert("Your request has been saved! Thank you.");
            buildForm.reset();
            location.reload(); 
        });







        // Show saved request if available
        const saved = localStorage.getItem("buildRequest");
        if (saved) {
            const request = JSON.parse(saved);
            const summary = document.createElement("div");
            summary.className = "request-summary";
            summary.innerHTML = `
                <h3>Saved Request:</h3>
                <p><strong>Name:</strong> ${request.name}</p>
                <p><strong>Email:</strong> ${request.email}</p>
                <p><strong>Budget:</strong> $${request.budget}</p>
                <p><strong>Details:</strong> ${request.details}</p>
            `;
            buildForm.insertAdjacentElement("afterend", summary);
        }
    }



    // --- FOOTER ---//
    const yearSpan = document.getElementById("currentyear");
    const modifiedSpan = document.getElementById("lastModified");

    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
    if (modifiedSpan) {
        modifiedSpan.textContent = "Last Modified: " + document.lastModified;
    }
















    const nav = document.querySelector("nav ul");
    if (nav) {
        const menuBtn = document.createElement("button");
        menuBtn.textContent = "Menu";
        menuBtn.className = "menu-toggle";
        document.querySelector("header").insertBefore(menuBtn, nav);

        menuBtn.addEventListener("click", () => {
            nav.classList.toggle("show");
        });
    }
});
