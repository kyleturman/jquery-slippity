# Slippity

A lightweight and simple jQuery slider/carousel plugin built with developers in mind and made to be extended.

## Setup

#### Javascript
```js
$("#some-slider").slippity();
```

#### HTML
```html
<div id="some-slider" class="slider">
	<a class="left arrow"></a><a class="right arrow"></a>

	<div class="slide active">
		<!-- Some Content -->
	</div>

	<div class="slide">
		<!-- Some Content -->
	</div>

	<div class="slide">
		<!-- Some Content -->
	</div>
</div>
```

#### CSS
```css
.slider {
	overflow: visible !important; /* Have to add this due to jQuery adding overflow:hidden */
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
				background: #000;
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

## Options

| Name | Description | Type | Default |
|------|-------------|------|---------|
| `arrowClass` | The class name of the next/ previous slider arrow buttons.  | String | ".arrow" |
| `slideClass` | The class name of the actual slides in the slider container. | String | ".slide" |
| `dynamicHeight` | Set whether or not the plugin will adjust the height of slider container based on what's inside. | Boolean | true |
| `animationTime` | The time it takes for the slider to animate in/out from the left or right. | Integer or String | 500 |
| `start` | Callback for when the slider starts sliding. | Function | none |
| `end` | Callback for when the slider is finished animating/sliding | Function | none |
