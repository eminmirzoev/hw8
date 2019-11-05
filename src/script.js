const modal = document.getElementById('myModal');


const img = document.getElementsByClassName("myImg");
const modalImg = document.getElementById("img");
const captionText = document.getElementById("caption");

for (let i = 0; i < img.length; i++) {
    let temp = img[i];

    temp.onclick = function(){
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }
};

const span = document.getElementsByClassName("close")[0];

span.onclick = function() {
  modal.style.display = "none";
};