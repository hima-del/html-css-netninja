**BASICS OF HTML AND CSS**
* HTML is the standard markup language for Web pages.
* HTML headings are defined with the `<h1>` to `<h6>` tags.
* `<h1>` defines the most important heading.
* `<h6>` defines the least important heading
* HTML paragraphs are defined with the `<p>` tag
* HTML links are defined with the `<a>` tag
* The link's destination is specified in the href attribute
* HTML images are defined with the `<img>` tag.The img tag is empty, it contains attributes only, and does not have a closing tag.
The src attribute specifies the URL (web address) of the image
* The source file (src), alternative text (alt), width, and height are provided as attributes

* HTML lists are defined with the `<ul>` (unordered/bullet list) or the `<ol>` (ordered/numbered list) tag, followed by `<li>`  tags (list items)

* `<b>` - Bold text
* `<strong>` - Important text
* `<i>` - Italic text
* `<em>` - Emphasized text
* `<small>` - Small text
* `<blockquote>`-defines a section that is quoted from another source

**Padding and Margin**

* margin properties are used to create space around elements, outside of any defined borders
* padding properties are used to generate space around an element's content, inside of any defined borders.
* inline elements:span,em,a
* block level elements:div,h3,p,li
* for inline elements margin is for left and right
* inline elements can be converted to block level and vice versa by display in css

**Position in css[0:40 tutorial 8]**
* The position property specifies the type of positioning method used for an element.
* There are five different position values:

  *static
  *relative
  *fixed
  *absolute
  *sticky

* position: static;
HTML elements are positioned static by default.Static positioned elements are not affected by the top, bottom, left, and right properties.
An element with position: static; is not positioned in any special way; it is always positioned according to the normal flow of the page:

* position: relative;
An element with position: relative; is positioned relative to its normal position.
Setting the top, right, bottom, and left properties of a relatively-positioned element will cause it to be adjusted away from its normal position. Other content will not be adjusted to fit into any gap left by the element.

* position: fixed;
An element with position: fixed; is positioned relative to the viewport, which means it always stays in the same place even if the page is scrolled. The top, right, bottom, and left properties are used to position the element.
A fixed element does not leave a gap in the page where it would normally have been located.

* position: absolute;
An element with position: absolute; is positioned relative to the nearest positioned ancestor (instead of positioned relative to the viewport, like fixed).
However; if an absolute positioned element has no positioned ancestors, it uses the document body, and moves along with page scrolling.

* position: sticky;
An element with position: sticky; is positioned based on the user's scroll position.
A sticky element toggles between relative and fixed, depending on the scroll position. It is positioned relative until a given offset position is met in the viewport - then it "sticks" in place

* z index:brings thins forward

**Pseudo classes**

* A CSS pseudo-element is used to style specified parts of an element.
* For example, it can be used to:
 1.Style the first letter, or line, of an element
 2.Insert content before, or after, the content of an element

**The ::first-line Pseudo-element**
* The ::first-line pseudo-element is used to add a special style to the first line of a text.
* The following example formats the first line of the text in all p elements:

**The ::first-letter Pseudo-element**
* The ::first-letter pseudo-element is used to add a special style to the first letter of a text.
* The following example formats the first letter of the text in all p elements:

**The ::before Pseudo-element**
* The ::before pseudo-element can be used to insert some content before the content of an element.
* The following example inserts an image before the content of each h1 element:

**The ::after Pseudo-element**
* The ::after pseudo-element can be used to insert some content after the content of an element.
* The following example inserts an image after the content of each h1 element:

**The ::selection Pseudo-element**
* The ::selection pseudo-element matches the portion of an element that is selected by a user.
* The following CSS properties can be applied to ::selection: color, background, cursor, and outline.

**Media queries**
* tell the browser how to style an  element at particular viewport dimensions

**View port metatag**
* tells the browser what width the viewport should be
* responsive imagesonly load smaller images for mobile devices

**CSS FLEXBOX BASICS**

* The main idea behind the flex layout is to give the container the ability to alter its items’ width/height (and order) to best fill     the available space (mostly to accommodate to all kind of display devices and screen sizes).
* A flex container expands items to fill available free space or shrinks them to prevent overflow.
* main axis – The main axis of a flex container is the primary axis along which flex items are laid out.
  it is not necessarily     horizontal; it depends on the flex-direction property 
* cross axis – The axis perpendicular to the main axis is called the cross axis. 
  Its direction depends on the main axis direction.
   
   **Properties for the Parent(flex container)**
   
   1.display
   * This defines a flex container; inline or block depending on the given value.  
     It enables a flex context for all its direct children.
   2.  flex-direction
   * This establishes the main-axis, thus defining the direction flex items are placed in the flex container.
     Flexbox is (aside from optional wrapping) a single-direction layout concept.
     Think of flex items as primarily laying out either in horizontal rows or vertical columns
     * row (default): left to right in ltr; right to left in rtl
     * row-reverse: right to left in ltr; left to right in rtl
     * column: same as row but top to bottom
     * column-reverse: same as row-reverse but bottom to top
   3.  flex-wrap
    * By default, flex items will all try to fit onto one line. You can change that and allow the items to wrap as needed with this           property.
      * nowrap (default): all flex items will be on one line
      * wrap: flex items will wrap onto multiple lines, from top to bottom.
      * wrap-reverse: flex items will wrap onto multiple lines from bottom to top.
   4. justify-content
      

























