/*
In Javascript, variables do not have a fixed/explicit 'data type' unlike in Java where variables data type are explicitly defined
e.g.
int noOfPeople = 5;
String nameOfOwner = "Xuan Zhi";
List<String> participants;

But that does not mean that there is no concept of datatype in javascript
below are some of the more common datatypes:
*/

//========================
//1) String
//========================
var str = 'huat ah';

//========================
//2) Number 
//========================
var sum = 10.55;

//========================
//3) Boolean 
//========================
var isHot = true;

//========================
//4) array 
//========================
var users = ['stan', 'dom', 'xz']
alert('1) users[1]: ' + users[1]);

//========================
//5) javascript object 
//========================
var aGame = {
	'title': 'huat ah',
	'duration': '500'
}
alert('2) aGame.duration: ' + aGame.duration);

// a JSON object is a nice and neat way to store logically group a set of information together

var players = [
	{
		'name': 'Messi',
		'age': '28',
		'position': 'RW'
	},
	{
		'name': 'Neymar',
		'age': '24',
		'position': 'LW'
	}
]

var player = players[0];

alert('2.5) player.name: ' + player.name);
alert('2.5) player.position: ' + player.position);

//========================
//5.5) fun fact
//========================
//arrays can contain objects, means its not subjected to String, Number, etc.
//you can put arrays inside arrays, or even javascript objects
//the other way round also works, i.e. putting arrays inside a json object

var arr1 = [
	[
		{
			'title': 'nice title1',
			'duration': '500'
		},
		{
			'title': 'nice title numba 2',
			'duration': '450'
		}
	],
	[
		{
			'title': 'nice title 3',
			'duration': '500'
		},
		{
			'title': 'nice title numba 4',
			'duration': '450'
		}
	]
];

alert('3.5) arr1[0][1].title: ' + arr1[1][0].title);


//========================================================================
//6) null
//========================================================================
/*
the significance of null is quite big in programming.
Its value is similar to introduction of the the value '0' to mathematics by the Indians.

null represents an intentional lack of data. It is unambigious and useful.

An example of how things can get ambigious
*/

var comment = 'you must be really smart';

//'comment' is a text field that allows users to change

//in this case, the user decide that he gt no comments
comment = '';

/*
So for the developers, should they interpret it as
1) user missed out a field.
2) user meant that they literally have nothing to say.

There is no right or wrong, because both scenarios are real possibilities.

Hence there is a need of the data type 'null'
If there is NO INFORMATION, fields should take up the value of 'null'.
Whitespace and empty string should technically be not allowed (enforced by good programming practices), 
but if they do, it should be treated as intentional with some special purpose and definitely not a "empty" field
*/

//========================================================================
//7) undefined
//========================================================================

/*
If we already have null, then what is the purpose of undefined?

The datatype 'undefined' is not "standard" in programming, but it is in use in javascript. 
It is used to represent information that is expected to be there but not provided.

An example would be this
*/
var a;

if (a === undefined) {
	alert('huat ah');
} else {
	alert('no huat');
}

//There are other applications such as below
function goodTest(first, second, third) {
	if (first) {
		alert('there is 1 param: ' + first);
	}

	if (second) {
		alert('there is 2: ' + second);
	}

	if (third) {
		alert('there is 3: ' + third);
	}
}

goodTest('huat');
goodTest('huat', null);
goodTest('huat', undefined);
goodTest('huat', 'pika');
goodTest('huat', 'yahoo', 'google');

// ==============================================

/*
With the knowledge of different datatypes in javascript and the ambigious nature of 'var' in javascript,
one can imagine that if handled carelessly, can result in much disaster.
Javascript takes the liberity to assume the datatypes of variables, based on the way they are used.
Below are some example to play around with.
*/

var isEmpty = true;

var sum = 0;

alert('fun example 1');
alert(sum + isEmpty);

//================================================

var myName = 'huat ah';

alert('fun example 2');
alert(myName + isEmpty);

//================================================

var a = 2;
var b = 3;

alert('fun example 3');
alert(a + b);

alert('fun example 4');
alert('' + a + b);

//================================================

