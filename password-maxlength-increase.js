// ==UserScript==
// @name     Increase password input maxlength
// @version  1
// @require https://code.jquery.com/jquery-3.3.1.min.js
// ==/UserScript==

$(document).ready(function(){
    let limitedPasswordFields = $('input[type="password"][maxlength]');
    if(limitedPasswordFields.length > 0)
        limitedPasswordFields.removeAttr("maxlength");
});
