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
