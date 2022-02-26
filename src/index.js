const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const app = express();
const { default : mongoose} = require('mongoose')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
mongoose.connect("mongodb+srv://sp01041998:71HOQkRVAWXnVxw0@cluster0.deqvc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {useNewUrlParser : true})
.then( () => console.log('mongoDB is connected'))
.catch( err => console.log(err))

app.use('/', route);

app.listen(process.env.PORT || 3000, function() {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
