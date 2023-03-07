// console.log("hello-world");
// testing file
// set date
const date = (document.getElementById("date").innerHTML = new Date().getFullYear());
// nav toggle
const navBtn = document.getElementById("nav-toggle");
const links = document.getElementById("nav-links")

// console.log(navBtn);
// console.log(links);

navBtn.addEventListener("click",()=>{
 console.log("hey you clicked the button");
 links.classList.toggle("show-links");
})

// navfix

const navbar = document.querySelector(".navbar");
window.addEventListener("scroll", ()=>{
 // console.log(window.pageYOffset);
 if (window.pageYOffset > 62){
  navbar.classList.add("fixed");
 } else {
  navbar.classList.remove("fixed");
 }
});

// smooth scroll

const scrollLinks  = document.querySelectorAll(".scroll-link");
scrollLinks.forEach(link=>{
 link.addEventListener("click",e =>{
  e.preventDefault();
  links.classList.remove("show-links");
  const id = e.target.getAttribute("href").slice(1);
  const element = document.getElementById(id);
  // window scrolltollto


  window.scrollTo({
   left:0,
   top:element.offsetTop-62,
   behavior: "smooth"
  });
 });
});