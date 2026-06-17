const productCards = Array.from(document.querySelectorAll(".product-card"));
const cartCount = document.querySelector(".cart-count");
const searchInput = document.querySelector(".nav-input");
const searchBtn = document.querySelector(".nav-search-submit");
const suggestionsBox = document.querySelector(".search-suggestions");
const heroImg = document.querySelector(".hero img");
const navCart = document.querySelector(".nav-cart");
const menuBtn = document.querySelector(".menu-icon");
const navSub = document.querySelector(".nav-fill-sub");
const backToTopLink = document.querySelector(".back-to-top a");
const signinBtn = document.querySelector(".nav-signin");
const signinModal = document.querySelector(".signin-modal");
const signinClose = document.querySelector(".signin-close");
const signinForm = document.querySelector(".signin-form");
const signinEmail = document.querySelector(".signin-email");
const signinPassword = document.querySelector(".signin-password");
const signinError = document.querySelector(".signin-error");
const signinGreeting = document.querySelector(".signin-greeting");
const categoryModal = document.querySelector(".category-modal");
const categoryClose = document.querySelector(".category-close");
const categoryTitle = document.querySelector("#category-title");
const categoryProductsContainer = document.querySelector(".category-products");

const products = productCards.map((product) => {
    const name = product.querySelector("p")?.textContent.trim() || "Product";
    const priceText = product.querySelector("span")?.textContent || "0";
    const image = product.querySelector("img")?.src || "";
    const price = Number(priceText.replace(/[^\d]/g, "")) || 0;

    return { element: product, name, price, image };
});

