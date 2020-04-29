declare module 'paginate-array.js' {
  export default class Paginate<T> {
    constructor (data: T[], perPage?: number);
    public data: T[];
    public perPage: number;
    public currentPage: number;
    public totalPages: number;
    
    private _offset(): number;
    public page(page: number): T[];
    public next(): T[];
    public prev(): T[];
    public hasNext(): boolean;
    public hasPrev(): boolean;
  }
}