import React from 'react'
import SIGN_OUT from './TypesFile'

const initialState = {
    signIn : true
}

export const reducer = (state = initialState, action) => {
    switch(action.type){
        case SIGN_OUT :
            return {
                ...state,

                signIn : false
            }
        default : return state
    }
}