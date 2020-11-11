const content = document.getElementById("id1");
let cookie = $.cookie("digest-name");
if (cookie != null) content.innerHTML = cookie;
