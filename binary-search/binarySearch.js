const items = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
];

const binarySearch = (searchKey, dataList) => {
  let low = 0; 
  let high = dataList.length - 1;
  let mid = 0;

  while (low <= high) {   
    mid = Math.trunc((high + low) / 2);
    const value = dataList[mid];
    if (value === searchKey) {
      return {
        status: "Item Found",
        value,
        index: mid,
      };
    } else if (searchKey > value) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return {
    status: "Item Not Found",
    value: null,
    index: null,
  };
};


console.log("BINARY SEARCH  Search For 1 : ", binarySearch(1, items));
console.log("BINARY SEARCH  Search For 30 : ", binarySearch(30, items));
console.log("BINARY SEARCH  Search For 20 : ", binarySearch(20, items));
console.log("BINARY SEARCH  Search For 10 : ", binarySearch(10, items));
