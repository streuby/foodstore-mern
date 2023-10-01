//import serviceAccount from "../config/serviceAccountKey.json" assert { type: "json" };

import admin from "firebase-admin";

const serviceAccount = JSON.parse(process.env.FIREBASE_CREDENTIALS);

//console.log(serviceAccount);

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
// });

export { admin, serviceAccount };
