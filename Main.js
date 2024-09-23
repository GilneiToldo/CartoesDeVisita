const popup = document.getElementById("popup");
const closePopupBtn = document.getElementById("closePopupBtn");
const imageContainer = document.getElementById("imageContainer");

const addCard = document.getElementById('addCard');
const hash = window.location.hash;

const dados = [
    {
        nome: 'Émerson Rodrigues',
        cargo: 'Consultor de Vendas',
        email: 'emerson@servylab.com.br',
        telefone: '5551992414310'
    },
    {
        nome: 'Nicolas Toldo',
        cargo: 'Consultora de Vendas',
        email: 'nick.servylab@gmail.com',
        telefone: '5551992504298'
    },
    {
        nome: 'Gabriela Ribeiro',
        cargo: 'Consultora de Vendas',
        email: 'gabriela@servylab.com.br',
        telefone: '5551990000000'
    },
    {
        nome: 'Gilnei Toldo',
        cargo: 'CEO/Diretor',
        email: 'gilnei@servylab.com.br',
        telefone: '5551992420250'
    },
    {
        nome: 'Dóris Kauer Toldo',
        cargo: 'CEO/Diretor',
        email: 'doris@servylab.com.br',
        telefone: '5551992421762'
    }
];

function checkHash() {
    let u = 0;

    switch (hash) {
        case '#emerson':
            u = 0;
            break;
        case '#nicolas':
            u = 1;
            break;
        case '#gabriela':
            u = 2;
            break;
        case '#gilnei':
            u = 3;
            break;
        case '#doris':
            u = 4;
            break;
        default:
            u = 3;
            break;
    }

    const profileCard = document.createElement('div');
    profileCard.classList.add('card')
    profileCard.innerHTML = `
        <div class="pfPhoto" style="background-image: url('./assets/photos/${dados[u].nome}.jpeg');"></div>
        <div class="nomeCargo">
            <h1>${dados[u].nome}</h1>
            <h2>${dados[u].cargo}</h2>
        </div>

        <div class="lineContainer">
            <img src="./assets/icons/qrCode.svg" alt="" id="qrCodeBt">
            <button class="saveBt" id="saveCard">Salvar cartão</button>
            <img src="./assets/icons/share.svg" alt="" id="shareBt">
        </div>

        <div class="lineContainer">
            <a href="tel:+${dados[u].telefone}">
                <div class="icon">
                    <button id="LigarBt" class="pfBt" name="ligar"></button>
                    <label for="ligar">Ligar</label>
                </div>
            </a>

            <a href="https://wa.me/${dados[u].telefone}">
                <div class="icon">
                    <button id="WhatsappBt" class="pfBt" name="Whatsapp"></button>
                    <label for="Whatsapp">Whatsapp</label>
                </div>
            </a>

            <a href="mailto:${dados[u].email}">
                <div class="icon">
                    <button id="EmailBt" class="pfBt" name="Email"></button>
                    <label for="Email">Email</label>
                </div>
            </a>

            <a href="https://www.google.com/maps/place/Servylab+Equipamentos+e+Móveis+para+Laboratório/@-29.7947505,-51.1494269,17z/data=!3m1!4b1!4m6!3m5!1s0x95196846fb607771:0x41bcb84cbdb05fca!8m2!3d-29.7947505!4d-51.1494269!16s%2Fg%2F1tfd_03f?entry=ttu&g_ep=EgoyMDI0MDkxNS4wIKXMDSoASAFQAw%3D%3D">
                <div class="icon">
                    <button id="MapsBt" class="pfBt" name="Mapa"></button>
                    <label for="Mapa">Mapa</label>
                </div>
            </a>
        </div>

        <div class="links">
            <h3>Meus Links</h3>

            <a class="meusLinks" id="meusLinks1" href="https://www.servylab.com.br">
                <span><img src="./assets/icons/genetic.svg" alt=""></span>
                <span>Site Da Servylab</span>
            </a>
            <a class="meusLinks" id="meusLinks2" href="https://www.instagram.com/servylab/" >
                <span><img src="./assets/icons/instagram.svg" alt""/></span>
                <span>Visite nosso Instagram!</span>
            </a>
            <a class="meusLinks" id="meusLinks3" href="https://wa.me/message/GBQYRQSHKM5NK1">
                <span><img src="./assets/icons/transmissao.png" alt=""></span>
                <span>Faça parte da lista de transmissão no Whatsapp</span>
            </a>
        </div>
    `;
    profileCard.querySelector('#qrCodeBt').addEventListener("click", function () {
        imageContainer.innerHTML = '';
        
        const img = document.createElement('img');
        img.src = `./assets/qrCode/${dados[u].nome}.png`;
        img.alt = 'Imagem no Pop-up';
        imageContainer.appendChild(img);
        popup.style.display = "flex"; 
    });

    popup.addEventListener("click", function (event) {
        if (event.target === popup) {
            popup.style.display = "none";
        }
    });

    closePopupBtn.addEventListener("click", function () {
        popup.style.display = "none";
    });

    profileCard.querySelector('#shareBt').addEventListener('click', async () => {
        if (navigator.share) {
            try {
                await navigator.share({
                    title: `Servylab - ${dados[u].nome}`,
                    text: 'Acesse meu cartão virtual interativo clicando no link!',
                    url: window.location.href,
                });
            } catch (error) {
                console.error('Erro ao compartilhar:', error);
            }
        } 
    });

    addCard.appendChild(profileCard)

}

window.onload = checkHash;
window.onhashchange = checkHash;




