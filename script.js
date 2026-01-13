/* ARQUITETO: JOSÉ PATRICK CASTRO SOARES 
   SISTEMA: C3X4.0 | CÉLULA: CAROL
   LOG: ESTABILIDADE E INDEPENDÊNCIA
*/

// 1. CARREGAMENTO INICIAL (Aba Elements - A casa está limpa?)
document.addEventListener('DOMContentLoaded', () => {
    carregarHabitacao();
    console.log("C3X4.0: Sistema em silêncio. Estabilidade confirmada.");
});

// 2. PERSONALIZAÇÃO (Liberdade da Carol)
function mudarCor(cor) {
    document.documentElement.style.setProperty('--cor-destaque', cor);
    localStorage.setItem('c3x4_cor', cor);
}

function mudarNome() {
    const nome = document.getElementById('nomeNegocio').value;
    document.getElementById('tituloSite').innerText = nome || "Meu Negócio";
    localStorage.setItem('c3x4_nome', nome);
}

function carregarHabitacao() {
    const corSalva = localStorage.getItem('c3x4_cor');
    const nomeSalvo = localStorage.getItem('c3x4_nome');

    if (corSalva) document.documentElement.style.setProperty('--cor-destaque', corSalva);
    if (nomeSalvo) {
        document.getElementById('tituloSite').innerText = nomeSalvo;
        document.getElementById('nomeNegocio').value = nomeSalvo;
    }
}

// 3. CALCULADORA SOBERANA (O Giro do Lucro)
function calcular() {
    const inputValor = document.getElementById('valor');
    const inputCusto = document.getElementById('custo');
    
    const v = parseFloat(inputValor.value);
    const c = parseFloat(inputCusto.value) || 0;

    if (!v || v <= 0) {
        alert("Atenção: Insira um valor válido para processar a materialização.");
        return;
    }

    // REGRA DE SUSTENTABILIDADE DO ARQUITETO (0,50%)
    const taxaSustentabilidade = 0.005;
    const parteArquiteto = v * taxaSustentabilidade;
    const lucroRealCarol = v - c - parteArquiteto;

    // EXIBIÇÃO NO CONSOLE DA HABITAÇÃO
    const monitor = document.getElementById('monitor');
    const resCarol = document.getElementById('resCarol');
    const resArquiteto = document.getElementById('resArquiteto');

    monitor.style.display = 'block';
    resCarol.innerHTML = `LUCRO MATERIALIZADO: <span style="color: var(--cor-destaque)">R$ ${lucroRealCarol.toFixed(2)}</span>`;
    resArquiteto.innerText = `Sustentabilidade Arquiteto (0,50%): R$ ${parteArquiteto.toFixed(2)}`;

    // 4. CONEXÃO FUTURA (Preparação para o Banco do Arquiteto)
    enviarAoBancoCentral(parteArquiteto, v);

    // Limpar campos para o próximo ciclo
    inputValor.value = '';
    inputCusto.value = '';
}

// 5. ABA NETWORK (O Sistema é independente?)
function enviarAoBancoCentral(valor, bruto) {
    // Aqui o código se conecta ao DNA do Arquiteto
    // Futuramente substituirá o log por uma chamada de API (Webhook)
    console.log(`[DNA SINC] Transação de R$ ${bruto} processada. Reserva de R$ ${valor.toFixed(2)} alocada para o Arquiteto.`);
}

