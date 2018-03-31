/*global BookmarkDisplay*/

function Builder(){
  
}

Builder.setBar = function(bar){
  this.bar = bar;
  return this;
}

Builder.setVisibilityToggle = function(toggle){
  this.visibilityToggle = toggle;
  return this;
}

Builder.setBookmarks = function(bookmarks){
  this.bookmarks = bookmarks;
  return this;
}

Builder.setExpandAnimation = function(animation){
  this.expandAnimation = animation;
  return this;
}

Builder.setOpacityAnimation = function(animation){
  this.opacityAnimation = animation;
  return this;
}

Builder.build = function(){
  
  if(typeof this.bookmarks == "undefined"){
    this.bookmarks = [];
  }
  
  return new BookmarkDisplay(this);
}