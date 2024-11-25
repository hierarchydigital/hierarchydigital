// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDH80UMeSwoWtjsd1rGp-zI2hP3E8IP4hk",
    authDomain: "quote-a21d3.firebaseapp.com",
    projectId: "quote-a21d3",
    storageBucket: "quote-a21d3.appspot.com",
    messagingSenderId: "118114512498",
    appId: "1:118114512498:web:dc8763d6c29d3504575ceb"
  };
  
  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  
  // Simulate adding the product to the cart and sending to the database
  function addToCart(event) {
    const productBox = event.currentTarget;
    const productId = productBox.getAttribute("data-product-id");
    const productName = productBox.querySelector("h3").innerText;
    const productPrice = productBox.querySelector("p").innerText;
  
    // Start the animation
    const addToCartButton = productBox.querySelector(".add-to-cart");
    addToCartButton.classList.add("cart-animation");
  
    // Send product details to Firebase
    sendToDatabase(productId, productName, productPrice);
  
    // Hide the Add to Cart button after animation
    setTimeout(() => {
      addToCartButton.classList.add("hidden");
    }, 1000);
  }
  
  // Function to send product data to Firestore
  function sendToDatabase(productId, productName, productPrice) {
    // Add a new document to the "cart" collection
    db.collection("cart").add({
      productId: productId,
      productName: productName,
      productPrice: productPrice,
      addedAt: firebase.firestore.FieldValue.serverTimestamp() // Timestamp when the product is added
    })
    .then(() => {
      console.log("Product added to cart successfully!");
    })
    .catch((error) => {
      console.error("Error adding product to cart: ", error);
    });
  }
  