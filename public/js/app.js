'use strict';

const smallScreen = window.matchMedia('(min-width: 320px) and (max-divice-width)');
const iPadScreen = window.matchMedia('(min-width: 1024px)');

if (window.matchMedia('(min-width: 320px)').matches) {
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
if (window.matchMedia('(min-width: 768px)').matches){

}
if (window.matchMedia('(min-width: 1224px').matches){
  
}
