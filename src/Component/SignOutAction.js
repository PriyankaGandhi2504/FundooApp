import SIGN_OUT from './TypesFile'
import Counter from './TypesFile'
import color from './TypesFile'

export function signOut(){
    return{
        type : SIGN_OUT,
        type : Counter
    }
}

export const setColor = (color) => {
    return{
        type : color
    }
}