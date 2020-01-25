const Paginate = require("paginate-array.js")

// create some fake data
let fakeData = new Array(42)
	
// create a new Paginate object
let pager = new Paginate(fakeData)
	
// print all the pages
while(pager.hasNext()) {
  console.log(pager.next())
}
		
// print the second page
console.log(pager.page(2))

// print the next page : third page
console.log(pager.next())

// print the previous page : first page
console.log(pager.prev())

// print the previous page only if there are previous pages
// (it's the same process for  pager.hasNext()
if (pager.hasPrev()) {
  console.log(pager.prev())
} else console.log("There are no previous page...")

// print the first page
console.log(pager.page(1))

// print the last page
console.log(pager.page(pager.totalPages))
