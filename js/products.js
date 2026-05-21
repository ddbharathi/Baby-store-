import app from './firebase.js';

import {
  getDatabase,
  ref,
  set
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

const db = getDatabase(app);

set(ref(db, 'products/test'), {
  name: "Baby Dress",
  price: 499
})
.then(() => {
  alert("Firebase Working");
})
.catch((error) => {
  alert(error);
});

