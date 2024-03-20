var image = document.getElementById("img-center");
var h = image.offsetHeight;
   
image.addEventListener("mouseover", function() {
   h += 30;
   image.style.height = h + "px"; 
})

image.addEventListener("mouseout", function() {
   h -= 30;
   image.style.height = h + "px"; 
})

var pictures = ["parr1.jpg", "parr2.jpg", "parr3.jpg", "parr4.jpg", "parr5.jpg"];

var img = document.getElementsByTagName("img");
for(let i=0; i<img.length; i++) {
    var ch = [0, 1, 2];

    image.addEventListener("click", function() {
        ch[i]++;
        if(ch[i] == 5) ch[i] = 0;
        img[i].src = 'images/' + pictures[ch[i]];
    });
}