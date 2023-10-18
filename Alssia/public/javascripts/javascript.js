
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


})