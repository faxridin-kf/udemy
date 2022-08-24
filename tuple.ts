const array: [number, string, number] = [0, "one", 2];

array.map((i) => {
  switch (typeof i) {
    case "string":
      console.log("string");
    case "number":
      console.log("number");
  }
});

const [q, w, e] = array;

const [...desc] = array;
