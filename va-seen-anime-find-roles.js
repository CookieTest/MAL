/* Piece of shit I kept around for some reason. The smell has gotten worse over time. V0.1
var xresult = document.evaluate("//tbody[contains(., '18if')]", document, null, XPathResult.ANY_TYPE, null);
var nextxresult = xresult.iterateNext();
*/

//V0.3
var onlistList = []; //List of anime (objects) that you have on your list
var notOnList = []; //List of anime that don't have edit button next to them (shouldn't be on your list)
var headers = document.getElementsByClassName("normal_header");
for(thing of headers){
	if(thing.childNodes.length >= 2 && thing.childNodes[1].nodeType == Node.TEXT_NODE && thing.childNodes[1].nodeValue == "Voice Acting Roles"){
		if(thing.nextElementSibling.tagName.toLowerCase() == "table"){
			var VAtbody = thing.nextElementSibling.children[0]; //Possibly unnecessary variable, just put things in eliList
			var eliList = VAtbody.children;
			listloop:{
				for(var eliItem of eliList){
					try{
						if(eliItem.children[1].children[0].className.includes("button_edit") && eliItem.children[1].children[0].innerText == "edit"){
							//Anime is on list
							AddOnListAnime(eliItem);
						}
						else if(eliItem.children[1].children[0].className.includes("button_edit") || eliItem.children[1].children[0].innerText == "edit"){
							//You should not get here, but just in case..
							AddOnListAnime(eliItem);
							throw 1;
						}
						else{
							notOnList.put(eliItem.children[1].children[0].innerText);
						}
					}
					catch(err){
						switch (err){
							case 1:
								console.log("MAL did something different than expected. Either the Add/Edit button next to the anime " +
								"has button_edit class or the button says edit on it, but not both. As such, unsure if the anime is " +
								"on your list.\n" +
								"Continuing as if the anime was on your list.");
								break;
							default:
								console.log("Script is lost and can't find Voice Acting Roles table or something else has gone wrong.\n" +
									"Ending script execution.");
								break listloop;
						}
					}
				}
			}
		}
	}
}
function AddOnListAnime(onListAnime){
	onlistList.put({
		aname:(onListAnime.children[1].children[0].innerText),
		alink:(onListAnime.children[1].children[0].getAttribute("href")),
		aimagesrc:(onListAnime.children[0].children[0].children[0].children[0].getAttribute("src"))
	});
}

/* Incomplete V0.2
var eliminationList = document.getElementsByClassName("borderClass")
var animeLinkExp = /myanimelist.net\/anime\/\d+/
for(var eliminationItem in eliminationList){
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
*/


/* TODO
* Output the relevant anime title, image and link to somewhere (stored in onlistList).
* Make sure doesn't add anime from "anime staff positions" table. - Shouldn't for now. 
* Change how correct table is selected to something sensible. - Good enough.
*/
