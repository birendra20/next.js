/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;
// we then have the next.config.js file
// which is the next.js configuration file
// we just have react strict mode set to
// true
// react's strict mode is a development
// mode only feature
// for highlighting potential problems in
// an application
// it helps to identify unsafe life cycles
// legacy api usage and a number of other
// features
// so i recommend you leave this set to
// true
