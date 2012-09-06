# jQuery Pretty Checkboxes

prettyCheckbox.js is a small jQuery plugin for checkbox replacement through CSS.

```javascript
$(document).ready(function() {
	$(".myCheckbox").prettyCheckbox();
});
```

To apply it to all checkboxes as a global style:

```javascript
$("input[type=checkbox]").prettyCheckbox();
```

See a basic usage example here: http://demo.justingillespie.com/prettyCheckbox/

## Styling

prettyCheckbox.js will give you a few CSS classes to work with to easily customize a checkbox element.

```css
/* The default look of a checkbox */
.prettyCheckbox { }

/* The look of the checkbox when it's checked */
.prettyCheckbox.checked { }

/* The checkbox image or text */
.prettyCheckbox.checked .check { }
```

## License

Copyright (c) 2011-2012 Justin Gillespie licensed under the [Apache License](http://www.apache.org/licenses/LICENSE-2.0).