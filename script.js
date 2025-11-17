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