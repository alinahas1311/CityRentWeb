const port = 3306;
const url = `http://localhost:/`+port

document.addEventListener('DOMContentLoaded', function() {  //To begin after the load of all the DOM

    // Récupération du lien complet de la page pour en extraire des données
    let urlParams = window.location.href;
    //let categories = urlParams.get('categorie');

    // Utilisation des valeurs des paramètres
    const urlDivided = urlParams.split("/");
    const parameters = urlDivided[urlDivided.length-1].split("_")
    //console.log("Paramètre 1:", parameters);

    //on récupère la catégorie sélectionné s'il y a : 
    let colorsSelected = [];
    let subcategoriesSelected = []
    for (let j = 2; j < parameters.length; j++) {

        if (parameters[j].includes("subcategory")){
            subcategoriesSelected.push(parameters[j].toLowerCase().slice(12))
        }
        
        // On récupère les couleurs : 
        if(parameters[j].includes("color")){
            colorsSelected.push(parameters[j].toLowerCase().slice(6))
        }
    }
    let department = parameters[0]
    let categorieSelected = parameters[1].slice(10)

    
    //////////////////// EXPLICATIONS
    // department = parameters[0] == Department (men, women, kids, etc ..)
    // parameters[1].slice(10) == correspond to the second parameter which is the categorie 'cause the first parameter will always be the one of the category
    //

    // fill all department tag
    const departmentTag = document.getElementById("department");
    departmentTag.innerHTML = department;

    // fill all categories tag
    const mainCategorie = document.getElementById("mainCategorie");
    const categorieTag = document.getElementById("categorieTag");
    mainCategorie.innerHTML = categorieSelected
    categorieTag.innerHTML = categorieSelected

    // fill the path
    const pathCategorie = document.getElementById("pathCategorie");
    pathCategorie.innerHTML = "Home > " + department + " > " + parameters[1].slice(10)

    // fill the number of categories
    const categoryTitleContainer = document.getElementById("categoryTitleContainer");
    if(parameters[1].slice(10).length != 0){
        categoryTitleContainer.innerHTML = "category (1)"
    }



    ////////// Configuration of modifiable parameters of the filter

    //Definition des sous categories
    let subCategories;
    if (department === "women" && parameters[1].slice(10) === "dress"){
        subCategories = [
            "Satin dress",
            "Ball gown",
            "Cocktail dress",
            "Fit and flare dress",
            "High-low dress",
            "Wedding dress"
        ]
    } else if (department === "women" && parameters[1].slice(10) === "pantsuits"){
        subCategories = [
            "Evening",
            "Corduroy",
            "Silk",
            "Jacquard patterned"
        ]
    } else if (department === "women" && parameters[1].slice(10) === "top"){
        subCategories = [
            "Sequin",
            "Velvet",
            "Backless",
            "Satin bustier",
            "Glistening pearl corset"
        ]
    } else if (department === "women" && parameters[1].slice(10) === "shoes"){
        subCategories = [
            "High-heeled pumps",
            "Satin stilettos",
            "Stylish heeled booties",
            "Velvet heels",
            "Metallic stilettos",
            "Animal print pumps"
        ]
    } else if (department === "men" && parameters[1].slice(10) === "suits"){
        subCategories = [
            "Tuxedo",
            "Tailored",
            "Double Breasted",
            "Slim Fit"
        ];
    } else if (department === "men" && parameters[1].slice(10) === "shirts"){
        subCategories = [
            "French Cuff",
            "Dress Shirt",
            "Linen Shirt",
            "Tuxedo Shirt"
        ];
    } else if (department === "men" && parameters[1].slice(10) === "shoes"){
        subCategories = [
            "Oxford",
            "Loafers",
            "Monk Strap",
            "Derby"
        ];
    } else if (department === "men" && parameters[1].slice(10) === "accessories"){
        subCategories = [
            "Tie",
            "Cufflinks",
            "Pocket Square"
        ];
    } else if (department === "kids" && parameters[1].slice(10) === "girls"){
        subCategories = [
            "Dresses",
            "Skirts",
            "Blouses",
            "Shoes"
        ]
    } else if (department === "kids" && parameters[1].slice(10) === "boys"){
        subCategories = [
            "Suits",
            "Shirts",
            "Pants",
            "Shoes"
        ]        
    } else if (department === "kids" && parameters[1].slice(10) === "girls_accessories"){
        subCategories = [
            "Hair accessories",
            "Jewelry"
        ]
    } else if (department === "kids" && parameters[1].slice(10) === "boys_accessories"){
        subCategories = [
            "Ties",
            "Belts"
        ]
    }

    // We put as check all subcategories Selected
    const subCategoriesContainer = document.getElementById("subCategoriesContainer");

    //create all element of subcategories
    for(const element of subCategories){


        const input = document.createElement("input");

        // We are looking for the subcategory corresponding to the input checkbox label. (we delete all spaces with replace)
        if (subcategoriesSelected.includes(element.replace(/\s+/g, '').toLowerCase())) {
            input.setAttribute("checked", "");
        }
        input.type = 'checkbox';
        input.id = element;

        const label = document.createElement("label");
        label.setAttribute("for", element);
        label.textContent = element;
        label.classList.add("subCategorieName");

        subCategoriesContainer.appendChild(input);
        subCategoriesContainer.appendChild(label);

        input.addEventListener('click', () => {
            
            if(subcategoriesSelected.includes(element.replace(/\s+/g, '').toLowerCase())){
                const index = subcategoriesSelected.indexOf(element.replace(/\s+/g, '').toLowerCase());
                subcategoriesSelected.splice(index, 1);    //Then we delete this index
            } else {
                subcategoriesSelected.push(element.replace(/\s+/g, '').toLowerCase())
            }

            recreateUrl(department, categorieSelected, subcategoriesSelected, colorsSelected)
        })
    }

    //We put as checked all colors Selected
    const bubbleColor = document.getElementsByClassName("bubbleColor")

    let toAddColors = []
    let toDeleteColors = []

    // Parcourir la collection pour ajouter un gestionnaire d'événements à chaque élément
    for (const element of bubbleColor) {
        // on met un border rouge
        if(colorsSelected.includes(element.id)){
            element.classList.toggle("redBorder");
        }

        element.addEventListener("click", function(){
            this.classList.toggle("redBorder");
            //après avoir toggle la class, we check if we have ann index of this id in the list of selected color :
            if(colorsSelected.includes(this.id)){
                const index = colorsSelected.indexOf(this.id);
                colorsSelected.splice(index, 1);    //Then we delete this index
            } else {
                colorsSelected.push(this.id)        //Elsewehere, we put it in the array
            }
            console.log("okk", colorsSelected)
            recreateUrl(department, categorieSelected, subcategoriesSelected, colorsSelected)
        });
    }

    recreateUrl(department, categorieSelected, subcategoriesSelected, colorsSelected)
});





