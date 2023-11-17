let myNestedObject = {
    name: "John",
    age: 25,
    address: {
        street: "123 Big Apple Street",
        cityState: "Manhattan, NY",
        country: "USA",
    },
    hobbies: ["reading", "coding"],
    education: {
        school: "Big Apple University",
        degree: "Bachelor's",
        majorMinor: ["Computer Science", "Math"],
    },
    friends: [
        { name: "Alice", age: 27 },
        { name: "Bob", age: 26 },
    ],
};

const stringifiedObject = JSON.stringify(myNestedObject);

stringifiedObject.name;

// console.log(stringifiedObject);
// console.log(typeof stringifiedObject);

const parsedData = JSON.parse(stringifiedObject);

// console.log("parsedData", parsedData);

// used to access and change address
parsedData.address.street = "231 Big Pear Street";
