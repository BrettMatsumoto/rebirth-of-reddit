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
        jSTitleDiv.className = 'contentBox';
        let contentBox = document.getElementById('content');
        contentBox.appendChild(jSTitleDiv);

        let jSPictures = document.createElement('img');
        jSPictures.className = 'contentPictures';
        jSPictures.src = responseText[i].data.thumbnail;
        jSTitleDiv.appendChild(jSPictures);

        let jSContentP = document.createElement('p');
        jSContentP.className = 'contentText';
        jSContentP.innerHTML = responseText[i].data.selftext;
        jSTitleDiv.appendChild(jSContentP);

        let jSAuthor = document.createElement('p');
        jSAuthor.className = 'contentAuthor';
        jSAuthor.innerHTML = responseText[i].data.author;
        jSTitleDiv.appendChild(jSAuthor);

        let jSUpvote = document.createElement('span');
        jSUpvote.className = 'contentVotes';
        jSUpvote.innerHTML = 'Upvotes: ' + responseText[i].data.score;
        jSTitleDiv.appendChild(jSUpvote);

        let jSLinks = document.createElement('a');
        jSLinks.className = 'contentLinks';
        jSLinks.href = responseText[i].data.url;
        jSLinks.innerHTML = responseText[i].data.url;
        jSLinks.target = '_blank';
        jSTitleDiv.appendChild(jSLinks);
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
        choosingBeggersTitleDiv.className = 'contentBox';
        let contentBox = document.getElementById('content');
        contentBox.appendChild(choosingBeggersTitleDiv);

        let choosingBeggersPictures = document.createElement('img');
        choosingBeggersPictures.className = 'contentPictures';
        choosingBeggersPictures.src = responseText[i].data.thumbnail;
        choosingBeggersTitleDiv.appendChild(choosingBeggersPictures);

        let choosingBeggersContent = document.createElement('p');
        choosingBeggersContent.className = 'contentText';
        choosingBeggersContent.innerHTML = responseText[i].data.selftext;
        choosingBeggersTitleDiv.appendChild(choosingBeggersContent);

        let cBAuthor = document.createElement('p');
        cBAuthor.className = 'contentAuthor';
        cBAuthor.innerHTML = responseText[i].data.author;
        choosingBeggersTitleDiv.appendChild(cBAuthor);

        let cBUpvote = document.createElement('span');
        cBUpvote.className = 'contentUpvotes';
        cBUpvote.innerHTML = 'Upvotes: ' + responseText[i].data.score;
        choosingBeggersTitleDiv.appendChild(cBUpvote);

        let cBLinks = document.createElement('a');
        cBLinks.className = 'contentLinks';
        cBLinks.href = responseText[i].data.url;
        cBLinks.innerHTML = responseText[i].data.url;
        cBLinks.target = '_blank';
        choosingBeggersTitleDiv.appendChild(cBLinks);
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
        whatCouldGoWrongTitleDiv.className = 'contentBox';
        let contentBox = document.getElementById('content');
        contentBox.appendChild(whatCouldGoWrongTitleDiv);

        let whatCouldGoWrongPictures = document.createElement('img');
        whatCouldGoWrongPictures.className = 'contentPictures';
        whatCouldGoWrongPictures.src = responseText[i].data.thumbnail;
        whatCouldGoWrongTitleDiv.appendChild(whatCouldGoWrongPictures);

        let whatCouldGoWrongContent = document.createElement('p');
        whatCouldGoWrongContent.className = 'contentText';
        whatCouldGoWrongContent.innerHTML = responseText[i].data.selftext;
        whatCouldGoWrongTitleDiv.appendChild(whatCouldGoWrongContent);

        let whatCouldGoWrongAuthor = document.createElement('p');
        whatCouldGoWrongAuthor.className = 'contentAuthor';
        whatCouldGoWrongAuthor.innerHTML = responseText[i].data.author;
        whatCouldGoWrongTitleDiv.appendChild(whatCouldGoWrongAuthor);

        let whatCouldGoWrongDate = document.createElement('span');
        whatCouldGoWrongDate.className = 'contentDate';
        whatCouldGoWrongDate.innerHTML = 'Upvotes: ' + responseText[i].data.score;
        whatCouldGoWrongTitleDiv.appendChild(whatCouldGoWrongDate);

        let whatCouldGoWrongLink = document.createElement('a');
        whatCouldGoWrongLink.className = 'contentLink';
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
        randomTitleDiv.className = 'contentBox';
        let contentBox = document.getElementById('content');
        contentBox.appendChild(randomTitleDiv);

        let randomPictures = document.createElement('img');
        randomPictures.src = responseText[i].data.thumbnail;
        randomPictures.className = 'contentPictures';
        randomPictures.id = 'random' + i;
        randomTitleDiv.appendChild(randomPictures);

        let randomContent = document.createElement('p');
        randomContent.className = 'contentText';
        randomContent.innerHTML = responseText[i].data.selftext;
        randomTitleDiv.appendChild(randomContent);

        let randomAuthor = document.createElement('p');
        randomAuthor.className = 'contentAuthor';
        randomAuthor.innerHTML = responseText[i].data.author;
        randomTitleDiv.appendChild(randomAuthor);

        let randomDate = document.createElement('span');
        randomDate.className = 'contentDate';
        randomDate.innerHTML = 'Upvotes: ' + responseText[i].data.score;
        randomTitleDiv.appendChild(randomDate);

        let randomLink = document.createElement('a');
        randomLink.className = 'contentLink';
        randomLink.href = responseText[i].data.url;
        randomLink.innerHTML = responseText[i].data.url;
        randomLink.target = '_blank';
        randomTitleDiv.appendChild(randomLink);
      }
    }
  }
}
