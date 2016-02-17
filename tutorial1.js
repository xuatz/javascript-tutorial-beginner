/*
Here is some short lesson on the concept of variables/objects.

They are data, that stores value, for usage for the application.
These values may change based on the information and instructions recieved by the application.
*/

var sum = 0;

var a = 2;
var b = 3;

sum = a + b;

alert('sum: ' + sum);

//================================================

var someCondition = true;

if (someCondition) {
	a + 5;
} else {
	a = a + 6;
}

alert('a: '  + a);
alert('b: '  + b);

//================================================

b = b + 10;

if (!someCondition) {
	a = b;
	b = 4;
}

alert('a: '  + a);
alert('b: '  + b);

//================================================

b = a;
a = 23;

alert('a: '  + a);
alert('b: '  + b);

//================================================





