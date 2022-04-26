const express = require('express')
const app = express()
const args = require('minimist')(process.argv.slice(2))
args['port']
const port = args.port || process.env.PORT || 5000

const server = app.listen(HTTP_PORT, () => {
    console.log('App listening on port %PORT%'.replace('%PORT%',HTTP_PORT))
});

app.get('/app/', (req, res) => {
    res.status(200).end('OK')
    res.type('text/plain')

})

app.get('/app/flip/', (req, res) => {
    var flip = coinFlip()
    res.status(200).json({ "flip" : flip})
})

