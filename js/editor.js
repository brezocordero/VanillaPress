'use-strict'

/**
 * Editor functions
 */
var editor = {}; //The editor object

editor.currentPost = null; //Object with current content

/**
 * Initializes the editor
 */
editor.init = function (){

  //On init, editor is closed
  model.setEditorState('closed');

  //If content can be edited, preload content in editor
  if ( router.isEditable() ) editor.loadContent(router.currentPost);


  //add event listeners to preview content changes, to toggle editor and to protect unsaved data
  editor.addListeners();

}

/**
 * Function to add event listeners to editor. 
 * - To toggle editor on click
 * - To update content on input
 */

editor.addListeners = function (){

    //add event listeners on links to protect unsaved data
    var links = document.getElementsByTagName('a');
    for (let link of links) {
        link.addEventListener( 'click' , editor.confirmLeave);
    }
   //add event listener to toggle editor
   helpers.getEditorToggleAEl().removeEventListener('click', editor.confirmLeave);
   helpers.getEditorToggleAEl().addEventListener('click', editor.toggleEditor);

   //add event listener to title and input text
  helpers.getEditorTitleEl().addEventListener('input',editor.updateAndPreviewTitle);
  helpers.getEditorContentEl().addEventListener('input', editor.updateAndPreviewContent);

  //add event listener to update button
  helpers.getFormEl().addEventListener('submit',editor.saveCurrentContent);

}


editor.confirmLeave = function(e){
  //console.log('here', e);
  e.preventDefault();
  var hashValue= '';
  hashValue = e.currentTarget.href;
  hashValue = hashValue.split('#')[1];
  //console.log('hashValue', hashValue);
  const message='You have unsaved changes, they will be lost if go away from this page. Are you sure you want to leave?';
  if (router.hasChanged){
    if (false === confirm(message)){
      return;
    } else router.hasChanged = false;
  }
  window.location.hash = hashValue;

}

editor.saveCurrentContent = function ( e ) {

  e.preventDefault();
  router.saveCurrentContent();
  alert('All safe and sound!'); //TO-DO: Make this pretty

}

/**
 * On title input, updates current post title and loads it
 * 
 * @param {Event} e current event
 */
editor.updateAndPreviewTitle = function (e){

  //Updates current post
  router.currentPost.title = e.target.value;
  //Updates content on view
  router.hasChanged = true; //TO-DO: Make this DRY
  view.highlightUpdtButton();
  view.loadSingleContentObject (router.currentPost);

}
/**
 * On content input, updates current post content and loads it
 * 
 * @param {Event} e current event
 */
editor.updateAndPreviewContent = function (e){

  //Updates current post
  router.currentPost.content = e.target.value;
  //Updates content on view
  router.hasChanged = true;
  view.highlightUpdtButton();
  view.loadSingleContentObject (router.currentPost);
  
}

/**
 * Loads current content on editor
 * @param {Object} currentPost
 */

editor.loadContent = function (currentPost){

  editor.currentPost = currentPost;
  view.loadInEditor(editor.currentPost);

}

/**
 * Toggles the editor
 */
editor.toggleEditor = function (e){

  e.preventDefault();

  //Toggle editor only when content can be edited
  if ( router.isEditable())  {

    if ( 'closed' === model.getEditorState() ){

      editor.openEditor();

    }
    else {

      editor.closeEditor();

    }
  }
  else {

    //If not on single content show alert
    alert ('Click on a single post or page to edit');

  }
}

/**
 * Closes the editor, changes editor state
 */
editor.closeEditor= function() {

  model.setEditorState ( 'closed' );
  view.closeEditor();

}

/**
 * Opens the editor, changes editor state
 */
editor.openEditor= function() {

  model.setEditorState ( 'open' );
  view.openEditor();

}
