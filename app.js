// let productListPromise = fetch("http://127.0.0.1:8000/products/");
// const productContainer = document.getElementById("product-container");


// productListPromise.then((response) => response.json())
//     .then((data) => {
//         console.log(data)
//         const productListPromise = document.getElementById("product-list");
//         data.results.forEach((product) => {
//             const productDiv = document.createElement('div');
//             productDiv.setAttribute('id', 'product-list-detail');
//             productDiv.innerHTML = `
//         <h4>Product Name:   ${product.title}</h4>
//         <p>Price:           ${product.price}</p>
//         <p>Price With Tax:  ${product.price_with_tax}</p>
//         <p>Inventory:       ${product.inventory}</p>
//         <p>Description:     ${product.description}</p>
//         <p>Catagory:        ${product.catagory}</p>
//         `;
//             if (product.images.length > 0) {
//                 const imageContainer = document.createElement('div');
//                 imageContainer.setAttribute('id', 'product-image')
//                 product.images.forEach((image) => {
//                     const imgElement = document.createElement('img');
//                     imgElement.src = image.image;
//                     imgElement.alt = product.title;
//                     imageContainer.appendChild(imgElement);
//                 });
//                 productDiv.appendChild(imageContainer);
//             }
//             productListPromise.appendChild(productDiv);
//         });
//     }).catch(error => console.log(error))



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

}).catch(error => console.log(error))




document.getElementById("login-form").addEventListener("submit", function (event) {
    event.preventDefault();
  
    const username = document.querySelector('input[name="username"]').value;
    const password = document.querySelector('input[name="password"]').value;
    const credentials = {
        username: username,
        password: password,
    };

    fetch("http://127.0.0.1:8000/auth/jwt/create/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    })
      .then((response) => {
        if (response.status === 200) {
          // Successful login
          // You can handle the response here
          localStorage.setItem('refreshToken', data.refresh);
          localStorage.setItem('accessToken', data.access);
          console.log("Login successful");
        } else {
          // Failed login
          // Handle the error or show an error message to the user
          console.error("Login failed");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  });






// Define your API endpoint and the username and password
// const apiUrl = 'http://127.0.0.1:8000/auth/jwt/create/';  // Replace with your API URL
// const username = 'admin';
// const password = 'admin1234';

// // Create an object to hold the credentials
// const credentials = {
//     username: username,
//     password: password,
// };

// // Send a POST request to the API with the credentials
// fetch(apiUrl, {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(credentials),
// })
//     .then(response => response.json())
//     .then(data => {
//         // Handle the API response here
//         localStorage.setItem('refreshToken', data.refresh);
//         localStorage.setItem('accessToken', data.access);
//     }).catch(error => {
//         console.error('Error:', error);
//     });

const refreshToken = localStorage.getItem('refreshToken')
const accessToken = localStorage.getItem('accessToken')








fetch('http://127.0.0.1:8000/products/', {
  method: 'GET',
  headers: {
    'Authorization': `JWT ${accessToken}`
  }
})
  .then(response => {
    if (response.status === 200) {
      return response.json();
    } else {
      console.error('API request failed:', response.statusText);
    }
  })
  .then(data => {
    // Handle the API response here
    console.log(data);
  })
  .catch(error => {
    console.error('Error:', error);
  });