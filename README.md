# password-maxlength-increase
One line Greasemonkey script to remove the maxlength of password input fields.
Use this with caution and only on pages where you know that it does not cause problems.

This script exists for services which have a `maxlength` attribute on password fields which are only enforced clientside.
Some of these services do not add this restriction on alle pages you have to enter a password.
E.g. if the registration or password reset pages do not have a `maxlength` but the login page has you're not able to log into you account anymore (e.g. PayPal had this problem once).
This script removes those limitations everywhere.
