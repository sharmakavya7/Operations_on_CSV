const csvtojson = require('csvtojson')
const fs = require('fs')
 
const authorsfilepath = "authors.csv"
const booksfilepath = "books.csv"
const magazinefilepath = "magazines.csv"

csvtojson()
.fromFile(authorsfilepath)
.then((json) => {
    // console.log(json)
 
    fs.writeFileSync("output.json",JSON.stringify(json),"utf-8",(err) => {
        if(err) console.log(err)
    })
})

csvtojson()
.fromFile(booksfilepath)
.then((json) => {
    console.log(json)
 
    fs.writeFileSync("output.json",JSON.stringify(json),"utf-8",(err) => {
        if(err) console.log(err)
    })
})

csvtojson()
.fromFile(magazinefilepath)
.then((json) => {
    console.log(json)
 
    fs.writeFileSync("output.json",JSON.stringify(json),"utf-8",(err) => {
        if(err) console.log(err)
    })
})

// console.log(json.)