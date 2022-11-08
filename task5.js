let queue = [
  "catHorse",
  "dogPig",
  "catHorse",
  "dogPig",
  "kangarooBear",
  "dogPig",
  "catHorse",
  "catHorse",
  "dogPig",
];


// 5a push catHrose to the back of the queue

queue.push('catHorse')
console.log(queue);

// 5b shift the first animal in the queue
queue.shift('catHorse');
console.log(queue);

// 5c unshift owlDonkey to the front of the queue
queue.unshift('owlDonkey')
console.log(queue);

// 5d pop the catHorse from the back of the queue

queue.pop();
console.log(queue);

// 5e splice the kangarooBear from the middle of the queue
queue.splice(queue.indexOf('kangarooBear'), 1);
console.log(queue);

const unofficialQueue = [
  "rabbitSalmon",
  "rabbitSalmon",
  "rabbitSalmon",
  "rabbitSalmon",
];

// 5f concat the unofficialQueue to the back of the queue

const newQueue = queue.concat(queue, unofficialQueue);
console.log(newQueue);

