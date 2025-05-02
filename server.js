const express = require("express");
const path = require("path");

const app = express();
const PORT = 4000;
const router = express.Router();



app.use(express.static(path.join(__dirname, 'frontend/build')));

app.get("/", function(request, response){
    response.sendFile(path.join(__dirname, 'frontend/build', 'index.html'));
});


app.listen(PORT, function(){
    console.log(`Server started on port ${PORT}`);
});