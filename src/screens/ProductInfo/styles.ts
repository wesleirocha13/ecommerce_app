import { StyleSheet } from "react-native";

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
        flex: 1,
        justifyContent: "flex-end"
    },
    containerButtonPurchase: {
        flex: 1,
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
    textPortionProduct: {
        textAlign: "center",
        color: "grey"
    },
    buttonPurchase: {
        backgroundColor: 'red',
        width: '100%' ,
        height: '76%',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textButtonPurchase: {
        textTransform: 'uppercase',
        color: '#FFF'
    }

});

export default styles;
