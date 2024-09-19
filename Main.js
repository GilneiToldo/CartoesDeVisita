// document.getElementById("saveCard").addEventListener("click", function () {

// });
const dados = [
    {
        nome: 'Émerson Rodrigues',
        cargo: 'Vendedor Externo',
        email: 'emerson@servylab.com.br',
        telefone: '5551980636919'
    },
    {
        nome: 'Anelise Souza',
        cargo: 'Analista de Marketing',
        email: 'anelise@servylab.com.br',
        telefone: '5551980636918'
    },
    {
        nome: 'Novo Usuário',
        cargo: 'Novo Cargo',
        email: 'novo@servylab.com.br',
        telefone: '5551990000000'
    },
    {
        nome: 'Gilnei Toldo',
        cargo: 'CEO',
        email: 'gilnei@servylab.com.br',
        telefone: '5551992420250'
    }
];

function checkHash() {
    const addCard = document.getElementById('addCard');
    const hash = window.location.hash; // Obtém o valor após o #
    let u = 0; // Índice padrão

    // Usar switch-case para definir o índice do usuário com base no hash
    switch (hash) {
        case '#emerson':
            u = 0;
            break;
        case '#anelise':
            u = 1;
            break;
        case '#nova':
            u = 2;
            break;
        case '#gilnei':
            u = 3;
            break;
        default:
            u = 3; 
            break;
    }

    const profileCard = document.createElement('div');
    profileCard.classList.add('card')
    profileCard.innerHTML = `
        <div class="pfPhoto" style="background-image: url('./assets/${dados[u].nome}.jpeg');"></div>
        <div class="nomeCargo">
            <h1>${dados[u].nome}</h1>
            <h2>${dados[u].cargo}</h2>
        </div>

        <div class="lineContainer">
            <img src="./assets/icons/qrCode.svg" alt="">
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

    profileCard.querySelector('#shareBt').addEventListener('click', async () => {
        if (navigator.share) {
            // Se o navegador suporta a Web Share API
            try {
                await navigator.share({
                    title: 'Título da Página',
                    text: 'Confira este conteúdo!',
                    url: window.location.href, // Compartilhar a URL atual da página
                });
                console.log('Compartilhamento realizado com sucesso.');
            } catch (error) {
                console.error('Erro ao compartilhar:', error);
            }
        } else {
            // Fallback para navegadores que não suportam a Web Share API
            alert('API de compartilhamento não é suportada neste navegador. Copiando o link para a área de transferência.');
    
            // Copiar o link para a área de transferência
            const tempInput = document.createElement('input');
            document.body.appendChild(tempInput);
            tempInput.value = window.location.href;
            tempInput.select();
            document.execCommand('copy');
            document.body.removeChild(tempInput);
    
            alert('Link copiado para a área de transferência: ' + window.location.href);
        }
      });

      addCard.appendChild(profileCard)

}

window.onload = checkHash;
window.onhashchange = checkHash;