const categoryProducts = {
    gaming: {
        title: "Gaming Accessories",
        items: [
            { name: "RGB Gaming Headset", price: 1499, image: "https://robots.net/wp-content/uploads/2024/01/how-to-hook-up-gaming-headset-to-pc-1704284590.jpg" },
            { name: "Mechanical Keyboard", price: 2199, image: "https://tse4.mm.bing.net/th/id/OIP.ZbghmQIaMjOLIGsrEQS0PQHaEK?pid=Api&P=0&h=180" },
            { name: "Wireless Gaming Mouse", price: 799, image: "https://tse4.mm.bing.net/th/id/OIP.8K5a4jjKg9rVzKLo6qKr_wHaEK?pid=Api&P=0&h=180" },
            { name: "Ergonomic Gaming Chair", price: 8499, image: "https://m.media-amazon.com/images/I/81uw3Ouk+pL._AC_.jpg" }
        ]
    },
    home: {
        title: "Home Essentials",
        items: [
            { name: "Storage Organizer Set", price: 999, image: "https://tse4.mm.bing.net/th/id/OIP.HQtwhM_9TG6GFaNrlhgfeQHaHa?pid=Api&P=0&h=180" },
            { name: "Microfiber Cleaning Kit", price: 349, image: "https://i5.walmartimages.com/asr/e056fb0c-8e8a-402c-bf13-dacc9db2a37e.a5af0e4ef32b8bbeee981e116e5fc6d0.png?odnHeight=320&odnWidth=320&odnBg=FFFFFF" },
            { name: "Soft Cotton Towels", price: 999, image: "https://tse4.mm.bing.net/th/id/OIP.HLLigzZAuzgbfJhfc46L0AHaKB?pid=Api&P=0&h=180" },
            { name: "Kitchen Starter Pack", price: 10299, image: "https://static.vecteezy.com/system/resources/previews/033/634/249/large_2x/various-kitchen-utensils-are-sitting-on-a-table-ai-generated-free-photo.jpg" }
        ]
    },
    space: {
        title: "Refresh Your Space",
        items: [
            { name: "Dining Decor Set", price: 3799, image: "https://i.etsystatic.com/30286348/r/il/ea2ad0/5748999877/il_1140xN.5748999877_44s3.jpg" },
            { name: "Home Decor Lamp", price: 2299, image: "https://www.dekorcompany.com/cdn/shop/articles/Victorian_Charm_Decorative_Ceramic_Table_Lamp_1200x1200.jpg?v=1690866274" },
            { name: "Kitchen Utensil Set", price: 1899, image: "https://tse4.mm.bing.net/th/id/OIP.UTmCzbFdBnYKZglyPOnsVQHaGE?pid=Api&P=0&h=180" },
            { name: "Kitchen Wall Art", price: 1199, image: "https://tse1.mm.bing.net/th/id/OIP.KL5BATwsZKs92M8MeCan8wHaHa?pid=Api&P=0&h=180" }
        ]
    },
    electronics: {
        title: "Electronics For You",
        items: [
            { name: "Bluetooth Speaker", price: 1999, image: "https://m.media-amazon.com/images/I/81b1vgAABmL.jpg" },
            { name: "Smart Watch", price: 1999, image: "https://www.exhibit.tech/wp-content/uploads/2022/08/smart-watches-2021-lead-1634826413-scaled.jpg" },
            { name: "Wireless Headphones", price: 2499, image: "https://i5.walmartimages.com/seo/Rwvbm-Wireless-Bluetooth-Over-Ear-Headphones-Mic-Foldable-Wired-Wireless-Modes-Bluetooth-5-0-40mm-Drivers-12-Hour-Protein-Earmuffs-Headb-Phone-PC-Tab_28583d56-49e9-401b-aa68-f7768b7a6c69.31fdb58e6f2ad880bed29b2f175c7441.jpeg" },
            { name: "Gadget Combo Pack", price: 3499, image: "https://img.freepik.com/premium-photo/assemblage-contemporary-gadgets-electronic-devices-showcased-3d-illustration-against_1045886-2213.jpg" }
        ]
    },
    posters: {
        title: "Wall Posters",
        items: [
            { name: "Anime Wall Poster", price: 299, image: "https://onepiece.store/wp-content/uploads/2022/09/One-Piece-Film-Red-Poster-Prints-2022-Japanese-Anime-Fantasy-Action-Adventure-Movies-Wall-Art-Canvas-3.jpg" },
            { name: "Anime Wall Poster", price: 399, image: "https://m.media-amazon.com/images/I/81ccISDtiHL._AC_SL1500_.jpg" },
            { name: "Anime Wall Poster", price: 799, image: "https://chitrkalaa.com/cdn/shop/files/190.png?v=1743797111&width=1066" }
        ]
    },
    fashion: {
        title: "Fashion Trends",
        items: [
            { name: "Casual Shirt", price: 899, image: "https://tse2.mm.bing.net/th/id/OIP.h2YP9Bs9lgMIl6v3XZjpOwHaKs?pid=Api&P=0&h=180" },
            { name: "Running Shoes", price: 2499, image: "https://tse2.mm.bing.net/th/id/OIP.J5V8S_dU-3A1G1F2us2GiwHaE8?pid=Api&P=0&h=180" },
            { name: "Streetwear Jacket", price: 1899, image: "https://tse2.mm.bing.net/th/id/OIP.tVXiD5Xha_UtNvkpuZLFygHaHa?pid=Api&P=0&h=180" },
            { name: "Everyday Backpack", price: 1199, image: "https://tse2.mm.bing.net/th/id/OIP.RAHges_XKvgTHnbSCTUdtwHaE8?pid=Api&P=0&h=180" }
        ]
    },
    laptops: {
        title: "Laptops & Tablets",
        items: [
            { name: "Laptop Stand", price: 899, image: "https://tse4.mm.bing.net/th/id/OIP.nJPVwvHLvdcOLRjmVZteSwHaHc?pid=Api&P=0&h=180" },
            { name: "Tablet Sleeve", price: 599, image: "https://s.yimg.com/uu/api/res/1.2/Z7jFGzCKLpv3m2N5uRi12Q--~B/aD0xMzAwO3c9MjAwMDthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/os/creatr-uploaded-images/2021-11/a179f550-3b11-11ec-86df-fa28310e5588.cf.jpg" },
            { name: "Wireless Keyboard", price: 899, image: "https://m.media-amazon.com/images/I/71b14hXFntL._AC_SL1500_.jpg" },
            { name: "Portable Laptop Desk", price: 1499, image: "https://s.yimg.com/uu/api/res/1.2/Z7jFGzCKLpv3m2N5uRi12Q--~B/aD0xMzAwO3c9MjAwMDthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/os/creatr-uploaded-images/2021-11/a179f550-3b11-11ec-86df-fa28310e5588.cf.jpg" }
        ]
    },
    art: {
        title: "Art Supplies",
        items: [
            { name: "Sketching Pencil Set", price: 499, image: "https://m.media-amazon.com/images/I/8192Ar3t7xL.jpg" },
            { name: "Watercolor Kit", price: 799, image: "https://m.media-amazon.com/images/I/8192Ar3t7xL.jpg" },
            { name: "Canvas Board Pack", price: 699, image: "https://m.media-amazon.com/images/I/8192Ar3t7xL.jpg" },
            { name: "Acrylic Paint Set", price: 999, image: "https://m.media-amazon.com/images/I/8192Ar3t7xL.jpg" }
        ]
    }
};

let cart = loadCart();
let signedInEmail = localStorage.getItem("amazonCloneUserEmail") || "";

