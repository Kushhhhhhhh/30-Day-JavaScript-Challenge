// Initialize an empty shopping cart
let cart = [];

// Function to handle adding products to the cart
function addToCart(productId) {
    const product = products.find(prod => prod.id === productId);

    // Check if the product is already in the cart
    const cartItem = cart.find(item => item.id === productId);

    if (cartItem) {
        // If the product is already in the cart, increase the quantity
        cartItem.quantity += 1;
    } else {
        // If the product is not in the cart, add it with quantity 1
        cart.push({
            ...product,
            quantity: 1
        });
    }

    // Update the cart display
    updateCartDisplay();
}

// Function to handle increasing the quantity of an item
function increaseQuantity(productId) {
    const cartItem = cart.find(item => item.id === productId);
    if (cartItem) {
        cartItem.quantity += 1;
        updateCartDisplay();
    }
}

// Function to handle decreasing the quantity of an item
function decreaseQuantity(productId) {
    const cartItem = cart.find(item => item.id === productId);
    if (cartItem) {
        if (cartItem.quantity > 1) {
            cartItem.quantity -= 1;
        } else {
            removeFromCart(productId); // Remove item if quantity is 1 and decrease is pressed
        }
        updateCartDisplay();
    }
}

// Function to handle removing an item from the cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartDisplay();
}

// Function to update the cart display
function updateCartDisplay() {
    const cartItemsContainer = document.querySelector('.shopping-cart');
    const cartTotalContainer = document.getElementById('cart-total');

    // Clear the current cart items
    cartItemsContainer.querySelectorAll('.cart-item').forEach(item => item.remove());

    // Calculate the total price
    let total = 0;

    // Loop through the cart and create elements for each item
    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');

        // Display product name and price
        const itemName = document.createElement('p');
        itemName.classList.add('name');
        itemName.textContent = item.name;

        const itemQuantity = document.createElement('p');
        itemQuantity.classList.add('quantity');
        itemQuantity.textContent = `Quantity: ${item.quantity}`;

        const itemPrice = document.createElement('p');
        itemPrice.classList.add('price');
        itemPrice.textContent = `$${(item.price * item.quantity).toFixed(2)}`;

        // Increase quantity button
        const increaseButton = document.createElement('button');
        increaseButton.textContent = '+';
        increaseButton.addEventListener('click', () => increaseQuantity(item.id));

        // Decrease quantity button
        const decreaseButton = document.createElement('button');
        decreaseButton.textContent = '-';
        decreaseButton.addEventListener('click', () => decreaseQuantity(item.id));

        // Remove item button
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.addEventListener('click', () => removeFromCart(item.id));

        // Append elements to cart item
        cartItem.appendChild(itemName);
        cartItem.appendChild(itemQuantity);
        cartItem.appendChild(itemPrice);
        cartItem.appendChild(increaseButton);
        cartItem.appendChild(decreaseButton);
        cartItem.appendChild(removeButton);

        cartItemsContainer.appendChild(cartItem);

        // Add to the total
        total += item.price * item.quantity;
    });

    // Update the total price
    cartTotalContainer.textContent = `Total: $${total.toFixed(2)}`;
}

// Add event listeners to the "Add to Cart" buttons
document.addEventListener('DOMContentLoaded', () => {
    // Fetch the product data from JSON file
    fetch('products.json')
        .then(response => response.json())
        .then(productData => {
            window.products = productData; // Save the products globally for access
            const productGrid = document.getElementById('product-grid');

            products.forEach(product => {
                // Create product card
                const productCard = document.createElement('div');
                productCard.classList.add('product-card');

                // Create product image
                const productImage = document.createElement('img');
                productImage.src = product.imageURL;
                productImage.alt = product.name;

                // Create product name
                const productName = document.createElement('h3');
                productName.textContent = product.name;

                // Create product description
                const productDescription = document.createElement('p');
                productDescription.textContent = product.description;

                // Create product price
                const productPrice = document.createElement('p');
                productPrice.classList.add('price');
                productPrice.textContent = `$${product.price}`;

                // Create add to cart button
                const addToCartButton = document.createElement('button');
                addToCartButton.textContent = 'Add to Cart';
                addToCartButton.addEventListener('click', () => addToCart(product.id));

                // Append elements to product card
                productCard.appendChild(productImage);
                productCard.appendChild(productName);
                productCard.appendChild(productDescription);
                productCard.appendChild(productPrice);
                productCard.appendChild(addToCartButton);

                // Append product card to grid
                productGrid.appendChild(productCard);
            });
        })
        .catch(error => console.error('Error fetching the product data:', error));
});

document.addEventListener('DOMContentLoaded', () => {
    const checkoutButton = document.getElementById('checkout-button');
    const checkoutForm = document.getElementById('checkout-form');
    const form = document.getElementById('checkout-form');
    const confirmationMessage = document.getElementById('confirmation-message');

    checkoutButton.addEventListener('click', () => {
        checkoutForm.classList.remove('hidden');
    });

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        // Get form data
        const name = document.getElementById('name').value;
        const address = document.getElementById('address').value;
        const payment = document.getElementById('payment').value;

        // Get cart items and total
        const cartItems = document.querySelectorAll('.shopping-cart .cart-item');
        if (cartItems.length === 0) {
            confirmationMessage.innerHTML = '<p>Your cart is empty. Please add items to the cart before checking out.</p>';
            return;
        }

        let orderDetails = '';
        cartItems.forEach(item => {
            const itemName = item.querySelector('.name').textContent;
            const itemPrice = item.querySelector('.price').textContent;
            const itemQuantity = item.querySelector('.quantity').textContent;
            orderDetails += `${itemName} - ${itemPrice} x ${itemQuantity}\n`;
        });

        const total = document.getElementById('cart-total').textContent;

        confirmationMessage.innerHTML = `
            <h3>Order Confirmation</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Address:</strong> ${address}</p>
            <p><strong>Payment Details:</strong> ${payment}</p>
            <p><strong>Order Details:</strong><br>${orderDetails}</p>
            <p><strong>Total:</strong> ${total}</p>
        `;

        form.reset();
        checkoutForm.classList.add('hidden');
    });
});