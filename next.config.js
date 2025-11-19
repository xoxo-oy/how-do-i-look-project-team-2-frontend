const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
    prependData: `@use "src/styles/utils.scss" as *;`,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "nb06-howdoilook-team2.onrender.com",
      },
      {
        protocol: "http",
        hostname: "localhost",
      },
      {
        protocol: "http",
        hostname: "nb06-howdoilook-team2.onrender.com",
      },
    ],
    domains: ["nb06-howdoilook-team2.com"],
  },
  webpack: (config) => {
    // tsconfig.json alias와 동일하게 webpack alias 지정
    config.resolve.alias["@libs"] = path.resolve(__dirname, "src/libs");
    config.resolve.alias["@styles"] = path.resolve(__dirname, "src/styles");
    config.resolve.alias["@services"] = path.resolve(__dirname, "src/services");
    config.resolve.alias["@app"] = path.resolve(__dirname, "src/app");
    config.resolve.alias["@"] = path.resolve(__dirname, "src");
    return config;
  },
};

module.exports = nextConfig;
