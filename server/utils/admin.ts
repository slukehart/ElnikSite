import admin, { type ServiceAccount } from 'firebase-admin';

import serviceAccount from "../../elnik-72224-firebase-adminsdk-lvv3v-7c455af1db.json" assert {type: "json"};

// Define the type of googleDevServiceAccount explicitly
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount as ServiceAccount)
});

// Now, you shouldn't encounter the TypeScript error

export default admin;

//