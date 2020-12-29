import { Grid, repeat, View as RSPView } from "@adobe/react-spectrum";
import CSS from "csstype";
import React, { ComponentProps, FC } from "react";
import { View } from "react-native";

const headerCSS: CSS.Properties = {
    textAlign: "center",
};

const LandingPage: FC = () => {
    const baseColors = [
        "celery",
        "chartreuse",
        "yellow",
        "magenta",
        "fuchsia",
        "purple",
        "indigo",
        "seafoam",
        "red",
        "orange",
        "green",
        "blue",
    ];

    type BackgroundColor = ComponentProps<typeof RSPView>["backgroundColor"];

    const colors: BackgroundColor[] = [];
    for (const color of baseColors) {
        for (let i = 4; i <= 7; i++) {
            colors.push(`${color}-${i}00` as BackgroundColor);
        }
    }

    return (
        <View style={{ width: "100%" }}>
            <RSPView paddingTop="size-400">
                <h1 style={headerCSS}>Welcome to React Spectrum!</h1>
            </RSPView>
            <Grid
                columns={repeat("auto-fit", "size-800")}
                autoRows="size-800"
                justifyContent="center"
                gap="size-100"
                marginX="size-200"
                marginTop="size-300"
                marginBottom="size-400"
            >
                {colors.map(color => (
                    <RSPView key={color} backgroundColor={color} />
                ))}
            </Grid>
        </View>
    );
};

export default LandingPage;
