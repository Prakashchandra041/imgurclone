import { ADD_COUNT, SUB_COUNT } from "./ActionType"

const init = {
    count:0
}

export const reducer = (state=init,{type,payload}) => {
    console.log(state.count);
    switch (type) {
        case ADD_COUNT: 
            return {
                ...state,
                count: state.count + payload
            }
            
        case SUB_COUNT:    
            return {
                ...state,
                count:state.count-payload
            }

        default:  return state;

    }
}