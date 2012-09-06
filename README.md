# jQuery Pretty Checkboxes

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

## Styling

prettyCheckbox.js will give you CSS classes to work with to easily customize a checkbox element.

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

## License

Copyright (c) 2011-2012 Justin Gillespie licensed under the [Apache License](http://www.apache.org/licenses/LICENSE-2.0).