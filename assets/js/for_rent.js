import {propieties_rent} from "./array_propieties.js"

const container = document.querySelector(`.container_for_rent`);


export const forRent = (propieties_rent) => {
    
    let HTMLcontent = "";
    
    for(let propiety of propieties_rent){

        let categoryText = "";
        let categoryColor = "";
        let faIcon = "";

        if(propiety.smoke === false){
            categoryText = "Smoking not Allowed";
            categoryColor = "red";
            faIcon = `<i class="fas fa-dollar-sign"></i>`;
        }else{
            categoryText = "Smoking Allowed";
            categoryColor = "green";
            faIcon = `<i class="fas fa-smoking"></i>`;
        };
        if(propiety.pets === false){
            categoryText = "Pets Not Allowed";
            categoryColor = "red";
            faIcon = `<i class="fa-solid fa-ban"></i>`;
        }else{
            categoryText = "Friendly Pets";
            categoryColor = "green";
            faIcon = `<i class="fas fa-paw"></i>`;
        };

        HTMLcontent += `
                        <div class="cardBox">
                            <img src="${propiety.src}" alt="${propiety.name}">
                            <h3>${propiety.name}</h3>
                            <p>${propiety.description}</p>
                            <p><i class="fas fa-map-marker-alt">${propiety.location}</p>
                            <p>
                                <i class="fas fa-bed"></i>${propiety.room} |
                                <i class="fas fa-bath"></i>${propiety.bathroom}
                            </p>
                            <p><i class="fas fa-dollar-sign"></i>${propiety.cost}</p>
                            <p style="color:${categoryColor}; font-weight:bold;">${faIcon}${categoryText}</p>
                        </div>
        
        `

    };

    container.innerHTML = HTMLcontent;

};