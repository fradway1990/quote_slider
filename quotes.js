function Quotes(quotes,currentTag){
	this.quotes = quotes;
	this.usableQuotes = [];
	this.usedQuotes =[];
	if(typeof currentTag === 'undefined' || typeof currentTag === 'all'){
		this.currentTag = 'all';
	}else{
		this.currentTag = currentTag;
	}
}

Quotes.prototype.getUsableQuotes = function(){
	var quotes = this.quotes;
	var currentTag = this.currentTag;
	//empty current usableQuotes Array
	this.usableQuotes = [];
	this.usedQuotes = [];
	//if currentTag is all push all quotes to usableQuotes array
	if( currentTag === 'all'){
		for(quote in quotes){
			this.usableQuotes.push(quotes[quote]);
		}
	}else{
		//else cycle through the quotes tags and see if it matches the currentTag
		for(quote in quotes){
			for(tag in quotes[quote].tags){
				if(quotes[quote].tags[tag] === currentTag){
					//if it finds a match push to usable quotes and stop searching it's tags
					this.usableQuotes.push(quotes[quote]);
					break;
				}
			}
		}
	}
}

//function used to push a quote to the usedQuotes array and remove it from the usableQuotes array
Quotes.prototype.pushToUsed = function(quote){
	var usableQuotes = this.usableQuotes;
	var usedQuotes = this.usedQuotes;
	usedQuotes.push(quote);
	usableQuotes.splice(usableQuotes.indexOf(quote),1);
}

Quotes.prototype.refillArray = function(){
	//concats the usedQuotes array with the usableQuotes array
	this.usableQuotes = this.usableQuotes.concat(this.usedQuotes);
	
	//empties usedQuotes array after concat
	this.usedQuotes = [];
}

//function used to getRandomQuote from the usableQuotes array
Quotes.prototype.getRandomQuote = function(){
	var usableQuotes = this.usableQuotes;
	
	//if on last usable quote refill array
	if(usableQuotes.length === 1){
		console.log('Array is empty');
		this.refillArray();
	}
	
	//gets a random number between 0 and the length of the usableQuotes array - 1
	var randomNumber = Math.floor(( Math.random() * (usableQuotes.length - 0) ) + 0);
	
	//returns a randomQuote
	return usableQuotes[randomNumber];
	
}

Quotes.prototype.printQuote = function(el){
	var quote = this.getRandomQuote();
	var formatedQuote = quote.getFormatedQuote();
	//appends quote to the specified element
	el.append(formatedQuote);
	//remove printed quote from the usableQuotes array and adds it to the usedQuotes array
	this.pushToUsed(quote);
	console.log(this.usableQuotes);
}


