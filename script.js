// Variable declaration and initialization to empty string
var res = "";
//generate random numbers
for (var i = 0; i < 1000; i++) {
  var rand = Math.ceil(Math.random() * 9);
  res += rand;
}
document.write("<p>" + res + "</p>");
