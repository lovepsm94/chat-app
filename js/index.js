window.onload = () => {
  var firebaseConfig = {
    apiKey: "AIzaSyBHUzar_YwsC48F86_aTXnXH0RyMAYVkQ0",
    authDomain: "chat-app-fa213.firebaseapp.com",
    databaseURL: "https://chat-app-fa213.firebaseio.com",
    projectId: "chat-app-fa213",
    storageBucket: "chat-app-fa213.appspot.com",
    messagingSenderId: "799058199108",
    appId: "1:799058199108:web:cf000e68745a28ed377211",
    measurementId: "G-MLRN8EGRCD"
  };
  firebase.initializeApp(firebaseConfig);
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      model.currentUser = {
        displayName: user.displayName,
        email: user.email
      }
      if (user.emailVerified) {
        view.setActiveScreen('chatPage')
      } else {
        alert('Please verify your email')
        view.setActiveScreen('loginPage')
      }
    } else {
      view.setActiveScreen('registerPage')
    }
  })
}
const getOneDocument = (response) => {
  const data = response.data()
  data.id = response.id
  return data
}
const getManyDocument = (response) => {
  const listData = []
  for (const doc of response.docs) {
    listData.push(getOneDocument(doc))
  }
  return listData
}
function validateEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
// const templateFirestore = async () => {
//   //get one
//   const docId = '6PEqUFnjLpWDPC0fowjc'
//   const response = await firebase.firestore().collection('users').doc(docId).get()
//   const user = response.data()
//   user.id = response.id
//   //get many
//   const responseMany = await firebase.firestore().collection('users').where('age', '==', 12).get()
//   const users = getManyDocument(responseMany)
//   // console.log(users)
//   const dataTocreate = {
//     age: 100,
//     name: 'abc'
//   }
//   // firebase.firestore().collection('users').add(dataTocreate)
//   const idToUpdate = 'NhUbJZZdj1XrVy7ophXA'
//   const dataToUpdate = {
//     name: 'Updated',
//     phone: firebase.firestore.FieldValue.arrayUnion('0986') //them phan tu vao mang
//   }
//   // firebase.firestore().collection('users').doc(idToUpdate).update(dataToUpdate)
//   const idTODelete = 'zJE0gN1BDTjCYNjzkio6'
//   // firebase.firestore().collection('users').doc(idTODelete).delete()
// }
// const getOneDocument = (response) => {
//   const data = response.data()
//   data.id = response.id
//   return data
// }
// const getManyDocument = (response) => {
//   const listData = []
//   for (const doc of response.docs) {
//     listData.push(getOneDocument(doc))
//   }
//   return listData
// }