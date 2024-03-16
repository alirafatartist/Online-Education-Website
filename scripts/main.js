const header = document.querySelector("header");
const bar = document.querySelector(".fa-bars");
const nav = document.querySelector("header nav");
const lists = document.querySelectorAll("header nav ul li a");
console.log(lists);
// Show Navigation
bar.addEventListener("click", (e) => {
  bar.classList.toggle("fa-xmark");
  bar.classList.toggle("rotating");
  nav.classList.toggle("show");
});

// scroll
window.addEventListener("scroll", (e) => {
  if (window.scrollY > 30) {
    header.classList.add("full");
  } else {
    header.classList.remove("full");
  }
  if (window.scrollY < 390) {
    lists[0].classList.add("active");
    lists[1].classList.remove("active");
    lists[2].classList.remove("active");
    lists[3].classList.remove("active");
    lists[4].classList.remove("active");
  } else if (window.scrollY >= 600 && window.scrollY < 1000) {
    lists[0].classList.remove("active");
    lists[1].classList.add("active");
    lists[2].classList.remove("active");
    lists[3].classList.remove("active");
    lists[4].classList.remove("active");
  } else if (window.scrollY >= 1000 && window.scrollY < 2096) {
    lists[0].classList.remove("active");
    lists[1].classList.remove("active");
    lists[2].classList.add("active");
    lists[3].classList.remove("active");
    lists[4].classList.remove("active");
  } else if (window.scrollY >= 2096 && window.scrollY < 3768) {
    lists[0].classList.remove("active");
    lists[1].classList.remove("active");
    lists[2].classList.remove("active");
    lists[4].classList.remove("active");
    lists[3].classList.add("active");
  } else if (window.scrollY >= 3768) {
    lists[0].classList.remove("active");
    lists[1].classList.remove("active");
    lists[2].classList.remove("active");
    lists[3].classList.remove("active");
    lists[4].classList.add("active");
  }

  console.log(window.scrollY);
});
