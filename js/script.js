
const elePlayButton = document.querySelector('#btn-play');
const eleLevelSelect = document.querySelector('#level');
const eleWelcome = document.querySelector('.welcome');
const eleGrid = document.querySelector('.grid');

const eleGuideButton = document.querySelector('#btn-guide')

elePlayButton.addEventListener('click', function(){
    eleGrid.innerHTML = ''; // this is for reset of the form output

    eleGrid.classList.remove('hidden');
    eleWelcome.classList.add('hidden');
     
    const nCell = parseInt(eleLevelSelect.value);
    const sideSquare = Math.sqrt(nCell);
    eleGrid.style.setProperty('--sideSquare', sideSquare);

    for (let i = 1; i <= nCell; i++) {
        
        const eleCell = document.createElement('div');
        eleCell.classList.add('cell');
        eleCell.innerHTML = i;
        eleGrid.append(eleCell);
    
        eleCell.addEventListener('click',
    
            function () {
    
            this.classList.toggle('active');
    
        });
    }
});

eleGuideButton.addEventListener('click', function () {

    if (eleGuideButton.dataset.state == 'show-guide') {
        eleGuideButton.innerHTML = 'Resume';
        eleGuideButton.dataset.state = 'show-game';
        eleGrid.classList.add('hidden');
        eleWelcome.classList.remove('hidden');
    }

    else {
        eleGuideButton.innerHTML = 'Guide';
        eleGuideButton.dataset.state = 'show-guide';
        eleGrid.classList.remove('hidden');
        eleWelcome.classList.add('hidden');
    }

});

