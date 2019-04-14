'use strict';

let navigationButtons = document.getElementsByClassName('navButtons');
for (let i = 0; i < navigationButtons.length; i++) {
  navigationButtons[i].addEventListener('click', swapSelected);
}

function swapSelected() {
  let selected = this.innerHTML;
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

        let jSAuthor = document.createElement('p');
        jSAuthor.innerHTML = responseText[i].data.author;
        jSTitleDiv.appendChild(jSAuthor);

        let jSUpvote = document.createElement('span');
        jSUpvote.innerHTML = 'Upvotes: ' + responseText[i].data.score;
        jSTitleDiv.appendChild(jSUpvote);

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

        let cBAuthor = document.createElement('p');
        cBAuthor.innerHTML = responseText[i].data.author;
        choosingBeggersTitleDiv.appendChild(cBAuthor);

        let cBUpvote = document.createElement('span');
        cBUpvote.innerHTML = 'Upvotes: ' + responseText[i].data.score;
        choosingBeggersTitleDiv.appendChild(cBUpvote);

        let choosingBeggersPictures = document.createElement('img');
        choosingBeggersPictures.src = responseText[i].data.thumbnail;
        choosingBeggersContent.appendChild(choosingBeggersPictures);
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

        let whatCouldGoWrongContent = document.createElement('p');
        whatCouldGoWrongContent.innerHTML = responseText[i].data.selftext;
        whatCouldGoWrongTitleDiv.appendChild(whatCouldGoWrongContent);

        let whatCouldGoWrongLink = document.createElement('a');
        whatCouldGoWrongLink.href = responseText[i].data.url;
        whatCouldGoWrongLink.innerHTML = responseText[i].data.url;
        whatCouldGoWrongLink.target = '_blank';
        whatCouldGoWrongContent.appendChild(whatCouldGoWrongLink);

        let whatCouldGoWrongAuthor = document.createElement('p');
        whatCouldGoWrongAuthor.innerHTML = responseText[i].data.author;
        whatCouldGoWrongContent.appendChild(whatCouldGoWrongAuthor);

        let whatCouldGoWrongDate = document.createElement('span');
        whatCouldGoWrongDate.innerHTML = 'Upvotes: ' + responseText[i].data.score;
        whatCouldGoWrongContent.appendChild(whatCouldGoWrongDate);

        let whatCouldGoWrongPictures = document.createElement('img');
        whatCouldGoWrongPictures.src = responseText[i].data.thumbnail;
        whatCouldGoWrongLink.appendChild(whatCouldGoWrongPictures);
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

        let randomContent = document.createElement('p');
        randomContent.innerHTML = responseText[i].data.selftext;
        randomTitleDiv.appendChild(randomContent);

        let randomLink = document.createElement('a');
        randomLink.href = responseText[i].data.url;
        randomLink.innerHTML = responseText[i].data.url;
        randomLink.target = '_blank';
        randomContent.appendChild(randomLink);

        let randomAuthor = document.createElement('p');
        randomAuthor.innerHTML = responseText[i].data.author;
        randomContent.appendChild(randomAuthor);

        let randomDate = document.createElement('span');
        randomDate.innerHTML = 'Upvotes: ' + responseText[i].data.score;
        randomContent.appendChild(randomDate);

        let randomPictures = document.createElement('img');
        randomPictures.src = responseText[i].data.thumbnail;
        randomLink.appendChild(randomPictures);
      }
    }
  }
}
