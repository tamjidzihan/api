let productList = fetch("http://127.0.0.1:8000/products/");
const productContainer = document.getElementById("product-container");
const nextPageButton = document.getElementById("next-page");

productList.then((response) => response.json())
    .then((data) => {
    console.log(data)
    const productList = document.getElementById("product-list");
    data.results.forEach((product) => {
        const productDiv = document.createElement('div');
        productDiv.setAttribute('id', 'product-list-detail');
        productDiv.innerHTML = `
        <h4>Product Name:   ${product.title}</h4>
        <p>Price:           ${product.price}</p>
        <p>Price With Tax:  ${product.price_with_tax}</p>
        <p>Inventory:       ${product.inventory}</p>
        <p>Description:     ${product.description}</p>
        <p>Catagory:        ${product.catagory}</p>
        `;
        if (product.images.length > 0) {
            const imageContainer = document.createElement('div');
            imageContainer.setAttribute('id','product-image')
            product.images.forEach(image => {
                const imgElement = document.createElement('img');
                imgElement.src = image.image;
                imgElement.alt = product.title;
                imageContainer.appendChild(imgElement);
            });
            productDiv.appendChild(imageContainer);
        }
        productList.appendChild(productDiv);
    });
}).catch(error => console.log(error))


let productCatagory = fetch("http://127.0.0.1:8000/catagory/")
const productCatagoryContainer = document.getElementById('product-catagory')