const cartSidebar = document.createElement("aside");
cartSidebar.className = "cart-sidebar";
cartSidebar.setAttribute("aria-label", "Shopping cart");
cartSidebar.innerHTML = `
    <div class="cart-header">
        <h2>Your Cart</h2>
        <button class="close-cart" type="button" aria-label="Close cart">X</button>
    </div>
    <div class="cart-items"></div>
    <div class="cart-footer">
        <h3>Total: ₹<span class="cart-total">0</span></h3>
    </div>
`;
document.body.appendChild(cartSidebar);

const closeCartBtn = cartSidebar.querySelector(".close-cart");
const cartItemsContainer = cartSidebar.querySelector(".cart-items");
const cartTotal = cartSidebar.querySelector(".cart-total");

initializeProductButtons();
updateCart();
updateSigninGreeting();

function initializeProductButtons() {
    products.forEach((product) => {
        if (product.element.querySelector(".cart-btn")) return;

        const btn = document.createElement("button");
        btn.type = "button";
        btn.textContent = "Add to Cart";
        btn.className = "cart-btn";
        btn.addEventListener("click", () => addToCart(product));
        product.element.appendChild(btn);
    });
}

function loadCart() {
    try {
        return JSON.parse(localStorage.getItem("amazonCloneCart")) || [];
    } catch {
        return [];
    }
}

function saveCart() {
    localStorage.setItem("amazonCloneCart", JSON.stringify(cart));
}

function addToCart(product) {
    const existingItem = cart.find((item) => item.name === product.name);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: 1
        });
    }

    updateCart();
    openCart();
}

function updateCart() {
    cartItemsContainer.innerHTML = "";

    let total = 0;
    let count = 0;

    if (cart.length === 0) {
        const emptyMessage = document.createElement("p");
        emptyMessage.className = "empty-cart";
        emptyMessage.textContent = "Your cart is empty. Add a product from Top Deals or a category.";
        cartItemsContainer.appendChild(emptyMessage);
    }

    cart.forEach((item) => {
        total += item.price * item.quantity;
        count += item.quantity;

        const div = document.createElement("div");
        div.className = "cart-item";

        const image = document.createElement("img");
        image.src = item.image;
        image.alt = item.name;

        const info = document.createElement("div");
        info.className = "cart-item-info";

        const title = document.createElement("h4");
        title.textContent = item.name;

        const price = document.createElement("p");
        price.textContent = `₹${formatPrice(item.price)}`;

        const controls = document.createElement("div");
        controls.className = "quantity-controls";

        const minusBtn = document.createElement("button");
        minusBtn.type = "button";
        minusBtn.textContent = "-";
        minusBtn.setAttribute("aria-label", `Remove one ${item.name}`);
        minusBtn.addEventListener("click", () => changeQuantity(item.name, -1));

        const quantity = document.createElement("span");
        quantity.textContent = item.quantity;

        const plusBtn = document.createElement("button");
        plusBtn.type = "button";
        plusBtn.textContent = "+";
        plusBtn.setAttribute("aria-label", `Add one ${item.name}`);
        plusBtn.addEventListener("click", () => changeQuantity(item.name, 1));

        controls.append(minusBtn, quantity, plusBtn);
        info.append(title, price, controls);
        div.append(image, info);
        cartItemsContainer.appendChild(div);
    });

    cartTotal.textContent = formatPrice(total);
    cartCount.textContent = count;
    saveCart();
}

function changeQuantity(name, amount) {
    const item = cart.find((cartItem) => cartItem.name === name);
    if (!item) return;

    item.quantity += amount;

    if (item.quantity <= 0) {
        cart = cart.filter((cartItem) => cartItem.name !== name);
    }

    updateCart();
}

function formatPrice(value) {
    return new Intl.NumberFormat("en-IN").format(value);
}

function openCart() {
    cartSidebar.classList.add("show-cart");
}

function closeCart() {
    cartSidebar.classList.remove("show-cart");
}

navCart.addEventListener("click", (event) => {
    event.preventDefault();
    openCart();
});

closeCartBtn.addEventListener("click", closeCart);

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        closeCart();
        closeCategory();
        closeSignin();
        hideSuggestions();
        navSub.classList.remove("mobile-menu");
    }
});

searchBtn.addEventListener("click", performSearch);
searchInput.addEventListener("input", showSuggestions);
searchInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") performSearch();
    if (event.key === "Escape") hideSuggestions();
});

document.addEventListener("click", (event) => {
    if (!event.target.closest(".nav-fill")) {
        hideSuggestions();
    }
});

function performSearch() {
    const value = searchInput.value.trim().toLowerCase();

    if (!value) {
        searchInput.focus();
        return;
    }

    const foundProduct = products.find((product) =>
        product.name.toLowerCase().includes(value)
    );

    if (!foundProduct) {
        alert("No product found");
        return;
    }

    hideSuggestions();
    highlightProduct(foundProduct.element);
}

