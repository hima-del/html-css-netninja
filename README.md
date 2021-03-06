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

**nth-child selector in css**

* The :nth-child(n) selector matches every element that is the nth child, regardless of type, of its parent. 
  n can be a number, a keyword, or a formula.
 ``` 
 p:nth-child(2) {
  background: red;
}
```
  

**CSS FLEXBOX BASICS**

* The main idea behind the flex layout is to give the container the ability to alter its items’ width/height (and order) to best fill     the available space (mostly to accommodate to all kind of display devices and screen sizes).
* A flex container expands items to fill available free space or shrinks them to prevent overflow.
* main axis – The main axis of a flex container is the primary axis along which flex items are laid out.
  it is not necessarily     horizontal; it depends on the flex-direction property 
* cross axis – The axis perpendicular to the main axis is called the cross axis. 
  Its direction depends on the main axis direction.
   
   **Properties for the Parent(flex container)**
   
   
   1.  display
       * This defines a flex container; inline or block depending on the given value.  
       * It enables a flex context for all its direct children.
   
   2.  flex-direction
       * This establishes the main-axis, thus defining the direction flex items are placed in the flex container.
       * Flexbox is (aside from optional wrapping) a single-direction layout concept.
       * Think of flex items as primarily laying out either in horizontal rows or vertical columns
       * row (default): left to right in ltr; right to left in rtl
       * row-reverse: right to left in ltr; left to right in rtl
       * column: same as row but top to bottom
       * column-reverse: same as row-reverse but bottom to top
   
   3.  flex-wrap
       *  By default, flex items will all try to fit onto one line. You can change that and allow the items to wrap as needed with this           property.
       *  nowrap (default): all flex items will be on one line
       *  wrap: flex items will wrap onto multiple lines, from top to bottom.
       *  wrap-reverse: flex items will wrap onto multiple lines from bottom to top.
   
   4. justify-content
       *  This defines the alignment along the main axis. 
       *  It helps distribute extra free space leftover when either all the flex items on a line are inflexible, or are flexible but               have reached their maximum size.
       * It also exerts some control over the alignment of items when they overflow the line.
       *  flex-start (default): items are packed toward the start of the flex-direction.
       * flex-end: items are packed toward the end of the flex-direction.
       * start: items are packed toward the start of the writing-mode direction.
       * end: items are packed toward the end of the writing-mode direction.
       * left: items are packed toward left edge of the container, unless that doesn’t make sense with the flex-direction, then it                behaves like start.
       * right: items are packed toward right edge of the container, unless that doesn’t make sense with the flex-direction, then it              behaves like start.
       * center: items are centered along the line
       * space-between: items are evenly distributed in the line; first item is on the start line, last item on the end line
       * space-around: items are evenly distributed in the line with equal space around them. Note that visually the spaces aren’t                equal, since all the items have equal space on both sides. The first item will have one unit of space against the container              edge, but two units of space between the next item because that next item has its own spacing that applies.
        * space-evenly: items are distributed so that the spacing between any two items (and the space to the edges) is equal.
   
   5. align-items
       *  This defines the default behavior for how flex items are laid out along the cross axis on the current line. 
       * Think of it as the justify-content version for the cross-axis (perpendicular to the main-axis).
       * stretch (default): stretch to fill the container (still respect min-width/max-width)
       * flex-start / start / self-start: items are placed at the start of the cross axis. The difference between these is subtle, and            is about respecting the flex-direction rules or the writing-mode rules.
       * flex-end / end / self-end: items are placed at the end of the cross axis. The difference again is subtle and is about                    respecting flex-direction rules vs. writing-mode rules.
       * center: items are centered in the cross-axis
       * baseline: items are aligned such as their baselines align
    
    6.  align-content  
        *  This aligns a flex container’s lines within when there is extra space in the cross-axis, similar to how justify-content                   aligns individual items within the main-axis.
        * This property has no effect when there is only one line of flex items.
        * flex-start / start: items packed to the start of the container. The (more supported) flex-start honors the flex-direction               while start honors the writing-mode direction.
        * flex-end / end: items packed to the end of the container. The (more support) flex-end honors the flex-direction while end               honors the writing-mode direction.
        * center: items centered in the container
        * space-between: items evenly distributed; the first line is at the start of the container while the last one is at the end
        * space-around: items evenly distributed with equal space around each line
        * space-evenly: items are evenly distributed with equal space around them
        * stretch (default): lines stretch to take up the remaining space
   
    **Properties for the Children(flex items)**
    
    1. order
       * By default, flex items are laid out in the source order. However, the order property controls the order in which they appear in          the flex container.
    
    2. flex-grow
       * This defines the ability for a flex item to grow if necessary. 
       * It accepts a unitless value that serves as a proportion.
       *  It dictates what amount of the available space inside the flex container the item should take up.
       * If all items have flex-grow set to 1, the remaining space in the container will be distributed equally to all children.
       * If one of the children has a value of 2, the remaining space would take up twice as much space as the others
       * Negative numbers are invalid.
    
    3. flex-shrink
        *  This defines the ability for a flex item to shrink if necessary
    
    4. flex-basis
        * This defines the default size of an element before the remaining space is distributed.
        * It can be a length (e.g. 20%, 5rem, etc.) or a keyword. The auto keyword means “look at my width or height property” (which             was temporarily done by the main-size keyword until deprecated).
        * The content keyword means “size it based on the item’s content” – this keyword isn’t well supported yet, so it’s hard to test           and harder to know what its brethren max-content, min-content, and fit-content do. 
        * If set to 0, the extra space around content isn’t factored in. 
        * If set to auto, the extra space is distributed based on its flex-grow value
    
    5. flex
         * This is the shorthand for flex-grow, flex-shrink and flex-basis combined.
          * The second and third parameters (flex-shrink and flex-basis) are optional.
          * The default is 0 1 auto, but if you set it with a single number value, it’s like 1 0. 
    
    6. align-self    
         * This allows the default alignment (or the one specified by align-items) to be overridden for individual flex items    
          
          **CSS GRID BASICS**
     
     **Properties for the Parent(Grid Container)**
     
     1. display
        * Defines the element as a grid container and establishes a new grid formatting context for its contents.
        * Values:grid – generates a block-level grid
        * inline-grid – generates an inline-level grid
    
    2. grid-template-columns/grid-template-rows
        * Defines the columns and rows of the grid with a space-separated list of values. 
        * The values represent the track size, and the space between them represents the grid line.
        * Values:``<track-size>`` – can be a length, a percentage, or a fraction of the free space in the grid  
    
    3. grid-template-area
        * Defines a grid template by referencing the names of the grid areas which are specified with the grid-area property.
          Values:``<grid-area-name>`` – the name of a grid area specified with grid-area OR – a period signifies an empty grid cell OR             none 
 
    **Properties for the Children(Grid Items)**
      
     1. grid-column-start/grid-column-end/grid-row-start/grid-row-end
         * Determines a grid item’s location within the grid by referring to specific grid lines. 
        * grid-column-start/grid-row-start is the line where the item begins, and grid-column-end/grid-row-end is the line where the               item ends.
        * Values can be a number to refer to a numbered grid line, or a name to refer to a named grid line
         * span ``<number>`` – the item will span across the provided number of grid tracks
         * span ``<name>`` – the item will span across until it hits the next line with the provided name
         * auto – indicates auto-placement, an automatic span, or a default span of one
    
    2. grid-column/grid-row
         * Shorthand for grid-column-start + grid-column-end, and grid-row-start + grid-row-end, respectively.
         * Values:``<start-line> / <end-line>`` – each one accepts all the same values as the longhand version, including span
    
    3. justify-self
         * Aligns a grid item inside a cell along the inline (row) axis (as opposed to align-self which aligns along the block (column)            axis). 
         * This value applies to a grid item inside a single cell.
         * Values:start – aligns the grid item to be flush with the start edge of the cell
           end – aligns the grid item to be flush with the end edge of the cell
           center – aligns the grid item in the center of the cell
           stretch – fills the whole width of the cell (this is the default)
    
    4. align-self
          * Aligns a grid item inside a cell along the block (column) axis (as opposed to justify-self which aligns along the inline                  (row) axis).
          * This value applies to the content inside a single grid item.
          * Values:start – aligns the grid item to be flush with the start edge of the cell
           * end – aligns the grid item to be flush with the end edge of the cell
           * center – aligns the grid item in the center of the cell
           * stretch – fills the whole height of the cell (this is the default)




















