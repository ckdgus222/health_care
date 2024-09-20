import { DataGrid } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import styles from "./ActingTable.module.css"

const columns = [
    {
        field: 'roomNumber',
        headerName: '병실',
        type: 'number',
        width: 50
    },
    {
        field: 'id',
        headerName: 'ID',
        type: 'number',
        width: 50
    },
    {
        field: 'name',
        headerName: '성명',
        width: 120,
        editable: true,

    },
    {
        field: 'department',
        headerName: '진료과',
        width: 90,
        editable: true,
    },
    {
        field: 'doctor',
        headerName: '주치의',
        width: 90,
        editable: true,
    },
    {
        field: 'status',
        headerName: '관리현황',
        sortable: false,
        width: 400,
    },
    {
        field: 'memo',
        headerName: '메모',
        sortable: false,
        width: 400,
    },
];

const dummyData = [
    { id: 1, roomNumber: 101, name: '김철수', department: '심장내과', doctor: '이박사', status: '안정', memo: 'N/A' },
    { id: 2, roomNumber: 102, name: '이영희', department: '신경과', doctor: '김박사', status: '위독', memo: '상시 모니터링 필요' },
    { id: 3, roomNumber: 102, name: '박영희', department: '신경과', doctor: '김영호', status: '위독', memo: '상시 모니터링 필요' },
    { id: 4, roomNumber: 103, name: '박민수', department: '정형외과', doctor: '최박사', status: '회복 중', memo: '수술 예정' },
    { id: 5, roomNumber: 103, name: '이민정', department: '정형외과', doctor: '박지훈', status: '회복 중', memo: '수술 예정' },
    { id: 6, roomNumber: 104, name: '최수진', department: '소아과', doctor: '박박사', status: '안정', memo: 'N/A' },
    { id: 7, roomNumber: 105, name: '홍길동', department: '피부과', doctor: '정박사', status: '퇴원', memo: '2주 후 재진' },
];

const ActingTable = () =>{

   return (
      <div className={styles.tableLayout}>
          <Box sx={{ height:  '100%', width: '100%' }}>
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

export default ActingTable
