/*global */
function BookmarkDisplay(builder){
  this.bar = builder.bar;
  this.visibilityToggle = builder.visibilityToggle;
  this.bookmarks = builder.bookmarks;
  this.expandAnimation = builder.expandAnimation;
  this.opacityAnimation = builder.opacityAnimation;
}

BookmarkDisplay.prototype.update = function(){
  
}

BookmarkDisplay.prototype.collapse = function(){
  this.visibilityToggle.classList.remove(this.expandAnimation);
  this.bar.classList.remove(this.opacityAnimation);
}

BookmarkDisplay.prototype.expand = function(){
  this.visibilityToggle.classList.add(this.expandAnimation);
  this.bar.classList.add(this.opacityAnimation);
}

BookmarkDisplay.prototype.TOGGLE_VISIBILITY = 1;