const network = require('../module/network')

module.exports = (app) => {
    app.post('/fetchReply',(req,res)=>{
        let params = req.body;
        let result = network.output(params.input);
        console.log(result)
        res.status(200).json({message : 'Successfully fetched records !!' ,  data : result });
    },err => {
        res.status(501).json({message : 'Service error occured' });
    });
}