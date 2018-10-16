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
 helpers.createMenuItem = function (contentObj) {
   const  menuItemEl= document.createElement( 'li' );

   menuItemEl.appendChild( helpers.createLink( contentObj ) );

   return menuItemEl

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
    linkEl.href = `#${contentObj.slug}`;
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
helpers.getMainMenuEl = () => document.querySelector( '#mainNav ul' );

/**
 * Gets page title from the DOM
 * @return {Object} Main page title DOM object
 */
helpers.getPageTitleEl = () => document.getElementById( 'pageTitle' );

/**
 * Gets page content from the DOM
 * @return {Object} Main content DOM object
 */
helpers.getPageContentEl = () => document.getElementById( 'pageContent' );

/**
  * Gets editor toggle from the DOM
 * @return {Object} editor toggle DOM object
 */
helpers.getEditorToggleEl = () => document.getElementById( 'editorToggle' );

/**
  * Gets <a></a> Element on editor toggle from the DOM
 * @return {Object} editor toggle link in DOM object
 */
helpers.getEditorToggleAEl = () => helpers.getEditorToggleEl().children[0];

/**
  * Gets editor from the DOM
 *  @return {Object} editor DOM object
 */
helpers.getEditorEl = () => document.getElementById( 'editor' );

// Loads title in editor
helpers.loadTitleInEditor = ( title ) => helpers.getEditorTitleEl().value = title;

//loads content in editor
helpers.loadContentInEditor = ( content ) => helpers.getEditorContentEl().value = content;

//Get editor title from the DOM
helpers.getEditorTitleEl = () => document.getElementById( 'editTitle' );

//Get editor content from the DOM
helpers.getEditorContentEl = () => document.getElementById( 'editContent' );

// Get form from the DOM
helpers.getFormEl = () => document.querySelector( 'form' ); 


helpers.getUpdtButton = () => document.getElementById('editUpdateBtn');

helpers.highlightUpdtButton = () => document.getElementById('editUpdateBtn').style.fontWeight = 'bold';

helpers.downlightUpdtButton = () => document.getElementById('editUpdateBtn').style.fontWeight = 'lighter';

