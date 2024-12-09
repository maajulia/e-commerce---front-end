import {  ChangeEvent, FormEvent, useState } from "react"
import { useNavigate } from 'react-router-dom';
import './cadastroProduto.css'
import {Link} from 'react-router-dom'
function CadastroProduto(){
    const navigate = useNavigate();
    const [id,setId] = useState("")
    const [nome,setNome] = useState("")
    const [descricao,setDescricao] = useState("")
    const [preco,setPreco] = useState("")
    const [imagem,setImagem] = useState("")

    function handleForm(event:FormEvent){
        event.preventDefault();
        console.log("Tentei cadastrar produtos");
        const produto = {
            id: id,
            nome: nome,
            descricao: descricao,
            preco: preco,
            imagem: imagem
        }
        fetch("https://e-commerce-back-end-2.onrender.com/roupas",{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(produto)
        }).then(response => {
            if(response.status === 200){
                alert("Produto cadastrado com sucesso")
                navigate("/")
            }
            else{
                alert("Erro ao cadastrar produto")
            }
        })
    }
   function handleId(event:ChangeEvent<HTMLInputElement>){
        setId(event.target.value)
    }
    function handleNome(event:ChangeEvent<HTMLInputElement>){
        setNome(event.target.value)
    }
    function handleDescricao(event:ChangeEvent<HTMLInputElement>){
        setDescricao(event.target.value)
    }
    function handlePreco(event:ChangeEvent<HTMLInputElement>){
        setPreco(event.target.value)
    }
    function handleImagem(event:ChangeEvent<HTMLInputElement>){
        setImagem(event.target.value)
    }
    return(
        <>
            <header className="cabecalho">
        <h1>Mundo Encantado</h1>
        <p>Adicione novos produtos ao sistema</p>

        <button className='buttonCAD'><Link to={"/"}>Voltar</Link></button>
    </header>
            
            <div className="cadastro">

                <div className="titulo"><span>Cadastro de Produtos</span></div>
                <div className="formulario">
                    <form onSubmit={handleForm}>
                        <div>
                            <input placeholder="Id" type="text" name="id" id="id" onChange={handleId} />
                        </div>
                        <div>
                            <input placeholder="Nome" type="text" name="nome" id="nome" onChange={handleNome} />
                        </div>
                        <div>
                            <input placeholder="Descrição" type="text" name="descricao" id="descricao" onChange={handleDescricao} />
                        </div>
                        <div>
                            <input placeholder="Preço" type="text" name="preco" id="preco" onChange={handlePreco} />
                        </div>
                        <div>
                            <input placeholder="URL Imagem" type="text" name="imagem" id="imagem" onChange={handleImagem} />
                        </div>
                        <input type="submit" value="Cadastrar" />
                    </form>
                </div>
            </div>
        </>
    )
}

export default CadastroProduto
