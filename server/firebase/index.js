import serviceAccount from "../config/fbServiceAccountKey.json" assert { type: "json" };

var admin = require("firebase-admin");

// console.log(serviceAccount);

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
// });

export default admin;
