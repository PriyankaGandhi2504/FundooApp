import React from 'react'
import SIGN_OUT from './TypesFile'
import Counter from './TypesFile'

const initialState = {
    signIn : true,
    counter : 1
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
        default : return state
    }
}