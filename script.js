// Assume this variable points to your DOM element with id="grandparent"
const grandparent = document.querySelector('.Grandparent');
const parent = document.querySelector('.Parent');
const child = document.querySelector('.Child');

/**
 * Attach a click listener to the "grandparent" element.
 * 'click'  -> event type to listen for
 * (e) => { ... } -> callback runs when the event fires, receives Event object 'e'
 */
grandparent.addEventListener('click', (e) => { // e is the event object // the event that just happened // click
    console.log('Grandparent clicked');
});

parent.addEventListener('click', (e) => {
    console.log('Parent clicked');
    // e.stopPropagation(); // Stop the event from bubbling up to grandparent
});
child.addEventListener('click', (e) => {
    console.log('Child clicked');
    // e.stopPropagation(); // Stop the event from bubbling up to parent and grandparent
}); 

// Example: Loop through elements
const elements = [grandparent, parent, child];

elements.forEach((element, index) => {
    console.log(`Element ${index}:`, element);
});

// Or loop with for...of
for (const element of elements) {
    console.log(element);
}

// Or traditional for loop
for (let i = 0; i < elements.length; i++) {
    console.log(elements[i]);
}
// Array methods examples
const numbers = [1, 2, 3, 4, 5];

// map - transform each element
const doubled = numbers.map(num => num * 2);
console.log('Doubled:', doubled);

// filter - select elements matching condition
const evens = numbers.filter(num => num % 2 === 0);
console.log('Evens:', evens);

// reduce - combine elements into single value
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log('Sum:', sum);

// find - get first matching element
const firstEven = numbers.find(num => num % 2 === 0);
console.log('First even:', firstEven);

// some - check if any element matches
const hasEven = numbers.some(num => num % 2 === 0);
console.log('Has even:', hasEven);

// every - check if all elements match
const allPositive = numbers.every(num => num > 0);
console.log('All positive:', allPositive);