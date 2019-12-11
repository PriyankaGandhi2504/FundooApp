import firebase from './src/Firebase'
// var user = ''
class UserServices{

    userDetails(){
        // user = firebase.firebase.auth().currentUser
        // console.log("User Data In User Services " + JSON.stringify(user));
        var userID = firebase.firebase.auth().currentUser.uid
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
            // var notekeys = Object.keys(userObject)
            //  console.log("Note Keys " + notekeys);
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


//     firebase.database.database().ref('Notes').on('value',function (snapshot)  {
//         // console.log("Order By Child " + snapshot.key + "Value " + JSON.stringify(snapshot.val().notes));
//         // array = snapshot.val()
//          var userObject = snapshot.val()
//          var keysss=Object.keys(userObject)
//          console.log('keyssss',keysss)
//         // console.log("Array order by child " + JSON.stringify(array));
//         console.log("User's Object : " + JSON.stringify(userObject));
//         if(userId === userObject.fetchedUserId){
//             userObj.push(userObject)
//         }
//         // console.log("User Object Fetched Uid " + userObject.fetchedUserId);
//     })
//     console.log("User's Object Outside Loop : " + JSON.stringify(userObj));
//     return userObj
// }

    noteData(){
        var noteObj1 = []
        var userId = this.userDetails()
        
        firebase.database.database().ref('Notes').on('value',function (snapshot)  {
            // console.log("Order By Child " + snapshot.key + "Value " + JSON.stringify(snapshot.val().notes));
            // array = snapshot.val()
             var noteObject1 = snapshot.val()
             var keysss=Object.keys(noteObject1)
             console.log('keyssss',keysss)
            // console.log("Array order by child " + JSON.stringify(array));
            console.log("User's Object : " + JSON.stringify(keysss));
           // console.log("Notes Object " + JSON.stringify(Object.keys(noteObject1)));
            
           noteObj1.push(keysss)

            // if(keysss === noteObject1.key){
            //     noteObj1.push(keysss)
            //     console.log('in ID',noteObj1)
            // }
            // console.log('Note object ' + noteObj1)
            // // console.log("User Object Fetched Uid " + userObject.fetchedUserId);
        })
        console.log("User's Object Outside Loop : " + JSON.stringify(noteObj1));
        return noteObj1
    
    }  
}

export default UserServices

//    module.exports.userDetails = function (){
//         var user = firebase.firebase.auth().currentUser
//         var userId = user.uid
        
//         // console.log("User from User Details : " + JSON.stringify(user));
        
//         return userId
//     }
