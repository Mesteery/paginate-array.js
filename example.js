const Paginate = require("paginate-array.js")

// create some fake data
let fakeData = Array.from(new Array(42).keys())

// create a new Paginate object
let pager = new Paginate(fakeData, 11)
		
// print the last page
console.log(pager.page(pager.totalPages))

// print the first page
console.log(pager.page(1))

// print the next page : second page
console.log(pager.next())

// print the previous page : first page
console.log(pager.prev())

// print "There are no previous page..."
if (pager.hasPrev()) {
  console.log(pager.prev())
} else console.log("There are no previous page...")
