//cible la zone ou injecter le code
const gamecontainer = document.querySelector('.gamecontainer');

// donne la class img aux img
const imgs = document.querySelectorAll('.img');

// variables pour le comptage de points
let userPts = 0;
let userPoints = document.getElementById("userPoints");
userPoints.innerHTML = 0;

let computerPts = 0;
const computerPoints = document.getElementById("computerPoints");
computerPoints.innerHTML = 0;

let userVictory = 0;
const vU = document.getElementById("vU");
let computerVictory = 0;
const vC = document.getElementById("vC");

//creation de la fonction permettant l'ouverture de la modal 
function choice(img) {

    //creation des elements
    //variable let choix du joueur
    let playerChoice = img.id;

    //variable const choix du computer
    const options = ['pierre', 'feuille', 'ciseaux'];
    const computerChoice = options[Math.floor(Math.random() * options.length)];

    //const lien img et creation element img
    const pathImg = 'asset/img/'
    const rockImg = document.createElement('img');
    const sheetImg = document.createElement('img');
    const scisorImg = document.createElement('img');
    const rockImg2 = document.createElement('img')
    const sheetImg2 = document.createElement('img')
    const scisorImg2 = document.createElement('img')

    //const contenu modal
    const modalTitle = document.createElement('h3');
    const modal = document.createElement('div');
    const contentModal = document.createTextNode('USER VS COMPUTER');

    //const bouton de fermeture modal
    const spanbtn = document.createElement('span');
    //au click de la croix fermeture le la modal
    function closeModal() {
        modalTitle.classList.add('displayNone');
    }
    spanbtn.addEventListener('click', closeModal)

    //Condition switch
    switch (playerChoice) {
        case 'pierre':
            rockImg.setAttribute("src", 'assets/img/rock.png');
            rockImg.setAttribute("alt", 'image illustrant une main fermé comme une pierre');
            modal.appendChild(rockImg);
            break;
        case 'feuille':
            sheetImg.setAttribute("src", 'assets/img/sheet.png');
            sheetImg.setAttribute("alt", 'image illustrant une main ouverte comme une feuille');
            modal.appendChild(sheetImg);
            break;
        case 'ciseaux':
            scisorImg.setAttribute("src", 'assets/img/scisor.png');
            scisorImg.setAttribute("alt", 'image illustrant une main avec deux doigts comme un ciseaux');
            modal.appendChild(scisorImg);
            break;
        default:
            modal.innerHTML = `<p>Recommencez</p>`
    }

    switch (computerChoice) {
        case 'pierre':
            rockImg2.setAttribute("src", 'assets/img/rock.png');
            rockImg2.setAttribute("alt", 'image illustrant une main fermé comme une pierre');
            modal.appendChild(rockImg2);
            break;
        case 'feuille':
            sheetImg2.setAttribute("src", 'assets/img/sheet.png');
            sheetImg2.setAttribute("alt", 'image illustrant une main ouverte comme une feuille');
            modal.appendChild(sheetImg2);
            break;
        case 'ciseaux':
            scisorImg2.setAttribute("src", 'assets/img/scisor.png');
            scisorImg2.setAttribute("alt", 'image illustrant une main avec deux doigts comme un ciseaux');
            modal.appendChild(scisorImg2);
            break;
        default:
            modal.innerHTML = `<p>Recommencez</p>`
    }

    //creation d'attributs
    modal.setAttribute('class', 'modal');
    spanbtn.setAttribute("class", "croix");
    //creation du contenu

    //creation des noeuds

    gamecontainer.appendChild(modalTitle);
    modalTitle.appendChild(contentModal);
    modalTitle.appendChild(spanbtn);
    modalTitle.appendChild(modal);

    //condition if gagnant perdant
    if (playerChoice == computerChoice) {
        const textElement = document.createElement('p');
        const egality = document.createTextNode('Egalité !');
        modalTitle.appendChild(textElement);
        textElement.appendChild(egality);
        textElement.setAttribute('class', 'result');
    }
    else if (
        (playerChoice === 'pierre' && computerChoice === 'ciseaux') ||
        (playerChoice === 'feuille' && computerChoice === 'pierre') ||
        (playerChoice === 'ciseaux' && computerChoice === 'feuille')
    ) {
        if (userPoints.innerHTML > 1) {
            userPts = userPoints.innerHTML = 0;
            // computerPts = computerPoints.innerHTML=0;

            userPts = 0;
            computerPts = 0;
            userPoints.innerHTML = 0;
            computerPoints.innerHTML = 0;
            vU.innerHTML++
        }
        else {
            // userPoints.innerHTML = userPts++;
            userPoints.innerHTML++;
        }

        const textElement2 = document.createElement('p');
        const win = document.createTextNode('Gagné !');
        modalTitle.appendChild(textElement2);
        textElement2.appendChild(win);
        textElement2.setAttribute('class', 'result');
        rockImg.setAttribute('class', 'move');
        sheetImg.setAttribute('class', 'move');
        scisorImg.setAttribute('class', 'move');


    }
    else {
        if (computerPoints.innerHTML > 1) {
            userPts = userPoints.innerHTML = 0;
            // computerPts = computerPoints.innerHTML=0;
            userPts = 0;
            computerPts = 0;
            userPoints.innerHTML = 0;
            computerPoints.innerHTML = 0;
            vC.innerHTML++;
        }
        else {
            computerPoints.innerHTML++;
        }

        const textElement3 = document.createElement('p');
        const lose = document.createTextNode('Perdu !');
        modalTitle.appendChild(textElement3);
        textElement3.appendChild(lose);
        textElement3.setAttribute('class', 'result');
        rockImg2.setAttribute('class', 'move');
        sheetImg2.setAttribute('class', 'move');
        scisorImg2.setAttribute('class', 'move');

    }


} //fin de fonction

//gestion du click

//au click sur une image ouverture de la modal via la fonction choice img
imgs.forEach(img => {
    img.addEventListener('click', () => {
            choice(img)
        }

    )
});

//au click rechargement de la page
function reset() {
    window.location.reload();
}
const resetBtn = document.getElementById('resetBtn');
resetBtn.addEventListener('click', () => {
    reset();
});
