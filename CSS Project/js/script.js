// When the DOM is fully loaded...
document.addEventListener("DOMContentLoaded", function () {
    // Dynamically load the header from header.html into the placeholder div
    fetch('header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header-container').innerHTML = data;
        })
        .catch(error => console.error('Error loading header:', error));
});

document.addEventListener("DOMContentLoaded", () => {
    // --------------------------------------------
    // Contact Form Success Message
    // --------------------------------------------
    const sendMessageButton = document.getElementById('send-message-button');
    if (sendMessageButton) {
        sendMessageButton.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent form from submitting
            const successMessage = document.getElementById('success-message');
            if (successMessage) {
                successMessage.style.display = 'block';
                // Hide message after 3 seconds
                setTimeout(() => {
                    successMessage.style.display = 'none';
                }, 3000);
            }
        });
    }

    // --------------------------------------------
    // Add to Cart Alert on Button Click
    // --------------------------------------------
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            alert('Product has been added to your cart!');
        });
    });

    // Update Price Based on Card Condition
    // Only runs on Charizard or Mewtwo product pages
    const conditionSelect = document.getElementById('condition-select');
    const priceDisplay = document.getElementById('card-price');
    const cardTitle = document.getElementById('card-title');

    if (conditionSelect && priceDisplay && cardTitle) {
        const title = cardTitle.textContent.trim();

        // Price mapping for different conditions per card
        const priceMap = {
            "Charizard Holo - Base Set": {
                "mint": 399.99,
                "near-mint": 349.99,
                "lightly-played": 279.99,
                "damaged": 199.99
            },
            "Mewtwo Holo - Base Set": {
                "mint": 29.99,
                "near-mint": 24.99,
                "lightly-played": 19.99,
                "damaged": 11.99
            }
        };

        // Update displayed price when a new condition is selected
        conditionSelect.addEventListener('change', () => {
            const selected = conditionSelect.value;
            const newPrice = priceMap[title][selected];
            priceDisplay.textContent = `Price: $${newPrice.toFixed(2)}`;
        });
    }

    // Booster Pack Dropdown Logic
    // Dynamically updates image/title/description
    const packSelect = document.getElementById('pack-select');
    const boosterImage = document.getElementById('booster-image');
    const boosterTitle = document.getElementById('booster-title');
    const boosterDescription = document.getElementById('booster-description');

    if (packSelect && boosterImage && boosterTitle && boosterDescription) {
        // Data for each booster pack option
        const boosterData = {
            base: {
                title: "Scarlet & Violet - Base Set",
                image: "img/products/SVboosterpack.png",
                description: "Kick off your Gen 9 collection with the original S&V Base Set, featuring starter Pokémon and early region highlights."
            },
            paldea: {
                title: "Scarlet & Violet - Paldea Evolved",
                image: "img/products/booster-paldea.png",
                description: "Explore Paldea's evolution with new EX cards and powerful regionals."
            },
            obsidian: {
                title: "Scarlet & Violet - Obsidian Flames",
                image: "img/products/booster-obsidian.png",
                description: "A fiery expansion introducing Terastallization and blazing rare cards."
            },
            paradox: {
                title: "Scarlet & Violet - Paradox Rift",
                image: "img/products/booster-paradox.png",
                description: "Travel through time with ancient and future Pokémon entering the TCG."
            },
            temporal: {
                title: "Scarlet & Violet - Temporal Forces",
                image: "img/products/booster-temporal.png",
                description: "Unleash time-shifting strategies and double-type Pokémon."
            },
            twilight: {
                title: "Scarlet & Violet - Twilight Masquerade",
                image: "img/products/booster-twilight.png",
                description: "Step into the mysterious woods where fantasy and ghost-types collide."
            },
            "151": {
                title: "Scarlet & Violet - 151",
                image: "img/products/booster-151.png",
                description: "A nostalgic return featuring the original 151 Pokémon in a modern format."
            },
            prismatic: {
                title: "Scarlet & Violet - Prismatic Evolutions",
                image: "img/products/booster-prismatic.png",
                description: "Shimmering holofoil treatments and revamped evolutions take center stage."
            },
            journey: {
                title: "Scarlet & Violet - Journey Together",
                image: "img/products/booster-journey.png",
                description: "The latest set featuring partner Pokémon from across generations joining forces."
            }
        };

        // When a pack is selected, update image/title/description
        packSelect.addEventListener('change', () => {
            const selected = packSelect.value;
            const pack = boosterData[selected];
            boosterImage.src = pack.image;
            boosterTitle.textContent = pack.title;
            boosterDescription.textContent = pack.description;
        });
    }
});
