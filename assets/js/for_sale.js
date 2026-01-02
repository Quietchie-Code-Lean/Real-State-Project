import {properties_sale} from "./array_propieties.js"

const container = document.querySelector(`.container_for_sale`);


export const forSale = (properties_sale) => {
    
    let HTMLcontent = "";
    
    for(let propiety of properties_sale){

        let smokeText = "";
        let smokeColor = "";
        let smokeIcon = "";

        let petsText = "";
        let petsColor = "";
        let petsIcon = "";

        if (propiety.smoke === false) {
            smokeText = "Smoking Not Allowed";
            smokeColor = "red";
            smokeIcon = `<i class="fas fa-ban"></i>`;
            } else {
            smokeText = "Smoking Allowed";
            smokeColor = "green";
            smokeIcon = `<i class="fas fa-smoking"></i>`;
            }

        if (propiety.pets === false) {
            petsText = "Pets Not Allowed";
            petsColor = "red";
            petsIcon = `<i class="fas fa-ban"></i>`;
            } else {
            petsText = "Pets Allowed";
            petsColor = "green";
            petsIcon = `<i class="fas fa-paw"></i>`;
            }


        HTMLcontent += `
                        <div class="cardBox">
                            <img src="${propiety.src}" alt="${propiety.name}">
                            <h3>${propiety.name}</h3>
                            <p>${propiety.description}</p>
                            <p><i class="fas fa-map-marker-alt"></i>${propiety.location}</p>
                            <p>
                                <i class="fas fa-bed"></i>BedRooms:${propiety.rooms} |
                                <i class="fas fa-bath"></i>BathRooms:${propiety.bathrooms}
                            </p>
                            <p><i class="fas fa-dollar-sign"></i>${propiety.cost}</p>
                            <p style="color:${smokeColor}; font-weight:bold;">${smokeIcon}${smokeText}</p>
                            <p style="color:${petsColor}; font-weight:bold;">${petsIcon}${petsText}</p>
                        </div>
        
        `

    };

    container.innerHTML = HTMLcontent;

};

forSale(properties_sale);