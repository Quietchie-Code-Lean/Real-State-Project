export const relativePath = (path) => {
    location.href = path;
};

document.querySelector(`.view_sale_properties`).addEventListener("click", () =>{
    relativePath(`./assets/views/forSale.html`);
});

document.querySelector(`.view_rent_properties`).addEventListener("click", () =>{
    relativePath(`./assets/views/forRent.html`);
});