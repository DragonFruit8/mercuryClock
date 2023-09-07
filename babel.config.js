module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["module:metro-react-native-babel-preset"],
    env: {
      production: {
        plugins: [
          "@babel/plugin-proposal-export-namespace-from",
          "react-native-reanimated/plugin",
          "babel-present-expo",
          require.resolve("expo-router/babel"),
          ["react-native-paper/babel"],
        ],
      },
    },
  };
};
