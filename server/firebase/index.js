import serviceAccount from "../config/fbServiceAccountKey.json" assert { type: "json" };

import admin from "firebase-admin";

//console.log(serviceAccount);

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
// });

export { admin, serviceAccount };
