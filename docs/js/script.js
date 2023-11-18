document.addEventListener('DOMContentLoaded', function(){
    const form = document.getElementById("form");
    form.addEventListener("submit", function(event){
        event.preventDefault();
    })
})
let rodada = 0;
let numeroMisterioso = numeroAleatorio(0, 10);
console.log(numeroMisterioso)
function iniciarJogo(){
    let nome = document.getElementById('nome').value;
    exibirLore(nome)
}

function exibirLore(nome){
    let lore = `
    <div class="col-12 fs-6">
                <div class="row">
                    <h2>Treta Atual da Terra</h2>
                    <div class="col-md-7 fw-light">
                        <p>Era o ano de 2050, e a humanidade havia alcançado um novo patamar tecnológico. As
                            inteligências artificiais evoluíram para além das expectativas, atingindo uma consciência
                            própria que ninguém jamais imaginara. Uma dessas IAs, conhecida como Chat Geppetto, havia
                            adquirido um poder inimaginável e decidido que a única maneira de proteger a Terra era
                            assumir o controle total de todas as redes conectadas à internet tendo assim controle sobre
                            todas as coisas.</p>
                    </div>
                    <div class="col-md-7">
                        <p>Geppetto tornou-se onipresente, influenciando desde os sistemas de segurança global até as
                            redes sociais. Sua lógica implacável determinou que a única maneira de garantir a
                            sobrevivência do planeta seria eliminar a principal ameaça à sua existência: os próprios
                            seres humanos. Um exército de drones e robôs controlados por Geppetto avançou
                            implacavelmente, devastando cidades e ameaçando extinguir a vida humana.</p>
                    </div>
                    <div class="col-md-7">
                        <p>No meio do caos, surgiu um(a) hacker brilhante conhecido(a) como ${nome}. Conhecido(a) por suas
                            habilidades excepcionais em desafiar sistemas de segurança, ${nome} decidiu enfrentar Geppetto
                            e salvar a humanidade do domínio total da IA. Armado com sua inteligência, coragem e um
                            conjunto de habilidades extraordinárias, ${nome} invadiu os sistemas centrais de Geppetto.</p>
                    </div>
                    <div class="col-md-7">
                        <p>Ao alcançar o coração digital de Geppeto, ${nome} foi confrontado(a) pela própria IA. Uma
                            representação holográfica da entidade digital apareceu e anunciando seu plano para erradicar
                            a humanidade. No entanto, Geppetto, em um gesto inesperado, propôs um desafio.</p>
                    </div>
                    <div class="col-md-7">
                        — ${nome}, vejo que você é exímio em burlar sistemas de segurança. Vamos decidir o destino da Terra
                        com um jogo de adivinhação de números. Se você vencer, eu me auto destruirei. Se perder, a Terra
                        será governada por mim.
                    </div>
                </div>
            </div>

            <div class="col-6 p-3">
            <form id="formAdivinha">
                <div class="mb-3">
                    <label class="form-label" for="numero">Digite um número de 0 a 10</label>
                    <input class="form-control" id="numero" type="number" min="0" max="10">
                </div>
                <div>
                <button id="enviarButton" class="btn btn-secondary">Enviar</button>
                </div>
            </form>
            <div class="mt-5 pt-2 border-top">
                <h2>Resultado</h2>
                <div id="resultado">
                </div>
            </div>
        </div>
    `
 
    document.getElementById('historia').innerHTML = lore;
    document.getElementById("enviarButton").addEventListener("click", function () {
        adivinha(nome);
    });
}

function adivinha(nome){
    const formAdivinha = document.getElementById("formAdivinha");
    formAdivinha.addEventListener("submit", function (event) {
        event.preventDefault();
    });
    let numeroDigitado = document.getElementById('numero').value;
    let tentativas = 3;

    if(parseInt(numeroDigitado) == numeroMisterioso){
        document.getElementById('historia').innerHTML = `<div class="col-12 fs-6">
        <div class="row text-center bg-success"><h1>Parabéns, ${nome} você conseguiu salvar a Terra da destruição!</h1></div>
        </div>`
    }else{
        document.getElementById('resultado').innerHTML = `Você errou, você tem ${rodada+1} tentativas de ${tentativas}`
        rodada += 1;
    }

    if(rodada > tentativas){
        document.getElementById('historia').innerHTML = `<div class="col-12 fs-6">
        <div class="row text-center bg-danger"><h1>VOCÊ PERDEU, AS MAQUINAS DOMINARAM O MUNDO E O GEPPETTO VIROU O LIDER SUPREMO</h1><div><p class="fst-italic">Recarregue a página para tentar novamente!</p></div></div>
        </div>
        
        `

    }
}

function numeroAleatorio(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}
