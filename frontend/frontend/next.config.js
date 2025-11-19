/** @type {import('next').NextConfig} */
const path = require("path");

module.exports = {
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
};
