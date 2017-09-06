console.log('Loaded!');
// change the text of main=text div
var element = document.getById(',main-text'
    );
    
element.innerHTML =' New value';

// move the image
var img = document.getElementById('madi');
img.onclick = function()  {
  img.style.marginLeft = '100px';
    };