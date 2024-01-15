document.addEventListener("DOMContentLoaded", function() {
  var mainLinks = document.querySelectorAll("nav > ul > li");

  mainLinks.forEach(function(link) {
    var linkAnchor = link.querySelector("a");

    link.addEventListener("mouseover", function() {
      linkAnchor.classList.add("hovered");
    });

    link.addEventListener("mouseout", function() {
      linkAnchor.classList.remove("hovered");
    });
  });
});