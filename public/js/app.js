'use strict';

let selected = 'javascript';

if (selected = 'javascript'){ //if r/JavaScript is selected;

  if (window.matchMedia('(min-width: 320px)').matches) { //Javascript for iphone sized devices;
    const rSlashJavaScript = new XMLHttpRequest();
    rSlashJavaScript.addEventListener('load', reqListenerJavaScript);
    rSlashJavaScript.open('GET', 'https://www.reddit.com/r/javascript/.json');
    rSlashJavaScript.send();
  
    function reqListenerJavaScript() {
      console.log(JSON.parse(this.responseText).data.children);
  
      const responseText = JSON.parse(this.responseText).data.children;
      for (let i = 0; i < responseText.length; i++) {
        let jSTitleDiv = document.createElement('div');
        jSTitleDiv.innerHTML = responseText[i].data.title;
        jSTitleDiv.className = 'contentBox';
        let contentBox = document.getElementById('content');
        contentBox.appendChild(jSTitleDiv);
  
        let jSContentP = document.createElement('p');
        jSContentP.innerHTML = responseText[i].data.selftext;
        jSTitleDiv.appendChild(jSContentP);
      }
    }
  }
  if (window.matchMedia('(min-width: 768px)').matches) { //Javascript for tablet sized devices;
  }
  if (window.matchMedia('(min-width: 1224px').matches) { //Javascript for desktop/laptop sized devices;
  }
} 

if (selected = 'choosingbeggers'){ // if choosingbeggers is selected;

}

if (selected = 'whatcouldgowrong'){ // if whatcouldgowrong is selected;

}

if (selected = 'random'){ // if random is selected;

}

