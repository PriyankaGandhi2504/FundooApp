import React from 'react'
import SIGN_OUT from './TypesFile'
import Counter from './TypesFile'
import color from './TypesFile'

const initialState = {
    signIn : true,
    counter : 1,
    color : 'white'
}

export const reducer = (state = initialState, action) => {
    switch(action.type){
        case SIGN_OUT :
            return {
                ...state,

                signIn : false
            }
        case Counter : 
            return {
                ...state,
                counter : state.counter + 1
            }
        case color : 
        return {
            ...state,
            color : state.color
        }
        default : return state
    }
}