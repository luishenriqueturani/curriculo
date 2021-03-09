function escolher() {
    let questao = document.getElementById('selExercicio').value
    switch (Number(questao)) {
        case 1:
            exerc01();
            break;
        case 2:
            exerc02();
            break;
        case 3:
            exerc03();
            break;
        case 4:
            exerc04()
            break
        case 5:
            exerc05()
            break
        case 6:
            exerc06()
            break
        case 7:
            exerc07()
            break
        case 8:
            exerc08()
            break
        case 9:
            exerc09()
            break
        case 10:
            exerc10()
            break
        case 11:
            exerc11()
            break
        case 12:
            exerc12()
            break
        case 13:
            exerc13()
            break
        case 14:
            exerc14()
            break
        case 15:
            exerc15()
            break
        case 16:
            exerc16()
            break
        case 17:
            exerc17()
            break
        case 18:
            exerc18()
            break
        case 19:
            exerc19()
            break
        case 20:
            exerc20()
            break
        case 21:
            exerc21()
            break
        case 22:
            exerc22()
            break
        case 23:
            exerc23()
            break
        case 24:
            exerc24()
            break
        case 25:
            exerc25()
            break
        case 26:
            exerc26()
            break
        case 27:
            exerc27()
            break
        case 28:
            exerc28()
            break
        default:
            alert('Escolha uma das opções!')
            break;
    }

}

/* Começa o exercício 01 */
function exerc01() {
    let res = document.getElementById('res').innerHTML = ``
    let quest = document.getElementById('quest').innerHTML = `<p>Nome:<input type="text" class="form-control" placeholder="digite seu nome" id="tnome"/></p><p>Data de Nascimento:<input type="date" name="tdate" id="tdate"  class="form-control" placeholder="Data de Nascimento"/></p><p>Idade:<input type="number" name="tidade" id="tidade"  class="form-control" placeholder="Idade..."></p><p>Gênero:<input type="text" name="tgenero" id="tgenero" class="form-control" placeholder="Gênero..."></p><button class="btn btn-outline-secondary" type="button" id="button-addon1" onclick="clicouExec01()">Enviar</button>`
}
function clicouExec01() {
    let nome = document.getElementById('tnome').value
    let data = document.getElementById('tdate').value
    let gen = document.getElementById('tgenero').value
    let idade = document.getElementById('tidade').value
    let res = document.getElementById('res').innerHTML = `<br/><table class="table"><tr><td>Nome</td><td>${nome}</td></tr><tr><td>Data de Nascimento</td><td>${data}</td></tr><tr><td>Idade</td><td>${idade}</td></tr><tr><td>Gênero</td><td>${gen}</td></tr></table>`


}
/* termina o exercício 01 */

/* Começa o exercício 02 */
function exerc02() {
    let res = document.getElementById('res').innerHTML = ``
    let quest = document.getElementById('quest').innerHTML = `<input class="form-control" type="number" name="tnum1" id="tnum1"><br><input class="form-control" type="number" name="tnum2" id="tnum2"><button class="btn btn-outline-secondary" type="button" id="button-addon1" onclick="clicouExec02()">Enviar</button>`
}
function clicouExec02() {
    let num1 = document.getElementById('tnum1').value
    let num2 = document.getElementById('tnum2').value

    let res = document.getElementById('res').innerHTML = `<br/><p style="margin-top=5px">Resultado da soma: ${Number(num1) + Number(num2)}</p><p>Resultado da subtração: ${num1 - num2}</p><p>Resultado da multiplicação: ${num1 * num2}</p><p>Resultado da divisão: ${num1 / num2}</p><p>Resultado de exponencial: ${num1 ** num2}</p><p>Resultado de raiz quadrada do primeiro número: ${Math.sqrt(num1)}</p><p>Resultado de raiz quadrada do segundo número: ${Math.sqrt(num2)}</p>`

}
/* termina o exercício 02 */

/* Começa o exercício 03 */
function exerc03() {
    let res = document.getElementById('res').innerHTML = ``
    let quest = document.getElementById('quest').innerHTML = `<input class="form-control" type="number" name="tnum1" id="tnum1"><br><input class="form-control" type="number" name="tnum2" id="tnum2"><br><input class="form-control" type="number" name="tnum3" id="tnum3"><button class="btn btn-outline-secondary" type="button" id="button-addon1" onclick="clicouExec03()">Enviar</button>`
}
function clicouExec03() {
    let num1 = document.getElementById('tnum1').value
    let num2 = document.getElementById('tnum2').value
    let num3 = document.getElementById('tnum3').value

    let res = document.getElementById('res').innerHTML = `<br/><p>A média é: ${(Number(num1) + Number(num2) + Number(num3)) / 3}</p>`
}
/* termina o exercício 03 */

