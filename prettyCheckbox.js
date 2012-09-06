/* =========================================================
 * prettycheckbox.js v1.0.0
 * https://github.com/JustinGillespie/prettyCheckbox/
 * =========================================================
 * Copyright 2012 Justin Gillespie
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================= */
 
(function( $ ){

    // jQuery plugin wrapper

    $.fn.prettyCheckbox = function() {

        this.each(function() {
            
            // cache the current object iteration

            var current = $(this), check;

            current.hide()
                   .after('<div class="prettyCheckbox"></div>')
                   .next()
                   .bind('click', function() { 
                        check = $(this); // cache
                        check.mousedown( function(e) { e.preventDefault(); });
                        check.hasClass('checked') ? check.removeClass('checked') : check.addClass('checked');
                        check.hasClass('checked') ? check.append("<div class=\"check\"></div>") : $('.check', check).remove();
                        current.attr('checked') === 'checked' ? current.removeAttr('checked') : current.attr('checked', 'checked');
                    })
                    .next('label')
                    .click( function(){ $(this).prev().click(); })
                    .mousedown( function(e) { e.preventDefault(); });  // Disables double click highlighting
            
            // If the element is checked at page load, set prettyCheckbox to checked!

            if( current.attr('checked') === 'checked' ) { current.next().addClass('checked').append('<div class=\"check\"></div>'); }
        });
    };
})( jQuery );