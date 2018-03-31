/* 
 * The following is used to prevent Brackets from complaining about use of 
 * Certain variables
 */

/*global document window Builder*/

/* Div variables */
var bookmarkDisplayDiv = document.getElementById('bookmark-display');
var bookmarkDisplayVisibilityToggleDiv = document.getElementById('bookmark-visibility-toggle');
/* Div variables */

/* CSS variables */
var bookmarkDisplayExpandAnimation = "bookmark-display-expand-animation";
var bookmarkDisplayOpacityAnimation = "bookmark-display-opacity-animation";
/* CSS variables */


function setBackground(){
  document.body.style.background = 
    "white url(https://static.pexels.com/photos/132037/pexels-photo-132037.jpeg) no-repeat center center fixed";
}


var bookmarkDisplay = Builder
                        .setBar(bookmarkDisplayDiv)
                        .setVisibilityToggle(bookmarkDisplayVisibilityToggleDiv)
                        .setExpandAnimation(bookmarkDisplayExpandAnimation)
                        .setOpacityAnimation(bookmarkDisplayOpacityAnimation)
                        .setBookmarks([])
                        .build();

bookmarkDisplayDiv.addEventListener('mouseover', function(){
  bookmarkDisplay.expand();
});

bookmarkDisplayDiv.addEventListener('mouseout', function(){
  bookmarkDisplay.collapse();
});

window.onload = function(){
  setBackground();
}