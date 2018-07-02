const moment = require("moment");

// module.exports = function (name) {
//     return "Hello, " + name + ". I am common module you're depending on. And it's " + moment(new Date()).format("h:mm") + " now.";
// }

module.exports = function (name) {
    return "Good bye, " + name + ". I am common module you had depended on. And it was " + moment(new Date()).format("h:mm") + " now.";
}
