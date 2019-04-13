'use strict';

let selected = 'r/JavaScript';

if (selected === 'r/JavaScript') {
  //if r/JavaScript is selected;

  if (window.matchMedia('(min-width: 320px)').matches) {
    //Javascript for iphone sized devices;

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
        
        let jSLinks = document.createElement('p');
        jSLinks.innerHTML = responseText[i].data.url;
        jSContentP.appendChild(jSLinks);
        
        let jSScores = document.createElement('span');
        jSScores.innerHTML = 'score:' + responseText[i].data.score;
        jSContentP.appendChild(jSScores);
      }
    }

    let navigationButtons = document.getElementsByClassName('navButtons');
    for (let i = 0; i < navigationButtons.length; i++) {
      navigationButtons[i].addEventListener('click', swapSelected);
    }

    function swapSelected() {
      selected = this.innerHTML;
      console.log(selected);
    }
  }

  if (window.matchMedia('(min-width: 768px)').matches) {
    //Javascript for tablet sized devices;
  }

  if (window.matchMedia('(min-width: 1224px').matches) {
    //Javascript for desktop/laptop sized devices;
  }
}

if (selected === 'r/ChoosingBeggers') {
  // if choosingbeggers is selected;
}

if (selected === 'r/WhatCouldGoWrong') {
  // if whatcouldgowrong is selected;
}

if (selected === 'RANDOM') {
  // if random is selected;
}
