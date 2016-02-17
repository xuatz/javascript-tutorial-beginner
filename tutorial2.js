/*
In Javascript, variables do not have a fixed/explicit 'data type' unlike in Java where variables data type are explicitly defined
e.g.
int noOfPeople = 5;
String nameOfOwner = "Xuan Zhi";
List<String> participants;

But that does not mean that there is no concept of datatype in javascript
below are some of the more common datatypes:
*/

//1) String
var str = 'huat ah';

//2) Number 
var sum = 10.55;

//3) Boolean 
var isHot = true;

//4) array 
var users = ['stan', 'dom', 'xz']
alert('1) users[1]: ' + users[1]);

//5) javascript object 
var aGame = {
	'title': 'huat ah',
	'duration': '500'
}
alert('2) aGame.duration: ' + aGame.duration);

//6) null
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
considering the user is remotely located, we have no means to contact him.

Assuming that the development team assume

asdsadasdasd
asdasdasd


*/

TODO talk about significance of null
TODO show example of empty string, whitespace vs null

7) undefined
TODO talk about diffence between null and undefined




Javascript takes the liberity to assume the datatypes of variables, based on the way they are used.
Which means things can go haywire if u do funny shit
*/

var isEmpty = true;

var sum = 0;

alert(sum + isEmpty);

//================================================

var myName = 'huat ah';

alert(myName + isEmpty);

//================================================

var a = 2;
var b = 3;

alert(a + b);
alert('' + a + b);

//================================================


/*

		String[] strArr = {"Hi", "HiHi"};
		System.out.println("str[0]: "+strArr[0]);
		setStr(strArr);
		System.out.println("str[0]: "+strArr[0]);
		
		// ==============
		
		StringBuffer sb = new StringBuffer();
		sb.append("Guava");
		setSb(sb);
		sop(sb.toString());
		
		// =================
		
//		int i = 0;
//		sop("count = "+ ++i+i);
		
		int i = 0;
		sop("count = "+ i+++i);
		
//		int i = 0;
//		sop("count = "+ (++i + ++i) + ++i);


*/