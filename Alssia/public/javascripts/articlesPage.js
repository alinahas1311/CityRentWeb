document.addEventListener('DOMContentLoaded', function() {  //To begin after the load of all the DOM


    // Récupération du lien complet de la page pour en extraire des données
    let urlParams = window.location.href;
    //let categories = urlParams.get('categorie');

    // Utilisation des valeurs des paramètres
    const urlDivided = urlParams.split("/");
    const parameters = urlDivided[urlDivided.length-1].split("_")
    //console.log("Paramètre 1:", parameters);

    let subcategoriesSelected = []
    console.log("--", parameters[1].slice(10))
    for (let j = 2; j < parameters.length; j++) {
        if (parameters[j].includes("subcategory")){
            subcategoriesSelected.push(parameters[j].toLowerCase().slice(12))
            //console.log("got it !!!", subcategoriesSelected)
        }
    }

    //////////////////// EXPLICATIONS
    // parameters[1].slice(10) == correspond to the second parameter which is the categorie 'cause the first parameter will always be the one of the category
    //

    let department = parameters[0]
    const departmentTag = document.getElementById("department");
    departmentTag.innerHTML = department;

    const mainCategorie = document.getElementById("mainCategorie");
    const categorieTag = document.getElementById("categorieTag");
    mainCategorie.innerHTML = parameters[1].slice(10)
    categorieTag.innerHTML = parameters[1].slice(10)

    const pathCategorie = document.getElementById("pathCategorie");
    pathCategorie.innerHTML = "Home > " + department + " > " + parameters[1].slice(10)

    const categoryTitleContainer = document.getElementById("categoryTitleContainer");
    if(parameters[1].slice(10).length != 0){
        categoryTitleContainer.innerHTML = "category (1)"
    }


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
    } else if (department === "women" && parameters[1].slice(10) === "pantsuit"){
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
    }

    console.log("list : ", subcategoriesSelected)

    const subCategoriesContainer = document.getElementById("subCategoriesContainer");
    //console.log(subCategoriesContainer)

    for(let i=0; i<subCategories.length; i++){

        const categoriesContainer = document.createElement("input");

        const input = document.createElement("input");
        if (subcategoriesSelected.includes(subCategories[i].replace(/\s+/g, '').toLowerCase())) {
            console.log("Match found for: " + subCategories[i]);
            input.setAttribute("checked", "");
        }
        console.log(subcategoriesSelected.includes('ballgown'))
        input.type = 'checkbox';
        input.id = subCategories[i];
        const label = document.createElement("label");
        label.setAttribute("for", subCategories[i]);
        label.textContent = subCategories[i]
        label.classList.add("subCategorieName");

        subCategoriesContainer.appendChild(input)
        subCategoriesContainer.appendChild(label)
    }


    //on récupère la catégorie sélectionné s'il y a : 

    

});