/*********************** http.request() *****************************/

// server to server

const http = require('http')

// API - https://fakestoreapi.com/products/1
const options = {
    hostname: "fakestoreapi.com",
    path: "/products/1",
    methods: "GET",
}

// http.request with two arguments
const apiRequest = http.request(options, (apiRes) => {
    // on => EventListener
    apiRes.on('data', (data) => {
        console.log(data.toString())
    })
})

apiRequest.on('error', () => {
    console.log(e) // print error
})

apiRequest.end()

/*
OUTPUT :

{"id":1,"title":"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops","price":109.95,
"description":"Your perfect pack for everyday use and walks in the forest.Stash your laptop
(up to 15 inches) in the padded sleeve, your everyday","category":"men's clothing",
"image":"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg","rating":{"rate":3.9,"count":120}}

*/