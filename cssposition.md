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
