/**
 * Creates a new `Paginate` form a givin `Array`,
 * optionally with a specific `Number` of items per page.
 *
 * @param {Array} data
 * @param {Number} [perPage=10]
 * @constructor
 * @api public
 */

class Paginate {
  constructor(data, perPage) {
    if (!data) throw new Error('Required Argument Missing')
    if (!(data instanceof Array)) throw new Error('Invalid Argument Type')

    this.data = data
    this.perPage = perPage || 10
    this.currentPage = 0
    this.totalPages = Math.ceil(this.data.length / this.perPage)
  }


  /**
   * Calculates the offset.
   *
   * @return {Number}
   * @api private
   */

  #offset() {
    return ((this.currentPage - 1) * this.perPage);
  }

  /**
   * Returns the specified `page`.
   *
   * @param {Number} pageNum
   * @return {Array}
   * @api public
   */

  page(pageNum) {
    if (pageNum < 1) pageNum = 1
    if (pageNum > this.totalPages) pageNum = this.totalPages

    this.currentPage = pageNum

    let start = this.#offset()
    let end = start + this.perPage

    return this.data.slice(start, end);
  }

  /**
   * Returns the next `page`.
   *
   * @return {Array}
   * @api public
   */

  next() {
    return this.page(this.currentPage++)
  }

  /**
   * Returns the previous `page`.
   *
   * @return {Array}
   * @api public
   */

  prev() {
    return this.page(this.currentPage--)
  }

  /**
   * Checks if there is a next `page`.
   *
   * @return {Boolean}
   * @api public
   */

  hasNext() {
    return (this.currentPage < this.totalPages)
  }

  /**
   * Checks if there is a previous `page`.
   *
   * @return {Boolean}
   * @api public
   */

  hasPrev() {
    return (this.currentPage > 1)
  }
}

/**
 * Expose `Paginate`
 */

if (typeof module !== 'undefined') module.exports = Paginate