function Dog (object) {
	object = object || {};
	this.status = "normal" || object.status;
	this.color = object.color;
	
	if (object.hungry === false) {
		this.hungry = false;
	} else {
		this.hungry = true;
	}
	
}

export { Dog };
