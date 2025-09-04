function* getData(number) {
  let start = 0;
  while (start < number) {
    start++;
    if (start === number) {
      return start;
    }
    yield start;
  }
}

let apiCall = getData(5);
console.log(apiCall.next());
console.log(apiCall.next());
console.log(apiCall.next());
console.log(apiCall.next());
console.log(apiCall.next());
console.clear();

let array = [10, 20, 30, 40];
// let iterator = array[Symbol.iterator]();
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());

let _iterator = {
  data: [],
  loop() {
    let index = -1;
    let data = this.data;
    return {
      next() {
        if (index === data.length - 1) {
          index = -1;
        }
        index++;
        let done = data[index] === undefined ? true : false;
        return { value: data[index], done };
      },
    };
  },
};

_iterator.data = array;
let iterator = _iterator.loop();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
