import React from 'react';
import PuxarCep from './puxarCep';
import {Box} from '@material-ui/core';
import TextField  from '@material-ui/core/TextField';
import Resultado from './resultado';

const TelaPrincipal = () => {

      const [cep, setCep] = React.useState('');
      const [endereco, setEndereco] = React.useState('');
      const handleCep = value => {
            setCep(value.target.value);
      }
      let resultado = true;

      React.useEffect( () => {
            PuxarCep(cep).then( e => {
                  setEndereco(e);
            }).catch()
      })


      return(
            <Box>
                  <TextField id="outlined-basic" label="Digite o CEP" variant="outlined" value={cep} onChange={handleCep} />

                  <Resultado 
                        resultado={resultado}
                        cep={endereco.cep} 
                        localidade={endereco.localidade}
                        logradouro={endereco.logradouro}
                        complemento={endereco.complemento}
                        bairro={endereco.bairro}
                        uf={endereco.uf}
                        ibge={endereco.ibge}
                        gia={endereco.gia}
                        ddd={endereco.ddd}
                        siafi={endereco.siafi}
                  />
            </Box>
      );
}

export default TelaPrincipal;