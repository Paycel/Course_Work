var tmp = new Array();
var tmp2 = new Array();
var param = new Array();
var get = decodeURI(location.search);
if(get !== '') {
  tmp = (get.substr(1)).split('&');
  for(var i=0; i < tmp.length; i++) {
    tmp2 = tmp[i].split('=');
    param[tmp2[0]] = tmp2[1];
  }
  for (var key in param) {
    console.log(key+" = "+param[key]);
  }
}