/* Começa o exercício 04 */
function exerc04() {
    let res = document.getElementById('res').innerHTML = ``
    let quest = document.getElementById('quest').innerHTML = `<input class="form-control" type="text" name="tnome" id="tnome" placeholder="Digite um nome..."><br><input class="form-control" type="number" name="tnum" id="tnum" placeholder="Digite a Idade..."><br><button class="btn btn-outline-secondary" type="button" id="button-addon1" onclick="clicouExec04()">Enviar</button>`
}

function clicouExec04() {
    let nome = document.getElementById('tnome').value
    let idade = document.getElementById('tnum').value
    if (Number(idade) < 18) {
        let res = document.getElementById('res').innerHTML = `<br/>${nome} é menor de idade, tendo ${idade} anos.`
    } else {
        let res = document.getElementById('res').innerHTML = `<br/>${nome} é maior de idade, tendo ${idade} anos.`
    }
}
/* termina o exercício 04 */

/* Começa o exercício 05 */
function exerc05() {
    let res = document.getElementById('res').innerHTML = ``
    let quest = document.getElementById('quest').innerHTML = `<input class="form-control" type="number" name="tnum1" id="tnum1" placeholder="Digite a primeira nota..."><br><input class="form-control" type="number" name="tnum2" id="tnum2" placeholder="Digite a segunda nota..."><br><button class="btn btn-outline-secondary" type="button" id="button-addon1" onclick="clicouExec05()">Enviar</button>`
}
function clicouExec05() {
    let nota1 = document.getElementById('tnum1').value
    let nota2 = document.getElementById('tnum2').value
    let media = (Number(nota1) + Number(nota2)) / 2
    if (Number(media) >= 6) {
        let res = document.getElementById('res').innerHTML = `Está aprovado(a) com média de ${media}.`
    } else {
        let res = document.getElementById('res').innerHTML = `Está reprovado(a) com média de ${media}.`
    }
}
/* Termina o exercício 5 */

/* Começa o exercício 06 */
function exerc06() {
    let res = document.getElementById('res').innerHTML = ``
    let quest = document.getElementById('quest').innerHTML = `<input class="form-control" type="number" name="tnum1" id="tnum1" placeholder="Digite um número..."><br><button class="btn btn-outline-secondary" type="button" id="button-addon1" onclick="clicouExec06()">Enviar</button>`
}
function clicouExec06() {
    let num1 = document.getElementById('tnum1').value
    let res = document.getElementById('res')
    if (Number(num1) > 0) {
        res.innerHTML = `<br/>O número ${num1} é positivo.`
    } else {
        res.innerHTML = `<br/>O número ${num1} é negativo.`
    }
}
/* Termina o exercício 06 */

/* Começa o exercício 07 */
function exerc07() {
    let res = document.getElementById('res').innerHTML = ``
    let quest = document.getElementById('quest').innerHTML = `<input class="form-control" type="number" name="tnum1" id="tnum1" placeholder="Digite um número..."><br><input class="form-control" type="number" name="tnum2" id="tnum2" placeholder="Digite mais um número..."><br><button class="btn btn-outline-secondary" type="button" id="button-addon1" onclick="clicouExec07()">Enviar</button>`
}
function clicouExec07() {
    let num1 = document.getElementById('tnum1').value
    let num2 = document.getElementById('tnum2').value
    let res = document.getElementById('res')
    if (Number(num1) == Number(num2)) {
        res.innerHTML = `<br/>O número ${num1} é igual ao número ${num2}`
    } else {
        res.innerHTML = `<br/>O número ${num1} é diferente do número ${num2}`
    }
}
/* termina o exercício 07 */

/* Começa o exercício 08 */
function exerc08() {
    let res = document.getElementById('res').innerHTML = ``
    let quest = document.getElementById('quest').innerHTML = `<input class="form-control" type="number" name="tnum1" id="tnum1" placeholder="Digite um número..."><br><button class="btn btn-outline-secondary" type="button" id="button-addon1" onclick="clicouExec08()">Enviar</button>`
}
function clicouExec08() {
    let num = document.getElementById('tnum1').value
    let res = document.getElementById('res')
    if (Number(num) % 2 == 0) {
        res.innerHTML = `<br/>O número ${num} é par.`
    } else {
        res.innerHTML = `<br/>O número ${num} é impar.`
    }
}
/* termina o exercício 08 */

