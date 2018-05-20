var val = document.getElementById('select1').value
var pyramid = document.getElementById('pyramid')
var symb = '&nbsp;&nbsp'

function printPyramid(height) {
	let str = val
	document.getElementById('pyramid').innerHTML = ''
	for (let j = height; j!=0; j--) {
		str = str + val
		let par = document.createElement('p')
		pyramid.appendChild(par).innerHTML = symb.repeat(j-1)
		pyramid.appendChild(par).innerHTML += str
	}
} // printPyramid

document.getElementById('select1').addEventListener("click", function () {
	let s1 = '&nbsp;&nbsp;&nbsp;&nbsp'
	let s2 = '&nbsp;&nbsp;&nbsp'
	let s3 = '&nbsp;&nbsp'
	val = document.getElementById('select1').value
	val == '@' ? symb = s1 : val == 'X' ? symb = s2: val == '#' || val == '$' ? symb = s3 : s3
	// spaces for each symbol
	printPyramid(document.getElementById('input').value)
}) //select1 click

document.getElementById('input').addEventListener("mousemove", function() {
	printPyramid(document.getElementById('input').value)
	let x = document.getElementById('hight')
	x.innerHTML = document.getElementById('input').value
}) // input move + value