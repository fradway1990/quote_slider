function GeneralQuote(quote,tags,array,autoPush){
	this.quote = quote;
	this.tags = tags;
	this.array = array;
	
	//if autoPush is set to true or not defined when object is constructed
	//automatically push quote to array
	if( typeof autoPush === 'undefined' || typeof autoPush != 'boolean' || autoPush === true ){
		this.autoPush = true;
		this.pushToArray();
	}else{
		this.autoPush = false;
	}
}
//pushes quote to array specified in the constructor
GeneralQuote.prototype.pushToArray = function(){
	this.array.push(this);
}