/* Começa o exercício 09 */
function exerc09() {
    let res = document.getElementById('res').innerHTML = ``
    let quest = document.getElementById('quest').innerHTML = `<input class="form-control" type="number" name="tnum1" id="tnum1" placeholder="Digite um número..."><br><input class="form-control" type="number" name="tnum2" id="tnum2" placeholder="Digite mais um número..."><br><button class="btn btn-outline-secondary" type="button" id="button-addon1" onclick="clicouExec09()">Enviar</button>`
}
function clicouExec09() {
    let num1 = document.getElementById('tnum1').value
    let num2 = document.getElementById('tnum2').value
    let res = document.getElementById('res')
    if (Number(num1) > Number(num2)) {
        res.innerHTML = `<br/>O número ${num1} é maior que o número ${num2}.`
    } else if (Number(num1) < Number(num2)) {
        res.innerHTML = `<br/>O número ${num1} é menor que o número ${num2}.`
    } else {
        res.innerHTML = `<br/>O número ${num1} é igual ao número ${num2}.`
    }
}
/* Termina o exercício 09 */

/* Começa o exercício 10 */
function exerc10() {
    let res = document.getElementById('res').innerHTML = ``
    let quest = document.getElementById('quest').innerHTML = `<input class="form-control" type="number" name="tnum1" id="tnum1" placeholder="Digite um número..."><br><button class="btn btn-outline-secondary" type="button" id="button-addon1" onclick="clicouExec10()">Enviar</button>`
}
function clicouExec10() {
    let num = document.getElementById('tnum1').value
    let res = document.getElementById('res')
    if (Number(num) == 0) {
        res.innerHTML = `O número é ${num}, não é nem positivo nem negativo, como também não é nem ímpar nem par.`
    } else if (Number(num) > 0) {
        if (Number(num) % 2 == 0) {
            res.innerHTML = `O número ${num} é par e positivo.`
        } else {
            res.innerHTML = `O número ${num} é ímpar e positivo.`
        }
    } else {
        if (Number(num) % 2 == 0) {
            res.innerHTML = `O número ${num} é par e negativo.`
        } else {
            res.innerHTML = `O número ${num} é ímpar e negativo.`
        }
    }
}
/* Termina o exercício 10 */

/* Começa o exercício 11 */
function exerc11() {
    let res = document.getElementById('res').innerHTML = ``
    let quest = document.getElementById('quest').innerHTML = `<p>Nome:<input type="text" class="form-control" placeholder="digite seu nome" id="tnome"/></p><p>Data de Nascimento:<input type="date" name="tdate" id="tdate"  class="form-control" placeholder="Data de Nascimento"/><button class="btn btn-outline-secondary" type="button" id="button-addon2" onclick="calcularIdade()">Calcular idade</button></p><p>Idade:<input type="number" name="tidade" id="tidade"  class="form-control" disabled="disabled"></p><p>Gênero:<input type="text" name="tgenero" id="tgenero" class="form-control" placeholder="Gênero..."></p><button class="btn btn-outline-secondary" type="button" id="button-addon1" onclick="clicouExec11()">Enviar</button>`
}
function calcularIdade() {
    document.getElementById('tidade').value = ''
    //pega a classe Date(), capturando as informações de data do SO
    let dataAtual = new Date()
    //pega o dia mês e ano do input
    let data = document.getElementById('tdate').value

    //declara que ambos são números, sendo o primeiro o ano atual, no segundo é percorrido a String com a data, sabendo que os primeiro 4 dígitos é o ano no padrão da linguagem
    //são estes então que são usados. A classe substring([índice de início], [índice de fim]) 
    let calc = Number(dataAtual.getFullYear()) - Number(data.substring(0, 4))
    //testa o valor da idade
    if (Number(calc) < 0 || Number(calc) > 200) {
        alert('Idade inválida, não pode ser menor que 0 nem maior que 200!')
    } else {
        //envia o valor para o input de idade
        document.getElementById('tidade').value += calc
    }

}
function clicouExec11() {
    let nome = document.getElementById('tnome').value
    let data = document.getElementById('tdate').value
    let idade = document.getElementById('tidade').value
    let genero = document.getElementById('tgenero').value
    let res = document.getElementById('res')
    let classificacao

    if (idade == '') {
        alert('Calcule a idade antes!')
    } else {
        if (Number(idade) < 15) {
            classificacao = `Infantil`
        } else if (Number(idade) < 22) {
            classificacao = `Jovem`
        } else if (Number(idade) < 51) {
            classificacao = `Adulto`
        } else {
            classificacao = `Idoso`
        }

        res.innerHTML = `<table class="table"><tr><td>Nome</td><td>${nome}</td></tr><tr><td>Ano de Nascimento</td><td>${Number(data.substring(0, 4))}</td></tr><tr><td>Idade</td><td>${idade}</td></tr><tr><td>Gênero</td><td>${genero}</td></tr><tr><td>Classificação</td><td>${classificacao}</td></tr></table>`
    }
}
/* termina o exercício 11 */

