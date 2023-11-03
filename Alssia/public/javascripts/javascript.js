
document.addEventListener('DOMContentLoaded', function() {  //To begin after the load of all the DOM
    // ===================== UNDERLINE THE MENU

    //for the menu
    var marker = document.querySelector('#marker');               //Get the marker
    var item = document.querySelectorAll('nav li a');             //Get All menu options
    var menu = document.querySelector('nav ul');                  //Get All menu options

    //for the menu
    function markerUnderline(e) {   
        console.log(e)                                           //function to BEGIN underline
        marker.style.left = e.offsetLeft + 'px';                 //We add an offset equivalent to the nbr of pixels on the left of the menu option
        marker.style.width = (e.offsetWidth) + 'px';             //We put the same width as the option one
    }


    function endMarkerUnderline() {                              //function to END underline                            //function to BEGIN underline
        marker.style.left = '0px';                               //We add an offset equivalent to the nbr of pixels on the left of the menu option
        marker.style.width = '0px';                              //We put the same width as the option one
    }


    item.forEach(option => {                          
        option.addEventListener("mouseover", (e) => {	         //For each, we detect when the mouse go over it     // e represents the one who is hover !!
            console.log("ok", e)
            if (e.target.tagName === "A") {
                console.log("on click")
                markerUnderline(e.target);
            }		                 //We run the function indicator() for the one who's hover
        }) 
    })


    menu.addEventListener("mouseleave", () => {	                 //For each, we detect when the mouse go over it     // e represents the one who is hover !!
        console.log("mouseleave" + menu)
        endMarkerUnderline();			                         //We run the function indicator() for the one who's hover

    })



    const menuPhone = document.querySelector('#openMenuBar');                  //Get All menu options
    const menuBar1 = document.querySelector('#menuBar1');
    const menuBar2 = document.querySelector('#menuBar2');
    const menuBar3 = document.querySelector('#menuBar3'); 
    const navMenu = document.querySelector('nav#menuPhone')


    menuPhone.addEventListener("click", () => {	                 //For each, we detect when the mouse go over it     // e represents the one who is hover !!
        if (menuBar2.style.visibility === "hidden"){
            menuBar2.style.visibility = "visible";
            //return to default menuBar2
            menuBar1.style.transform = "rotate(0deg)";
            menuBar1.style.marginTop = "0px";
            //return to default menuBar3
            menuBar3.style.transform = "rotate(0deg)";
            menuBar3.style.marginTop = "0px";

            //for all the nav
            navMenu.style.display = "none"
        } else {
            menuBar2.style.visibility = "hidden";
            //menuBar1
            menuBar1.style.transform = "rotate(45deg)";
            menuBar1.style.marginTop = "10px";
            menuBar1.style.transition = ".2s";
            //menuBar3
            menuBar3.style.transform = "rotate(-45deg) translateX(8px) translateY(-8px)";
            menuBar3.style.marginTop = ".2s";

            //for all the nav
            navMenu.style.display = "block"
        }

    })
    


})