import { firebase } from './../../../src/firebase/firebase'

// firebase storage
const investors = firebase.investors();

// Error
const error = ''

export default {
    namespaced: true,
    state: {
        investors: investors,
        error: error
    },
    mutations: {
        getData(state, file) {
            let task = state.storage.ref().child(file.ref).put(file.file)
            task.on('state_changed',
                function progress(snapshot) {
                    file.progress(snapshot)
                },
                function error(err) {
                    file.error(err)
                },
                function completed() {
                    file.completed(task.snapshot.downloadURL)
                });
        },
    },
    actions: {},
    getters: {}
}