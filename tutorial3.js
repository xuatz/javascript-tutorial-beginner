/*
Conditional Operators

1) if else
2) switch case
 */

var isSomeCondition = true;

if (isSomeCondition) {
	alert('true!');
} else {
	alert('true!');
}

var activityCodeNo = 'asdasd'; // 'a', 'b', 'c'

switch(activityCodeNo) {
case 'a':
	alert('case 1');
	break;
case 'b':
	alert('case 2');
	break;
case 'c':
	alert('case 3');
	break;
default:
	alert('default');
	break;
}

/*
TODO comparision tutorial
 */
if (1 > 2) {
	alert('true!');
} else {
	alert('true!');
}

/*
Loops
 */

//1) for
for (i = 0; i < 3; i++) {
	alert(i);
}
//2) while

var count = 0;
while (count < 3) {
	alert('count: ' + count);
	count++;
	--count;
	count += 1;
}

//Function declaration
function awesomeMethod(param) {
	alert(param);
}
awesomeMethod('wheee');

//Function expression
var hipsterMethod = function(param) {
	alert(param);
}
hipsterMethod('yahoo!');

/*
A useful link for more information between the 2

"...Function Declarations feel like they were intended to mimic Java style method declarations but Java methods are very different animals. 
In JavaScript functions are living objects with values. Java methods are just metadata storage. 
Both the following snippets define functions but only the Function Expression suggests that we are creating an object..."
Taken from https://javascriptweblog.wordpress.com/2010/07/06/function-declarations-vs-function-expressions/

XZ's opinion
In general, you should declare function like in 1), but there are use cases for function expression, its more specific for javascript uses.

In the example below, it is a loop function, running through every item of 'game.draft'.
for each item, apply the function as provided as the 2nd argument to the .each(collection, function)

So in this case, we could declare anonymous functions directly as the argument, like the example below
 */

_.each(game.draft, function(player, index) {
	// logger.debug('index: ' + index);
	// logger.debug('player');
	// logger.debug(player);
	
	if (!player.team) {

	} else {
		var playerSlot = 0;

		logger.debug(player);
		logger.debug('player');

		switch(player.team) {
			case 'R':
				playerSlot = radCount;
				radCount++;
				break;
			case 'D':
				playerSlot = direCount + 5;
				direCount++;
				break;
		}

		logger.debug('playerSlot:after: ' + playerSlot);

		var user = Meteor.users.findOne({ username: player.name });

		//TODO pending playerSlot information, either 0-9 or rad/dire 0-4
		var mpr = {
			'username': player.name,
			'playerSlot': playerSlot,
			'minScore': user.profile.privateData.playerStats.minScore,
			'maxScore': user.profile.privateData.playerStats.maxScore,
			'score': user.profile.privateData.playerStats.score
		};

		matchPlayerResults.push(mpr);
		usernames.push(mpr.username);
	}
});

/*
Alternatively, or we could express the function as a variable and supply it
 */
//the name you give as the param is not a global variable, its a local variable.
var awesomeMethod = function(user) {
	alert(user.name);
}

//which means this param name will work just fine
var awesomeMethod2 = function(dumpsterObject) {
	alert('dumpstered' + dumpsterObject.name);
}

//btw methods can take zero, one or multiple params
var awesomeMethod3 = function() {
	alert('and nothing will come out of nothing');
}

var users = [
	{'name': 'stan'}, 
	{'name': 'dom'}, 
	{'name': 'xz'} 
];

// _.each(users, awesomeMethod(user));

//on a side note, the code above will give the exact same result as the code below
for (i = 0; i < users.length; i++) {
	awesomeMethod(users[i]);
	awesomeMethod2(users[i]);
}