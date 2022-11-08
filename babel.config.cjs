module.exports = function(api) {
  api.cache(false)
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      "transform-inline-environment-variables",
      [
        "module:react-native-dotenv",
        {
          envName: "APP_ENV",
          moduleName: "@env",
          path: ".env"
        }
      ]
    ]
  }
}
