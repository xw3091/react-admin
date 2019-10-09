let defaultData= {
    // userId: '',
    // roleId: '',
    // token: '',
    // userInfo: []
}

export const todos = (state = defaultData, action) => {
    switch (action.type) {
        case 'SAVE_DATA':
            return {
                ...state, ...{ [action.name]: action.value }
            }
        default:
            return state
    }
}