function showSuggestions() {
    const value = searchInput.value.trim().toLowerCase();
    suggestionsBox.innerHTML = "";

    if (!value) {
        hideSuggestions();
        return;
    }

    const matches = products
        .filter((product) => product.name.toLowerCase().includes(value))
        .slice(0, 5);

    if (matches.length === 0) {
        hideSuggestions();
        return;
    }

    matches.forEach((product) => {
        const item = document.createElement("div");
        item.className = "suggestion-item";
        item.textContent = product.name;
        item.addEventListener("click", () => {
            searchInput.value = product.name;
            hideSuggestions();
            highlightProduct(product.element);
        });
        suggestionsBox.appendChild(item);
    });

    suggestionsBox.style.display = "block";
}

function hideSuggestions() {
    suggestionsBox.style.display = "none";
}

function highlightProduct(product) {
    product.scrollIntoView({ behavior: "smooth", block: "center" });
    product.style.transform = "scale(1.05)";
    product.style.boxShadow = "0 0 20px rgba(255, 153, 0, 0.85)";

    window.setTimeout(() => {
        product.style.transform = "";
        product.style.boxShadow = "";
    }, 1800);
}

const heroImages = [
    "https://m.media-amazon.com/images/I/717RUPA1bDL._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/61zAjw4bqPL._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/71qid7QFWJL._SX3000_.jpg"
];

let heroIndex = 0;

window.setInterval(() => {
    heroIndex = (heroIndex + 1) % heroImages.length;
    heroImg.src = heroImages[heroIndex];
}, 5000);

backToTopLink.addEventListener("click", (event) => {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
});

menuBtn.addEventListener("click", (event) => {
    event.preventDefault();
    navSub.classList.toggle("mobile-menu");
});

document.querySelectorAll(".shop-card .shop-link").forEach((link) => {
    link.addEventListener("click", (event) => {
        const card = event.currentTarget.closest(".shop-card");
        const categoryKey = card?.dataset.category;

        if (!categoryKey || !categoryProducts[categoryKey]) return;

        event.preventDefault();
        openCategory(categoryKey);
    });
});

categoryClose.addEventListener("click", closeCategory);
categoryModal.addEventListener("click", (event) => {
    if (event.target === categoryModal) {
        closeCategory();
    }
});

signinBtn.addEventListener("click", (event) => {
    event.preventDefault();
    openSignin();
});

signinClose.addEventListener("click", closeSignin);
signinModal.addEventListener("click", (event) => {
    if (event.target === signinModal) {
        closeSignin();
    }
});

signinForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const email = signinEmail.value.trim();
    const password = signinPassword.value.trim();

    signinError.textContent = "";

    if (!email || !email.includes("@")) {
        signinError.textContent = "Please enter a valid email address.";
        signinEmail.focus();
        return;
    }

    if (password.length < 6) {
        signinError.textContent = "Password must be at least 6 characters.";
        signinPassword.focus();
        return;
    }

    signedInEmail = email;
    localStorage.setItem("amazonCloneUserEmail", signedInEmail);
    updateSigninGreeting();
    closeSignin();
    signinForm.reset();
});

function openSignin() {
    signinModal.classList.add("show-signin");
    signinModal.setAttribute("aria-hidden", "false");
    signinError.textContent = "";
    window.setTimeout(() => signinEmail.focus(), 50);
}

function closeSignin() {
    signinModal.classList.remove("show-signin");
    signinModal.setAttribute("aria-hidden", "true");
}

function updateSigninGreeting() {
    if (!signedInEmail) {
        signinGreeting.textContent = "Hello, sign in";
        return;
    }

    const username = signedInEmail.split("@")[0];
    signinGreeting.textContent = `Hello, ${username}`;
}

function openCategory(categoryKey) {
    const category = categoryProducts[categoryKey];
    categoryTitle.textContent = category.title;
    categoryProductsContainer.innerHTML = "";

    category.items.forEach((product) => {
        const productCard = document.createElement("div");
        productCard.className = "category-product";

        const image = document.createElement("img");
        image.src = product.image;
        image.alt = product.name;

        const title = document.createElement("h3");
        title.textContent = product.name;

        const price = document.createElement("p");
        price.textContent = `₹${formatPrice(product.price)}`;

        const button = document.createElement("button");
        button.type = "button";
        button.className = "cart-btn";
        button.textContent = "Add to Cart";
        button.addEventListener("click", () => addToCart(product));

        productCard.append(image, title, price, button);
        categoryProductsContainer.appendChild(productCard);
    });

    categoryModal.classList.add("show-category");
    categoryModal.setAttribute("aria-hidden", "false");
}

function closeCategory() {
    categoryModal.classList.remove("show-category");
    categoryModal.setAttribute("aria-hidden", "true");
}
