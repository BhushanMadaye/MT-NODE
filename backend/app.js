const express = require('express')
const routes = require('./routes/index')
const cors = require('cors')

const app = express()

app.use(express.json())

app.use(cors())

const db = require("./models");
db.sequelize.sync();
// drop the table if it already exists
// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
// });

app.use('/api', routes)

const PORT = 3000

app.listen(PORT, () => console.log(`port: ${PORT}`))