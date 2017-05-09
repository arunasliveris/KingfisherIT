
function openTab(evt, tabName) {
    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
	}
document.getElementById("defaultOpen").click();

function showStartFinish(e) {
				var element = e.parentNode.parentNode.parentNode.childNodes[9];
				element.setAttribute("class", "startFinishActive");
			}
			function removeStartFinish(e) {
				var element = e.parentNode.parentNode.parentNode.childNodes[9];
				element.setAttribute("class", "startFinishHidden");
			}
