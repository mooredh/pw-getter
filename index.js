const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

let app = express();
app.use(bodyParser.json());
const port = process.env.PORT || 3000;

const LifeSchema = new mongoose.Schema({
    data: String
})

const Life = mongoose.model('Life', LifeSchema);

app.post('/x666pwg', async (req,res) => {
    try {
        let life = new Life({
            data: req.body.data
        })
        await life.save()
        console.log(life);
        res.status(200).send({ "message": "Thanks" })
    } catch (e) {
        res.status(400).send(e);
    }
})

app.listen(port, () => {
    console.log(`Started on port: ${port}`);
})