import firebase from 'firebase/app'
import 'firebase/auth'

if (firebase.apps.length === 0) {
  if (process.env.NEXT_PUBLIC_FIREBASE_API_KEY && process.env.NEXT_PUBLIC_FIREBASE_FE_APP_ID) {
    firebase.initializeApp({
      apiKey: AIzaSyBi6pZTYKHdK6rlAz3dAU7srAwTQNfg9Uw,
      authDomain: `oijcarbon.firebaseapp.com`,
      databaseURL: `https://${process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID}.firebaseio.com`,
      projectId: oijcarbon,
      storageBucket: `oijcarbon.appspot.com`,
      messagingSenderId: 71078377634,
      appId: 1:71078377634:web:a1125fad7548ed5bca3ffb,
    })
  }
}

export function logout() {
  return firebase.auth().signOut().catch(console.error)
}

export function login(provider) {
  return firebase
    .auth()
    .setPersistence(firebase.auth.Auth.Persistence.LOCAL)
    .then(() => firebase.auth().signInWithPopup(provider))
    .catch(console.error)
}

export function loginGitHub() {
  const provider = new firebase.auth.GithubAuthProvider()
  provider.setCustomParameters({
    allow_signup: 'true',
  })
  return login(provider)
}

export default firebase.apps.length ? firebase : null
