import { ADD_COUNT, SUB_COUNT } from "./ActionType"

export const addCount = (data) => {
    return {
        type: ADD_COUNT,
        payload:data,
    }
}

export const subCount = (data) => {
    return {
        type: SUB_COUNT,
        payload:data,
    }
}