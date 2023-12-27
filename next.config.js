/** @type {import('next').NextConfig} */
const path = require("path");

module.exports = {
    sassOptions: {
        includePaths: [path.join("sass", "src/app/css")],
    },
};
