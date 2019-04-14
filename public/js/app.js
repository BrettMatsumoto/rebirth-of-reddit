'use strict';

let navigationButtons = document.getElementsByClassName('navButtons');
for (let i = 0; i < navigationButtons.length; i++) {
  navigationButtons[i].addEventListener('click', swapSelected);
}

function swapSelected() {
  let selected = this.innerHTML;
  console.log(selected);
  const contentBox = document.getElementById('content');

  if (selected === 'r/JavaScript') {
    contentBox.innerHTML = '';
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
  } else if (selected === 'r/ChoosingBeggers') {
    contentBox.innerHTML = '';
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

        // let choosingBeggersPictures = document.createElement('img');
        // choosingBeggersPictures.src = responseText[i].data.thumbnail;
        // choosingBeggersContent.appendChild(choosingBeggersPictures);
        // console.log(choosingBeggersPictures);
      }
    }
  } else if (selected === 'r/WhatCouldGoWrong') {
    contentBox.innerHTML = '';
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
        whatCouldGoWrongTitleDiv.appendChild(whatCouldGoWrongLink);
      }
    }
  } else if (selected === 'RANDOM') {
    contentBox.innerHTML = '';
    let subRandomChoices = [
      'https://www.reddit.com/r/DnD/.json',
      'https://www.reddit.com/r/entitledparents/.json',
      'https://www.reddit.com/r/dankmemes/.json',
      'https://www.reddit.com/r/NEVERGONNAGIVEYOUUP/.json',
      'https://www.reddit.com/r/CrappyDesign/.json',
      'https://www.reddit.com/r/nailedit/.json',
      'https://www.reddit.com/r/whoosh/.json',
    ];

    function randomNumber() {
      let randomNumberGenerator = Math.floor(Math.random() * 7);
      let randomChoice = subRandomChoices[randomNumberGenerator];
      return randomChoice;
    }

    const rSlashRandom = new XMLHttpRequest();
    rSlashRandom.addEventListener('load', reqListenerRandom);
    rSlashRandom.open('GET', randomNumber());
    rSlashRandom.send();

    function reqListenerRandom() {
      const responseText = JSON.parse(this.responseText).data.children;

      for (let i = 0; i < responseText.length; i++) {
        let randomTitleDiv = document.createElement('div');
        randomTitleDiv.innerHTML = responseText[i].data.title;
        randomTitleDiv.className = 'randomBox';
        let contentBox = document.getElementById('content');
        contentBox.appendChild(randomTitleDiv);
      }
    }
  }
}