/* Começa o exercício 12 */
function exerc12() {
    let res = document.getElementById('res').innerHTML = ``
    let quest = document.getElementById('quest').innerHTML = `<input class="form-control" type="number" name="tnum1" id="tnum1" placeholder="Digite um valor em R$..."><br><button class="btn btn-outline-secondary" type="button" id="button-addon1" onclick="clicouExec12()">Enviar</button>`
}
function clicouExec12() {
    let dolar = 4.15
    let euro = 4.62
    let pesoAr = 0.071
    let libraEst = 5.37
    let ieneJap = 0.038
    let real = document.getElementById('tnum1').value
    let res = document.getElementById('res').innerHTML = `<br/><ul class="list-group"><li class="list-group-item">Valores pesquisados em 21/10/2019</li>
    <li class="list-group-item">Dólar - $ ${(Number(real) * dolar)}</li>
    <li class="list-group-item">Euro - € ${(Number(real) * euro)}</li>
    <li class="list-group-item">Peso Argentino - $ ${(Number(real) * pesoAr)}</li>
    <li class="list-group-item">Libra Esterlínea - £ ${(Number(real) * libraEst)}</li>
    <li class="list-group-item">Iene Japonês - JP¥ ${(Number(real) * ieneJap)}</li></ul>`
}
/* termina o exercício 12 */

/* Começa o exercício 13 */
function exerc13() {
    let res = document.getElementById('res').innerHTML = ``
    let quest = document.getElementById('quest').innerHTML = `<br/><input class="form-control" type="number" name="tnum1" id="tnum1" placeholder="Digite o primeiro número..."><br>
    <input class="form-control" type="number" name="tnum2" id="tnum2" placeholder="Digite o segundo número...">
    <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <button class="btn btn-outline-secondary" type="button" onclick="clicouExec13()">Calcular</button>
                    </div>
                    <select class="custom-select" id="exercicio13" aria-label="Exercício 13">
                        <option selected>Escolha uma operação...</option>
                        <option value="ad">Adição</option>
                        <option value="sub">Subtração</option>
                        <option value="mult">Multiplicação</option>
                        <option value="div">Divisão</option>
                        <option value="pot">Potência</option>
                        <option value="raiz">Raiz Quadrada</option>
                        <option value="resto">Resto</option>
                    </select>
                </div>`
}
function clicouExec13() {
    let n1 = document.getElementById('tnum1').value
    let n2 = document.getElementById('tnum2').value
    let operacao = document.getElementById('exercicio13').value
    let res = document.getElementById('res')
    if(operacao == 'ad'){
        res.innerHTML = `Resultado da soma: ${Number(n1) + Number(n2)}`
    }else if(operacao == 'sub'){
        res.innerHTML = `Resultado da subtração: ${Number(n1) - Number(n2)}`
    }else if(operacao == 'mult'){
        res.innerHTML = `Resultado da multiplicação: ${Number(n1) * Number(n2)}`
    }else if(operacao == 'div'){
        res.innerHTML = `Resultado da divisão: ${Number(n1) / Number(n2)}`
    }else if(operacao == 'pot'){
        res.innerHTML = `Resultado da potênciação: ${Number(n1) ** Number(n2)}`
    }else if(operacao == 'raiz'){
        res.innerHTML = `Resultado da raiz quadrada de cada um: ${Math.sqrt(Number(n1))} e ${Math.sqrt(Number(n2))}`
    }else if(operacao == 'resto'){
        res.innerHTML = `Resultado do resto de divisão: ${Number(n1) % Number(n2)}`
    }
}
/* termina exercício 13 */

