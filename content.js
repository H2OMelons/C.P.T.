/* 
 * The following is used to prevent Brackets from complaining about use of 
 * Certain variables
 */

/*global document window Builder*/

/* Div variables */
var bookmarkDisplayDiv = document.getElementById('bookmark-display');
var bookmarkDisplayVisibilityToggleDiv = document.getElementById('bookmark-visibility-toggle');
/* Div variables */

/* Button variables */
var settingsButton = document.getElementById('settings-button');
/* Button variables */

/* Modal variables */
var settingsModal = document.getElementById('settings-modal');
/* Modal variables */

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

settingsButton.addEventListener('click', function(){
  if(window.getComputedStyle(settingsModal).display == "none"){
    settingsModal.style.display = "block";
  }
  else{
    settingsModal.style.display = "none";
  }
});

window.onload = function(){
  setBackground();
}