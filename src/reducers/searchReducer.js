const init = {
    loading: false, 
    result: [""] 
}

const searchReducer = (state=init, action) => {
    switch (action.type) {
        case 'LOAD_REPOS':
            return({
                ...state,
                result: action.payload
            })
        case 'SET_ERROR':
            return{ ...state, error: action.payload }
        default: 
            return state; 
    }
}

export default searchReducer; 
