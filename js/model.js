/**
 * Model file for working with data
 */

/**
 * Main Model Object
 *
 */
var model = {};

/**
 * Initializes the Model
 *
 */
model.init = function() {
  if (null === localStorage.getItem( 'vanillaPress' ) ) {
    model.updateLocalStore( data );
  }

}

/**
 * Gets posts from local store
 *
 * @return {Object[]} posts Array of posts
 */
model.getPosts = function() {

  var posts = model.getLocalStore().posts;
  return posts;

}

/**
 * Get a single post based on url slug
 *
 * @param {string} slug The slug for the post
 * @return {Object} post Single post
 *
 */
model.getPost = function( slug ) {

  var posts = model.getLocalStore().posts;

  // Get the post from store based on the slug
  for( var i = 0, max = posts.length; i < max; i++  ) {

    if( slug === posts[i].slug ) {
      return posts[i];
    }

  }

  return null;

}

/**
 * Finds post in store, updates it and saves in localStorage
 *
 * @param {object} post
 */
model.updateContentInStore = function (post) {
  //Get posts and pages from local storage 
  var store = model.getLocalStore();
  //Find in posts using slug
  
  var id = store.posts.findIndex(x => x.slug === post.slug);
  //If found, update post
  if ( -1 !== id ) {
    store.posts[id]=post;
    //else find in pages and update page
    }else{
    id = store.pages.findIndex(x => x.slug === post.slug);
   
    store.pages[id]=post;
  }
  model.updateLocalStore(store);
}

/**
 * Gets pages from local store
 *
 * @return {Object[]} pages Array of page objects
 */
 model.getPages = function() {

   var pages = model.getLocalStore().pages;
   return pages;

 }

/**
 * Get a single page based on url slug
 *
 * @param {String} slug The slug for the page
 * @return {Object} page  Single page object
 *
 */
 model.getPage = function( slug ) {

   var pages = model.getLocalStore().pages;

   // Get the post from store based on the slug
   for( var i = 0, max = pages.length; i < max; i++  ) {

     if( slug === pages[i].slug ) {
       return pages[i];
     }

   }

   return null;

 }
 /**
 * Get a single page or post based on url slug
 *
 * @param {String} slug The slug for the page or post
 * @return {Object} page or post  Single  object
 *
 */
model.getSingleContent = function (slug) {
   var singleContent = model.getPost( slug );
   if ( null === singleContent ) {
      singleContent = model.getPage ( slug );
   }
   return singleContent;
}
/**
 * Gets content from local store
 *
 * @return {Object} store Native JavaScript object from local store
 */
model.getLocalStore = function() {

  var store = JSON.parse( localStorage.getItem( 'vanillaPress' ) );

  return store;

}

/**
 * Saves temporary store to local storage.
 *
 * @param {Object} store Native JavaScript object with site data
 */
model.updateLocalStore = function( store ) {

  //localStorage.setItem( 'vanillaPress', '' );
  localStorage.setItem( 'vanillaPress', JSON.stringify( store ) );

}

/**
 * Deletes data from local storage
 *
 */
model.removeLocalStore = function() {

  localStorage.removeItem( 'vanillaPress' );

}
/**
 * Saves editor State to local storage.
 *
 * @param {String} String with editor state (hidden or open)
 */
model.setEditorState = function ( editorState ) {
 
  localStorage.setItem( 'editorState' , editorState );
  
}
/**
 * Gets editor State from local storage.
 *
 * @return {String} String with editor state (hidden or open)
 */
model.getEditorState = function (  ) {
  
  return localStorage.getItem ( 'editorState' );
  
}
