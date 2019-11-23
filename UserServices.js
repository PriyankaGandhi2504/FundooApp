import firebase from './src/Firebase'
// var user = ''
class UserServices{
    constructor(){
         this.user = user
    }

    userDetails(){
        user = firebase.firebase.auth().currentUser
        // console.log("User Details in User Services");
    }

}

export default UserServices

//    module.exports.userDetails = function (){
//         var user = firebase.firebase.auth().currentUser
//         var userId = user.uid
        
//         // console.log("User from User Details : " + JSON.stringify(user));
        
//         return userId
//     }
