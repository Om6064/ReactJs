const initalCount = 0;

const ReduxCounter = (state = initalCount , action) => {
    switch (action.type) {
        case "INCREMENT": return state + 1;
        case "DECREMENT": return state - 1;
        case "RESET": return 0;
        default: state
    }
}

export default ReduxCounter