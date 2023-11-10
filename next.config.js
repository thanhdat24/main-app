/** @type {import('next').NextConfig} */
const path = require("path");
const nextConfig = {
  reactStrictMode: true,
  distDir: "build",
  webpack: (config, options) => {
    const { isServer } = options;
    //config.experiments = { topLevelAwait: true, layers: false };
    config.plugins.push(
      new options.webpack.container.ModuleFederationPlugin({
        name: "main",
        remoteType: "var",
        remotes: {},
        filename: "static/chunks/remoteEntry.js",
        exposes: {
          "./footer": "./components/Footer.tsx",
          "./header": "./components/Header.tsx",
        },
        // shared: [
        //   {
        //     react: {
        //       eager: true,
        //       singleton: true,
        //       requiredVersion: false,
        //     },
        //   },
        //   {
        //     "react-dom": {
        //       eager: true,
        //       singleton: true,
        //       requiredVersion: false,
        //     },
        //   },
        // ],
      })
    );

    return config;
  },
};

module.exports = nextConfig;