/* Começa o exercício 14 */
function exerc14(){
    let res = document.getElementById('res').innerHTML = ``
    let quest = document.getElementById('quest').innerHTML = `<br/><h3>Digite as características do produto</h3>
    <p>Nome:<input type="text" class="form-control" placeholder="digite o nome..." id="tnome"  maxlength="10"/></p>
    <p>Quantidade:<input type="number" name="tquant" id="tquant"  class="form-control" placeholder="Digite a quantidade..."></p>
    <p>Preço:<input type="number" name="tpreco" id="tpreco"  class="form-control" placeholder="Digite o preço por unidade..."></p>
    <p>Data:<input type="date" name="tdate" id="tdate"  class="form-control" placeholder="Data de cadastro..."/></p>
    <p>Preço Total:<input type="number" name="ttot" id="ttot"  class="form-control" disabled>
    <button class="btn btn-outline-secondary" type="button" id="button-addon1" onclick="calcular14()">Calcular preço Total</button></p>
    <button class="btn btn-outline-secondary" type="button" id="button-addon2" onclick="clicouExec14()">Enviar</button>`
}
function calcular14(){
    document.getElementById('ttot').value = ''
    let quant = document.getElementById('tquant').value
    let preco = document.getElementById('tpreco').value
    document.getElementById('ttot').value = Number(quant) * Number(preco)
}
function clicouExec14(){
    let Produto = {nome: "", quant: 0, preco: 0, data: "", tot: 0}
    if(document.getElementById('tnome').value != "" && document.getElementById('tquant').value != "" && document.getElementById('tpreco').value != "" 
    && document.getElementById('tdate').value != "" && document.getElementById('ttot').value != "" ){

        Produto.nome = document.getElementById('tnome').value
        Produto.quant = document.getElementById('tquant').value
        Produto.preco = document.getElementById('tpreco').value
        Produto.data = document.getElementById('tdate').value
        Produto.tot = document.getElementById('ttot').value

        document.getElementById('res').innerHTML = `<ul class="list-group">
        <li class="list-group-item">Nome: ${Produto.nome}</li>
        <li class="list-group-item">Quantidade: ${Produto.quant}</li>
        <li class="list-group-item">Preço por unidade: R$ ${Produto.preco}</li>
        <li class="list-group-item">Data de cadastro: ${Produto.data}</li>
        <li class="list-group-item">Valor total dos produtos: R$ ${Produto.tot}</li>
        </ul>`
    }else{
        alert('Algum campo está vazio, preencha todos os campos!')
    }
}
/* termina o exercício 14 */

/* Começa o exercício 15 */
function exerc15(){
    let res = document.getElementById('res').innerHTML = ``
    let quest = document.getElementById('quest').innerHTML = `<br/>
    <input class="form-control" type="text" name="tnome" id="tnome" placeholder="Digite o seu nome..."><br>
    <input class="form-control" type="number" name="tnum1" id="tnum1" placeholder="Digite a quantidade de repetições..."><br>
    <button class="btn btn-outline-primary" type="button" id="button-addon1" onclick="clicouExec15()">Enviar</button><br/>`
}
function clicouExec15(){
    let nome = document.getElementById('tnome').value
    let rep = document.getElementById('tnum1').value
    let res = document.getElementById('res')
    let texto = ''

    for(let i = 0; i < Number(rep); i++){
        texto += `<li  class="list-group-item">${nome}</li>`
    }

    res.innerHTML = `<ul class="list-group">${texto}</ul>`
}
/* termina o exercício 15 */

/* Começa o exercício 16 */
function exerc16(){
    let res = document.getElementById('res').innerHTML = ``
    let quest = document.getElementById('quest').innerHTML = `<br/>
    <input class="form-control" type="number" name="tnum1" id="tnum1" placeholder="Digite um número de início de contagem..."><br>
    <input class="form-control" type="number" name="tnum2" id="tnum2" placeholder="Digite um número de final de contagem..."><br>
    <button class="btn btn-outline-secondary" type="button" id="button-addon1" onclick="clicouExec16()">Enviar</button>`
}
function clicouExec16(){
    let ini = document.getElementById('tnum1').value
    let fim = document.getElementById('tnum2').value
    let res = document.getElementById('res')
    let texto= ``
    for(let cont = Number(ini); cont <= Number(fim); cont++){
        texto += `<li class="list-group-item">${cont}</li>`
        console.log(cont)
    }
    res.innerHTML = `<ul class="list-group">${texto}</ul>`
}
/* termina o exercício 16 */

/* Começa o exercício 17 */
function exerc17(){
    let res = document.getElementById('res').innerHTML = ``
    let quest = document.getElementById('quest').innerHTML = `<br/>
    <input class="form-control" type="number" name="tnum1" id="tnum1" placeholder="Digite um número de início..."><br>
    <input class="form-control" type="number" name="tnum2" id="tnum2" placeholder="Digite um número de fim..."><br>
    <button class="btn btn-outline-secondary" type="button" id="button-addon1" onclick="clicouExec17()">Enviar</button>`
}
function clicouExec17(){
    let n1 = document.getElementById('tnum1').value
    let n2 = document.getElementById('tnum2').value
    let som = 0
    let texto = `${n1} + ${n2} = `
    for(let i = Number(n1); i <= Number(n2); i++){
        som += i
        texto += `${i}`
        if(i != n2){
            texto += ` + `
        }
    }
    document.getElementById('res').innerHTML = `${texto} = ${som}`
}
/* termina o exercício 17 */

