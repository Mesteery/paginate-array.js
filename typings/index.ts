/// <reference path="index.d.ts" />

import Paginate from 'paginate-array.js'

const fakeData: number[] = Array.from(new Array(260).keys());
const pager = new Paginate(fakeData, 20)

console.log(pager.page(1)) // should return first page
console.log(pager.page(255)) // should return last page

console.log(pager.prev()) // should return before last page
console.log(pager.next()) // should return last page

console.log(pager.hasNext()) // should return false
console.log(pager.hasPrev()) // should return true
