import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        marginBottom: 10, 
        borderBottomColor: '#000', 
        borderWidth: 0.4,
        height: 150, 
        width: "100%", 
        flex: 1, 
        backgroundColor: "#FFF"
    },
    containerInfoProduct: {
        display: "flex", 
        flexDirection: "row", 
        flex: 2
    },
    containerImgProduct: {
        flex: 1
    },
    containerDescriptionProduct: {
        flex: 2, 
        justifyContent: "space-evenly"
    },
    containerActions: {
        flex: 1, 
        flexDirection: "row"
    },
    containerPriceProduct: {
        justifyContent: "center", 
        flex: 1, 
        alignItems: "center"
    },
    containerQuantityButtons: {
        flex: 2, 
        justifyContent: "center", 
        alignItems: "center"
    },
    containerBoxQuantityButtons: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        width: "70%",
        borderWidth: 0.4,
        borderColor: "#000",
        borderRadius: 5,
    },
    containerPlusButton: {
        alignSelf: "center"
    },
    containerQuantityProduct: {
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderColor: "#000",
        paddingLeft: 10,
        paddingRight: 10,
        padding: 1,
    },
    containerMinusButton:{
        alignSelf: "center",
    },
    containerTrashButton: {
        flex: 1,
        backgroundColor: "#FFF",
        justifyContent: "center",
        alignItems: "center",
    },

    textTitleProduct: {
        paddingLeft: 5, 
        fontSize: 16
    },
    textDescriptionProduct: {
        overflow: "hidden", 
        paddingLeft: 5, 
        color: "grey"
    },
    imgProduct: {
        height: "100%", 
        width: "100%", 
        resizeMode: "stretch"
    },
    textPrice: {
        fontSize: 18 
    },
    textQuantityProduct: {
        fontSize: 18
    },
});

export default styles;
