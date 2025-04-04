// Typing Animation in About Me Section
document.addEventListener("DOMContentLoaded", function () {
    const text = "Hello! I'm [Your Name], a passionate web developer and bioengineering student.";
    let i = 0;
    const speed = 50; // Typing speed in milliseconds
    function typeWriter() {
        if (i < text.length) {
            document.getElementById("about-text").innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
    }
    typeWriter();
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll("nav ul li a").forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
    });
});
document.querySelector('.experience-link').addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector('#experience');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
  document.querySelector('.download-btn').addEventListener('click', function () {
    console.log("Resume download initiated!");
    // Optional: send tracking event or confirmation message
  });
  document.querySelectorAll('.certificate').forEach((cert) => {
    const img = cert.querySelector('.cert-img');
    img.style.display = 'none'; // Hide all by default
  
    cert.addEventListener('click', () => {
      img.style.display = img.style.display === 'none' ? 'block' : 'none';
    });
  });
      