function BookQuote(quote,author,book,tags,array,autoPush){
	GeneralQuote.call(this,quote,tags,array,autoPush);
	this.author = author;
	this.book = book;
}

BookQuote.prototype = Object.create(GeneralQuote.prototype);
//function that returns a formated quote
BookQuote.prototype.getFormatedQuote = function(){
	var p = $('<p></p>');
	var quote = $('<span></span>',{
		class:'quote',
		text: this.quote
	});
	var source = $('<span></span>',{
		class:'source',
		text: this.author + ', ' + this.book
	});
	
	//append created elements to slide
	quote.appendTo(p);
	//insert br tag to separate inline-block elements .quote and .attribution
	p.append('<br>');
	source.appendTo(p);
	
	//returns formated quote
	return p;
}

