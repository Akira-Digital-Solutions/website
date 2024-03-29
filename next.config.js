const path = require("path");
const withVideos = require("next-videos");

module.exports = withVideos({
    sassOptions: {
        includePaths: [path.join("sass", "src/app/css")],
    },
});
