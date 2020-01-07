import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    scrollView : {
        backgroundColor: 'pink',
        flex : 1
    },
    loginContainer : {
        backgroundColor : "yellow",
        width : "100%",
        height : "100%",
    },
    loginSubcontainer : {
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
        height : 200, 
        marginTop : "0%",
        marginHorizontal : "50%",
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
        marginBottom : "5%",
        textAlign : "center",
    },
    passwordInput : {
        width : "75%",
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
        fontWeight : "bold",
        fontSize : 20,
        fontStyle : "italic"
    },

    /********************** Register Page ***************************/

    registerContainer : {
        backgroundColor : "yellow",
        width : "100%",
        height : "100%",
    },
    registerSubContainer : {
        display : "flex",
        height : "100%",
        backgroundColor : "white"
    },
    combinedDiv : {
        flexDirection : "column"
    },
    imageDiv : {
        width : "100%",
        height : 100,
    },
    registerImage : {
        height : 150,
        display : "flex",
        alignSelf : "center",
        marginTop : "2%",
    },
    registerFundooapp : {
        textAlign : "center",
        fontSize : 40,
        display : "flex",
        fontWeight : "bold",
        color : "black"
    },
    firstName : {
        alignSelf : "center",
        width : "75%",
        marginBottom : "5%"
    },
    lastName : {
        alignSelf : "center",
        width : "75%",
        marginBottom : "5%"
    },
    registerEmail : {
        alignSelf : "center",
        width : "75%",
        marginBottom : "5%"
    },
    registerPassword : {
        alignSelf : "center",
        width : "75%",
        marginBottom : "5%"
    },
    confirmPassword : {
        flexDirection : "row",
        width : "60%",
        marginBottom : "5%",
        marginLeft : "13%"
    },
    signInRegister : {
        display : "flex",
        flexDirection : "row",
        justifyContent : "space-around"
    },
    signInLabel : {
        fontWeight : "bold",
        fontSize : 20,
        color : "darkblue",
        fontStyle : "italic",
        textDecorationLine : "underline",
        
    },
    
    /************************ Dashboard ****************************/
    dashboardContainer : {
        width : "100%",
        height : "100%",
    },
    dashboardSubContainer : {
        margin : "2%",
        height : "100%",
    },
    searchBar : {
        color : "white",
        width : "100%",
        borderWidth : 1,
        borderColor : "grey",
        borderRadius : 10,
        height : 40,
        top : 1,
        // elevation : 0.5,
        // shadowRadius : 10,
        // shadowOpacity : 0.2,
        // shadowOffset : {width : 3, height : 3},
        // shadowColor : '#000',
        // position : "absolute",
        // backgroundColor : "pink",
        zIndex : 1,
    },
    toggleSearchBar : {
        height : 45, 
        display : "flex", 
        flexDirection:'row', 
        justifyContent : "space-between", 
        borderBottomWidth : 0.3,
        zIndex : 1,
    },
    googleKeepImage : {
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
        display : "flex",
        justifyContent : "space-around",
        flexDirection : "row",
        alignItems : "flex-end",
        position : "absolute",
        width : "100%",
        bottom : 5,
    },
    checkBoxImage : {
        display : "flex",
    },
    profileIcon : {
        display : "flex", 
        position : "absolute", 
        alignSelf : "flex-end",
        justifyContent : "space-around",
    },
    profileDisplay : {
        display : "flex", 
        position : "absolute", 
        alignSelf : "flex-end",
        top : 25,
    },
    userCard : {
        height : 'auto',
        width : '100%',
        flexWrap : 'wrap',
        flexDirection : 'row'
    },
    longPressedStyle : {
        borderWidth : 2,
        borderColor : 'black',
        borderRadius : 10,
        borderStartWidth : 3,
        backgroundColor : 'lightgrey'
    },
    normalPressedStyle : {
        borderColor : 'grey',
        borderRadius : 10,
        borderWidth : 1,
        width : "90%",
    },
    gridView : {
        display : "flex", 
        width : "100%", 
        flexDirection : "column", 
        flexWrap : "wrap",
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
        alignItems : "center"
    },

    /********************* Create Note *************************/
    
    createNoteContainer : {
        width : "100%",
        height : "100%",
        display : "flex",
        justifyContent : "center",
        alignItems : "center"
    },
    headerContainer : {
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
        display : "flex",
        flexDirection : "row",
        position : "absolute",
        bottom : 0,
        width : "100%",
        height : 320
    },
    addItemIcon : {
        display : "flex",
        height : 325,
        width : '100%',
        alignItems : 'flex-start',
        justifyContent : "flex-end",
        position : 'absolute'
    },
    menuIcon : {
        width : "100%",
        display : "flex",
        alignItems : "flex-end",
        top : -10,
        justifyContent : "flex-end",
    },
    menuList : {
        backgroundColor : "white",
        height : 270,
        borderRadius : 20,
        width : "100%",
        position : "absolute",
        borderTopWidth : 0.3
    },
    delete : {
        width : "100%",
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
    },
    signOutHeader : {
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
        display : "flex",
        alignItems : "center"
    },

    /************************************** Reminder ***********************************/
    
    reminderContainer : {
        position : 'absolute',
        width : '100%'
    },
    reminderSubContainer : {
        backgroundColor : 'white',
        height : 290,
        width : '90%',
        display : "flex",
        borderWidth : 1,
        alignSelf : 'center',
        position : 'absolute'
    },

    /******************************* Toggle Search Bar *******************************/
    
    toggleSearchbarMenu : {
        height : 300,
        width : 200,
        backgroundColor : 'lightpink',
        zIndex : 1000000,
        display : 'flex',
        alignSelf : 'flex-end',
        shadowRadius : 3,
        shadowOpacity : 0.2,
        shadowOffset : {width : 10, height : 10},
        shadowColor : '#000',
        borderWidth : 0.5
    },
    toggleMenu : {
        width : '100%',
        height : '100%',
    }
})

export default styles