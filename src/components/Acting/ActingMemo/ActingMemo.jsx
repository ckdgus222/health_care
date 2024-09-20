import { DataGrid } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import styles from "./ActingMemo.module.css"

const columns = [
    {
        field: 'actingMemo',
        headerName: 'Acting Memo',
        width: 50
    },
    {
        field: 'careSign',
        headerName: 'Care Sign/I-device',
        width: 50
    },
];

const dummyData = [
    { actingMemo: 'N/A', careSign: 'N/A'}
];

const ActingMemo = () =>{

    return (
        <div className={styles.tableLayout}>
            <Box sx={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={dummyData}
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
        </div>

    )
}

export default ActingMemo
