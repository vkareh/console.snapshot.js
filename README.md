console.snapshot.js
===================

This is a small plugin that will override your `console.log()` function so that
objects are not displayed by reference.

This avoids the frustrating scenario of logging an object, updating it and then
logging it again to realize that both will now display the exact same object
with the exact same data, or that some other event has modified the object
outside of your current scope and now you're stuck wondering about your data.

To use, include it in your client-side code somehow after jQuery.

'''HTML
<script src="/js/jquery.js"></script>
<script src="/js/console.snapshot.js"></script>
'''

Then keep using `console.log()` as usual. The original functionality
(displaying object reference) is kept in `console.old()` in case you need it.
