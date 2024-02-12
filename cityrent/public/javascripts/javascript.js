
document.addEventListener("DOMContentLoaded", function() {
    var header = document.querySelector('.page-header');
    var logo = document.querySelector('.navbar-brand img'); // Select the logo image
    var defaultLogo = "assets/logoblanc.png"; // Path to the default logo
    var scrolledLogo = "assets/logo.png"; // Path to the logo when scrolled
    var navbar = document.querySelector('.navbar-nav'); // Add selector for the navbar
    var icon = document.querySelector('.headerlogo i')

    const icon_change = document.getElementsByClassName('icon-change');
    


    var homeBgImage = document.querySelector('#home'); // Select the background image container

    var seeMoreLink = document.getElementById('seeMore');
    if (seeMoreLink) {
      seeMoreLink.addEventListener('click', toggleSeeMore);
    }

    // effet de zoom
    
    window.addEventListener('scroll', function() {
      
        var heroSection = document.querySelector('.hero');
        var scrollDistance = window.scrollY;
      
        console.log(window.innerWidth, "fff")
        // Calculez la nouvelle taille de l'arrière-plan
        // Vous pouvez ajuster '0.1' pour contrôler la vitesse du zoom
        if (window.innerWidth < 540){
          var backgroundSize =  window.scrollY * 0.1;
      
          // Appliquez la nouvelle taille
          heroSection.style.backgroundSize = window.scrollY*0.1+325 + '%';
        } else {
          var backgroundSize =  window.scrollY * 0.1;
      
          // Appliquez la nouvelle taille
          heroSection.style.backgroundSize = window.scrollY*0.1+100 + '%';
        }
        
      });
      

    //   window.addEventListener('scroll', function() {
    //     if (window.scrollY > 0) {
    //         header.classList.add('bg-white', 'text-black-on-scroll', 'bg-blur', 'border-bottom-on-scroll');
    //         for (icon of icon_change){
    //           icon.classList.add('text-dark')
    //         }
    //         logo.src = scrolledLogo; // Change logo to black version
    //         logo.style.width = '50px'; // Adjust the width of the black version logo
    //     } 
    //     else {
    //         header.classList.remove('bg-white', 'text-black-on-scroll', 'bg-blur', 'border-bottom-on-scroll');
    //         icon.classList.remove('-dark')
    //         for (icon of icon_change){
    //           icon.classList.remove('text-dark')
    //         }
    //         logo.src = defaultLogo; // Revenir au logo par défaut
    //         logo.style.width = '50px'; // Ajuster la largeur du logo par défaut
    //     }
    // });

    $(".option").click(function(){
      $(".option").removeClass("active");
      $(this).addClass("active");
            
    });

    });


  


    function toggleSeeMore() {
        var moreText = document.getElementById('moreText');
        var seeMoreLink = document.getElementById('seeMore');
      
        if (moreText.classList.contains('d-none')) {
          moreText.classList.remove('d-none');
          seeMoreLink.textContent = 'See Less';
        } else {
          moreText.classList.add('d-none');
          seeMoreLink.textContent = 'See More';
        }
      }


            











  




  
  