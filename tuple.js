var array = [0, "one", 2];
array.map(function (i) {
    switch (typeof i) {
        case "string":
            console.log("string");
        case "number":
            console.log("number");
    }
});
