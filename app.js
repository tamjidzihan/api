let productListPromise = fetch("http://127.0.0.1:8000/products/");
const productContainer = document.getElementById("product-container");


productListPromise.then((response) => response.json())
    .then((data) => {
        console.log(data)
        const productListPromise = document.getElementById("product-list");
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
                imageContainer.setAttribute('id', 'product-image')
                product.images.forEach((image) => {
                    const imgElement = document.createElement('img');
                    imgElement.src = image.image;
                    imgElement.alt = product.title;
                    imageContainer.appendChild(imgElement);
                });
                productDiv.appendChild(imageContainer);
            }
            productListPromise.appendChild(productDiv);
        });
    }).catch(error => console.log(error))



const catagoryListPrommise = fetch("http://127.0.0.1:8000/catagoryproduct/")
const catagoryList = document.getElementById("catagory-list")

catagoryListPrommise.then((response)=> response.json())
.then((data)=>{
    console.log(data)
    data.forEach((catagory)=>{
        const catagoryProduct = document.createElement('div')
        catagoryProduct.setAttribute('id','catagory-product')
        catagoryProduct.innerHTML = `
        <h4>Catagory Name:  ${catagory.title}</h4>
        `
        if (catagory.products.length>0){
            catagory.products.forEach((product)=>{
                const productDetails = document.createElement('dev')
                productDetails.setAttribute('id','product-details')
                productDetails.innerHTML=`
                <h5>Product Name:   ${product.title}</h5>
                <p>Price:           ${product.price}</p>
                `
                if (product.images.length>0){
                    const imageContainer = document.createElement('div');
                    imageContainer.setAttribute('id', 'product-image')
                    product.images.forEach((image)=>{
                        const imgElement = document.createElement('img');
                        imgElement.src = image.image|| placeholderImageUrl;
                        imgElement.alt = product.title;
                        imageContainer.appendChild(imgElement);
                    })
                    
                    productDetails.appendChild(imageContainer)
                }else {
                    // Use a placeholder image when there are no images available
                    const placeholderImgElement = document.createElement('img');
                    placeholderImgElement.src ="https://placehold.co/400";
                    placeholderImgElement.alt = 'Image Not Available';
                    productDetails.appendChild(placeholderImgElement);
                }
                catagoryProduct.appendChild(productDetails)
            })
            
        }
        
        catagoryList.appendChild(catagoryProduct)
    })

})






    // .then((response) => response.json())
    // .then((data) => {
    //     console.log(data)
    //     data.forEach((catagory) => {
    //         const catagoryProduct = document.createElement('div')
    //         catagoryProduct.setAttribute('id', 'catagory-product')
    //         catagoryProduct.innerHTML = `
    //                 <h4>Catagory Name:   ${catagory.title}</h4>
    //                 `
    //         if (catagory.products.length > 0) {
    //             const productContainer = document.createElement('div')
    //             productContainer.setAttribute('id', 'catagory-product')
    //             catagory.products.forEach((product) => {
    //                 const productDetail = document.createElement('div')
    //                 productDetail.setAttribute('id', 'product-detail')
    //                 productDetail.innerHTML = `
    //                     <h4>Product Name:   ${product.title}</h4>
    //                     <p>Price:           ${product.price}</p>
    //                     `;
    //                 if (product.images.length > 0) {
    //                     const imageContainer = document.createElement('div');
    //                     imageContainer.setAttribute('id', 'product-image')
    //                     product.images.forEach((image) => {
    //                         const imgElement = document.createElement('img');
    //                         imgElement.src = image.image;
    //                         imgElement.alt = product.title;
    //                         imageContainer.appendChild(imgElement);
    //                     });
    //                     productDetail.appendChild(imageContainer)
    //                 })
    //             catagoryProduct.appendChild(productContainer)
    //         }
    //         catagoryList.appendChild(catagoryProduct)
    //     })
    // })


