import {Box, Typography, useTheme} from '@mui/material'
import {DataGrid, GridToolbar,Checkbox} from '@mui/x-data-grid'
import {tokens} from '../../theme'
import {mockDataInvoices} from '../../data/data'
import { AdminPanelSettingsOutlined } from '@mui/icons-material'
import { LockOpenOutlined } from '@mui/icons-material'
import { SecurityOutlined } from '@mui/icons-material'
import Header from '../../components/Header'
const Invoices =() => {
    
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const columns = [{field: 'id', headerName: 'ID',flex:0.5},
    {field: 'name', headerName: 'Name', flex: 1,cellClassName: 'name-cell'},
    {field: 'phone', headerName: 'Phone Number', flex: 1},
    {field: 'email', headerName: 'Email', flex: 1},
    {field: "cost", headerName: "Cost", flex: 1,renderCell : (params) => {
        return (
            <Typography color={colors.greenAccent[500]}>{params.row.cost}</Typography> 
        )
        }
    },
    {field: "date", headerName: "Date", flex: 1
    },
    ] 
    return (
        <Box m="20px ">
            <Header title="INVOICES" subtitle="Total Invoices"/>
            <Box m="40px 0 0 0" width="100%"height="75vh" sx={{
                "& .MuiDataGrid-root": {
                    border:"none"
                },
                "& .MuiDataGrid-cell": {
                    border:"none"
                },
                "& .name-cell": {
                    color: colors.greenAccent[300]
                },
                "& .MuiDataGrid-columnHeaders": {
                    backgroundColor: colors.blueAccent[700],
                    borderBottom: "none"
                },
                "& .MuiDataGrid-virtualScroller": {
                    backgroundColor: colors.primary[400],

                },
                "& .MuiDataGrid-footerContainer": {
                    borderTop: "none",
                    backgroundColor: colors.blueAccent[700],
                },
               "& .MuiCheckbox-root": {
                color : `${colors.greenAccent[200]} !important`
                }}}>
              <DataGrid 
              rows={mockDataInvoices}
              checkboxSelection
              columns={columns}
              components={{
                Toolbar: GridToolbar,
              }}
              />
            </Box>
        </Box>
    )
}
export default Invoices
