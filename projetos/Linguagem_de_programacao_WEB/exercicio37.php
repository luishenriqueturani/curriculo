<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>Exercício 37</title>
    </head>
    <body>
        <h3>Exercício 37</h3>
        <p>Faça um programa que possua um cadastro de cinco campos (tipos alternados entre datas, textos e número) 
            e mostre para cada campo: Grave os dados em um banco de dados</p>
        
        <form action="exercicio37.php" method="post">
            <p>Nome: <input type="text" name="nome"></p>
            <p>Data de nascimento: <input type="date" name="data"></p>
            <p>CPF: <input type="text" name="cpf"></p>
            <p>Idade: <input type="number" name="idade"></p>
            <p>cep: <input type="text" name="cep"></p>
            <input type="submit" name="btn1" value="gravar">
            <input type="submit" name="btn2" value="ler">
            <input type="submit" name="btn3" value="Testar conecção">
        </form>
        <?php
            $banco = mysqli_connect('localhost', 'root', '', 'exercicio37');
            
            if(isset($_REQUEST['btn3'])){
                //$db = mysqli_select_db('exercicio37',$banco);
                if(!$banco){
                    echo "Falha ao conectar.";
                    exit();
                }else{
                    echo "Conectado com sucesso.";
                }
            }
            if(isset($_REQUEST['btn1'])){
                $cpf = $_REQUEST['cpf'];
                $nome = $_REQUEST['nome'];
                $data = $_REQUEST['data'];
                $idade = $_REQUEST['idade'];
                $cep = $_REQUEST['cep'];
                //$db = mysqli_select_db('exercicio37',$banco);
                if(!$banco){
                    echo "Falha ao conectar.";
                    exit();
                }else{
                    $gravar = "INSERT INTO cadastro ('cpf','nome','data_nascimento','idade','cep') VALUES('$cpf','$nome','$data','$idade','$cep');";
                    echo $banco->query($gravar).'Dados gravados, clique em ler para ver seus dados.';
                }
            }
            if(isset($_REQUEST['btn2'])){
                $cpf = $_REQUEST['cpf'];
                $nome = $_REQUEST['nome'];
                $data = $_REQUEST['data'];
                $idade = $_REQUEST['idade'];
                $cep = $_REQUEST['cep'];
                //$db = mysqli_select_db('exercicio37',$banco);
                if(!$banco){
                    echo "Falha ao conectar.";
                    exit();
                }else{
                    $ler = "SELECT * FROM 'cadastro'";
                    
                    if($retorno = mysqli_query($banco,$ler)){
                        $rowcount = mysqli_num_rows($retorno);
                        printf("Resultado da busca: \n",$rowcount);
                        mysqli_free_result($retorno);

                    }
                
                }
            }
            
            
        ?>
    </body>
</html>
