import {properties_sale, properties_rent} from "./array_propieties.js";

export const displayProperties = (arrayPropieties, htmlContainer) =>{

    let container = document.querySelector(`${htmlContainer}`);

    let HTMLcontent = "";
    let count = 0;

    for(let propiety of arrayPropieties){

        if(count < 3){
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
            count++

        }

    }
    
    container.innerHTML = HTMLcontent;

};

displayProperties(properties_sale, ".container_for_sale");
displayProperties(properties_rent, ".container_for_rent");