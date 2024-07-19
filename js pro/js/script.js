const products = [
    {
        id : 0,
        image : 'img/laptop.jpg',
        name : 'laptop',
        description : 'laptop description',
        price : 50000
    },
    {
        id : 1,
        image : 'img/mobile.jpg',
        name : 'mobile',
        description : 'mobile description',
        price : 20000
    },
    {
        id : 2,
        image : 'img/tablet.jpg',
        name : 'tablet',
        description : 'tablet description',
        price : 30000
    },
    {
        id : 3,
        image : 'img/watch.webp',
        name : 'watch',
        description : 'watch description',
        price : 40000
    },
];

const viewCart = document.getElementById('viewCart');
const cartCount = document.getElementById('cart-count');

const updateCartCount = () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cartCount.textContent = cart.reduce((count, item) => count + item.quantity, 0);
};

const addToCart = (product) => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingItem = cart.find(item => item.id === product.id);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
};
  products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.className = ' col-md-6 ';
        productElement.innerHTML = `
                <div class="card">
          
        <div class="card m-2" >
       <img src="${product.image}" class="card-img-top" alt="..." style="width: 200px; height: 200px; object-fit: contain;>
      <div class="card-body">
        <h5 class="card-title">${product.name}</h5>
        <p class="card-text">${product.description}</p>
        <p class="card-text">${product.price}</p>

        </div>
    </div>
         <div style="padding: 20px">
         <button class="btn btn-primary add-to-cart "style="width: 200px; height: 50px">Add to Cart</button>
     </div>
 </div>
`;
        
      productElement.querySelector('.add-to-cart').addEventListener('click', () => addToCart(product));
        viewCart.appendChild(productElement);
    });
           
