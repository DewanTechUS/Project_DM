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

