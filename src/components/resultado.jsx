import React from 'react';

import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';


const Resultado = (props) => {
      return (
            <TableContainer>
                  <Table >
                        <TableHead>
                              <TableRow>
                                    <TableCell>Bairro</TableCell>
                                    <TableCell>Cep</TableCell>
                                    <TableCell>Localidade</TableCell>
                                    <TableCell>Complemento</TableCell>
                                    <TableCell>Uf</TableCell>
                                    <TableCell>Logradouro</TableCell>
                                    <TableCell>DDD</TableCell>
                                    <TableCell>IBGE</TableCell>
                                    <TableCell>GIA</TableCell>
                                    <TableCell>SIAFI</TableCell>
                              </TableRow>
                              <TableRow>
                                    <TableCell>{props.bairro}</TableCell>
                                    <TableCell>{props.cep}</TableCell>
                                    <TableCell>{props.localidade}</TableCell>
                                    <TableCell>{props.complemento}</TableCell>
                                    <TableCell>{props.uf}</TableCell>
                                    <TableCell>{props.logradouro}</TableCell>
                                    <TableCell>{props.ddd}</TableCell>
                                    <TableCell>{props.ibge}</TableCell>
                                    <TableCell>{props.gia}</TableCell>
                                    <TableCell>{props.siafi}</TableCell>
                              </TableRow>
                        </TableHead>
                  </Table>
            </TableContainer>
      );
}

export default Resultado;