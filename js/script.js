$(document).ready(function(){

    $(document).ready(function() {
        // Show/hide the "go to top" button based on scroll position
        $(window).scroll(function() {
          if ($(this).scrollTop() > 40) {
            $('#topBtn').fadeIn();
          } else {
            $('#topBtn').fadeOut();
          }
        });
      
        // Scroll to the top when the button is clicked
        $('#topBtn').click(function() {
          $('html, body').animate({ scrollTop: 0 }, 300);
          return false;
        });
      });

   

  
})