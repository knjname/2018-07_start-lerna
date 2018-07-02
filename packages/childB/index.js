const common = require("common");
const _ = require("lodash")

console.log(_.map(["foo", "bar", "baz"], function (elem) {
    return common(elem)
}))
