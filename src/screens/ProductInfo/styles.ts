import { StyleSheet } from "react-native";
import { primaryColor, greyColor } from '../../constants/Colors'

const styles = StyleSheet.create({
    container: {
        padding: 15,
        flex: 1,
        backgroundColor: "#FFF"
    },
    containerImg: {
        flex: 5,
    },
    containerInformationProduct:{
        flex: 2
    },
    containerDescriptionProduct: {
        overflow: "scroll"
    },
    containerPriceProduct: {
        flex: 0.7,
        justifyContent: "flex-end"
    },
    containerButtonPurchase: {
        flex: 0.9,
        justifyContent: "flex-end"
    },
    img: {
        height: "100%",
        width: "100%",
        resizeMode: "stretch",
    },
    textTitleProduct: {
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
        paddingTop: 5,
    },
    textDescriptionProduct: {
        paddingTop: 5,
        fontSize: 16
    },
    textPriceProduct: {
        textAlign: "center",
        fontSize: 24,
        fontWeight: "bold"
    },
    textRating: {
        textAlign: "center",
        color: greyColor,
        fontWeight: 'bold',
        fontSize: 15
    },
    buttonPurchase: {
        backgroundColor: primaryColor,
        width: '100%' ,
        height: '76%',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textButtonPurchase: {
        textTransform: 'uppercase',
        color: '#000',
        fontSize: 16,
        fontWeight: '700'
    },
    containerRating: {
      flexDirection: "row",
      justifyContent: "center"
    },
    containerStarRating: {
      paddingLeft: 5
    },
    containerNumberRating: {
      paddingLeft: 10
    }

});

export default styles;
