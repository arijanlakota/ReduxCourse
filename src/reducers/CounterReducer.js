const initalState = {
    value: 0
}

export default function CounterReducer(state = initalState,action){
    switch(action.type){
        case "increment":
            return  {...state,value:state.value + 1};
        case "decrement":
            return {...state,value:state.value - 1}
        case "incrementByAmount":
            return {...state,value:state.value + action.payload}
        default:
            return state;
    }
    
}