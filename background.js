chrome.tabs.onCreated.addListener(function(newTab){
  if(newTab.url === "chrome://newtab/"){
    console.log("new tab!");
  }
});