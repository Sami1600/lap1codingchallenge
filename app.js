const app = require ('express')
const cors = require('cors');
const express = require('express');
const app = express()

app.use(cors())
app.use(express.json())

app.get('')