# jQuery Pretty Checkbox

prettyCheckbox.js is a small jQuery plugin for checkbox replacement through CSS.

```javascript
$(document).ready(function() {
	$(".myCheckbox").prettyCheckbox();
});
```

or to apply it to all checkboxes as a global style:

```javascript
$("input[type=checkbox]").prettyCheckbox();
```

See a basic usage example here: http://demo.justingillespie.com/prettyCheckbox/

## Usage

###References

First include jQuery on your page

```javascript
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.8.1/jquery.js"></script>
```

Include prettyCheckbox.js

```javascript
<script src="prettyCheckbox.js" charset="utf-8"></script>
```

## Styling

prettyCheckbox.js will give you CSS classes to work with to easily customize a checkboxes.

```css
.prettyCheckbox {
	/* The default look of a checkbox */
}

.prettyCheckbox.checked {
	/* The look of the checkbox when it's checked */
}

.prettyCheckbox.checked .check {
	/* The checkbox image icon or text */
}
```

## Options

Options are typically passed to the init as a parameter.

```javascript
$("input[type=checkbox]").prettyCheckbox({ 'class' : 'myCustomClass' });
```

### class

Change the class of the provided replacement checkbox element.  This is also useful for styling checkboxes on the same page differently.

```javascript
$(".myCheckBox").prettyCheckbox({ 'class' : 'myCustomClass' });
```
```css
.myCustomClass { /* The default look of a checkbox */ }
.myCustomClass.checked { /* The look of the checkbox when it's checked */ }
.myCustomClass.checked .check { /* The checkbox image icon or text */ }
```

## Demo

Live Demo: http://demo.justingillespie.com/prettyCheckbox/

## License

Copyright (c) 2011-2012 Justin Gillespie licensed under the [Apache 2.0 License](http://www.apache.org/licenses/LICENSE-2.0).