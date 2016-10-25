function Person (object) {
	// this.pet = function(dog){
	// 	dog.status = "happy";
	// }
	object = object || {};

	if (object.cool === true) {
		this.cool = true;
	} else {
		this.cool = false;

	}
};

Person.prototype.pet = function(dog){
		dog.status = "happy";
	}
Person.prototype.feed = function(dog){
		dog.hungry = false;
	}

export { Person };
