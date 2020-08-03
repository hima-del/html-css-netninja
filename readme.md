**CSS Positions**

* The position CSS property sets how an element is positioned in a document.
* The top, right, bottom, and left properties determine the final location of positioned elements.

**static**

* Every element has a static position by default, so the element will stick to the normal page flow.
* So if there is a left/right/top/bottom/z-index set then there will be no effect on that element.

**relative**

* An element’s original position remains in the flow of the document, just like the static value.
* But now left/right/top/bottom/z-index will work. The positional properties.

**absolute**

* The element is removed from the normal document flow, and no space is created for the element in the page layout. 
* It is positioned relative to its closest positioned ancestor, if any; otherwise, it is placed relative to the initial containing block.

**absolute Vs relative**

* When we set the position relative to an element, without adding any other positioning attributes (top, bottom, right, left) nothing will happen.
* When we add an additional position, such as left: 20px the element will move 20px to the right from its normal position. 
* Here, we can see that this element is relative to itself. 
* When the element moves, no other element on the layout will be affected.

```
#first_element { 
  position: relative; 
  left: 30px; 
  top: 70px; 
  width: 500px; 
  background-color: #fafafa; 
  border: solid 3px #ff7347; 
  font-size: 24px; 
  text-align: center; 
} 
#second_element { 
  position: relative; 
  width: 500px; 
  background-color: #fafafa; 
  border: solid 3px #ff7347; 
  font-size: 24px; 
  text-align: center; 
}
```

* In this example, we will see how the relatively positioned element moves when its attributes are changed. 
* The first element moves to the left and top from its normal position. 
* The second element stays in the same place because none of the additional positioning attributes were changed.
* The absolute positioning allows you to place your element precisely where you want it.
* The positioning is done relative to the first relatively (or absolutely) positioned parent element. 
* In the case when there is no positioned parent element, it will be positioned related directly to the HTML element (the page itself).

```
#parent { 
  position: relative; 
  width: 500px; 
  height: 400px; 
  background-color: #fafafa; 
  border: solid 3px #9e70ba; 
  font-size: 24px; 
  text-align: center; 
} 
#child { 
  position: absolute; 
  right: 40px; 
  top: 100px; 
  width: 200px; 
  height: 200px; 
  background-color: #fafafa; 
  border: solid 3px #78e382; 
  font-size: 24px; 
  text-align: center; 
}
```

* In the above example, the parent element has the position set to relative. 
* Now, when we set the position of the child element to absolute, any additional positioning will be done relative to the parent element. 
* The child element moves relative to the top of the parent element by 100px and right of the parent element by 40px.

**fixed**

* The element is removed from the flow of the document like absolutely positioned elements.
* In fact they behave almost the same, only fixed positioned elements are always relative to the document, not any particular parent, and are unaffected by scrolling.

**sticky**
* The element is treated like a relative value until the scroll location of the viewport reaches a specified threshold, at which point the element takes a fixed position where it is told to stick.

**HOW TO POSITION TEXT OVER AN IMAGE**

```
<div class="container">
  <img src="img_snow_wide.jpg" alt="Snow" style="width:100%;">
  <div class="bottom-left">Bottom Left</div>
  <div class="top-left">Top Left</div>
  <div class="top-right">Top Right</div>
  <div class="bottom-right">Bottom Right</div>
  <div class="centered">Centered</div>
</div>
```

```
/* Container holding the image and the text */
.container {
  position: relative;
  text-align: center;
  color: white;
}

/* Bottom left text */
.bottom-left {
  position: absolute;
  bottom: 8px;
  left: 16px;
}

/* Top left text */
.top-left {
  position: absolute;
  top: 8px;
  left: 16px;
}

/* Top right text */
.top-right {
  position: absolute;
  top: 8px;
  right: 16px;
}

/* Bottom right text */
.bottom-right {
  position: absolute;
  bottom: 8px;
  right: 16px;
}

/* Centered text */
.centered {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
```

**Units in css**

**Absolute Units**
* Units that are “absolute” are the same size regardless of the parent element or window size.
* This means a property set with a value that has an absolute unit will be that size when looked at on a phone or on a large monitor.
* Absolute units can be useful when working on a project where responsiveness is not being considered. 
* For example, desktop apps that can’t be resized can be styled for the default dimensions. 
*  Absolute units can be less favourable for responsive sites because they don't scale when the screen size changes.

