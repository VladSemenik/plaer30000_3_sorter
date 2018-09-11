class Sorter {
  constructor() {
    // your implementation
    this.arr = [];
    this.compareFunction;
    this.arrForSort = [];
  }

  add(element) {
    // your implementation
      this.arr.splice(this.arr.length,0,element);
  }

  at(index) {
    // your implementation
    return this.arr[index];
  }

  get length() {
    // your implementation
    return this.arr.length;
  }

  toArray() {
    // your implementation
    return this.arr;
  }

  sort(indices) {
    // your implementation
    indices.sort();
    for(let i=0; i < indices.length; i++){
      this.arrForSort.splice(this.arrForSort.length, 0, this.arr[indices[i]]);
    }
    if(this.compareFunction)
      this.arrForSort.sort(this.compareFunction);
    else this.arrForSort.sort( function(a,b){
       return a-b;
    });

    for(let i = 0; i < indices.length; i++){
      this.arr.splice(indices[i],1,this.arrForSort[i]);
    }
    this.arrForSort = [];
    this.toArray();
  }

  setComparator(compareFunction) {
    // your implementation
    this.compareFunction = compareFunction;
  }
}

module.exports = Sorter;