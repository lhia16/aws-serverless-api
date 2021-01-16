const Responses = require("./API_Responses");

exports.handler = async event => {
    console.log("event", event)

    if (!event.pathParameters || !event.pathParameters.ID) {
        //error- no ID
        return Responses._400({message: "missing the ID from the path"})
    }

    let ID = event.pathParameters.ID;

    if(data[ID]) {
        // return data
        return Responses._200(data[ID])
    }

    return Responses._400({message: "no ID in the data"})

};

const data = {
    1234: {name: "Frodo Baggins", age: 51, job: "ring-bearer" },
    5678: {name: "Gandalf", age: 2019, job: "wizard" },
    9101: {name: "Samwise Gamgee", age: 39, job: "gardener" }
};