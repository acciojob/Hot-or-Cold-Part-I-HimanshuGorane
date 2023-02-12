//your code here
document.getElementById("btn").addEventListener('click',function() {
	var num = Math.floor(Math.random()*41)+20; //By using the formula(max-min+1)+min
	document.getElementById("num").innerHTML=num;
});
