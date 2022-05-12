const csvtojson = require('csvtojson')
const fs = require('fs')

const authorsfilepath = "authors.csv"
const booksfilepath = "books.csv"
const magazinefilepath = "magazines.csv"

function csvjson()
{csvtojson()
.fromFile(authorsfilepath)
.then((json) => {
    // console.log(json)
    fs.writeFileSync("authors.json",JSON.stringify(json),"utf-8",(err) => {
        if(err) console.log(err)
    })
})

csvtojson()
.fromFile(booksfilepath)
.then((json) => {
    console.log(json)
    fs.writeFileSync("books.json",JSON.stringify(json),"utf-8",(err) => {
        if(err) console.log(err)
    })
})

csvtojson()
.fromFile(magazinefilepath)
.then((json) => {
    console.log(json)

    fs.writeFileSync("magazines.json",JSON.stringify(json),"utf-8",(err) => {
        if(err) console.log(err)
    })
})}
var f1 =0,f2=0,f3=0;
f1 = fs.statSync('./books.json');
f2 = fs.statSync('./authors.json');
f3 = fs.statSync('./magazines.json');
if(f1.size != 0 && f2.size != 0 && f3.size != 0 )
{
    functionality();
}
else
{
    csvjson();
    console.log(" Your data is converted into JSON ");
    
}


// functionality();
function functionality()
{
const book = require('./books.json')
const magazine = require('./magazines.json')
const author = require('./authors.json') 
    // find book by isbn

var isbn_book = book.filter( element => element.isbn =="5554-5545-4518")
console.log(isbn_book)

// find magazine by isbn


var isbn_magazine = magazine.filter( element => element.isbn =="5454-5587-3210")
console.log(isbn_magazine)

//find all books and magazine by author's email

console.log("************************************")

// var author_name = author.filter( element => element.email =="null-walter@echocat.org")
// console.log(author_name)

var find_book = book.filter( element => element.authors == "null-walter@echocat.org")
console.log(find_book);

var find_magazine = magazine.filter( element => element.authors == "null-walter@echocat.org")
console.log(find_magazine)


// print out all the books and magazine by sorting in order of title

console.log("############################")
var ans = book.concat(magazine);
ans.sort(function(a, b) {
    var title1 = a.title.toUpperCase();
    var title2 = b.title.toUpperCase();
    if (title1 < title2) {
      return -1;
    }
    if (title1 > title2) {
      return 1;
    }
    return 0;
  });
console.log(ans);
console.log("&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&");

// add data to json and then csv

var obj = {
    title: 'Bird Box',
    isbn: '1215-1545-5775',
    authors: 'kavyasharma@gmail.com',
    description: 'abc'  }; 
book.push(obj);

fs.writeFile('books.json', '', function(){console.log('data added to json')})
//console.log(book);
fs.writeFile('books.json',JSON.stringify(book), function(){console.log('data added to json')})


// json to csv
//console.log(book);
var array = typeof book != 'object' ? JSON.parse(book) : book;
console.log(array[0]);
var str = '';

for (var i = 0; i < array.length; i++) {
    var line = '';
    for (var index in array[i]) {
        if (line != '') line += ','

        line += array[i][index];
    }

    str += line + '\r\n';
}

console.log(str);
fs.writeFile('books.csv', '', function(){console.log('JSON converted to CSV again')})
//console.log(book);
fs.writeFile('books.csv',str, function(){console.log('Done')})
//console.log("Doneee");


}