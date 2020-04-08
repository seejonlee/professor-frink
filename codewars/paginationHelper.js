// TODO: complete this object/class

// The constructor takes in an array of items and a integer indicating how many
// items fit within a single page
function PaginationHelper(collection, itemsPerPage){
  /**
   * TODO:
   * 1. Check array type
   * 2. Check non-zero itemsPerPage
   */
  this.itemsPerPage = itemsPerPage;
  this.collection = collection;
  this.totalItems = (this.collection.length > 0 ? collection.length : 0);
  this.totalPages = Math.ceil(this.totalItems / this.itemsPerPage);

  // Internal util helpers.
  this.isPageInRange = function(page) {
    return page >= 0 && page < this.totalPages;
  }

  this.isItemInRange = function(index) {
    return index >= 0 && index < this.totalItems;
  }
}

// returns the number of items within the entire collection
PaginationHelper.prototype.itemCount = function() {
  return this.totalItems;
}

// returns the number of pages
PaginationHelper.prototype.pageCount = function() {
  return this.totalPages;
}

// returns the number of items on the current page. page_index is zero based.
// this method should return -1 for pageIndex values that are out of range
PaginationHelper.prototype.pageItemCount = function(pageIndex) {
  if (!this.isPageInRange(pageIndex)) return -1;

  return (
      pageIndex === this.totalPages - 1 ?
      this.totalItems % this.itemsPerPage :
      this.itemsPerPage
    );
}

// determines what page an item is on. Zero based indexes
// this method should return -1 for itemIndex values that are out of range
PaginationHelper.prototype.pageIndex = function(itemIndex) {
  if (!this.isItemInRange(itemIndex)) return -1;

  // Subtraacting 1 since pages are zero-based.
  return Math.ceil((itemIndex + 1) / this.itemsPerPage) - 1;
}

let instance = new PaginationHelper([1, 2, 3, 4, 5, 6, 7], 2);
console.log(instance);
console.log('itemCount(): ', instance.itemCount());
console.log('pageCount(): ', instance.pageCount());
console.log('pageItemCount(1) ', instance.pageItemCount(1));
console.log('pageItemCount(1) ', instance.pageItemCount(3));
console.log('pageItemCount(4) ', instance.pageItemCount(4));
console.log('pageItemCount(0) ', instance.pageItemCount(0));
console.log('pageItemCount(5) ', instance.pageItemCount(5));
console.log('pageIndex(6): ', instance.pageIndex(6));
console.log('pageIndex(5): ', instance.pageIndex(5));
console.log('pageIndex(0): ', instance.pageIndex(0));
console.log('pageIndex(7): ', instance.pageIndex(7));
console.log('pageIndex(-1): ', instance.pageIndex(-1));
