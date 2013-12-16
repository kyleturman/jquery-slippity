/*! Slippity - v1.0.0 - Dec 16, 2013
* http://slippity.com
* Copyright (c) 2013 Kyle Turman; Licensed MIT */

;(function() {
	
	var $ = jQuery;
	
	$.fn.extend({
		slippity: function(options) {
			
			settings = {
				arrowClass: ".arrow",
				slideClass: ".slide",
				dynamicHeight: true,
				animationTime: 500,
				start: function(){},
				end: function(){}
			};
			settings = $.extend(settings, options);
			
			
			var $slider = $(this),
				$slides = $slider.find(settings.slideClass),
				$dots = null,
				current = 0, animating = false;
			
			
			/* --------------------------------------
				INIT
			-------------------------------------- */
			
			function init() {
				
				/**** BASIC SET UP ****/
				
				// Set initial current slide.
				current = $slides.filter(".active").index(settings.slideClass)
			
				// Set initial slider height based on what's inside.
				if (settings.dynamicHeight) {
					$slider.css({height: $slides.eq(current).height() });
					
					// Make sure the height is set.
					$(window).on("load resize", function(){
						$slider.css({height: $slides.eq(current).height() });
					});
				}


				/**** PAGE INDICATOR DOTS ****/
				
				// Create page indicator dots.
				$dots = $("<div/>", {class:"dots"});
				$slides.each(function(index){
					$dots.append("<a href='#"+index+"'>"+index+"</a>");
				});
				$slider.append($dots);
				$dots = $dots.find("a");
				
				// Set active page indicator dot as active.
				$dots.eq( current ).addClass("active");
				
				// Set up page indicator dot click events.
				$dots.on("click",function(e){
					e.preventDefault();
					slideTo( $(e.currentTarget).index() );
				});
				
				
				/**** PREV / NEXT ARROWS ****/
				
				// Set up prev,next click events.
				$slider.find(settings.arrowClass).on("click", function(e){
					e.preventDefault();

					if ($(e.currentTarget).hasClass("left")) {
						slideLeft();
					} else {
						slideRight();
					}
				});
			}
			
			
			/* --------------------------------------
				SLIDING FUNCTIONS
			-------------------------------------- */
			
			function slideLeft() {
				var prev = (current == 0) ? $slides.length - 1 : current - 1;
				slideTo(prev);
			}
			
			function slideRight() {
				var next = ((current + 1) == $slides.length) ? 0 : current + 1;
				slideTo(next);
			}
			
			function slideTo(index) {
				if (index != current && !animating) {
					
					// Set animating so we don't interfere with ourselves.
					animating = true;
					
					// Determine if we're going right or left with the slidingness.
					var rightleft = (index > current ? "left" : "right");
					
					// Set current index.
					current = index;
					
					// Call start callback.
					settings.start(index);
					
					// Create attributes for sliding animation out.
					var initAttrsOut = {display:"block",opacity:1},
						endAttrsOut = {opacity:0};
					
						initAttrsOut[rightleft] = "0";
						endAttrsOut[rightleft] = "-100%";
					
					// Animate out the current active slide
					$slides.filter(".active").css(initAttrsOut).removeClass("active").animate(endAttrsOut, settings.animationTime, function(){
						$(this).removeAttr("style");
					});
					
					// Switch the right / left for animating in.
					rightleft = (rightleft == "right" ? "left" : "right");
					
					// Create attributes for sliding animation in.
					var initAttrsIn = {display:"block"},
						endAttrsIn = {opacity:1};
						
						initAttrsIn[rightleft] = "-100%";
						endAttrsIn[rightleft] = "0";
					
					// Animate in the next slide.
					$slides.eq(index).css(initAttrsIn).animate(endAttrsIn, settings.animationTime, function(){
						$(this).addClass("active").removeAttr("style");
						animating = false;
						settings.end(index);
					});
					
					// Match height of next slide
					if (settings.dynamicHeight) {
						$slider.animate({height: $slides.eq(current).height() }, settings.animationTime);
					}
					
					// Update page indicator dot.
					$dots.removeClass("active").eq( current ).addClass("active");
				}
			}
			
			return this.each(function() {
				init();
			});
		}
	});
	
}).call(this);