const path = require("path");
const { getLoader, loaderByName } = require("@craco/craco");

const packages = [];
const libs = [
  "booktrina-ui"
];
libs.map(lib => packages.push(path.join(__dirname, `../../libs/${lib}`)))

module.exports = {
  webpack: {
    configure: (webpackConfig, arg) => {
      const {isFound, match} = getLoader(webpackConfig, loaderByName("babel-loader"));
      if (isFound) {
        const include = Array.isArray(match.loader.include)
          ? match.loader.include
          : [match.loader.include];

        match.loader.include = include.concat(packages);
      }

      return webpackConfig;
    },
  },
};
