const express = require("express");

const app = express();

app.use("/", function(request, response){

    let q = request.query.q;
    let userName = request.query.name;
    response.send({q:q, name: userName});
});

app.listen(3000);