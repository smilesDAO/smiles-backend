/*
 * LOAD DEV ENVIRONMENT
 * for quick testing and tryout
 */
const credentialFileName = "smilesdao-firebase-adminsdk-hv0j9-03705412da.json";
const storageBucketName = "smilesdao.appspot.com";

// LOAD EXTERNAL PACKAGES
require('dotenv').config();
const axios = require("axios");

// FIREBASE CONNECTION
const admin = require('firebase-admin');
const serviceAccount = require(`./credentials/${credentialFileName}`);
const app = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: storageBucketName
}, `app_${new Date().toISOString()}`); // if you want to load multiple apps

// firebase db connection
const db = app.firestore();

// firebase storage connection
const StorageClient = require("./services/StorageClient.js");
const storage = app.storage();
const storagePROD = new StorageClient(storage).setBucket(storageBucketName);

// HELPERS
const RandomToken = require("./services/helpers/RandomToken.js");
const FirebaseTimestamp = require("./services/helpers/FirebaseTimestamp.js");
const ImageHelper = require("./services/helpers/UrlHelper.js");

console.log("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n");
console.log(fs.readFileSync('init-dev-env-message.txt', 'utf8'));
console.log("\n\n");
