import app from './firebase.js';

import {
  getFirestore,
  collection,
  addDoc
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const db = getFirestore(app);

async function addProduct() {
  await addDoc(collection(db, "products"), {
    name: "Baby Dress",
    price: 499,
    image: "image-url"
  });

  alert("Product Added");
}

addProduct();
