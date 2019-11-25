const admin = require('firebase-admin');
const functions = require('firebase-functions');

admin.initializeApp(functions.config().firebase);

let db = admin.firestore();

function quickstartAddData(db) {
  // [START add_lovelace]
  let docRef = db.collection('users').doc('alovelace');

  let setAda = docRef.set({
    first: 'Ada',
    last: 'Lovelace',
    born: 1815
  });
  // [END add_lovelace]

  // [START add_turing]
  let aTuringRef = db.collection('users').doc('aturing');

  let setAlan = aTuringRef.set({
    first: 'Alan',
    middle: 'Mathison',
    last: 'Turing',
    born: 1912
  });
  // [END add_turing]

  return Promise.all([setAda, setAlan]);
}

module.exports = db
