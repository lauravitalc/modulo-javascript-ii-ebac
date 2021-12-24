
// media
function calcularMedia(notas){
    let soma =0;
    for(c=0; c< notas.length; c++) {
        soma += notas[c];
    }
    media = soma / notas.length;
    return media;
}

let media;

function aprovacao(notas) {

    let media = calcularMedia(notas);
    let condicao = media >= 8 ? "aprovado" : "reprovado";
    return 'Média: ' + media + ' - Resultado: ' + condicao;
}

// contagem regressiva(50)

document.addEventListener('submit', function(evento){
    evento.preventDefault();
    evento.stopPropagation();
    let formulario = document.getElementById("formulario-01");
    let dados = new formData(formulario);
    let objetos = {};
    let notas = [];
    for(let key of dados.keys()) {
        objeto[key] = dados.get(key);
        notas.push(dados.get(key));
    }
    console.log(notas);
    console.log (objeto);
    document.getElementById('resultado').innerHTML = aprovacao(notas);
})

