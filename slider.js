function Slider(sliderClassName){
	this.sliderClassName = sliderClassName;
	this.slider = '.' + sliderClassName;
	this.currentSlide = '';
	this.btn = ''
}

//init method for the slider
Slider.prototype.init = function(){
	//create slider container and containing elements
	var container = $('<div></div>',{
		class:'quote-slider '+ this.sliderClassName
	});
	var slide = this.createSlide();
	var btn = this.createButton();
	this.btn = btn;
	this.currentSlide = slide;
	//append elements to document
	container.insertAfter($('.categories'));
	btn.insertAfter(container);
	slide.appendTo(container);
	
}

//method used to generate a slide
Slider.prototype.createSlide = function(){
	//creates a new slide with containing elements
	var slide = $('<div></div>',{
		class:'slide'
	});
	//returns the created slide
	return slide;
}

Slider.prototype.newSlide = function(content){
	var slider = this.slider;
	var currentSlide = this.currentSlide;
	//variable to hold the newly created slide
	var newSlide = this.createSlide();
	
	//insert new slide to the right of the quote slider
	newSlide.css({ left: $(slider).width() + 'px', 
					zIndex : parseFloat(currentSlide.css('zIndex')) + 1
				});
	
	//appends new slide to slider
	newSlide.appendTo(this.slider);
	
	currentSlide.animate({left: ($(slider).width() * -1) + 'px'},function(){
		$(this).remove();
	});
	
	newSlide.animate({ left:0 });
	this.currentSlide = newSlide;
	
}

Slider.prototype.adjustSliderHeight = function(slide){
	var contentHeight = 0;
	slide.children().each(function(){
		contentHeight += $(this).outerHeight();
	});
	console.log(contentHeight);
	$(this.slider).height(contentHeight);
}

Slider.prototype.createButton = function(){
	
	var btnRow = $('<div></div>',{
		class: 'row',
	});
	var btnCol = $('<div></div>',{
		class: 'col-xs-12'
	});
	var btn = $('<button></button>',{
		class: 'new-quote button',
		text: 'New Quote'
	});
	
	btnCol.appendTo(btnRow);
	btn.appendTo(btnCol);
	
	return btnRow;
}