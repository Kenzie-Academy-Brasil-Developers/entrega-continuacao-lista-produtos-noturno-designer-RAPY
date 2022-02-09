//------------------- CALCULAR PREÇO TOTAL DOS PRODUTOS ----------------------

const output = document.getElementById('precoTotal');
output.value = '';
const ul = document.querySelector('.containerListaProdutos ul');


//------------------- MONTANDO A LISTA DOS PRODUTOS ----------------------

const montarListaProdutos = (listaProdutos) => {
    ul.innerHTML = '';

    listaProdutos.forEach((produto) => {
        const li = document.createElement('li');
        const img = document.createElement('img');
        const h3 = document.createElement('h3');
        const p = document.createElement('p');
        const span = document.createElement('span');
        const ol = document.createElement('ol');
        const button = document.createElement('button');

        // Adicionando dados do produto aos elementos
        img.src = produto.img;
        img.alt = produto.nome;
        h3.innerText = produto.nome;
        p.innerText = produto.preco;
        span.innerText = produto.secao;
        produto.componentes.forEach((componente) => {
            const lista = document.createElement('li');
            lista.innerHTML = componente;
            ol.appendChild(lista);
        })
        button.innerText = 'Adicionar ao carrinho'


        // Adicionando o elementos para o li
        li.appendChild(img);
        li.appendChild(h3);
        li.appendChild(p);
        li.appendChild(span);
        li.appendChild(ol);
        li.appendChild(button);

        // Adicionando li ao HTML
        ul.appendChild(li);

    });

    //------------------- CARRINHO DE COMPRAS ----------------------


    //button eventlistner addCart
    // Selecionando botao em nosso HTML
    const botaoCarrinho = document.querySelectorAll('.containerListaProdutos button');
    const addCart = document.querySelector('.containerCarrinho ul')

    botaoCarrinho.forEach((elem, index) => {
        elem.addEventListener('click', () => {
            const li = document.createElement('li');
            const img = document.createElement('img');
            const nome = document.createElement('p');
            const valor = document.createElement('p');
            const secao = document.createElement('p');

            img.src = listaProdutos[index].img;
            img.alt = listaProdutos[index].nome;
            nome.innerText = listaProdutos[index].nome;
            valor.innerText = listaProdutos[index].preco;
            secao.innerText = listaProdutos[index].secao;

            li.appendChild(img);
            li.appendChild(nome);
            li.appendChild(valor);
            li.appendChild(secao);


            // Adicionando li ao HTML
            addCart.appendChild(li);
            filtrarCarrinho();

        })
    });
}


//------------------- TOTALIZAÇÃO DO VALOR DOS PRODUTOS ----------------------

const filtrarCarrinho = (produto) => {
    const listCarr = document.querySelectorAll('.containerCarrinho ul li p:nth-child(3)');
    const arr = [];
    listCarr.forEach(p => arr.push(Number(p.textContent)));
    const soma = arr.reduce((acc, cv) => acc += cv, 0);
    document.querySelector('#precoTotal').innerHTML = soma.toFixed(2)
}


//------------------- MOSTRAR TODOS OS PRODUTOS ----------------------

const mostrarTodos = () => {
    const listaTodosOsProdutos = produtos.filter((produto) => {
        return produto.lista === 'todos';
    });

    montarListaProdutos(listaTodosOsProdutos);
    //valorTotalDosProduto(listaTodosOsProdutos)
}

// Selecionando botao em nosso HTML
const botaoMostrarTodos = document.querySelector('.estiloGeralBotoes--mostrarTodos');

// Adicionando event listener de clique, e executando a função de filtro
botaoMostrarTodos.addEventListener('click', mostrarTodos);



//------------------- BUSCA POR HORTIFRUTI ----------------------

const filtrarPorHortifruti = () => {

    const listaHortifruti = produtos.filter((produto) => {
        return produto.secao === 'Hortifruti';
    });

    montarListaProdutos(listaHortifruti);

    //valorTotalDosProduto(listaHortifruti)
}

// Selecionando botao em nosso HTML
const botaoMostrarHortifruti = document.querySelector('.estiloGeralBotoes--filtrarHortifruti');

// Adicionando event listener de clique, e executando a função de filtro
botaoMostrarHortifruti.addEventListener('click', filtrarPorHortifruti);




//------------------- BUSCA POR NOME ----------------------

const input = document.querySelector(".campoBuscaPorNome")

const campoBuscaPorNome = () => {

    const buscaPorNome = produtos.filter((produto) =>
        produto.nome.toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .startsWith(input.value
            .toLowerCase()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')))

    montarListaProdutos(buscaPorNome);



}


// ----------------- REMOVE FORMATAÇÃO DE ACENTOS ------------
const formata = produto => {
    produto = produto.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    return produto;
}



// Selecionando botao em nosso HTML
const botaoBuscaPorNome = document.querySelector('.estiloGeralBotoes--botaoBuscaPorNome');

// Adicionando event listener de clique, e executando a função de filtro
botaoBuscaPorNome.addEventListener('click', campoBuscaPorNome);


//------------------- BUSCA POR LATICINIOS ----------------------

const filtrarPorLaticinio = () => {

    const listaLaticinio = produtos.filter((produto) => {
        return produto.secao === 'Laticinio';
    });

    montarListaProdutos(listaLaticinio);

}

// Selecionando botao em nosso HTML
const botaoMostrarLaticinio = document.querySelector('.estiloGeralBotoes--filtrarLaticinio');

// Adicionando event listener de clique, e executando a função de filtro
botaoMostrarLaticinio.addEventListener('click', filtrarPorLaticinio);

//------------------- BUSCA POR PANIFICADORA ----------------------

const filtrarPorPanificadora = () => {

    const listaPanificadora = produtos.filter((produto) => {
        return produto.secao === 'Panificadora';
    });

    montarListaProdutos(listaPanificadora);

}

// Selecionando botao em nosso HTML
const botaoMostrarPanificadora = document.querySelector('.estiloGeralBotoes--filtrarPanificadora');

// Adicionando event listener de clique, e executando a função de filtro
botaoMostrarPanificadora.addEventListener('click', filtrarPorPanificadora);