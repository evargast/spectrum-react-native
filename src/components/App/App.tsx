import { defaultTheme, Provider } from "@adobe/react-spectrum";
import React, { FC } from "react";
import { StyleSheet, View } from "react-native";

import LandingPage from "../LandingPage";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});

const App: FC = () => {
    return (
        <Provider theme={defaultTheme}>
            <View style={styles.container}>
                <LandingPage />
            </View>
        </Provider>
    );
};

export default App;
