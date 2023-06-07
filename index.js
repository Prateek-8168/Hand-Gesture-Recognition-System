
const express = require('express'); //Import the express dependency
const app = express();              //Instantiate an express app, the main work horse of this server
const path = require('path');                 //Save the port number where your server will be listening


const staticPath = path.join(__dirname, "../hgrsproject");

app.use(express.static(staticPath));
app.use('/images', express.static('images'));

//Idiomatic expression in express to route and respond to a client request
app.get('/', (req, res) => {        //get requests to the root ("/") will route here
    res.sendFile('Gestures.html', {root: __dirname});      //server responds by sending the index.html file to the client's browser
                                                        //the .sendFile method needs the absolute path to the file, see: https://expressjs.com/en/4x/api.html#res.sendFile 
});

app.listen(7777, () => {            //server starts listening for any attempts from a client to connect at port: {port}
    console.log("listening the port at: http://127.0.0.1:7777"); 
});

// const path = require('path');
// const express = require ('express');
// const app = express ();

// const staticPath = path.join(__dirname, "../hgrsproject");

// //telling the express module that the public dir has all of our site assets
// app.use(express.static(staticPath));

// app.get('/', function(req, res){

//     res.sendFile(path.join(__dirname + '/Gestures.html'));
// });

// app.listen(3333);
// console.log('Now the server is : http://127.0.0.1:3333');
