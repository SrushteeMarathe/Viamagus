const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

module.exports = (async () => {
  const defaultConfig = await getDefaultConfig(__dirname);
  return mergeConfig(defaultConfig, {
    transformer: {
      babelTransformerPath: require.resolve("react-native-svg-transformer")
    },
    resolver: {
      assetExts: [...defaultConfig.resolver.assetExts, "svg"],
      sourceExts: [...defaultConfig.resolver.sourceExts, "svg", "jpg", "jpeg"]
    }
  });
})();
