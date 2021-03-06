function Quote(quote,source,tags,array,autoPush){
	GeneralQuote.call(this,quote,tags,array,autoPush);
	this.source = source;
}
Quote.prototype = Object.create(GeneralQuote.prototype);
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