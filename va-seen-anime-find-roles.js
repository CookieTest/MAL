//Shit is WIP, it doesnt' work if you don't have 18if on your list (status doesn't matter)
//

var xresult = document.evaluate("//tbody[contains(., '18if')]", document, null, XPathResult.ANY_TYPE, null);
var nextxresult = xresult.iterateNext();


/* TODO
* Output the relevant anime.
* Change how correct table is selected to something sensible.
 */
