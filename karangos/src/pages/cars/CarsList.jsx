import React from 'react'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

export default function CarsList() {

  const columns = [
    /*{ 
      field: 'id', 
      headerName: 'Cód.', 
      width: 80 
    },*/
    {
      field: 'brand_model',
      headerName: 'Marca / Modelo',
      width: 220,
      renderCell: (params) => (
        <span>{params.row.brand} / {params.row.model}</span>
      )
    },
    {
      field: 'color',
      headerName: 'Cor',
      width: 130
    },
    {
      field: 'year_manufacture',
      headerName: 'Ano Fabr.',
      width: 100
    },
    {
      field: 'imported',
      headerName: 'Importado',
      width: 100,
      renderCell: (params) => (
        <span>{params.value === 1 ? 'SIM' : ''}</span>
      )
    },
    {
      field: 'plates',
      headerName: 'Placas',
      width: 120
    },
    {
      field: 'selling_price',
      headerName: 'Preço Venda',
      width: 150,
      align: 'right',
      headerAlign: 'right',
      valueFormatter: (value) => {
        if (value) {
          return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
        }
        return ''
      }
    },
    {
      field: 'selling_date',
      headerName: 'Data Venda',
      width: 150,
      valueFormatter: (value) => {
        if (value) {
          const date = new Date(value)
          return date.toLocaleDateString('pt-BR')
        }
        return ''
      }
    },
  ];

  const [cars, setCars] = React.useState([])

  async function loadData() {
    try {
      const response = await fetch('https://api.faustocintra.com.br/v2/cars')
      const data = await response.json()
      setCars(data)
    }
    catch(error) {
      console.error(error)
      alert('ERRO: ' + error.message)
    }
  }

  React.useEffect(() => {
    loadData()
  }, [])

  return <>
    <Typography variant="h1" gutterBottom>
      Listagem de Carros
    </Typography>
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={cars}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box> 
  </>
}