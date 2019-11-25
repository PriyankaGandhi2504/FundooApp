import firebase from './src/Firebase'
// var user = ''
class UserServices{

    userDetails(){
        user = firebase.firebase.auth().currentUser
        // console.log("User Data In User Services " + JSON.stringify(user));
        userID = firebase.firebase.auth().currentUser.uid
        // console.log("User ID " + userID);
        return userID
        // console.log("User Details in User Services");
    }

     userData(){
        var userObj = []
        var userId = this.userDetails()
        // console.log("User Id in firebase " + userId);
        
        
        // if(userId === )
         firebase.database.database().ref('Notes').on('child_added',function (snapshot)  {
            // console.log("Order By Child " + snapshot.key + "Value " + JSON.stringify(snapshot.val().notes));
            // array = snapshot.val()
             var userObject = snapshot.val()
            // console.log("Array order by child " + JSON.stringify(array));
            console.log("User's Object : " + JSON.stringify(userObject));
            if(userId === userObject.fetchedUserId){
                userObj.push(userObject)
            }
            
            // console.log("User Object Fetched Uid " + userObject.fetchedUserId);
            
        })
        console.log("User's Object Outside Loop : " + JSON.stringify(userObj));



        return userObj


  

    }
}

export default UserServices

//    module.exports.userDetails = function (){
//         var user = firebase.firebase.auth().currentUser
//         var userId = user.uid
        
//         // console.log("User from User Details : " + JSON.stringify(user));
        
//         return userId
//     }
