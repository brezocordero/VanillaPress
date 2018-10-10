'use-strict'

/**
 * Helper file for extra helper functions
 */

/**
 * Main helper object
 */
var helpers = {};


/**
 * Creates a list item with a link inside for menus
 *
 * @param {Object} contentObj Page object to create menu item for
 * @return {Object} menuItemEl List item DOM object
 */
 helpers.createMenuItem = function( contentObj ) {

   var menuItemEl = document.createElement( 'li' );

   menuItemEl.appendChild( helpers.createLink( contentObj ) );

   return menuItemEl;

 };

/**
 * Creates link
 *
 * @param {Object} contentObj Content object to create link for
 * @return {Object} linkEl Link object
 */
helpers.createLink = function( contentObj ) {

  var linkEl = document.createElement( 'a' ),
     linkTitle = document.createTextNode( contentObj.title );

  if ( 'home' !== contentObj.slug ) {
    linkEl.href = '#' + contentObj.slug;
  } else {
    linkEl.href = '#';
  }
  linkEl.appendChild( linkTitle );

  return linkEl;

};

/**
 * Gets the main menu element
 * @return {Object} Main menu DOM object
 */
helpers.getMainMenuEl = function(){
 return document.querySelector( '#mainNav ul' );
};

/**
 * Gets page title from the DOM
 * @return {Object} Main page title DOM object
 */
helpers.getPageTitleEl = function() {

  return document.getElementById( 'pageTitle' );

};

/**
 * Gets page content from the DOM
 * @return {Object} Main content DOM object
 */
helpers.getPageContentEl = function() {

  return document.getElementById( 'pageContent' );

};

/**
  * Gets editor toggle from the DOM
 * @return {Object} editor toggle DOM object
 */
helpers.getEditorToggleEl = function () {

  return document.getElementById( 'editorToggle' );

}; 
/**
  * Gets <a></a> Element on editor toggle from the DOM
 * @return {Object} editor toggle link in DOM object
 */
helpers.getEditorToggleAEl = function () {

  return helpers.getEditorToggleEl().children[0];

}; 

/**
  * Gets editor from the DOM
 *  @return {Object} editor DOM object
 */
helpers.getEditorEl = function () {

  return document.getElementById( 'editor' );

};
helpers.loadTitleInEditor = function ( title ) {

  helpers.getEditorTitleEl().value = title;

};
helpers.loadContentInEditor = function ( content ) {

  helpers.getEditorContentEl().value = content;

};
helpers.getEditorTitleEl = function () {

  return document.getElementById( 'editTitle' );

}
helpers.getEditorContentEl = function () {
  
  return document.getElementById( 'editContent' );

}

helpers.getFormEl = function () {

  return document.querySelector( 'form' ); 

}

helpers.getUpdtButton = function() {

  return document.getElementById('editUpdateBtn');

}

helpers.highlightUpdtButton = function(){
  document.getElementById('editUpdateBtn').style.fontWeight = 'bold';
} 

helpers.downlightUpdtButton = function(){
  document.getElementById('editUpdateBtn').style.fontWeight = 'lighter';
}
