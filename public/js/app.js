'use strict';

// let navigationButtons = document.getElementsByClassName('navButtons');
// for (let i = 0; i < navigationButtons.length; i++) {
//   navigationButtons[i].addEventListener('click', swapSelected);
// }

const rSlashJavaScript = new XMLHttpRequest();
rSlashJavaScript.addEventListener('load', reqListenerJavaScript);
rSlashJavaScript.open('GET', 'https://www.reddit.com/r/javascript/.json');
rSlashJavaScript.send();

function reqListenerJavaScript() {
  const responseText = JSON.parse(this.responseText).data.children;

  for (let i = 0; i < responseText.length; i++) {
    let jSTitleDiv = document.createElement('div');
    jSTitleDiv.innerHTML = responseText[i].data.title;
    jSTitleDiv.className = 'jSContentBox';
    let contentBox = document.getElementById('content');
    contentBox.appendChild(jSTitleDiv);

    let jSContentP = document.createElement('p');
    jSContentP.innerHTML = responseText[i].data.selftext;
    jSTitleDiv.appendChild(jSContentP);

    let jSLinks = document.createElement('p');
    jSLinks.innerHTML = responseText[i].data.url;
    jSContentP.appendChild(jSLinks);
  }
}

const rSlashChoosingBeggers = new XMLHttpRequest();
rSlashChoosingBeggers.addEventListener('load', reqListenerChoosingBeggers);
rSlashChoosingBeggers.open('GET', 'https://www.reddit.com/r/ChoosingBeggars/.json');
rSlashChoosingBeggers.send();

function reqListenerChoosingBeggers() {
  const responseText = JSON.parse(this.responseText).data.children;

  for (let i = 0; i < responseText.length; i++) {
    let choosingBeggersTitleDiv = document.createElement('div');
    choosingBeggersTitleDiv.innerHTML = responseText[i].data.title;
    choosingBeggersTitleDiv.className = 'cBContentBox';
    let contentBox = document.getElementById('content');
    contentBox.appendChild(choosingBeggersTitleDiv);

    let choosingBeggersContent = document.createElement('p');
    choosingBeggersContent.innerHTML = responseText[i].data.selftext;
    choosingBeggersTitleDiv.appendChild(choosingBeggersContent);

    let choosingBeggersPictures = document.createElement('img');
    choosingBeggersPictures.src = responseText[i].data.thumbnail;
    choosingBeggersContent.appendChild(choosingBeggersPictures);
    console.log(choosingBeggersPictures);
  }
}

const rSlashWhatCouldGoWrong = new XMLHttpRequest();
rSlashWhatCouldGoWrong.addEventListener('load', reqListenerWCGW);
rSlashWhatCouldGoWrong.open('GET', 'https://www.reddit.com/r/Whatcouldgowrong/.json');
rSlashWhatCouldGoWrong.send();

function reqListenerWCGW() {
  const responseText = JSON.parse(this.responseText).data.children;

  for (let i = 0; i < responseText.length; i++) {
    let whatCouldGoWrongTitleDiv = document.createElement('div');
    whatCouldGoWrongTitleDiv.innerHTML = responseText[i].data.title;
    whatCouldGoWrongTitleDiv.className = 'WCGWBox';
    let contentBox = document.getElementById('content');
    contentBox.appendChild(whatCouldGoWrongTitleDiv);

    let whatCouldGoWrongLink = document.createElement('a');
    whatCouldGoWrongLink.href = responseText[i].data.url;
    whatCouldGoWrongLink.innerHTML = responseText[i].data.url;
    whatCouldGoWrongLink.target = '_blank';
    console.log(whatCouldGoWrongLink.href);
    whatCouldGoWrongTitleDiv.appendChild(whatCouldGoWrongLink);
  }
}

let subRandomChoices = [
  'https://www.reddit.com/r/DnD/.json',
  'https://www.reddit.com/r/entitledparents/.json',
  'https://www.reddit.com/r/dankmemes/.json',
  'https://www.reddit.com/r/NEVERGONNAGIVEYOUUP/.json',
  'https://www.reddit.com/r/CrappyDesign/.json',
  'https://www.reddit.com/r/nailedit/.json',
  'https://www.reddit.com/r/whoosh/.json',
];
let randomNumberGenerator = Math.floor(Math.random() * 7);

const rSlashRandom = new XMLHttpRequest();
rSlashRandom.addEventListener('load', reqListenerRandom);
rSlashRandom.open('GET', subRandomChoices[randomNumberGenerator]);
rSlashRandom.send();

function reqListenerRandom() {
  const responseText = JSON.parse(this.responseText).data.children;

  for (let i = 0; i < responseText.length; i++) {
    let randomTitleDiv = document.createElement('div');
    randomTitleDiv.innerHTML = responseText[i].data.title;
    randomTitleDiv.className = 'randomBox';
    let contentBox = document.getElementById('content');
    contentBox.appendChild(randomTitleDiv);

    // let randomPics = document.createElement('img');
    // randomPics.src = responseText[i].data.thumbnail;
    // randomTitleDiv.appendChild('randomPics');
  }
}
