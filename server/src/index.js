const express = require('express');
const routes = require('./routes/routes');
const bodyParser = require("body-parser");
const cors = require('cors');
const app = new express();
// const network = new brain .NeuralNetwork();
// network.train([
//     {
//         input : [1,2],
//         output : [0]
//     },{
//         input : [1,3],
//         output : [1]
//     }
// ])
// app.use('/',(req,res) => {
//     let output = network.output('code');
//     res.send(output);
// });
app.use(cors());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
        'Access-Control-Allow-Methods',
        'GET, POST, PUT, DELETE, OPTIONS',
    );
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials',
    );
    res.header('Access-Control-Allow-Credentials', 'true');
    next();
})
app.use(bodyParser.urlencoded({ 'extended': 'true' })); // parse application/x-www-form-urlencoded
app.use(bodyParser.json()); // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json

routes(app);

app.listen(8000, (error, success) => {
    console.log('Server has started at port 8000')
});

