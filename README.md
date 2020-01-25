# Paginate.js

##### A simple JavaScript utility to paginate arrays.  
  
  
## Usage
* `Paginate` - Creates a new `Paginate` form a givin `Array`,
optionally with a specific `Number` of items per page.

    * `page(pageNum)` - Returns the specified page or return the last or the first if the specified page doesn't exists (as Array).

    * `next()` - Returns the next page or return the last page if there are no next pages (as Array).

    * `prev()` - Returns the previous page or return the first page if there are no previous pages (as Array).

    * `hasNext()` - Checks if there is a next page.

    * `hasPrev()` - Checks if there is a previous page.


## Examples :

```js
const Paginate = require("paginate-array.js")

// create some fake data
let fakeData = new Array(32)
	
// create a Paginate object
let pager = new Paginate(fakeData)
	
// print all the pages
while(pager.hasNext()) {
  console.log(pager.next())
}
		
// get page 1 (first page)
console.log(pager.page(1))
	
// then

// this will print page 2
console.log(pager.next())
```	

```js
const Paginate = require("paginate-array.js")

// create some fake data
let fakeData = new Array(48)

// create a Paginate object
let pager = new Paginate(fakeData)

// this will print the first page
console.log(pager.next())
// this will print the first page too, because there is no previous pages
console.log(pager.prev())
```

```js
const Paginate = require("paginate-array.js")

// create some fake data
let fakeData = new Array(28)

// create a Paginate object
let pager = new Paginate(fakeData)

// get next page (the 1st page)
console.log(page.next())
// get previous page (the 2nd page)
console.log(page.next())

// this will print true
console.log(pager.hasPrev())
// this will print true
console.log(pager.hasNext())
```

```js
const Paginate = require("paginate-array.js")

// create some fake data
let fakeData = new Array(9)

// create a Paginate object
let pager = new Paginate(fakeData)

// this will print the 2nd page
console.log(pager.page(2))

// this will print the last page, because the page 192993 doesn't exist
console.log(pager.page(192993))
// this will print the first page, because the page -2 doesn't exist
console.log(pager.page(-2)) 
```
