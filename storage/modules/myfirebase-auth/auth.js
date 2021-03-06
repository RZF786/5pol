import { firebase } from './../../../src/firebase/firebase'

// setup auth
const auth = firebase.auth();

// catch error
const error = '';

export default {
    namespaced: true,
    state: {
        auth: auth,
        error: error
    },
    mutations: {
        logout(state) {
            state.auth.signOut();
        },
        login(state, user) {
            const promis = state.auth.signInWithEmailAndPassword(user.email, user.password)
            promis.then((userResult) => {
                user.result(userResult)
            }).catch(error => {
                state.error = error.message
                user.error(error)
            })
        },
        signInGoogle(state, callBack) {
            let provider = state.googleAuthProvider;
            state.auth.signInWithPopup(provider).then((result) => {
                callBack.result(result)
            }).catch((error) => {
                callBack.error(error)
            });
        },
        register(state, user) {
            const promis = state.auth.createUserWithEmailAndPassword(user.email, user.password)
            promis.then((userResult) => {
                console.log("from Vuex : Done : " + user.email)
                user.result(userResult)
            }).catch(error => {
                state.error = error.message
                user.error(error)
            })
        },
        updateProfilePicture(state, image) {
            state.auth.currentUser.updateProfile({
                photoURL: image.ref
            }).then(() => {
                image.result()
            }).catch(error => {
                image.error(error)
            })
        },
        stateChanged(state, callBack) {
            state.auth.onAuthStateChanged((user) => {
                if (user) {
                    callBack.then(user)
                } else {
                    callBack.catch()
                }
            })
        }
    },
    getters: {},
    actions: {}
}