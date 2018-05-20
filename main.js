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
	val = document.getElementById('select1').value
	if (val == '@') {
		symb = '&nbsp;&nbsp;&nbsp;&nbsp'
	} else if (val == 'X' ) {
		symb = '&nbsp;&nbsp;&nbsp'
	} else if (val == '#' || val == '$') {
		symb = '&nbsp;&nbsp'
	}
	printPyramid(document.getElementById('input').value)
}) //select1 click

document.getElementById('input').addEventListener("mousemove", function() {
	printPyramid(document.getElementById('input').value)
	let x = document.getElementById('hight')
	x.innerHTML = document.getElementById('input').value
}) // input move + value