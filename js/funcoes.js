function inacabado(){//gera um html para os modal que informam conteúdos inacabados
    let titulo = document.getElementById('exampleModalLabel').innerHTML = `Inacabado`
    let sobre = document.getElementById('corpoTexto').innerHTML = `Sinto muito, mas ainda falta conteúdo a por no site. Ainda há muita coisa por vir!`
}

function info(){ //gera o html para o modal de sobre o site
    let titulo = document.getElementById('exampleModalLabel').innerHTML = `Sobre o Site`
    let corpoTexto = document.getElementById('corpoTexto').innerHTML = `
    <p>Última modificação em <span id="data"></span></p>
    <ul>
        <li id="versao"></li>
        <li>Aplicações e IDEs usadas:
            <ul>
                <li id="ides"></li>
            </ul>
        </li>
        <li>
            Testado nos navegadores:
            <ul>
                <li id="navs"></li>
            </ul>
        </li>
        <li>
            Problemas conhecidos:
            <ul>
                <li id="problemas"></li>
            </ul>
        </li>
    </ul>`
    //Gera o código do campo de última data de modificação
    var data = document.getElementById('data').innerHTML = '18/03/2021';
    //gera o código do campo de versão do site
    var versao = document.getElementById('versao').innerHTML = "Versao 3.0.2<br/><a href='versoes.html'>Notas das versões</a>";
    //gera o campo de IDEs usadas
    var ides = document.getElementById('ides').innerHTML = '<li>Netbeans 8.2, posteriormente o Apache Netbeans 12.</li><li>Sublime Text (Não o uso mais)</li><li>Brackets (Não o uso mais)</li><li>Visual Studio Code</li><li>Android Studio</li><li>MySQL Worckbench 8.0</li><li>Xampp</li><li>Node.js</li><li>Gimp 2.10.20</li><li>Inkscape</li><li>Godot 3.2.1</li><li>FileZilla</li>'
    //gera o código para o campo de navegadores testados
    var nav = document.getElementById('navs').innerHTML = `<ul><p>Versões para Desktop</p>
        <li>Google Chrome Versão 89.0.4389.82</li>
        <li>Mozila Firefox Versão 86.0</li>
        <li>Opera Versão 74.0.3911.203</li>
        <li>Microsoft Edge versão 89.0.774.48</li>
        <li>Vivaldi 3.1.1929.45</li>
        <li>Midori Web Browser V9.0</li>
        <li>Gnome Web 3.36.2(Conhecido também como Epiphani)</li>
        <li>Microsoft Internet Explorer 11 versão 11.900.18362.0</li>
    </ul>
    <ul><p>Versões de Smartphones</p>
        <li>Google Chrome Versão 85.0.4183.83</li>
        <li>Microsoft Edge 45.05.4.5036</li>
        <li>Mozila Firefox Versão 68.9.0</li>
        <li>Samsung Internet versão 11.2.2.3</li>
        <li>Opera versão 58.2.2878.53402</li>
        <li>Vivaldi 3.1.1935.19</li>
    </ul>
    `
    //gera o código para o campo de problemas conhecidos
    var problemas = document.getElementById('problemas').innerHTML = `
    Nos navegadores Midori e Epiphani nem todos os estilos são carregados e trabalhados corretamente, 
    fazendo com que, por um exemplo, a imagem de perfil não fique na posição correta.
    No navegador Internet Explorer da Microsoft não é carregado o conteúdos dos Modal, pois eles vem de um comando em Java Script e ele não possui 
    as versões mais recentes desta linguagem.`
}
//modifica o corpo de texto da página com o que foi modificado em cada versão
function notasVersao(){
    let notas = document.getElementById('nota').innerHTML = `
    <p>Versão 3.0.2 – Foi corrigido o Banco de Dados do Exercício 37 de Linguagem de Programação Web, ele não havia sido feito neste servidor.</p>
    <p>Versão 3.0.1 – Foi adicionado o campo de idade na tela inicial, campo esse que é automático, a idade é calculada capturando a data atual e fazendo o cálculo do dia, mês e ano. Houve também algumas modificações pequenas e pontuais.</p>
    <p>Versão 3.0 – Foi feita a migração para o Bootstrap Material Design, no processo houve alguns problemas com a página de Projetos, problemas esses que só foram corrigidos com a página sendo refeita. Neste processo foi aproveitado para otimizar a página, tendo agora um modal universal único para a página, várias tags que não tinham utilidade alguma foram removidas, o código foi melhor comentado, e essas mudanças fizeram reduzir de 920 linhas para 870 linhas, o que ajuda a melhorar o desempenho da página. Na migração também mudou a paleta de cores, foi adotado o tema escuro para a Navbar e o accent color agora é o aqua blue.</p>
    <p>Versão 2.5 - Adicionados os primeiros conteúdos do curso de ADS. Adicionado conteúdos do Godot. Adicionada página própria para as versões. Criada função para carregar o número de telefone, centralizando esta informação evitando uma mudança pontual em várias páginas. Todos os downloads estão no Mega agora.</p>
    <p>Versão 2.3 - Feitas modificações nas páginas de Formação Acadêmica, onde foi adicionado o meu inicio do tecnologo de ADS, e Projetos, onde foi iniciado a migração dos downloads dos arquivos do site para o MEGA. </p>
    <p>Versão 2.2 - Implementada a página de exercícios de JavaScript e realizados os exercícios de Java Script.</p>
    <p>Versão 2.1 - Correções pontuais do design da página de projetos.</p>
    <p>Versão 2.07 - Corrigidos Erros ortográficos. Adicionados os últimos exercícios e aulas do curso de JS.</p>
    <p>Versão 2.04 - Adicionado todos os exercícios dos cursos realizados no Curso em Vídeo, menos do JS. Adicionados projetos de Java particulares. Corrigido alguns pontos da imagem de perfil, fazendo ela desaparecer em telas de smartphones, reduzido seu tamanho também.</p>
    <p>Versão 2.01 - Adicionado todas as matérias do curso da QI, adoção do modal no lugar dos alert().</p>
    <p>Versão 2.0 - Criada então a página com os progetos, de início apenas com as matérias da QI.</p>
    <p>Versão 1.0 - Criação do site com 3 páginas, home, experiência proficional e formação acadêmica. feito como um exercício da matéria de Internet II do curso técnico em informática da QI, mas já fazendo uso do Bootstrap.</p>
    `
}
//Adiciona o número de telefone ao campo fone
function fones(){
    let fones = document.getElementById('fone').innerHTML = `Telefone: (51) 982572676`
}
//função para gerar a idade pegando a data atual e calculando
function gerarIdade(){
    let data = new Date() //chama o objeto data
    let dia = parseInt(data.getDate()) //do objeto data é chamado o método getDate() para pegar o dia, converte o valor para inteiro, por garantia, e o atribui a variável dia
    let mes = parseInt(data.getMonth()) //do objeto data é chamado o método getMonth() para pegar o mês, converte o valor para inteiro, por garantia, e o atribui a variável mes
    let ano = parseInt(data.getFullYear())//do objeto data é chamado o método getFullYear() para pegar o ano, converte o valor para inteiro, por garantia, e o atribui a variável ano
    //calcula previamente a idade
    let idade = ano - 1993
    
    if(mes <= 5){  //se mês for menor ou igual a 5 executa o código, senão...
        if(dia < 21){  //se o dia for menor, anterior ao 21, executa o código subtraindo 1 do ano, senão...
            document.getElementById('idade').innerHTML = idade - 1
        }else{   //executa um código sem subtrair nada
            document.getElementById('idade').innerHTML = idade
        }
    }else{   //... executa este código
        document.getElementById('idade').innerHTML = idade
    }
}
//função para mostrar o conteúdo extra de informações do curso de ADS no modal
function sobreADS(){
    let titulo = document.getElementById('exampleModalLabel').innerHTML = `<h5 class="modal-title" id="exampleModalLabel">Sobre o ADS em EAD da QI</h5>`
    let sobre = document.getElementById('corpoTexto').innerHTML = `
    <p class="indent">
        Este curso ainda está em andamento. Apenas o que eu achar relevante irá ser posto aqui, 
        como por exemplo as atividades de Banco de Dados 1, que apenas uma foi posta, pois todas as outras
        não são relevantes ou interessantes.
    </p>
    `
}
//função para mostrar o conteúdo extra de informações do curso de TI no modal
function sobreCursoTecnico(){
    let titulo = document.getElementById('exampleModalLabel').innerHTML = `Sobre o Curso Técnico`
    let sobre = document.getElementById('corpoTexto').innerHTML = `
    <p class="indent">
        No curso técnico da QI, algumas matérias não tiveram trabalhos e nem exercícios
        que poderiam ser colocados neste site, são elas: Banco de Dados I, Matemática aplicada a Informática,
        Linguagem de Banco de Dados, Banco de Dados II, Inglês Técnico, Servidores, Sistemas Operacionais,
        Fundamentos de redes e conectividades
        e Relações humanas nas Organizações. A
        matéria "Análise e Desenvolvimento de Software orientado a Objetos" teve um trabalho, mas está junto de
        Computação Gráfica, pois foi uma documentação do trabalho.
    </p>`
}
//função para mostrar o conteúdo extra de informações do curso em vídeo no modal
function sobreCV(){
    let titulo = document.getElementById('exampleModalLabel').innerHTML = `Sobre o Curso em Vídeo`
    let sobre = document.getElementById('corpoTexto').innerHTML = `
    <p class="indent">
        Apenas as atividades mais interessantes e relevantes são postas aqui.
        Todas as atividades postas aqui são feitas acompanhando o que é proposto nas vídeo aulas,
        quando é pedido algo a mais esse algo a mais é posto em projetos particulares (isso se for algo interessante).
        Eu acompanhei cursos que não teve nenhuma atividade que pudesse ser posta no site,
        que foram o curso de Redes (Tive exatamente o mesmo conteúdo no curso técnico), 
        de Hardware (sei mais que os professores do curso em vídeo, sou entusiasta de hardware) 
        e de Linux (já uso distros linux a bastante tempo, não teve novidade alguma pra mim).
    </p>
    `
}
//função para mostrar o conteúdo extra de informações dos meus projetos no modal
function sobreProjetosProprios(){
    let titulo = document.getElementById('exampleModalLabel').innerHTML = `Sobre os Projetos Próprios`
    let sobre = document.getElementById('corpoTexto').innerHTML = `
    <P class="indent">
        Os projetos próprios são coisas que me dão vontade de fazer, por estudo e para aprender algo, refazendo
        exercícios dos cursos ou fazendo algo
        que me veio em mente.
    </P>
    `
}
//função para mostrar o conteúdo extra de informações dos meus estudos de Godot no modal
function sobreGodot(){
    let titulo = document.getElementById('exampleModalLabel').innerHTML = `Sobre os Projetos com o Godot`
    let sobre = document.getElementById('corpoTexto').innerHTML = `
    <p class="indent">
        O Godot é uma engine open-source multiplataforma, te permite criar games para quase que todas as plataformas.
        Dos projetos feitos e disponibilizados aqui, apenas o Dodge the Creeps está pronto e com o executável, os outros
        não estão prontos, então não possui um executável. Para executá-los
        é preciso ter o Godot e executá-los pela engine.
    </p>`
}
//função criada para limpar o modal após ele ser usado, função essa apenas para garantir de que tudo funcione como o planejado
function limparModal(){
    let titulo = document.getElementById('exampleModalLabel').innerHTML = ``
    let sobre = document.getElementById('corpoTexto').innerHTML = ``
}