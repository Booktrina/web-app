const path = require("path");
const { getLoader, loaderByName } = require("@craco/craco");

const packages = [];
const libs = ["booktrina-ui/src"];
libs.map((lib) => packages.push(path.join(__dirname, `../../libs/${lib}`)));
console.log("\x1b[36m%s\x1b[0m", `Added custom libraries: ${libs}`);

module.exports = {
  webpack: {
    configure: (webpackConfig, arg) => {
      const { isFound, match } = getLoader(
        webpackConfig,
        loaderByName("babel-loader")
      );
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
