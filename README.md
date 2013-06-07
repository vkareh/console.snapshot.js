console.snapshot.js
===================

This is a small plugin that will override your console.log function so that
objects are not displayed by reference.

This avoids the frustrating scenario of logging an object, updating it and then
logging it again to realize that both will now display the exact same object
with the exact same data.

