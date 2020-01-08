import firebase from './src/Firebase'
import { AsyncStorage } from 'react-native'
var userID = ''

class UserServices {

    userDetails() {
        AsyncStorage.getItem('UserId').then((success) => {
            userID = success
            return userID
        })
    }

    userData(callback) {
        AsyncStorage.getItem('UserId').then((success) => {
            userID = success
            console.log('User Id in User Services ', userID);
            firebase.database.database().ref('Notes').orderByChild('fetchedUserId').equalTo(userID).on('value', function (snapshot) {
                var userObject = snapshot.val() 
                console.log('User Object In User Services ', userObject);
                return callback(userObject)
            })
        })
    }

    noteData() {
        var noteObj1 = []
        firebase.database.database().ref('Notes').on('value', function (snapshot) {
            var noteObject1 = snapshot.val()
            var keysss = Object.keys(noteObject1)
            noteObj1.push(keysss)
        })
        return noteObj1
    }

    userLogin(email, password){

    }
}

export default UserServices