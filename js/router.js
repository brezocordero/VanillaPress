'use-strict'

/**
 * Router file for managing url changes
 */

/**
 * The main router object.
 *
 */
var router = {};

router.editable = false; //Determines if content can be edited
router.hasChanged = false; //True if current content has changed
router.currentPost = null; //Current Post or page loaded

/**
 * Initializes the Router
 *
 */
router.init = function() {

  router.loadContent();
  router.listenPageChange();

};
/**
 * True if content can be edited
 *
 * @return {Boolean} 
 */
router.isEditable = () => router.editable;

/**
 * Gets the slug from the URL
 *
 * @return {string} slug Slug from URL
 */
router.getSlug = () => ( "" === window.location.hash ) ?  null : window.location.hash.substr( 1 );


/**
 * Listener function for URL changes
 *
 */
router.listenPageChange = function() {

  window.addEventListener( 'hashchange' , router.loadContent, false );

}


/**
 * Determines whether to load blog posts
 * or single post
 *
 */

router.loadContent = function() {

  var url = router.getSlug();
  view.clearContent();
  router.hasChanged = false;

  if ( 'blog' === url ) {

    //load content
    view.loadBlogPosts();

    // Blog posts can not be edited, close editor if open.
    router.editable = false;
    if ( 'open' === model.getEditorState()){
        editor.closeEditor();
    }

  } else {

    if( null === url ) url = 'home';

    //load content
    view.loadSingleContent( url );

    //Single content can be edited, load editor.
    router.editable = true;
    router.currentPost = model.getSingleContent (url);
    editor.loadContent(router.currentPost);

  }


}
//Saves current post on local storage
router.saveCurrentContent = function(){
  router.hasChanged = false;
  model.updateContentInStore(router.currentPost);
}

