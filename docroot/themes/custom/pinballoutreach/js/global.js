/**
 * @file
 * Global JS For Pinball Outreach theme
 */
(function ($, Drupal) {

'use strict';

/**
 * Initialize the menu JS
 */
Drupal.behaviors.navTabs = {
  attach: function (context, settings) {
    var $mainMenu = $('.main-menu--level-0');
    if ($mainMenu.length > 0 && typeof $mainMenu.smartmenus === 'function') {
      $mainMenu.once('smartmenu').addClass('sm').smartmenus();
    }
  }
};


})(jQuery, Drupal);
