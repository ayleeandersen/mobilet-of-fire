import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    header: {
        flex: 1,
        backgroundColor: "#48D1CC",
        paddingTop: 35,
        alignSelf: 'stretch',
    },
    headerContent: {
        fontSize: 20,
        padding: 5,
        alignSelf: 'flex-start',
        color: 'black',
    },
    container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: '#F5FCFF',
    },
    welcome: {
      fontSize: 50,
      fontWeight: 'bold',
      color: 'white',
      textAlign: 'center',
      justifyContent: 'center',
      marginTop: '50%',
    },
    listItem: {
        fontSize: 10,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center',
        margin: 1,
      },
    searchButton: {
        fontSize: 15,
        borderRadius: 40,
        marginTop: 20,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center',
        margin: 1,
      },
    body: {
        flex: 24,
        backgroundColor: 'black',
        alignSelf: 'stretch',
        justifyContent: 'center',
    },
    button: {
        backgroundColor: 'lightgray',
        alignSelf: 'center',
        margin: 1,
    },
    buttonFont: {
        color: 'black',
        fontSize: 15,
    },
    search: {
      flex: 1,
      flexDirection: 'row',
      width: '100%',
      margin: 10,
    },
    searchText: {
        width: '75%',
        height: 50,
        borderRadius: 10,
    },
    navButton: {
      margin: 5,
      borderRadius: 10,
      width: 50,
    },
  });