document.addEventListener('DOMContentLoaded', function() {
    var typedElements = document.querySelectorAll('.typing');

    typedElements.forEach(function(el, index) {
        // Create a unique ID for each element
        var id = "typed-" + index;
        el.id = id;

        var typedText = el.getAttribute('data-typed-text');
        
        new Typed('#' + id, {
            strings: [typedText],
            typeSpeed: 50, // Adjust typing speed in milliseconds
            showCursor: false, // Set to true if you want to show the blinking cursor
            onComplete: function(self) { // Remove ID after completion to avoid duplicate IDs
              el.removeAttribute('id');
            },
        });
    });
});
