const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
require('dotenv').config()
const app = express()

const Quirk = require('./model/quirk')

app.use(morgan('tiny'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', async (req, res) => {
    res.sendFile(__dirname + '/index.html');
})

app.post('/', async(req, res) => {
    var { name, description, defence, attack, power, defence_power, agility, precision, utility } = req.body
    var obj = {
        name,
        description,
        defence: parseInt(defence),
        attack: parseInt(attack),
        power: parseInt(power),
        defence_power: parseInt(defence_power),
        agility: parseInt(agility),
        precision: parseInt(precision),
        utility: parseInt(utility),
    }
    var quirk = await Quirk.create(obj)
    
    res.sendFile(__dirname + "/index.html")
})

app.listen(process.env.PORT, () => {
    console.log(`Rodante na porta ${process.env.PORT}`)
})