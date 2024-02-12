document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".slider");
    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");
  
    function activate(e) {
      const items = document.querySelectorAll(".item");
      if (e.target.matches(".next")) {
        slider.appendChild(items[0]);
      }
      if (e.target.matches(".prev")) {
        slider.insertBefore(items[items.length - 1], items[0]);
      }
    }
  
    prevButton.addEventListener("click", activate);
    nextButton.addEventListener("click", activate);


    // effet de zoom


    window.addEventListener('scroll', function() {
      var heroSection = document.querySelector('.slider');
      var scrollDistance = window.scrollY;
    
      // Calculez la nouvelle taille de l'arrière-plan
      // Vous pouvez ajuster '0.1' pour contrôler la vitesse du zoom
      var backgroundSize = 100 + window.scrollY * 0.1;
    
      // Appliquez la nouvelle taille
      heroSection.style.backgroundSize = window.scrollY*0.1+100 + '%';
    });
  });
  