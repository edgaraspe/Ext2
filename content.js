const targetNode = document.getElementById("app");
var c = 0;
var popup = document.createElement("div");
popup.innerHTML = "<div id='teamspop' style='visibility: hidden; position: relative;'><div style='border:0px solid red; width:310px; height:100px; position:absolute; bottom: 0; right:0; padding-bottom: 50px;'><img  style=' max-width: 100%;' src='chrome-extension://bppiinakdoiecmofjhinffjbgcfhkebc/popup.png'></div></div>";
const observer = new MutationObserver((mutations) => {
    addChecking();
});
function addChecking(){
    const targetNode2 = document.getElementById("editorParent_1");
    if(targetNode2 != null) {
        c++;
        if(c == 1) {
            targetNode2.addEventListener('click', function (evt) {
                    setInterval(myTimer, 4000);
                    function myTimer() {
                        let el = document.getElementById("teamspop");
                        el.style.visibility = "visible";
                    }
        });
    }
    }


}
document.body.append(popup);
observer.observe(targetNode, { characterData: true, subtree: true, childList: true });
