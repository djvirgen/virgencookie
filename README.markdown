Virgen.Cookie
=============

A simple cookie library for JavaScript.

Usage
-----

Set a cookie

  // Set cookie name 'foo' with value 'bar' that expires in 3600 seconds.
  Virgen.Cookie.set('foo', 'bar', 3600);
  
Get a cookie's value

  // Get the value for the cookie named 'foo'
  var foo = Virgen.Cookie.get('foo');
  
Erase a cookie

  // Erase the cookie named 'foo'
  Virgen.Cookie.erase('foo');