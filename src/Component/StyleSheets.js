import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    scrollView : {
        // display : "flex",
        backgroundColor: 'pink',
        flex : 1
        // marginHorizontal: 20
    },
    // demo : {
    //     width : "25%",
    //     // display : "flex",
    //     flexDirection : "row"
    // },
    // demo1 : {
    //    alignItems : "flex-start"
    // },
    // demo2 : {
    //     width : 50
    // },
    loginContainer : {
        backgroundColor : "yellow",
        width : "100%",
        height : "100%",
        // flexWrap : "wrap"
    },
    loginSubcontainer : {
        // display : "flex",
        display : "flex",
        alignItems : "center",
        backgroundColor : "white",
        height:"100%"
    },
    fundooapp : {
        marginTop : "-10%",
        textAlign : "center",
        fontSize : 40,
        display : "flex",
        flexDirection : "row",
        fontWeight : "bold"
    },
    image : {
        // width : 350, 
        height : 200, 
        // alignItems : "center",
        marginTop : "0%",
        // borderWidth : 1,
        // borderColor : "white",
        // borderRadius : 50,
        marginHorizontal : "50%",

        // position : "relative"
    },
    signInText : {
        textAlign : "center",
        fontSize : 30,
        fontWeight : "bold"
    },
    label : {
        textAlign : "center",
        fontSize : 20,
        color : "black",
        marginBottom : 20
    },
    emailInput : {
        width : "75%",
        // alignContent : "center",
        // margin : "10%",
        marginBottom : "5%",
        textAlign : "center",
        // borderWidth : 1,
        // borderColor : "black",
        // borderStyle : "solid",
        // borderRadius : 10
    },
    passwordInput : {
        width : "75%",
        // alignContent : "center",
        // margin : "10%",
        // borderWidth : 1,
        // borderColor : "black",
        // borderStyle : "solid",
        // borderRadius : 10,
        marginBottom : "3%"
    },
    forgotPassword : {
        color : "blue",
        marginBottom : "5%",
        textDecorationLine : "underline",
    },
    signInButton : {
        marginBottom : 15,
        marginTop : 10
    },
    createAccountText : {
        // marginBottom : 10,
        fontWeight : "bold",
        fontSize : 20,
        fontStyle : "italic"
    },
    signUpButton : {
        // marginBottom : "10%"
    },

    /********************** Register Page ***************************/

    registerContainer : {
        // display : "flex",
        backgroundColor : "yellow",
        width : "100%",
        height : "100%",
        // alignContent : "center"
    },
    registerSubContainer : {
        display : "flex",
        // flexDirection : "column",
        // flexDirection : "column",
        // alignItems : "center",
        // margin : "2%",
        // marginBottom : "2%",
        height : "100%",
        // width : "100%",
        // borderWidth : 1,
        // borderColor : "black",
        // borderRadius : 20,
        backgroundColor : "white"
    },
    combinedDiv : {
        flexDirection : "column"
    },
    imageDiv : {
        width : "100%",
        height : 100,
        // flexDirection : "column"
        // marginTop : "0%"
    },
    componentDiv : {
        // margin : 20
        // flexDirection : "column"
    },
    registerImage : {
        height : 150,
        display : "flex",
        alignSelf : "center",
        marginTop : "2%",
        // alignItems : "center",
        // alignContent : "center",
        // alignItems : "center",
        // justifyContent : "center"
        // marginTop : "-45%",
        // width : "100%",
        // marginBottom : "-45%"
        // marginHorizontal : "25%"
        // width : 350
    },
    registerFundooapp : {
        // marginTop : "-10%",
        textAlign : "center",
        fontSize : 40,
        display : "flex",
        // flexDirection : "row",
        fontWeight : "bold",
        color : "black"
    },
    firstName : {
        alignSelf : "center",
        // margin : "25%",
        // textAlign : "center",
        // borderWidth : 1,
        // borderColor : "black",
        // borderRadius : 10,
        width : "75%",
        marginBottom : "5%"
    },
    lastName : {
        alignSelf : "center",
        // margin : "10%",
        // borderWidth : 1,
        // borderColor : "black",
        // borderRadius : 10,
        width : "75%",
        marginBottom : "5%"
    },
    registerEmail : {
        alignSelf : "center",
        // borderWidth : 1,
        // borderColor : "black",
        // borderRadius : 10,
        width : "75%",
        marginBottom : "5%"
    },
    registerPassword : {
        alignSelf : "center",
        // borderWidth : 1,
        // borderColor : "black",
        // borderRadius : 10,
        width : "75%",
        marginBottom : "5%"
    },
    confirmPassword : {
        // borderWidth : 1,
        // borderColor : "black",
        // borderRadius : 10,
        // display : "flex",
        flexDirection : "row",
        width : "60%",
        // justifyContent : "flex-start",
        marginBottom : "5%",
        marginLeft : "13%"
    },
    signInRegister : {
        display : "flex",
        flexDirection : "row",
        justifyContent : "space-around"
    },
    signInLabel : {
        
        // marginLeft : "10%",
        fontWeight : "bold",
        fontSize : 20,
        color : "darkblue",
        fontStyle : "italic",
        textDecorationLine : "underline",
        
    },
    // registerButton : {
    //     // bottom : 10
    // },
    /************************ Dashboard ****************************/
    dashboardContainer : {
        width : "100%",
        height : "100%",
        // backgroundColor : "lightblue"
    },
    dashboardSubContainer : {
        margin : "2%",
        height : "100%",
        // backgroundColor : "orange",
    },
    searchBar : {
        // backfaceVisibility : "hidden",
        color : "white",
        width : "100%",
        borderWidth : 1,
        borderColor : "grey",
        borderRadius : 10,
        height : 40,
        shadowRadius : 10,
        shadowOpacity : 0.8,
        // shadowOffset : {width : 10, height : 10},
        shadowColor : 'rgba(0,0,0,0.14)',
        // position : "absolute",
        // backgroundColor : "pink",
        zIndex : 1,
    },
    // selectedNoteHeaderBar : {
    //     color : "white",
    //     width : "100%",
    //     borderWidth : 1,
    //     borderColor : "grey",
    //     borderRadius : 10,
    //     height : 40,
    //     shadowRadius : 10,
    //     shadowOpacity : 0.8,
    //     // shadowOffset : {width : 10, height : 10},
    //     shadowColor : 'rgba(0,0,0,0.14)',
    //     // position : "absolute",
    //     // backgroundColor : "pink",
    //     zIndex : 1
    // },
    googleKeepImage : {
        // backfaceVisibility : "hidden",
        display : "flex",
        justifyContent : "center",
        alignItems : "center",
        height : "100%"
    },
    addNotesLabel : {
        color : "black",
        fontSize : 15,
        fontWeight : "bold"
    },
    takeNote : {
        backgroundColor : "white",
        // height : 30,
        display : "flex",
        justifyContent : "space-around",
        // alignSelf : "flex-end",
        flexDirection : "row",
        // position : "absolute",
        alignItems : "flex-end",
        // top : 400,
        position : "absolute",
        width : "100%",
        bottom : 4,
        borderTopWidth : 1,
        borderRadius : 10
        // height : 300
        
        // marginBottom : 50
        // justifyContent : "flex-end",
        // textAlign : "center"
    },
    checkBoxImage : {
        display : "flex",
        // alignItems : "flex-end"
    },
    profileIcon : {
        display : "flex", 
        position : "absolute", 
        alignSelf : "flex-end"
    },
    profileDisplay : {
        display : "flex", 
        position : "absolute", 
        alignSelf : "flex-end",
        top : 25,
        zIndex : 20000
    },
    userCard : {
        // borderWidth : 1,
        marginBottom : 5,
        // width : "45%",
        // borderWidth : 1,
        // borderRadius : 20,
        // display : "flex",
        // flexDirection : "row"
        // height : "200%"
    },
    notesCard : {
        
        // bottom : 40,
        // top : 20
        // borderWidth : 1
    },
    longPressedStyle : {
        borderWidth : 2,
        borderColor : 'black',
        borderRadius : 10,
        borderStartWidth : 3
    },
    normalPressedStyle : {
        borderColor : 'grey',
        borderRadius : 10
    },
    cardTitle : {

    },

    /********************* Forgot Password **********************/
    forgotPassContainer : {
        width : "100%",
        height : "100%",
        display : "flex",
        alignItems : "center",
        justifyContent : "center"
    },
    forgotPassword : {
        display : "flex",
        flexDirection : "column",
        alignItems : "center",
        // justifyContent : "space-between"
    },
    forgotLabel : {
        fontSize : 40
    },
    recoveryEmail : {
        fontSize : 20,
        marginTop : 20
    },
    forgotEmailInput : {
        marginTop : 10,
        flexBasis : 90
    },
    submitButton : {
        
        // display : "flex",
        // alignContent : "center"
        alignItems : "center"
    },
    /********************* Create Note *************************/
    createNoteContainer : {
        width : "100%",
        height : "100%",
        // backgroundColor : "lightpink",
        display : "flex",
        justifyContent : "center",
        alignItems : "center"
    },
    createNoteSubContainer : {
        width : "100%",
        height : "100%",
        display : "flex",
        // backgroundColor : "lightblue",
    },
    headerContainer : {
        backgroundColor : "white",
        display : "flex",
        flexDirection : "row",
        position : "absolute"
    },
    arrowContainer : {
        flex : 4
    },
    restContainer : {
        display : "flex",
        justifyContent : "space-around",
        flexDirection : "row",
        flex : 3,
    },
    titleText : {
        marginTop : "10%"        
    },
    footerComponents : {
        // backgroundColor : "lightyellow",
        display : "flex",
        flexDirection : "row",
        position : "absolute",
        bottom : 0,
        width : "100%",
        height : 300
        // alignContent : "space-between"

    },
    addItemIcon : {
        display : "flex",
        justifyContent : "flex-end",
        top : -5,
        // backgroundColor : "white"
    },
    menuIcon : {
        // backgroundColor : "blue",
        width : "90%",
        display : "flex",
        alignItems : "flex-end",
        top : -10,
        justifyContent : "flex-end",
    },
    menuList : {
        backgroundColor : "white",
        height : 250,
        // marginTop : "45%",
        borderRadius : 20,
        width : "100%",
        position : "absolute",
        borderWidth : 0.3,
        // bottom : 20,
        // display : "flex",
        // justifyContent : "flex-end"
    },
    delete : {
        width : "100%",
        // display : "flex",
        // flexDirection : "row",
        // backgroundColor : "pink",
    },
    makeCopy : {
        // backgroundColor : "lightgreen"
    },
    send : {
        // backgroundColor : "red"
    },
    collaborator : {
        // backgroundColor : "yellow"
    },
    labels : {
        // backgroundColor : "brown"
    },
    flatListContainer : {
        flex : 1,
        marginVertical : 20
    },
    flatListItem : {
        flex : 1,
        margin : 1,
        alignItems : "center",
        justifyContent : "center",
        height : 50
    },
    flatListItemText : {
        color : 'black'
    },
    textStyle : {
        fontSize : 80
    },
    /*************************** Sign Out Menu ***********************/
    signOutContainer : {
        width : "100%",
        height : "100%",
        // backgroundColor : 'lightpink'
    },
    signOutHeader : {
        // backgroundColor : 'lightblue',
        // width : "100%",
        height : "auto",
        margin : 10,
    },
    userDetails : {
        marginTop : 40,
        display : "flex",
        flexDirection : "row",
        justifyContent : "space-between"
    },
    signOut : {
        // width : 90,
        display : "flex",
        alignItems : "center"
    }
})

export default styles