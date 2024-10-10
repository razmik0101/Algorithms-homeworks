// 1)

// insertion sort

// function recursiveInsertionSort(arr, n = arr.length) {
//   if (n <= 1) {
//     return;
//   }

//   recursiveInsertionSort(arr, n - 1);

//   let last = arr[n - 1];
//   let j = n - 2;

//   while (j >= 0 && arr[j] > last) {
//     arr[j + 1] = arr[j];
//     j--;
//   }
//   arr[j + 1] = last;
// }

// const arr = [12, 11, 13, 5, 6];
// recursiveInsertionSort(arr);
// console.log(arr);

// selection sort

// function recursiveSelectionSort(arr, n = 0) {
//   if (n >= arr.length - 1) {
//     return;
//   }

//   let minIndex = n;
//   for (let i = n + 1; i < arr.length; i++) {
//     if (arr[i] < arr[minIndex]) {
//       minIndex = i;
//     }
//   }

//   [arr[n], arr[minIndex]] = [arr[minIndex], arr[n]];

//   recursiveSelectionSort(arr, n + 1);
// }

// const arr2 = [29, 10, 14, 37, 16];
// recursiveSelectionSort(arr2);
// console.log(arr2);

///////////////////////////////

class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(element) {
    this.items.push(element);
  }

  dequeue() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }
    return this.items.shift();
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }

  printQueue() {
    return this.items.join(" ");
  }
}

let queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

console.log(queue);
console.log(queue.dequeue());
console.log(queue.printQueue());
