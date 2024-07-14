var modal = document.getElementById("modal");

var modalImg = document.getElementById("modal-img");
var images = document.getElementsByClassName("gallery-image");

for (let img of images) {
    img.onclick = function(){
        modal.style.display = "block";
        modalImg.src = this.src;
    }
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function() { 
    modal.style.display = "none";
}
