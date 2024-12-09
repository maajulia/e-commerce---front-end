import { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import './App.css'
// Tipo para produtos
type ProdutoType = {
  id: number,
  nome: string,
  preco: string,
  descricao: string,
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
                <button className="botao-comprar">Comprar</button>
              </div>
            ))
          }
        </div>
      </div>
    </>
  )
}

export default App
