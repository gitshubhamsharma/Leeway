const express = require('express');
const app = express();
const http = require('http');

// DB connection
const MONGODB_URL = "mongodb://localhost/data";
const mongoose = require("mongoose");
mongoose
	.connect(MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => console.log("Connected to MONGO DB"))
	.catch((err) => {
		console.error("App starting error:", err);
		process.exit(1);
	});
var db = mongoose.connection; 
db.on("open", ()=>console.log("connection opened..."));

var server = http.createServer(app);

app.use(express.json());

app.use('/setRecord',require('./setRecord'));
app.use('/getRecord',require('./getRecord'));

var port =  process.env.PORT || 3000;
server.listen(port,()=>{console.log('listening at ',port)});