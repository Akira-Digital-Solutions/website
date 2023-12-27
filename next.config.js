/** @type {import('next').NextConfig} */

const path = require("path");
const withVideos = require("next-videos");
const nextConfig = {};

module.exports = nextConfig;

module.exports = {
    sassOptions: {
        includePaths: [path.join("sass", "src/app/css")],
    },
};

module.exports = withVideos();
