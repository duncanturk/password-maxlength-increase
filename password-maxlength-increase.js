// ==UserScript==
// @name     Increase password input maxlength
// @version  1
// @require https://code.jquery.com/jquery-3.3.1.min.js
// ==/UserScript==

$('input[type="password"][maxlength]').removeAttribute("maxlength");
