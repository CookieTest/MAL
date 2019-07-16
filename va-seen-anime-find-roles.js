//Shit is WIP, it doesn't work. And going like this, won't work if you don't have 18if on your list (status doesn't matter)
/* Piece of shit I kept around for some reason. The smell has gotten worse over time.
var xresult = document.evaluate("//tbody[contains(., '18if')]", document, null, XPathResult.ANY_TYPE, null);
var nextxresult = xresult.iterateNext();
*/

eliminationList = document.getElementsByClassName("borderClass") /* Maybe create a bit more strict criteria for getting elements, 
gives 600+ results on Shimazaki Nobunaga's page even though just 137 anime titles */
onlistList = [] //List of anime (objects) that you have on your list
animeLinkExp = /myanimelist.net\/anime\/\d+/
for(eliminationItem in eliminationList){
	if(animeLinkExp.test(eliminationItem.children[0].outerHTML.toString())){
		if(eliminationItem.children[1].children[0].innerText == "edit"){ //Test if on list (if edit button or add button)
			onlistList.push({
				aname:(eliminationItem.children[0].innerText),
				alink:(eliminationItem.children[0].getAttribute("href")),
				aimagesrc:(eliminationItem.previousElementSibling.children[0].children[0].children[0].getAttribute("src"))
			})
		}
	}
}


/* TODO
* Output the relevant anime title, image and link to somewhere (stored in onlistList).
* Make sure doesn't add anime from "anime staff positions" table.
* Change how correct table is selected to something sensible.
 */
