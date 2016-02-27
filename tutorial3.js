/*
Conditional Operators

1) if else
2) switch case
 */

console.log('Example One: if else');
console.log('==============================');
var isSomeCondition = true;

if (isSomeCondition) {
	console.log('true!');
} else {
	console.log('false!');
}

console.log('Example Two: switch case');
console.log('==============================');

var activityCodeNo = 'asdasd'; // 'a', 'b', 'c'

var checkWhichActivityCase = function(activityCodeNo) {
	switch(activityCodeNo) {
	case 'a':
		console.log('case 1');
		break;
	case 'b':
		console.log('case 2');
		break;
	case 'c':
		console.log('case 3');
		break;
	default:
		console.log('default');
		break;
	}
}

checkWhichActivityCase('a');
checkWhichActivityCase('b');
checkWhichActivityCase('asdasd');


/*
3) comparision operators
==========================================

1) == 	equals to
2) === 	equals to and same type
3) != 	not equals to
4) !==	not equals to or not equal type
5) > 		greater than
6) <		less than
7) >= 	greater equal
8) <=		lesser equal
*/

//3.1 equals to ==
console.log('Example 3.1: equals to');
console.log('==============================');
if (1 == 2) {
	console.log('1 == 2 is true!');
} else {
	console.log('1 == 2 is false!');
}

console.log('Example 3.2: equals to and same type');
console.log('==============================');

var prata = 0.5;
var tehPing = 1.5;

var total = prata + tehPing;

if (total == '2.0') {
	console.log('total == \'2.0\' true');
} else {
	console.log('total == \'2.0\' false');
}

if (total === '2.0') {
	console.log('total === \'2.0\' true');
} else {
	console.log('total === \'2.0\' false');
}

/*
4) Logical Operators

a. && 	and
b. ||		or
c. !		not
*/

// Q:Describe what does the function "partyEntryChecker" does?
var partyEntryChecker = function(age, hasInvitation, isBlacklisted, luckyNumber) {
	if ((age >= 18 || hasInvitation) && !isBlacklisted) {
		console.log('Welcome to the party!');
	} else {
		if (luckyNumber == 5) {
			console.log('Its your lucky day! Welcome to the party!');
		} else {
			console.log('Sorry, better luck next time.');
		}
	}
}

console.log('4.1')
partyEntryChecker(16, false, false, 1);
console.log('4.2')
partyEntryChecker(17, true, false, 1);
console.log('4.3')
partyEntryChecker(18, true, false, 2);
console.log('4.4')
partyEntryChecker(19, false, false, 3);
console.log('4.5')
partyEntryChecker(19, true, true, 3);
console.log('4.6')
partyEntryChecker(19, true, true, 5);


/*
5) Loops
a. for loops
b. while
 */

//5a) for
console.log('Example 5a: for loop');
console.log('==============================');

var names = [
	'Alex',
	'Bryan',
	'Charlie'
];

for (i = 0; i < names.length; i++) {
	console.log(names[i]);
}
// gt stunt here
for (i = names.length; i >= 0; i--) {
	console.log(names[i]);
}

//5b) while
console.log('Example 5b: while loop');
console.log('==============================');

var count = 0;
while (count < 3) {
	console.log('count: ' + count);
	count++;
	--count;
	count += 1;
}

/*
6) Javascript Functions/"methods"
A JavaScript function is a block of code designed to perform a particular task.
It is executed when "something" invokes it (calls it).
*/

//Function declaration
function awesomeMethod(param) {
	console.log(param);
}
awesomeMethod('wheee');

//Function expression
var hipsterMethod = function(param) {
	console.log(param);
}
hipsterMethod('yahoo!');

/*
A useful link for more information between the 2

"...Function Declarations feel like they were intended to mimic Java style method declarations but Java methods are very different animals.
In JavaScript functions are living objects with values. Java methods are just metadata storage.
Both the following snippets define functions but only the Function Expression suggests that we are creating an object..."
Taken from https://javascriptweblog.wordpress.com/2010/07/06/function-declarations-vs-function-expressions/

XZ's opinion
In general, I would declare function like in 1)
function expression 2) is more a javascript style and it has its use cases.

In the example below, it is a loop function, running through every item of 'game.draft'.
for each item, apply the function as provided as the 2nd argument to the .each(collection, function)

So in this case, we could declare anonymous functions directly as the argument, like the example below
 */

// _.each(game.draft, function(player, index) {
// 	// logger.debug('index: ' + index);
// 	// logger.debug('player');
// 	// logger.debug(player);
//
// 	if (!player.team) {
//
// 	} else {
// 		var playerSlot = 0;
//
// 		logger.debug(player);
// 		logger.debug('player');
//
// 		switch(player.team) {
// 			case 'R':
// 				playerSlot = radCount;
// 				radCount++;
// 				break;
// 			case 'D':
// 				playerSlot = direCount + 5;
// 				direCount++;
// 				break;
// 		}
//
// 		logger.debug('playerSlot:after: ' + playerSlot);
//
// 		var user = Meteor.users.findOne({ username: player.name });
//
// 		//TODO pending playerSlot information, either 0-9 or rad/dire 0-4
// 		var mpr = {
// 			'username': player.name,
// 			'playerSlot': playerSlot,
// 			'minScore': user.profile.privateData.playerStats.minScore,
// 			'maxScore': user.profile.privateData.playerStats.maxScore,
// 			'score': user.profile.privateData.playerStats.score
// 		};
//
// 		matchPlayerResults.push(mpr);
// 		usernames.push(mpr.username);
// 	}
// });

var awesomeMethod;

//Alternatively, or we could express the function as a variable and supply it
awesomeMethod = function(user) {
	console.log('awesomeMethod: ' + user.name);
}

//same as below
_.each(users, awesomeMethod(user));
//same as above
_.each(users, function(user) {
	console.log(user.name);
});

var users = [
	{'name': 'stan'},
	{'name': 'dom'},
	{'name': 'xz'}
];

//Alternatively, or we could express the function as a variable and supply it
awesomeMethod = function(user) {
	console.log('awesomeMethod: ' + user.name);
}

//the name you give as the param for the function is not a global variable, its a local variable.
//which means this param name will work just fine
var awesomeMethod2 = function(dumpsterObject) {
	console.log('dumpstered' + dumpsterObject.name);
}

//btw methods can take zero, one or multiple params
var awesomeMethod3 = function() {
	console.log('and nothing will come out of nothing');
}

//on a side note, the code above will give the exact same result as the code below
for (i = 0; i < users.length; i++) {
	awesomeMethod(users[i]);
	awesomeMethod2(users[i]);
}
awesomeMethod3();
