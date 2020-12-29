const createExpoWebpackConfigAsync = require("@expo/webpack-config");

module.exports = async function (env, argv) {
    const config = await createExpoWebpackConfigAsync(env, argv);

    // config.module.rules.push({
    //     test: /\.css$/,
    //     use: ["style-loader", "css-loader"],
    // });

    // Add aliases here if needed --> `config.resolve.alias["NAME"] = "alias/path"
    config.resolve.alias["components"] = "src/components";

    if (config.mode === "development") {
        // DEV custom config
    }

    if (config.mode === "production") {
        // PROD custom config
    }

    return config;
};
