import React from "react"

const Produto = (props) => {

    //funções
    function loadingFotos(fotos) {
        if(Array.isArray(fotos)) {
            return fotos.map(foto => {
                return (
                        <div key={foto.titulo} style={{
                            maxHeight: 300,
                            width: 250,
                            display: "flex",
                            flexDirection: "column",
                            margin: 2
                        }}>
                            <img style={{
                                height: "100%",
                            }} src={foto.src}/>
                            <label style={{
                                backgroundColor: "rgba(0,0,0,0.3)",
                                width: "100%",
                                textAlign: "center"
                            }}>
                                {foto.titulo}
                            </label>
                        </div>
                )
            })
        }
        else {
            return null
        }
    }
    return (
        <div>
            <div style={
                {display: "flex"}
            }>
                {loadingFotos(props.produto.fotos)}
            </div>
            <h1>{props.produto.nome}</h1>
            <h5>R$ {props.produto.preco}</h5>
            <p>{props.produto.descricao}</p>
        </div>
    )
}

export default Produto