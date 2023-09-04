document.addEventListener("DOMContentLoaded", function () {
    showProductsList();
});

function showProductsList() {
    fetch("https://japceibal.github.io/emercado-api/cats_products/101.json")
        .then(response => response.json())
        .then(data => {
            const productsArray = data.products;
            let htmlContentToAppend = "";

            for (let i = 0; i < productsArray.length; i++) {
                let product = productsArray[i];
                htmlContentToAppend += `
                    <div class="col-sm-4">
                        <a href="product-info.html" class="card mb-4 shadow-md custom-card">
                            <img src="${product.image}" class="card-img-top" alt="${product.name}">
                            <div class="card-body">
                                <h5 class="card-title">${product.name}</h5>
                                <p class="card-text">${product.description}</p>
                                <p class="card-text">Precio: ${product.cost} ${product.currency}</p>
                                <p class="card-text">Cantidad vendida: ${product.soldCount}</p>
                            </div>
                        </a>
                    </div>`;
            }

            document.getElementById("product-list-container").innerHTML = htmlContentToAppend;

            // Agregamos el evento para el filtro de precio
            document.getElementById("rangeFilterPrice").addEventListener("click", function () {
                // Obtenemos el mínimo y máximo de los intervalos para filtrar por precio
                const minPrice = document.getElementById("rangeFilterPriceMin").value;
                const maxPrice = document.getElementById("rangeFilterPriceMax").value;

                // Filtramos los productos en función del precio
                const filteredProducts = productsArray.filter(product => {
                    const productPrice = parseInt(product.cost);
                    return (!minPrice || productPrice >= parseInt(minPrice)) && (!maxPrice || productPrice <= parseInt(maxPrice));
                });

                // Mostramos los productos filtrados
                showFilteredProducts(filteredProducts);
            });
        })
        .catch(error => {
            console.error("Error al cargar los productos:", error);
        });
}

function showFilteredProducts(products) {
    let htmlContentToAppend = "";

    for (let i = 0; i < products.length; i++) {
        let product = products[i];
        htmlContentToAppend += `
            <div class="col-sm-4">
                <a href="product-info.html" class="card mb-4 shadow-md custom-card">
                    <img src="${product.image}" class="card-img-top" alt="${product.name}">
                    <div class="card-body">
                        <h5 class="card-title">${product.name}</h5>
                        <p class="card-text">${product.description}</p>
                        <p class="card-text">Precio: ${product.cost} ${product.currency}</p>
                        <p class="card-text">Cantidad vendida: ${product.soldCount}</p>
                    </div>
                </a>
            </div>`;
    }

    document.getElementById("product-list-container").innerHTML = htmlContentToAppend;
}
