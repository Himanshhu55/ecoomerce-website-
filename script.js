let card = document.querySelector(".trend");
let homepage = document.getElementById("homepage")
let card2 = document.getElementById("trends")
let blog1 = document.querySelector(".trends")
let contactus = document.querySelector(".contact")
let aboutus = document.querySelector(".about")

// -> SUMIT: defining the addToCart Button
// Initialize the cart count
let cartCount = 0;

// Select all 'Add to Cart' buttons
let addToCartButtons = document.querySelectorAll("#addToCart");

// Convert NodeList to an Array
addToCartButtons = Array.from(addToCartButtons);

// Function to handle 'Add to Cart' button click
function addToCart() {
    cartCount++;
    // Update the cart count display
    document.getElementById('cart-count').innerText = cartCount;
    console.log(`Cart count: ${cartCount}`);
}

// Attach event listener to each button
addToCartButtons.forEach(button => {
    button.addEventListener("click", addToCart);
});


let navabout = document.querySelector("#navabout");
let navhome = document.querySelector("#navhome");
let navshop = document.querySelector("#navshop");
let navcontact = document.querySelector("#navcontact");
let navblog = document.querySelector("#navblog");


// smooth scrolling
//Smooth scrolling
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


// homepageanimation
function firstPageAnim() {
    var tl = gsap.timeline();
    tl.from('nav', {
        y: "-10",
        opacity: 0,
        ease: Expo.easeInOut,
        duration: 1.5
    })
        .from(".anime", {
            y: "-10",
            ease: Expo.easeInOut,
            duration: 1,
            opacity: 0,
            delay: -1,
            stagger: .18
        })


}
firstPageAnim();




function about() {
    card.style.display = "none";
    blog1.style.display = "none";
    card2.style.display = "none";
    contactus.style.display = "none"
    aboutus.style.display = "block";
    homepage.style.display = "none"

    navabout.style.color = "rgb(3, 145, 145)"
    navblog.style.color = "black"
    navcontact.style.color = "black"
    navshop.style.color = "black"
    navhome.style.color = "black"


}
function home() {

    card.style.display = "block";
    blog1.style.display = "block";
    card2.style.display = "block";
    contactus.style.display = "none"
    aboutus.style.display = "none";
    homepage.style.display = "flex"

    navabout.style.color = "black"
    navblog.style.color = "black"
    navcontact.style.color = "black"
    navshop.style.color = "black"
    navhome.style.color = "rgb(3, 145, 145)"


}
function blog() {

    card.style.display = "none";
    blog1.style.display = "block";
    card2.style.display = "none";
    aboutus.style.display = "none";
    contactus.style.display = "none"
    homepage.style.display = "none"

    navabout.style.color = "black"
    navhome.style.color = "black"
    navcontact.style.color = "black"
    navshop.style.color = "black"
    navblog.style.color = "rgb(3, 145, 145)"


}
function shop() {
    contactus.style.display = "none";
    aboutus.style.display = "none";
    card.style.display = "block";
    blog1.style.display = "none";
    card2.style.display = "block";

    homepage.style.display = "none";

    navabout.style.color = "black"
    navblog.style.color = "black"
    navcontact.style.color = "black"
    navhome.style.color = "black"
    navshop.style.color = "rgb(3, 145, 145)"



}
function contact() {
    contactus.style.display = "block"
    aboutus.style.display = "none";
    card.style.display = "none";
    blog1.style.display = "none";
    card2.style.display = "none";
    homepage.style.display = "none"

    navabout.style.color = "black"
    navblog.style.color = "black"
    navshop.style.color = "black"
    navhome.style.color = "black"
    navcontact.style.color = "rgb(3, 145, 145)"

}
// cart

function show(img){
    let newImg = document.getElementById("newImg");
    newImg.src = img.src;
document.querySelector(".cart").style.display ="flex"
contactus.style.display = "none"
aboutus.style.display = "none";
card.style.display = "none";
blog1.style.display = "none";
card2.style.display = "none";
homepage.style.display = "none"

}
function back(){

    location.reload();
}
