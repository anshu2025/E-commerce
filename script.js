 
    document.getElementById('profileText').addEventListener('click', function() {
        const popupBox = document.getElementById('popupBox');
        popupBox.style.display = 'block'; // Display the popup box
        
        // Check if profile picture exists
        const profilePic = document.getElementById('profilePic');
        const removeButton = document.getElementById('removeProfile');
        if (profilePic.style.backgroundImage) {
            removeButton.style.display = 'block'; // Show the "Remove Profile" button
        } else {
            removeButton.style.display = 'none'; // Hide the "Remove Profile" button
        }
    });
    
    function closePopup() {
        const popupBox = document.getElementById('popupBox');
        popupBox.style.display = 'none'; // Hide the popup box
    }
    // When the page loads, check if a profile picture is saved in localStorage
    window.onload = function() {
        const savedImage = localStorage.getItem('profileImage');
        const profilePic = document.getElementById('profilePic');
        if (savedImage) {
            profilePic.style.backgroundImage = `url(${savedImage})`;
            profilePic.style.backgroundSize = 'cover';
        }
    };
    
    function previewImage(event) {
        const file = event.target.files[0];
        const profilePic = document.getElementById('profilePic');
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                const imageData = e.target.result;
                profilePic.style.backgroundImage = `url(${imageData})`;
                profilePic.style.backgroundSize = 'cover';
    
                // Save the image daimage/ta to localStorage
                localStorage.setItem('profileImage', imageData);
            };
            reader.readAsDataURL(file);
        }
        closePopup();
    }
    
    function removeProfilePicture() {
        const profilePic = document.getElementById('profilePic');
        profilePic.style.backgroundImage = ''; // Clear the background image
        document.getElementById('upload').value = ''; // Clear file input
    
        // Remove the image daimage/ta from localStorage
        localStorage.removeItem('profileImage');
        closePopup();
    }

 // Detailed item data for each product category
 const productData = [
    { category: "Men's Collection", items: [
    { id: 1, name: "Leather Jacket", price: 99.99, age: "18-30", image: "image/jacket.jpg",link:"menclthes.html"},
    { id: 2, name: "Graphic T-Shirt", price: 19.99, age: "15-25", image: "image/graphic.jpg",link:"menclthes.html" },
    { id: 3, name: "Slim Fit Jeans", price: 49.99, age: "20-40", image: "image/jeans.webp",link:"menclthes.html" },
    { id: 4, name: "Dress Shoes", price: 79.99, age: "25-50", image: "image/shoe.webp",link:"menclthes.html" },
    { id: 5, name: "Hoodie", price: 29.99, age: "15-30", image: "image/hoddie.webp",link:"menclthes.html" }
]},
    { category: "Women's Collection", items: [
    { id: 1, name: "Summer Dress", price: 49.99, age: "18-35", image: "image/summer.jpg", link:"wo.html"},
    { id: 2, name: "Skinny Jeans", price: 39.99, age: "15-30", image: "image/skinny.webp", link:"wo.html" },
    { id: 3, name: "Leather Jacket", price: 99.99, age: "20-40", image: "image/jacketw.webp", link:"wo.html" },
    { id: 4, name: "Evening Gown", price: 149.99, age: "25-50", image: "image/grown.webp", link:"wo.html" },
    { id: 5, name: "Casual Top", price: 19.99, age: "15-25", image: "image/top.webp", link:"wo.html" },
    { id: 6, name: "High Heels", price: 69.99, age: "20-40", image: "image/high-heels.jpg", link:"wo.html" },
    { id: 7, name: "Boho Chic Dress", price: 79.99, age: "25-45", image: "image/chic-dress.jpg", link:"wo.html" },
    { id: 8, name: "Yoga Pants", price: 29.99, age: "15-35", image: "image/yogaw.webp", link:"wo.html" }
]},
    { category: "Health & Care", items: [
    { id: 1, name: "Facial Cream", price: 19.99, description: "Moisturizing cream for dry skin", image: "image/facial.jpg",link:"who.html" },
    { id: 2, name: "Shampoo", price: 9.99, description: "Sulfate-free shampoo for all hair types", image: "image/shampoo.webp",link:"who.html" },
    { id: 3, name: "Vitamin C Serum", price: 29.99, description: "Anti-aging serum for brightening skin", image: "image/C-serum.jpg",link:"who.html" },
    { id: 4, name: "Body Lotion", price: 14.99, description: "Hydrating lotion for dry skin", image: "image/body-lotion.jpg",link:"who.html" },
    { id: 5, name: "Eye Cream", price: 24.99, description: "Anti-aging eye cream for reducing fine lines", image: "image/eye-cream.webp",link:"who.html" },
    { id: 6, name: "Face Mask", price: 12.99, description: "Detoxifying face mask for all skin types", image: "image/face-mask.jpg",link:"who.html" },
    { id: 7, name: "Hair Conditioner", price: 11.99, description: "Moisturizing conditioner for dry hair", image: "image/hair-condi.jpg",link:"who.html" },
    { id: 8, name: "Lip Balm", price: 6.99, description: "Hydrating lip balm for dry lips", image: "image/lip-balm.jpg",link:"who.html" }
]},
    { category: "Electronics", items: [
    { id: 1, name: "Smartphone", price: 599.99, description: "Latest model with advanced features", image: "image/phon.avif",link:"technical.html" },
    { id: 2, name: "Laptop", price: 999.99, description: "High-performance laptop for gaming and work", image: "image/laptop.png",link:"technical.html"},
    { id: 3, name: "Tablet", price: 399.99, description: "Portable tablet for entertainment and productivity", image: "image/tab.jpg",link:"technical.html"},
    { id: 4, name: "Smartwatch", price: 199.99, description: "Fitness tracking and notification features", image: "image/watch.jpg",link:"technical.html"},
    { id: 5, name: "Headphones", price: 99.99, description: "Wireless headphones with long battery life", image: "image/headphone.jpg",link:"technical.html"},
    { id: 6, name: "Gaming Console", price: 499.99, description: "Next-generation gaming console with advanced graphics", image: "image/game-c.jpg",link:"technical.html"},
    { id: 7, name: "Camera", price: 299.99, description: "High-quality camera for photography and videography", image: "image/camera.jpg",link:"technical.html"},
    { id: 8, name: "Speaker", price: 149.99, description: "Portable speaker with waterproof design", image: "image/speaker.jpg",link:"technical.html"}
    ]}
];

