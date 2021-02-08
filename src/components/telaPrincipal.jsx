import React from 'react';
import PuxarCep from './puxarCep';
import {Box} from '@material-ui/core';
import TextField  from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
      root: {
        '& > *': {
          margin: theme.spacing(1),
          width: '25ch',
        },
      },
    }));

const TelaPrincipal = () => {
      return(
            <Box>
                  <TextField id="outlined-basic" label="Digite o CEP" variant="outlined" />
            </Box>
      );
}

export default TelaPrincipal;