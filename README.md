# Paginate.js ![Testing](https://github.com/mestery69/paginate.js/workflows/Testing/badge.svg)

**A simple JavaScript utility to paginate arrays.**
  
## Usage
  
* Creates a new `Paginate` form a givin `Array`,
optionally with a specific `Number` of items per page : `new Paginate(array, /* optionnaly number */)` - return Paginate object

    * `page(pageNum)` - Returns the specified page or return the last or the first if the specified page doesn't exists (as Array).

    * `next()` - Returns the next page or return the last page if there are no next pages (as Array).

    * `prev()` - Returns the previous page or return the first page if there are no previous pages (as Array).

    * `hasNext()` - Checks if there is a next page.

    * `hasPrev()` - Checks if there is a previous page.


## Examples :

```js
const Paginate = require("paginate-array.js")

// create some fake data
let fakeData = Array.from(new Array(35).keys())

// create a Paginate object with 10 items per page (it's the default value)
let pager = new Paginate(fakeData)

// print the tenth page
console.log(pager.page(10))

// print the next page : eleventh page
console.log(pager.next())

// print the previous page : tenth page
console.log(pager.prev())
```

```js
const Paginate = require("paginate-array.js")

// create some fake data
let fakeData = Array.from(new Array(14).keys())

// create a Paginate object with 5 items per page
let pager = new Paginate(fakeData, 5)

// print false
console.log(pager.hasPrev())
// print true
console.log(pager.hasNext())
```
