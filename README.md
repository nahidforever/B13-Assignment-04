# B13-Assignment-04

---

## 1. Difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll

- getElementById: By using this finds one element using its ID. ID unique, so it always select only one.  
- getElementsByClassName: By using this finds all elements that have the same class name. It Returns a list of elements.  
- querySelector: By using this finds the first element that matches any CSS selector.  
- querySelectorAll: By using this finds all elements that match any CSS selector. It also returns a list of elements like class name. 

---

## 2. How to create and insert a new element into the DOM

1. First, Create a new element in memory. - Create a new div element  
2. Second, Add some text or content inside it. - Add some text inside it  
3. Third, Insert it into the page so it becomes visible. - Insert it into the page  

---

## 3. What is Event Bubbling? How does it work?

Event Bubbling happens when click on an element and the event automatically goes to its parent elements.  

For example, if click a button inside a div:  
- First the button get the click  
- Then the div  
- Then the body  
- Then html  

---

## 4. What is Event Delegation? Why is it useful?

Event Delegation means add one event listener on a parent element. This one listener can work for all child elements.  

It is very useful because:  
- Don’t need to add event listener to every child.  
- It also works for new elements added later inside the parent.  

---

## 5. Difference between preventDefault() and stopPropagation()

- preventDefault(): Stops the normal action of an element. For example, a link will not open a new page or a form will not submit.  
- stopPropagation(): Stops the event from moving to parent elements. The event will stay only on the element where it happened.