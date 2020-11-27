// set date
// select span
const date = (document.getElementById("date").innerHTML = new Date().getFullYear());

//  nav toggle 
const navBtn = document.getElementById("nav-toggle");
const links = document.getElementById("nav-links");

// add event listener

navBtn.addEventListener("click", () => {
    links.classList.toggle("show-links");
})

// navbar fixed

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 62) {
        navbar.classList.add("fixed");
    } else {
        navbar.classList.remove("fixed");
    }
})

const scrollLinks = document.querySelector(".scroll-link");
link.addEventListener.forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();

        links.classList.remove("show-links");
        const id = e.target.getAttribute("href").slice(1);
        const element = document.getElementById(id);
        // position
        let position;
        if (navbar.classList.contains("fixed")) {
            position = element.offsetTop - 62;
        } else {
            position = element.offsetTop - 124;
        }
        if (window.innerWidth < 992) {
            if (navbar.classList.contains("fixed")) {
                position = element.offsetTop - 62
            }
            position = element.offsetTop - 332 - 62;
        }

        // window scrollTo
        window.scrollTo({
            left: 0,
            top: position,
            behavior: "smooth",

        });


    });
});