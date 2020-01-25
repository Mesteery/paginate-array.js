const Paginate = require("paginate-array.js")

// create some fake data
let fakeData = new Array(42)
	
// create a new Paginate object
let pager = new Paginate(fakeData)
	
// print all the pages
while(pager.hasNext()) {
  console.log(pager.next())
}
		
// print first page
console.log(pager.page(1))

// print second page
console.log(pager.next())
