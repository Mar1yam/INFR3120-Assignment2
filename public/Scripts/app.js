// SPA --> Single Page Aplication
// Client side 
// IIFE --> Immediatley invoked function expression
(function(){
    function Start()
    {
        console.log("App Started");
        window.addEventListener("load", Start)
    }
    window.addEventListener("load", Start)
})();


$(document).ready(function() {
    $('.nav-link-clicked').on('click', function() {
      // Remove 'clicked' class from all links
      $('.nav-link-clicked').removeClass('clicked');
      // Add 'clicked' class to the clicked link
      $(this).addClass('clicked');
    });
  });

  