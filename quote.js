function Quote(quote,source,tags,array,autoPush){
	this.quote = quote;
	this.source = source;
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

//function that returns a formated quote
Quote.prototype.getFormatedQuote = function(){
	var p = $('<p></p>');
	var quote = $('<span></span>',{
		class:'quote',
		text: this.quote
	});
	var source = $('<span></span>',{
		class:'source',
		text: this.source
	});
	
	//append created elements to slide
	quote.appendTo(p);
	//insert br tag to separate inline-block elements .quote and .attribution
	p.append('<br>');
	source.appendTo(p);
	
	//returns formated quote
	return p;
}

//pushes quote to array specified in the constructor
Quote.prototype.pushToArray = function(){
	this.array.push(this);
}
