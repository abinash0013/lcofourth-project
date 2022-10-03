import { useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    ScrollView,
    TextInput,
    TouchableOpacity,
    Alert,
} from "react-native";
// import Snackbar from "react-native-snackbar";

const currencyPerRupee = {
    DOLLAR: 0.014,
    EURO: 0.012,
    POUND: 0.011,
    RUBEL: 0.93,
    AUSDOLLAR: 0.2,
    CANDOLLAR: 0.019,
    YEN: 1.54,
    DINAR: 0.0043,
};

export default function App() {
    const [inputValue, setInputValue] = useState(0);
    const [resultValue, setResultValue] = useState(0);

    const buttonPressed = (currency) => {
        if (!inputValue) {
            // return Snackbar.show({
            //     text: "Please Enter a value..!",
            //     backgroundColor: "#EA7773",
            //     color: "#fff",
            //     duration: Snackbar.LENGTH_SHORT,
            // });
            alert("Please enter value");
        }
        let result = parseFloat(inputValue) * currencyPerRupee[currency];
        setResultValue(result.toFixed(2));
        setInputValue(0);
    };

    return (
        <>
            <ScrollView backgroundColor="#1b262c" keyboardDismissMode="handled">
                <SafeAreaView style={styles.container}>
                    <View style={styles.resultContainer}>
                        <Text style={styles.resultValue}>{resultValue}</Text>
                    </View>
                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.input}
                            keyboardType="numeric"
                            placeholder="Enter Value"
                            placeholderTextColor="#c1c1c1"
                            value={inputValue}
                            onChangeText={(inputValue) =>
                                setInputValue(inputValue)
                            }
                        ></TextInput>
                    </View>
                    <View style={styles.convertButtonContainer}>
                        {Object.keys(currencyPerRupee).map((currency) => (
                            <TouchableOpacity
                                onPress={() => buttonPressed(currency)}
                                key={currency}
                                style={styles.converterButton}
                            >
                                <Text style={styles.conterButtonText}>
                                    {currency}
                                </Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                </SafeAreaView>
            </ScrollView>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
    },
    resultContainer: {
        height: 70,
        marginTop: 80,
        justifyContent: "center",
        borderColor: "#bbe1fa",
        borderWidth: 2,
        alignItems: "center",
    },
    resultValue: {
        fontSize: 30,
        color: "#fff",
        fontWeight: "bold",
    },
    inputContainer: {
        height: 70,
        marginTop: 10,
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 2,
        borderColor: "#bbe1fa",
    },
    input: {
        fontSize: 30,
        textAlign: "center",
        color: "#fff",
    },
    convertButtonContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        marginTop: 10,
    },
    conterButtonText: {
        color: "#fff",
        fontSize: 15,
    },
    converterButton: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: 100,
        width: "33.33%",
        borderWidth: 1,
        borderColor: "#fff",
        marginVertical: 5,
    },
});
