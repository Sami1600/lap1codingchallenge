const express = require('express');
const app = require ('express')
const cors = require('cors');
const port = 3000

app.use(cors())

const searches = [
    {
        "id": 0,
        "name": "ASOS",
        "web": "https://www.asos.com/women/",
        "description": "British online fashion and cosmetic retailer"
    },
    {
        "id": 1,
        "name": "ZARA",
        "web": "https://www.zara.com/uk/",
        "description": "Spanish apparel retailer"
    },
    {
        "id": 2,
        "name": "Uniqlo",
        "web": "https://www.uniqlo.com/uk/en/home",
        "description": "Japanese casual wear retailer, designer and manufactorer"
    },
    {
        "id": 3,
        "name": "Mango",
        "web": "https://shop.mango.com/gb/women",
        "description": "Spanish clothing design and manufactoring company"
    },
    {
        "id": 4,
        "name": "Nike",
        "web": "https://www.nike.com/gb/",
        "description": "American multinational corporation that is engaged in the design, development, manufacturing, and worldwide marketing and sales of footwear, apparel, equipment, accessories, and services."
    },
    {
        "id": 5,
        "name": "Adidas",
        "web": "https://www.adidas.co.uk/",
        "description": "German multinational corporation that designs and manufactures shoes, clothing and accessories"
    },
    {
        "id": 6,
        "name": "New Balance",
        "web": "https://www.newbalance.co.uk/",
        "description": "American sports footwear and apparel brand that was established in 1906"
    },
    {
        "id": 7,
        "name": "Puma",
        "web": "https://uk.puma.com/uk/en/home",
        "description": "German multinational corporation that designs and manufactures athletic and casual footwear, apparel and accessories"
    },
    {
        "id": 8,
        "name": "Foot Locker",
        "web": "https://www.footlocker.co.uk/",
        "description": "American sportswear and footwear retailer"
    },
    {
        "id": 9,
        "name": "Converses",
        "web": "https://www.converse.com/uk",
        "description": "American shoe company that designs, distributes, and licenses sneakers, skating shoes, lifestyle brand footwear, apparel, and accessories"
    }
]

app.use(express.json())

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
  })


app.get("/", (req, res) => {
    res.send("Welcome to your Google searches!")
});

// To allow the user to access the 10 searches
app.get("/search", (req, res) => {
    res.json(searches)
})

// To allow the user to access each indivdual search, by using the id 
app.get("/search/:id", (req, res) => {
    const idx = parseInt(req.params.id)
    const matcher = searches.find( search => search.id === idx)
    res.json(matcher)
})