/* Começa o exercício 18 */
function exerc18(){
    let res = document.getElementById('res').innerHTML = ``
    let quest = document.getElementById('quest').innerHTML = `<br/>
    <input class="form-control" type="number" name="tnum1" id="tnum1" placeholder="Digite um número para saber se é primo..."><br>
    <button class="btn btn-outline-secondary" type="button" id="button-addon1" onclick="clicouExec18()">Testar</button>`
}
function clicouExec18(){
    let num = document.getElementById('tnum1').value
    let testador = 0
    for(let i = 0; i <= Number(num); i++){
        if(Number(num) % i == 0)
            testador++
    }
    if(testador == 2){
        document.getElementById('res').innerHTML = `O número ${num} é primo`
    }else{
        document.getElementById('res').innerHTML = `O número ${num} não é primo`
    }
}
/* termina o exercício 18 */

/* Começa o exercício 19 */
function exerc19(){
    let res = document.getElementById('res').innerHTML = ``
    let quest = document.getElementById('quest').innerHTML = `<br/>
    <input class="form-control" type="number" name="tnum1" id="tnum1" placeholder="Digite um número para saber seu fatorial..."><br>
    <button class="btn btn-outline-secondary" type="button" id="button-addon1" onclick="clicouExec19()">calcular</button>`
}
function clicouExec19(){
    let num = document.getElementById('tnum1').value
    let calc = 1
    let texto = `${num}! = `
    for(let i = 1; i <= Number(num); i++){
        calc *= i
        texto += `${i}`
        if(i != num){
            texto += ` X `
        }
    }
    document.getElementById('res').innerHTML = `<br/>${texto} = ${calc}`
}
/* termina o exercício 19 */

/* Começa o exercício 20 */
function exerc20(){
    let res = document.getElementById('res').innerHTML = ``
    let quest = document.getElementById('quest').innerHTML = `<br/>
    <input class="form-control" type="text" name="ttexto" id="ttexto" placeholder="Digite alguma coisa..."><br>
    <input class="form-control" type="number" name="tnum1" id="tnum1" placeholder="Digite a quantidade de linhas..."><br>
    <input class="form-control" type="number" name="tnum2" id="tnum2" placeholder="Digite a quantidade de colunas..."><br>
    <button class="btn btn-outline-secondary" type="button" id="button-addon1" onclick="clicouExec20()">Gerar</button>`
}
function clicouExec20(){
    let row = document.getElementById('tnum1').value
    let col = document.getElementById('tnum2').value
    let texto = document.getElementById('ttexto').value
    if(Number(row) < 1 || Number(col) < 0){
        alert('Valor inválido! Não é possível usar valores negativos!')
    }else if(texto == ''){
        alert('Campo texto vazio!')
    }else{
        let tabela = `<table class="table">`
        for(let i = 0; i < Number(row); i++){
            tabela += `<tr>`
            for(let j = 0; j < Number(col); j++){
                tabela += `<td>${texto}</td>`
            }
            tabela += `</tr>`
        }
        tabela += `</table>`
    
        document.getElementById('res').innerHTML = `<br/>${tabela}`
    }
}
/* termina o exercício 20 */

/* Começa o exercício 21 */
function exerc21(){
    let res = document.getElementById('res').innerHTML = ``
    let quest = document.getElementById('quest').innerHTML = `<br/>
    <input class="form-control" type="number" name="tnum1" id="tnum1" placeholder="Digite um número para saber sua tabuada..."><br>
    <button class="btn btn-outline-secondary" type="button" id="button-addon1" onclick="clicouExec21()">Gerar</button>`
}
function clicouExec21(){
    let num = document.getElementById('tnum1').value
    let texto = `<table class="table">`
    for(let i = 1; i <= 10; i++){
        texto += `<tr><td>${i} + ${num} = </td><td>${i*Number(num)}</td></tr>`
    }
    texto += `</table>`
    document.getElementById('res').innerHTML = `<br/>${texto}`
}
/* termina o exercício 21 */