Absolute Unit	| Description |	Example
|-------------|------------|--------|
px	|1/96 of 1 inch (96px = 1 inch) |	font-size: 12px;
pt	|1/72 of 1 inch (72pt = 1 inch)	|font-size: 12pt;
pc	|12pt = 1pc	                    |font-size: 1.2pc;
cm	|centimeter	                    |font-size: 0.6cm;
mm	|millimeter (10 mm = 1 cm)	    |font-size: 4mm;
in	|inches	                        |font-size: 0.2in;

**Relative units**

* Relative units are useful for styling responsive sites because they scale relative to the parent or window size.
* As a general rule, relative units can be used as the default for responsive sites. 
* This can help us to avoid having to update styles for different screen sizes.

Relative Unit |	Description
|-------------|-----------|
|%	          |Relative to the parent element’s value for that property|
|em	          |Relative to the current font-size of the element|
rem	          |Relative to the font-size of the root (e.g. the <html> element). “rem” = “root em”|
ch	          |Number of characters (1 character is equal to the width of the current font’s 0/zero)|
vh	          |Relative to the height of the viewport (window or app size). 1vh = 1/100 of the viewport’s height|
vw	          |Relative to the width of viewport. 1vw = 1/100 of the viewport’s width.|
vmin          |Relative to viewport’s smaller dimension (e.g. for portrait orientation, the width is smaller than the height so it’s relative to the width). 1vmin = 1/100 of                    viewport’s smaller dimension.|
vmax	        |Relative to viewport’s larger dimension (e.g. height for portrait orientation). 1vmax = 1/100 of viewport’s larger dimension.|
ex	          |Relative to height of the current font’s lowercase “x”.|
  
  
**box shadow property**

* The box-shadow CSS property adds shadow effects around an element's frame.

```
box-shadow: [horizontal offset] [vertical offset] [blur radius] [optional spread radius] [color];

```

* The horizontal offset : (required) Positive means the shadow will be on the right of the box, a negative offset will put the shadow on the left of the box.
* The vertical offset (required) A negative one means the box-shadow will be above the box, a positive one means the shadow will be below the box.
* The blur radius : (required) If set to 0 the shadow will be sharp, the higher the number, the more blurred it will be, and the further out the shadow will extend. 
                   For instance a shadow with 5px of horizontal offset that also has a 5px blur radius will be 10px of total shadow.
* The spread radius : (optional) Positive values increase the size of the shadow, negative values decrease the size. Default is 0 (the shadow is same size as blur).
* Color : (required) Takes any color value, like hex, named, rgba or hsla. If the color value is omitted, box shadows are drawn in the foreground color (text color). But be               aware, older WebKit browsers (pre Chrome 20 and Safari 6) ignore the rule when color is omitted.


**CSS overflow**

* The CSS overflow property controls what happens to content that is too big to fit into an area.
* visible - Default. The overflow is not clipped. The content renders outside the element's box
* hidden - The overflow is clipped, and the rest of the content will be invisible
* scroll - The overflow is clipped, and a scrollbar is added to see the rest of the content
* auto - Similar to scroll, but it adds scrollbars only when necessary

**CSS transform property**

* The transform CSS property lets you rotate, scale, skew, or translate an element. 
* It modifies the coordinate space of the CSS visual formatting model.

```
/* Keyword values */
transform: none;

/* Function values */
transform: matrix(1.0, 2.0, 3.0, 4.0, 5.0, 6.0);
transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
transform: perspective(17px);
transform: rotate(0.5turn);
transform: rotate3d(1, 2.0, 3.0, 10deg);
transform: rotateX(10deg);
transform: rotateY(10deg);
transform: rotateZ(10deg);
transform: translate(12px, 50%);
transform: translate3d(12px, 50%, 3em);
transform: translateX(2em);
transform: translateY(3in);
transform: translateZ(2px);
transform: scale(2, 0.5);
transform: scale3d(2.5, 1.2, 0.3);
transform: scaleX(2);
transform: scaleY(0.5);
transform: scaleZ(0.3);
transform: skew(30deg, 20deg);
transform: skewX(30deg);
transform: skewY(1.07rad);

/* Multiple function values */
transform: translateX(10px) rotate(10deg) translateY(5px);
transform: perspective(500px) translate(10px, 0, 20px) rotateY(3deg);

/* Global values */
transform: inherit;
transform: initial;
transform: unset;
```

**HTML Attributes**

* HTML attributes generally appear as name-value pairs, separated by =, and are written within the start tag of an element, after the element's name:
```
<element attribute="value">element content</element>
```
  
  
  
