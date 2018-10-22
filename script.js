<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Array Reverse</h2>

<p>Result:</p>

<p id="demo"></p>

<script>

let myarray = [1,2,3,4,5,6,7,8,9];
var limit;
var i;
function reverseA() {
	let aLen = myarray.length-1;
  limit = aLen / 2;
	for (i = 0; i < limit; i++) {
		let a = myarray[i];
    	myarray[i] = myarray[aLen-i];
    	myarray[aLen-i] = a;
	}
}
reverseA();

</script>

</body>
</html>
