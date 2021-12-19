function initialState(){
    return {
        project: []
    }
}

export default {
    namespaced: true,
    state: initialState(),
    mutations: {
        setProject(state, data){
            state.project = data
        }
    },
    actions: {

    }
}