
const clothingItems = [
    { id: 1, name: "Summer Dress", price: 49.99, age: "18-35", image: "image/summer.jpg" },
    { id: 2, name: "Skinny Jeans", price: 39.99, age: "15-30", image: "image/skinny.webp" },
    { id: 3, name: "Leather Jacket", price: 99.99, age: "20-40", image: "image/jacketw.webp" },
    { id: 4, name: "Evening Gown", price: 149.99, age: "25-50", image: "image/grown.webp" },
    { id: 5, name: "Casual Top", price: 19.99, age: "15-25", image: "image/top.webp" },
    { id: 6, name: "High Heels", price: 69.99, age: "20-40", image: "image/high-heels.jpg" },
    { id: 7, name: "Boho Chic Dress", price: 79.99, age: "25-45", image: "image/chic-dress.jpg" },
    { id: 8, name: "Yoga Pants", price: 29.99, age: "15-35", image: "image/yogaw.webp" }
];

function generateClothingItems() {
    const collectionElement = document.querySelector(".collection");
    clothingItems.forEach((item) => {
        const clothingItemElement = document.createElement("div");
        clothingItemElement.classList.add("clothing-item");
        clothingItemElement.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div class="details">
                <h2 class="name">${item.name}</h2>
                <p class="price">$${item.price}</p>
                <p class="age">Age: ${item.age}</p>
                <button class="add-to-cart" onclick="addToCart(${item.id})">Add to Cart</button>
                <button class="payment add-to-cart" > <a href="pay.html">  Buy Now </a></button>
            </div>
        `;
        collectionElement.appendChild(clothingItemElement);
    });
}

function addToCart(itemId) {
    const item = clothingItems.find((item) => item.id === itemId);
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(item);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${item.name} has been added to the cart!`);
}

generateClothingItems();