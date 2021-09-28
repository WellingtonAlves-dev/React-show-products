import React from "react"
import Produto from "./Produto";
const App = () => {
  //hooks
  const [produto, setProduto] = React.useState(null)
  const [loading, setLoading] = React.useState(false)

  //funções

  function getProduto(produto) {
    setLoading(true)
    setProduto(null)
    fetch("https://ranekapi.origamid.dev/json/api/produto/" + produto,
      {method: "GET"})
      .then(resposta => {
        if(resposta.ok) {
          return resposta.json();
        }
        else { 
          return null;
        }
      })
      .then(resposta => {
        if(resposta == null) {
          setLoading(false)
          return
        }
        setLoading(false)
        setProduto(resposta)
      })    
  }

  //componentes
  return (
    <div>
      <button onClick={() => getProduto("notebook")}>Notebook</button>
      <button onClick={() => getProduto("smartphone")}>Smartphone</button>
      <button onClick={() => getProduto("tablet")}>Tablet</button>
      {loading ? <p>Buscando produto...</p> : null}
      {produto != null ? <Produto produto={produto}/> : null}
    </div>
  )
}

export default App