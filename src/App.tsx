import { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import './App.css'
// Tipo para produtos
type ProdutoType = {
  id: number,
  nome: string,
  preco: string,
  descricao: string,
  cor: string,
  composicao: string,
  tamanhos: string,
  estoque: string,
  imagem: string
}


function App() {
  const [produtos, setProdutos] = useState<ProdutoType[]>([])


  // useEffect para carregar produtos e usuários
  useEffect(() => {
    // Buscar os produtos
    fetch("https://e-commerce-back-end-2.onrender.com/roupas")
      .then(resposta => resposta.json())
      .then(dados => setProdutos(dados))
  }, [])

    
  function handleExcluir(id: number) {
    alert(`Excluir o produto com id ${id}`);
    fetch(`https://one022a-marketplace-e90o.onrender.com/produtos/${id}`, {
      method: 'DELETE',
    })
      .then((resposta) => {
        if (resposta.status === 200) {
          alert("Produto excluído com sucesso");
          // Remover o produto excluído da lista de produtos
          setProdutos((prevProdutos) =>
            prevProdutos.filter((produto) => produto.id !== id)
          );
        } else {
          alert("Erro ao excluir o produto: Confira o terminal do backend");
        }
      })
      .catch((erro) => {
        alert(`Erro ao tentar excluir o produto: ${erro}`);
      });
  }
<div className="produtos-list">
  {produtos.map((produto) => (
    <div key={produto.id} className="produto-item">
      <h3 className="produto-nome">{produto.nome}</h3>
      {/* Adicionando o botão "Excluir" */}
      <button className='buttonExcluir' onClick={() => handleExcluir(produto.id)}>
        Excluir
      </button>
      {/* Outras informações do produto */}
    </div>
  ))}
</div>
  

  return (
    <>
            <header className="site-header">
                <nav className="navigation">
                    <ul>
                        <li><a href="#novidades">Novidades</a></li>
                        <li><a href="#feminino">Feminino</a></li>
                        <li><a href="#masculino">Masculino</a></li>
                        <li><a href="#kids">Kids</a></li>
                    </ul>
                </nav>


                <button className='buttonCAD'><Link to={"/cadastro-produtos"}>Cadastrar Produtos</Link></button>


            </header>

      

  
      {/* Listagem de Produtos */}
      <div className="produtos-container">
        <h1 className='titulo-produto'>Mundo Encantado</h1>
        <div className="produtos-list">
          {
            produtos.map(produto => (
              <div key={produto.id} className="produto-item">
                <h3 className="produto-nome">{produto.nome}</h3> {/* Use h3 para o nome do produto */}
                <div className='container-imagem'>
                  <img src={produto.imagem} alt="Imagem do produto" />
                </div>
                <p className="produto-preco">{produto.preco}</p>
                <p className="produto-descricao">{produto.descricao}</p>
                <p className="produto-cor">{produto.cor}</p>
                <p className="produto-composicao">{produto.composicao}</p>
                <p className="produto-tamanhos">{produto.tamanhos}</p>
                <p className="produto-estoque">{produto.estoque}</p>
                <button className="botao-comprar">Comprar</button>
                <button className='buttonAlt'><Link to={`/alterar-produto/${produto.id}`}>Alterar</Link></button>
                <button onClick={() => handleExcluir(produto.id)}>Excluir</button>
                <Link to={`/alterar-produto/${produto.id}`}>Alterar</Link>
              </div>
            ))
          }
        </div>
      </div>
    </>
  )
}

export default App