require('dotenv').config()
const PORT = process.env.PORT || 3333

const server = require('./api/server')

server.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})