
document.addEventListener('DOMContentLoaded', function() {  //To begin after the load of all the DOM

    let urlParams = window.location.href; 

    urlParams = urlParams.split("/")

    getArticleById(urlParams[urlParams.length-1])
})


const getArticleById = async (id_article) => {
    const response = await fetch("/produit/fetch/" + id_article,{
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
    });
    const data = await response.json();

    console.log("before", data)

    renderItems(data)
  };



function renderItems(data){
    
    
    ////// Lier les mots a la base de donnée 

    /////// ASSIGNERRRRRRRR LE NOM DE LA MARQUE A MON HTML

    // Donner l'element , pour le nom de la marque ecrit en gros 
    const brandheader = document.getElementById("brandheader").innerText= data[0].brand



    //////////////////////////////////////////////////////////////////

    /////// ASSIGNERRRRRRRR les info en lier a la base de donnée  

    //faire pour le nom du produit 
    const nameProd = document.getElementById("productName").innerText=data[0].name

    // Créez un nouvel élément sexe et size 

        //   Crée pour le size   

    const infotaille = document.getElementById("size").innerText=data[0].size

    //  faire pour le sexe       

    const infosexe = document.getElementById("sexe").innerText=data[0].sexe

    // Faire pour le Original Price 
    const infoOP = document.getElementById("priceoriginal").innerText=data[0].initial_price +' $'


    // Crée pour le Rental Price  


    //rental price

    const infoRP = document.getElementById("ReelPrice").innerText= +data[0].price + ' $ / days'




    const infopays = document.getElementById("pays").innerText = data[0].country + ', ' + data[0].city 


}