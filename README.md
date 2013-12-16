# Slippity

A lightweight and simple jQuery slider/carousel plugin build with developers in mind and made to be extended.

## Setup

#### Javascript
```js
$(".hero").slippity();
```

#### HTML
```html
<div class="slider">
	<a class="left arrow"></a><a class="right arrow"></a>

	<div class="slide active">
		<!-- Some Content -->
	</div>

	<div class="slide">
		<!-- Some Content -->
	</div>

	<div class="slide active">
		<!-- Some Content -->
	</div>
</div>
```

#### CSS
```css
.slider {
	position: relative;
}

	.slider .slide {
		display: none;
		opacity: 0;
		position: absolute;
		top: 0;
		width: 100%;
	}
		.slider .slide.active {
			display: block;
			opacity: 1;
		}

	.slider .arrow {
		background: url(slider-arrows.png) no-repeat;
		cursor: pointer;
		display: block;
		margin-top: -50px;
		position: absolute;
		top: 50%;
		width: 50px; height: 100px;
		z-index: 100;
	}
		.slider .arrow.left { left: 20px; }
		.slider .arrow.right { right: 20px; background-position: -50px 0; } 
		
		
	.slider .dots {
		position: absolute;
		bottom: -35px;
		text-align: center;
		width: 100%;
	}
			.slider .dots a {
				background: #FFF;
				border-radius: 4em;
				display: inline-block;
				margin: 0 10px;
				opacity: 0.6;
				text-indent: -9999px;
				width: 15px; height: 15px;
			}
				.slider .dots a.active, .slider .dots a:hover {
					opacity: 1;
				}
```