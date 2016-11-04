/**
 * @file
 * Global JS For Pinball Outreach theme
 */

(function ($) {

'use strict';

var $mainMenu = $('.main-menu--level-0');
if ($mainMenu.length > 0 && typeof $mainMenu.smartmenus === 'function') {
  $mainMenu.addClass('sm').smartmenus();
}

})(jQuery);
