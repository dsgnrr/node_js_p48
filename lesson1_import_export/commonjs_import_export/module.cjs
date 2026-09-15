const doSmth = () => {
    return "Success";
}

const obj = {
    "user":"Petro",
    "age": 12
};

// exports.func = doSmth;
// exports.obj = obj;

module.exports = {func:doSmth, obj};