

// JavaScript for Random Image Carousel
document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll('.carousel-item');
    const totalImages = images.length;
    let currentIndex = 0;

    const showImage = (index) => {
        images.forEach((image, i) => {
            image.classList.remove('active');
            if (i === index) {
                image.classList.add('active');
            }
        });
    };

    setInterval(() => {
        // Randomly select the next index
        currentIndex = Math.floor(Math.random() * totalImages);
        showImage(currentIndex);
    }, 6000); // Change image every 6 seconds
});

// JavaScript to toggle the pop-up panel
document.addEventListener("DOMContentLoaded", () => {
    const contactUsButton = document.getElementById("contactUsButton");
    const popupPanel = document.getElementById("popupPanel");
    const closePopup = document.getElementById("closePopup");

    contactUsButton.addEventListener("click", () => {
        popupPanel.style.display = popupPanel.style.display === "block" ? "none" : "block";
    });

    closePopup.addEventListener("click", () => {
        popupPanel.style.display = "none";
    });
});

const bookNowButton = document.getElementById("bookNowButton");
const bookingPanel = document.getElementById("bookingPanel");

bookNowButton.addEventListener("click", () => {
    bookingPanel.style.display = bookingPanel.style.display === "block" ? "none" : "block";
});



const submitBookingButton = document.getElementById("submitBooking");

submitBookingButton.addEventListener("click", () => {
    const demand = document.getElementById("demandField").value;
    const message = encodeURIComponent(`Booking Request: ${demand}`);
    const phoneNumber = "01319279738"; // Replace with your phone number

    // Construct WhatsApp URL
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    
    // Open WhatsApp
    window.open(whatsappUrl, "_blank");
    
    // Optionally, clear the input field and hide the booking panel
    document.getElementById("demandField").value = ""; // Clear the input
    bookingPanel.style.display = "none"; // Hide the booking panel
});

document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        // Adjusting scroll position (e.g., offset by 50px for fixed navbar)
        const offset = 50; // Change this value as needed
        const elementPosition = targetElement.offsetTop - offset;

        window.scrollTo({
            top: elementPosition,
            behavior: 'smooth'
        });
    });
});