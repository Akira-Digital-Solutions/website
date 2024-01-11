/** @type {import('next').NextConfig} */

// next.config.js
const path = require("path");
const withVideos = require("next-videos");

module.exports = withVideos({
    sassOptions: {
        includePaths: [path.join("sass", "src/app/css")],
    },
    // Add your custom configurations here
    // async redirects() {
    //     return [
    //         {
    //             source: "https://www.akiradigitalsolutions.com",
    //             destination: "https://akiradigitalsolutions.com",
    //             permanent: true, // 301 redirect
    //         },
    //         // Add more redirects as needed
    //     ];
    // },
});
