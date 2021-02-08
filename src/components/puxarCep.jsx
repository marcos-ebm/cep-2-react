async function PuxarCep(cep){
      const dados = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const resultado = await dados.json();
      return resultado;
}

export default PuxarCep;