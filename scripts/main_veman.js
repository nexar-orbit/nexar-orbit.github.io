/*
var image2 = document.querySelector('img');
image2.onclick = function(){
	var osrc = image2.getAttribute('src');
	if (osrc =='images/openedx.jpeg')
	{
		image2.setAttribute('src','images/EDX.svg');
	} 
	else
	{	
		image2.setAttribute('src','images/openedx.jpeg');
	}
}

*/
var btn = document.querySelector('button');
//var myhdg = document.querySelctor('h1');

function setUserName(){
  alert("HHello");
  var myName = prompt('please enter your name');
localStorage.setItem('name',myName);
//myhdg.innerHTML = 'Open edx  is cool, ' + 'myName';
  alert("Bye");
}
/*
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myhdg.innerHTML = 'Open edx is cool, ' + storedName;
}
*/
btn.onclick = function() {
  setUserName();
}
