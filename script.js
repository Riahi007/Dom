var $nav = document.getElementsByClassName('nav')[0];
var $button = document.getElementsByClassName('button')[0];
function ColorRandom() {
    var max = 256;
    var min = 0;
    var r = Math.floor(Math.random() * (max - min)) + min;
    var g = Math.floor(Math.random() * (max - min)) + min;
    var b = Math.floor(Math.random() * (max - min)) + min;
    return `rgb(${r}, ${g}, ${b})`;
}
$button.addEventListener('click', function() {
    var change = ColorRandom();
    $nav.style.backgroundColor = change;
    console.log(change);
});
