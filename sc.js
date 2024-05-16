let hamburger = document.querySelector(".icon");
let navitems = document.querySelector(".navitems");

function showNav() {
  navitems.classList.toggle("hidden");
}

let products = [
  {
    id: 1,
    title: "bike",
    price: 300,
    image: "./image/two.jpg",
  },
  {
    id: 2,
    title: "bike",
    price: 400,
    image: "./image/three.jpg",
  },
  {
    id: 10,
    title: "bike",
    price: 350,
    image: "./image/four.jpg",
  },
  {
    id: 4,
    title: "bike",
    price: 450,
    image: "./image/five.jpg",
  },
];

/**Dynamically add product to HTML */
let productDiv = document.querySelector("#products");
products.forEach((item) => {
  productDiv.innerHTML += `
	 <div class="product flex flex-col justify-center">
            <img src="${item.image}" class="product-image w-[500px] h-[350px] mx-auto">
            <p class="title text-sm font-bold text-center">${item.title}</p>
            <p class="price text-center">${item.price}</p>
            <button onclick="cart(${item.id})" type="button" class="text-center bg-gray-50 p-1 rounded-lg shadow-lg shadow-slate-800">Add to cart</button>
        </div>`;
});

// cart start here
let cartViewer = document.getElementById("cartViewer");
let cartData = [];
function cart(productId) {
  if (!cartData.includes(productId)) {
    cartData.push(productId);
  }
  cartViewer.innerHTML = "";
  cartData.forEach((cartid) => {
    // let prod=products[item-1];
    let prod = products.findIndex((item) => {
      if (item.id == cartid) {
        return item;
      }
    });
    let tempProduct = products[prod];
    cartViewer.innerHTML += `
    <div class="product flex flex-col justify-center">
           <img src="${tempProduct.image}" class="product-image w-[500px] h-[350px] mx-auto">
           <p class="title text-sm font-bold text-center">${tempProduct.title}</p>
           <p class="price text-center">${tempProduct.price}</p>
       </div>`;
  });
}

function showCart(){
    cartViewer.classList.toggle("hidden");
}