const recreateUrl = async (department, category, subcategories, colors) => {
    let url = "http://localhost:3000/article/"+department+"_categorie="+category

    for(const subcategory of subcategories){
        url = url + "_subcategory=" + subcategory
    }

    console.log("add colors : ", colors)
    for(const color of colors){
        console.log("au tour de : ", color)
        url = url + "_color="+color
        console.log("fait == ", url)
    }

    let stateObj = { page: "articlesPage" };
    let newTitle = "All Articles";
    window.history.pushState(stateObj, newTitle, url);


    const data = await getData(department, category, subcategories, colors)

    renderItems(data)


}



const getData = async (department, category, subcategories, colors) => {
    sqlQuery = "SELECT * FROM articles WHERE department = '" + department + "' and category = '" + category + "'"



    ///////// FOR subcategories
    if(subcategories.length > 0){
        sqlQuery = sqlQuery + " and"
    }
    for(let i = 0; i<subcategories.length; i++){
        sqlQuery = sqlQuery + " subcategory = '" + subcategories[i] + "'"
        if(i != subcategories.length-1){
            sqlQuery = sqlQuery + " or"
        }
    }


    ///////// FOR COLORS
    if(colors.length > 0){
        sqlQuery = sqlQuery + " and"
    }
    for(let i = 0; i<colors.length; i++){
        sqlQuery = sqlQuery + " color = '" + colors[i] + "'"
        if(i != colors.length-1){
            sqlQuery = sqlQuery + " or"
        }
    }

    ///////// FOR THE SQLQUERY
    const data = { sqlQuery: sqlQuery };

    const response = await fetch("/article/fetch/data", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

    const json = await response.json()
  
    return json
}
  


function renderItems(data){


    const numberResults = document.getElementById("numberResults").innerHTML = data.length + " results"
    console.log(data.length)

    const articlesRenderContainer = document.getElementById("articlesRenderContainer");

    //initialization of the render container
    articlesRenderContainer.innerHTML = "";



    const gridArticlesDiv = document.createElement("div");
    gridArticlesDiv.classList.add("gridArticles");

    for(let i = 0; i<data.length; i++){
        //console.log("on met", data[i]);

        const articleGridItemDiv = document.createElement("div");
        articleGridItemDiv.classList.add("grid-item");

        //header
        const headerArticleItem = document.createElement("div");
        headerArticleItem.classList.add("headerArticleItem");

        const pHeaderArticle = document.createElement("p");
        pHeaderArticle.classList.add("pHeaderArticle");

   

        //image
        const imageArticle = document.createElement("div");
        imageArticle.classList.add("imageArticle");

        articleGridItemDiv.appendChild(imageArticle)

        //infos
        const infoArticle = document.createElement("div");
        infoArticle.classList.add("infoArticle");

        const h6InfoArticle = document.createElement("h6");
        var marquetext = document.createTextNode(data[i].brand);
        h6InfoArticle.appendChild(marquetext)

        const pNameArticle = document.createElement("p");
        var nametext = document.createTextNode(data[i].name);
        pNameArticle.appendChild(nametext)

        const pTailleArticle = document.createElement("p");
        var tailleText = document.createTextNode("Size : ");
        pTailleArticle.appendChild(tailleText)

        infoArticle.appendChild(h6InfoArticle)
        infoArticle.appendChild(pNameArticle)
        infoArticle.appendChild(pTailleArticle)

        //originalPriceContainer
        const originalPriceContainer = document.createElement("div");
        originalPriceContainer.classList.add("originalPriceContainer");

        const pOPArticle = document.createElement("p");
        var OPText = document.createTextNode("Original price");
        pOPArticle.appendChild(OPText)

            //originalPriceLabel
            const originalPriceLabel = document.createElement("div");
            originalPriceLabel.classList.add("originalPriceLabel");

            const pOriginalPrice = document.createElement("p");
            pOriginalPrice.classList.add("originalPrice");
            var OriginalPriceText = document.createTextNode(data[i].initial_price + " €");
            pOriginalPrice.appendChild(OriginalPriceText)

            originalPriceLabel.appendChild(pOriginalPrice)
            //end originalPriceLabel

        originalPriceContainer.appendChild(pOPArticle)
        originalPriceContainer.appendChild(originalPriceLabel)

        infoArticle.appendChild(originalPriceContainer)
        //articleGridItemDiv.appendChild(infoArticle)

        //end originalPriceContainer

        //rental price
        const pRPArticle = document.createElement("p");
        pRPArticle.classList.add("rentalPrice");
        var RPText = document.createTextNode(data[i].price + " €");
        pRPArticle.appendChild(RPText)

        infoArticle.appendChild(pRPArticle)

        //end

        const locationContainer = document.createElement("div");
        locationContainer.classList.add("locationContainer");

        const imgArticle = document.createElement("img");
        imgArticle.setAttribute("src", "/assets/svg/location-sign.svg");
        imgArticle.classList.add("locationSvg");

        const pRentalPrice = document.createElement("p");
        var VilleText = document.createTextNode("France, Issy les Moulineaux wsh");
        pRentalPrice.appendChild(VilleText)

        locationContainer.appendChild(imgArticle)
        locationContainer.appendChild(pRentalPrice)


        infoArticle.appendChild(locationContainer)
        articleGridItemDiv.appendChild(infoArticle)

        //to append at the end :
        gridArticlesDiv.appendChild(articleGridItemDiv)
    }

    articlesRenderContainer.appendChild(gridArticlesDiv)

}