// Search function
function searchProducts() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const results = [];

    productData.forEach(category => {
        category.items.forEach(item => {
            if (item.name.toLowerCase().includes(searchInput)) {results.push(item);}
         }); });
       displaySearchResults(results);}

// Display search results
function displaySearchResults(results) {
    const mainContent = document.getElementById('mainContent');
    const resultContainer = document.getElementById('resultContainer');
    mainContent.style.display = "none"; // Hide other parts
    resultContainer.style.display = "flex"; // Show search results
    resultContainer.innerHTML = ""; // Clear previous results

    if (results.length > 0 && searchInput.value != "") {
        results.forEach(result => {
            const resultItem = document.createElement('div');
            resultItem.classList.add('result-item');
            resultItem.innerHTML = `
                <img src="${result.image}" image/alt="${result.name}">
                <div>
                    <h4>Name: ${result.name}</h4>
                    <p>Price: ${result.price}</p>
                    <p>Age: ${result.age}</p>
                    <button class="source"><a href="${result.link}">  Get the original Source</a></button>
                </div>
            `;
            resultContainer.appendChild(resultItem);

        });
    } else {
        resultContainer.innerHTML = "<p>No matching products found.</p>";
    }
}

// Add event listener to the search button
document.getElementById('searchButton').addEventListener('click', searchProducts);