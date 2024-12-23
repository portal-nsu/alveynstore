
document.addEventListener("DOMContentLoaded", () => {
    const shopButtons = document.querySelectorAll(".shop-now");

    shopButtons.forEach((button) => {
        button.addEventListener("click", () => {
            
            
        });
    });
});
document.addEventListener("DOMContentLoaded", () => {
    // Target all buttons with specific actions
    

    // Add event listener to each button
    redirectButtons.forEach((button) => {
        button.addEventListener("click", () => {
            
            window.location.href = "https://www.facebook.com/people/Alveyn/61569877754982/?mibextid=wwXIfr&rdid=UpzLcrOTBcEHOaEp&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F18engVUK96%2F%3Fmibextid%3DwwXIfr";
        });
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const navMenu = document.querySelector("nav ul");
    const logo = document.querySelector(".logo");

    // Toggle menu on logo click for smaller screens
    logo.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.getElementById("hamburger");
    const navMenu = document.getElementById("navMenu");

    // Toggle navigation menu on hamburger click
    hamburger.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector("header");
    const hamburger = document.getElementById("hamburger");
    const navMenu = document.getElementById("navMenu");

    // Shrink header on scroll
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            header.classList.add("shrink");
        } else {
            header.classList.remove("shrink");
        }
    });

    // Toggle navigation menu on hamburger click
    hamburger.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.getElementById("hamburger");
    const navMenu = document.getElementById("navMenu");

    // Toggle navigation menu on hamburger click
    hamburger.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    });
});

document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        targetSection.scrollIntoView({
            behavior: 'smooth'
        });

        // Close the mobile menu if it’s open
        if (window.innerWidth <= 480) {
            document.getElementById('navMenu').classList.remove('active');
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    // Toggle navigation menu for mobile
    const hamburger = document.getElementById("hamburger");
    const navMenu = document.getElementById("navMenu");

    hamburger.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    });
// Scroll to 1000px height on clicking "Featured Collection"
    const featuredCollectionLink = document.querySelector("nav ul li:nth-child(2) a");
    featuredCollectionLink.addEventListener("click", (event) => {
        event.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
        if (window.innerWidth <= 480) {
            navMenu.classList.remove("active"); // Close menu on mobile
        }
    });



    // Scroll to 50000px height on clicking "Contact Us"
    const contactUsLink = document.querySelector("nav ul li:nth-child(6) a");
    contactUsLink.addEventListener("click", (event) => {
        event.preventDefault();
        window.scrollTo({
            top: 50000,
            behavior: "smooth",
        });
        if (window.innerWidth <= 480) {
            navMenu.classList.remove("active"); // Close menu on mobile
        }
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.getElementById("hamburger");
    const navMenu = document.getElementById("navMenu");

    // Toggle the active state of the hamburger menu and nav menu
    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    });
});
const contactUsLink = document.querySelector("nav ul li:nth-child(6) a");
contactUsLink.addEventListener("click", (event) => {
    event.preventDefault();
    window.scrollTo({
        top: document.body.scrollHeight, // Scroll to the bottom of the page
        behavior: "smooth",
    });
    if (window.innerWidth <= 480) {
        navMenu.classList.remove("active"); // Close menu on mobile
    }
});
document.addEventListener("DOMContentLoaded", () => {
    const shopButtons = document.querySelectorAll(".shop-now");
    const exploreButtons = document.querySelectorAll(".cta-button");

    // Redirect for Shop Now buttons
    shopButtons.forEach((button) => {
        button.addEventListener("click", () => {
            window.location.href = "https://www.facebook.com/share/1A3cvLXM4j/?mibextid=wwXIfr";
        });
    });

    // Redirect for Explore More buttons
    exploreButtons.forEach((button) => {
        button.addEventListener("click", () => {
            window.location.href = "https://www.facebook.com/share/1A3cvLXM4j/?mibextid=wwXIfr";
        });
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const heroButtons = document.querySelectorAll(".hero-buttons button");

    // Redirect for buttons in the hero section
    heroButtons.forEach((button) => {
        button.addEventListener("click", () => {
            window.location.href = "https://www.facebook.com/share/1A3cvLXM4j/?mibextid=wwXIfr";
        });
    });

    const shopButtons = document.querySelectorAll(".shop-now");
    const exploreButtons = document.querySelectorAll(".cta-button");

    // Redirect for Shop Now buttons
    shopButtons.forEach((button) => {
        button.addEventListener("click", () => {
            window.location.href = "https://www.facebook.com/share/1A3cvLXM4j/?mibextid=wwXIfr";
        });
    });

    // Redirect for Explore More buttons
    exploreButtons.forEach((button) => {
        button.addEventListener("click", () => {
            window.location.href = "https://www.facebook.com/share/1A3cvLXM4j/?mibextid=wwXIfr";
        });
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const fingertipsButtons = document.querySelectorAll(".fingertips .card-content button");

    // Redirect for buttons in the FASHION AT YOUR FINGERTIPS section
    fingertipsButtons.forEach((button) => {
        button.addEventListener("click", () => {
            window.location.href = "https://www.facebook.com/share/1A3cvLXM4j/?mibextid=wwXIfr";
        });
    });
});