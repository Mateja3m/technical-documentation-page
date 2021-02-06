var scrollToTopBtn= document.querySelector(".btn-upp")
var rootElement = document.documentElement

function handleScroll() {
  // do something on scroll
  var scrollTotal = rootElement.scrollHeight - rootElement.clientHeight
  if ((rootElement.scrollTop / scrollTotal ) > 1) {
    //show button
    scrollToTopBtn.style.display = "none"
  } else {
    //hide button
    scrollToTopBtn.style.display = "block"
  }
}

function topFunction() {
  //scroll to top logic
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth"
  })
}
scrollToTopBtn.addEventListener("click", topFunction)
document.addEventListener("scroll", handleScroll)
 