/* Começa o exercício 22 */
function exerc22(){
    let res = document.getElementById('res').innerHTML = ``
    let quest = document.getElementById('quest').innerHTML = `<br/>
    <p>Nome:<input type="text" class="form-control" placeholder="digite seu nome" id="tnome" max-length="10" /></p>
    <p>Data de Nascimento:<input type="date" name="tdate" id="tdate"  class="form-control" placeholder="Data de Nascimento"/></p>
    <p>Idade:<input type="number" name="tidade" id="tidade"  class="form-control" placeholder="Digite sua idade" max="200" min="0"></p>
    </p><button class="btn btn-outline-secondary" type="button" id="button-addon1" onclick="clicouExec22()">Enviar</button>`
}
function clicouExec22(){
    let vet = [document.getElementById('tnome').value, document.getElementById('tdate').value, document.getElementById('tidade').value]
    let texto = '<h4>Forma Normal</h4><p>'
    let verificador = 0
    for(let j in vet){
        if(vet[j] == ""){
            alert('Campo vazio! Preencha tudo')
            verificador++
            break
        }
    }
    if(verificador == 0){
        for(let i in vet){
            texto += `<br/>${vet[i]}`
        }
        texto += `</p><hr/><br/><h4>Dentro de Tabela</h4><table class="table">`
        for(let i = 0; i < vet.length; i++){
            if(i == 0){
                texto += `<tr><td>Nome</td><td>${vet[i]}</td></tr>`
            }else if(i == 1){
                texto += `<tr><td>Data de Nascimento</td><td>${vet[i]}</td></tr>`
            }else if(i == 2){
                texto += `<tr><td>Idade</td><td>${vet[i]}</td></tr>`
            }
        }
        texto += `</table><hr/><h4>Inverso</h4><table class="table">`
        for(let i = vet.length; i >= 0; i--){
            if(i == 0){
                texto += `<tr><td>Nome</td><td>${vet[i]}</td></tr>`
            }else if(i == 1){
                texto += `<tr><td>Data de Nascimento</td><td>${vet[i]}</td></tr>`
            }else if(i == 2){
                texto += `<tr><td>Idade</td><td>${vet[i]}</td></tr>`
            }
        }
        texto += `</table>`
        document.getElementById('res').innerHTML = `<br/>${texto}`
    }
}
/* termina exercício 22 */

/* Começa o exercício 23 */
function exerc23(){
    let res = document.getElementById('res').innerHTML = ``
    let quest = document.getElementById('quest').innerHTML = `<br/>
    <input class="form-control" type="text" name="ttexto" id="ttexto" placeholder="Digite alguma coisa..."><br>
    <input class="form-control" type="number" name="tnum1" id="tnum1" placeholder="Digite a quantidade de repetições..."><br>
    <button class="btn btn-outline-secondary" type="button" id="button-addon1" onclick="clicouExec23()">Gerar</button>`
}
function clicouExec23(){
    let ttexto = document.getElementById('ttexto').value
    let rep = document.getElementById('tnum1').value
    let texto = `<br/>`
    let vetor = []
    for(let i = 0; i < Number(rep); i++){
        vetor.push(ttexto)
    }
    for(let j in vetor){
        texto += `Posição ${j}: ${vetor[j]}<br/>`
    }
    document.getElementById('res').innerHTML = texto
}
/* termin o exercício 23 */

/* Começa o exercício 24 */
function exerc24(){
    let res = document.getElementById('res').innerHTML = ``
    let quest = document.getElementById('quest').innerHTML = `<br/>
    <input type="range" class="custom-range" min="0" max="100" step="1" id="range1">
    <input type="range" class="custom-range" min="0" max="100" step="1" id="range2">
    <input type="range" class="custom-range" min="0" max="100" step="1" id="range3">
    <input type="range" class="custom-range" min="0" max="100" step="1" id="range4">
    <input type="range" class="custom-range" min="0" max="100" step="1" id="range5">
    <button class="btn btn-outline-secondary" type="button" id="button-addon1" onclick="clicouExec24()">Calcular</button>`
}
function clicouExec24(){
    let range = [Number(document.getElementById('range1').value), Number(document.getElementById('range2').value), Number(document.getElementById('range3').value), 
    Number(document.getElementById('range4').value), Number(document.getElementById('range5').value)]
    let texto = `<br/>`
    let soma = 0
    texto += `Soma dos valores = `
    for(let i in range){
        soma += range[i]
        texto += `${range[i]}`
        if(i != Number(range.length - 1)){
            texto += ` + `
        }
    }
    texto += ` = ${soma}`
    let mult = 1
    texto += `<br/><hr/>Multiplicação - o produto = `
    for(let j in range){
        mult *= range[j]
        texto += `${range[j]}`
        if(j != Number(range.length - 1)){
            texto += ` X `
        }
    }
    texto += ` = ${mult}`
    let media = soma/(range.length)
    texto += `<br/><hr/>Média = ${media}`
    document.getElementById('res').innerHTML = texto
}
/* termina o exercício 24 */

