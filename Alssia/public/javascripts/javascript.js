document.addEventListener('DOMContentLoaded', function() {  //To begin after the load of all the DOM
    // ===================== UNDERLINE THE MENU

    var marker = document.querySelector('#marker');         //Get the marker
    var item = document.querySelectorAll('#menu ul li a');      //Get All menu options
    var menu = document.querySelector('nav');      //Get All menu options

    console.log(menu)

    function markerUnderline(e) {                   //function to BEGIN underline
        marker.style.left = e.offsetLeft + 'px';            //We add an offset equivalent to the nbr of pixels on the left of the menu option
        marker.style.width = (e.offsetWidth - 40) + 'px';          //We put the same width as the option one
    }


    function endMarkerUnderline() {                         //function to END underline
        marker.style.left = '0px';            //We add an offset equivalent to the nbr of pixels on the left of the menu option
        marker.style.width = '0px';          //We put the same width as the option one
    }


    item.forEach(option => {                          
        option.addEventListener("mouseover", (e) => {	        //For each, we detect when the mouse go over it     // e represents the one who is hover !!
            console.log("ok")
            markerUnderline(e.target);			            //We run the function indicator() for the one who's hover
        }) 
    })

    item.forEach(option => {                          
        option.addEventListener("mouseleave", () => {	        //For each, we detect when the mouse go over it     // e represents the one who is hover !!
            console.log("mouseleave")
            endMarkerUnderline();			            //We run the function indicator() for the one who's hover
        })
    })



    const menuLinks = document.querySelectorAll('.menuLink');
    menuLinks.forEach(link => {
        link.addEventListener('mouseover', () => {
            link.parentElement.querySelector('.menuGeneral').style.display = 'flex';
        });
        link.addEventListener('mouseout', () => {
            link.parentElement.querySelector('.menuGeneral').style.display = 'none';
        });
    });
    
    
})