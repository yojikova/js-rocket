var sayMyName = function (name) {
	alert('My name is: '+name);
}

var car = {
	make: 'VW',
	type: 'Polo',
	color: 'blue',
	isTurenedOn: true,
	numberOfWheels: 4,
	seats: [
	'seat1', 
	'seat2', 
	'seat3', 
	'seat4'
	],
	turnOn: function() {this.isTurenedOn = false;}
,
fly: function() {
	alert('fly');
},
switchCar: function(isOn) {
	console.log('turn car '+isOn);
	if (isOn == true) {
		this.isTurenedOn = true;
					}
					else {
						this.isTurenedOn = false;
}					
}
};

console.log('hello there friends!');