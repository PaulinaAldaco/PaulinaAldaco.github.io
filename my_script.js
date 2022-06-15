var colors = ["powderblue", "coral", "darkseagreen", "khaki", "lightpink"]
var idx = 0

function changeColor() {
    idx = (idx + 1) % 5
    document.body.style.background = colors[idx];

}

var b = document.getElementById("my-button")

b.onclick = function() {
    console.log("clicked");
    changeColor()
};