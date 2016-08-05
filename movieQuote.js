function MovieQuote(quote,movie,year,tags,array,autoPush){
	GeneralQuote.call(this,quote,tags,array,autoPush);
	this.movie = movie;
	this.year = year;
}

MovieQuote.prototype = Object.create(GeneralQuote.prototype);
//function that returns a formated quote
MovieQuote.prototype.getFormatedQuote = function(){
	var p = $('<p></p>');
	var quote = $('<span></span>',{
		class:'quote',
		text: this.quote
	});
	var source = $('<span></span>',{
		class:'source',
		text: this.movie + ', ' + this.year
	});
	
	//append created elements to slide
	quote.appendTo(p);
	//insert br tag to separate inline-block elements .quote and .attribution
	p.append('<br>');
	source.appendTo(p);
	
	//returns formated quote
	return p;
}