/* Começa o exercício 25 */
function exerc25(){
    let res = document.getElementById('res').innerHTML = ``
    let quest = document.getElementById('quest').innerHTML = `<br/>
    <p>Nome:<input type="text" class="form-control" placeholder="digite seu nome" id="tnome" max-length="10" /></p>
    <p>Data de Nascimento:<input type="date" name="tdate" id="tdate"  class="form-control" placeholder="Data de Nascimento"/></p>
    <p>Idade:<input type="number" name="tidade" id="tidade"  class="form-control" placeholder="Digite sua idade" max="200" min="0"></p>
    </p><button class="btn btn-outline-secondary" type="button" id="button-addon1" onclick="clicouExec25()">Enviar</button>`
}
function clicouExec25(){
    let vet = [document.getElementById('tnome').value, document.getElementById('tdate').value, document.getElementById('tidade').value]
    let texto = `<br/>`
    for(let i in vet){
        texto += `${vet[i]}`
        if(i != (vet.length - 1)){
            texto +=`-`
        }
    }
    document.getElementById('res').innerHTML = texto
}
/* termina o exercício 25 */

/* Começa o exercício 26 */
function exerc26(){
    let res = document.getElementById('res').innerHTML = ``
    let quest = document.getElementById('quest').innerHTML = `<br/>
    <p>Data de Nascimento:<input type="date" name="tdate" id="tdate"  class="form-control" placeholder="Escolha uma data..."/></p>
    </p><button class="btn btn-outline-secondary" type="button" id="button-addon1" onclick="clicouExec26()">Gerar</button>`
}
function clicouExec26(){
    let data = document.getElementById('tdate').value
    let vetData = [data.substring(8,10),data.substring(5,7),data.substring(0,4)]
    let texto = `<p>Com modificação - `
    for(let i in vetData){
        texto += `${vetData[i]}`
        if(i != vetData.length-1){
            texto += `/`
        }
    }
    texto += `</p>`
    document.getElementById('res').innerHTML = `<br/><p>Sem modificação - ${data}</p>${texto}`
}
/* termina o exercício 26 */

/* Começa o exercício 27 */
function exerc27(){
    let res = document.getElementById('res').innerHTML = ``
    let quest = document.getElementById('quest').innerHTML = `<br/>
    <input class="form-control" type="number" name="tnum1" id="tnum1" placeholder="Digite um número...">
    <input class="form-control" type="number" name="tnum2" id="tnum2" placeholder="Digite um número...">
    <input class="form-control" type="number" name="tnum3" id="tnum3" placeholder="Digite um número...">
    <input class="form-control" type="number" name="tnum4" id="tnum4" placeholder="Digite um número...">
    <input class="form-control" type="number" name="tnum5" id="tnum5" placeholder="Digite um número..."><br>
    <button class="btn btn-outline-secondary" type="button" id="button-addon1" onclick="clicouExec27()">Calcular</button>`
}
function clicouExec27(){
    let vetNum = [document.getElementById('tnum1').value, document.getElementById('tnum2').value, document.getElementById('tnum3').value, 
                    document.getElementById('tnum4').value, document.getElementById('tnum5').value]
    let soma = 0
    for(let i in vetNum){
        soma += Number(vetNum[i])
    }
    document.getElementById('res').innerHTML = `<br/><p>Ordenado - ${vetNum.sort()}</p><p>Inverso - ${vetNum.reverse()}</p><p>Soma dos valores - ${soma}</p>`
}
/* termina o exercício 27 */

/* Começa o exercío 28 */
function exerc28(){
    let res = document.getElementById('res').innerHTML = ``
    let quest = document.getElementById('quest').innerHTML = `<br/>
    <input class="form-control" type="number" name="tnum1" id="tnum1" placeholder="Digite um número...">
    <input class="form-control" type="number" name="tnum2" id="tnum2" placeholder="Digite um número...">
    <input class="form-control" type="number" name="tnum3" id="tnum3" placeholder="Digite um número...">
    <input class="form-control" type="number" name="tnum4" id="tnum4" placeholder="Digite um número..."><br>
    <button class="btn btn-outline-secondary" type="button" id="button-addon1" onclick="clicouExec28()">Calcular</button>`
}
function clicouExec28(){
    let vetNum = [document.getElementById('tnum1').value, document.getElementById('tnum2').value, document.getElementById('tnum3').value, 
                    document.getElementById('tnum4').value]
    let normal = ''
    for(let i in vetNum){
        normal += `<p>Indice ${i} - ${vetNum[i]}</p>`
    }
    document.getElementById('res').innerHTML = `<hr/><br/>Forma normal:<br/>${normal}<hr/><br/>Separado por "-": ${vetNum.join("-")}<hr/><br/>Em ordem crescente: ${vetNum.sort()}<hr/><br/>Inverso - ${vetNum.reverse()}`
}
/* termina o exercício 28 */








