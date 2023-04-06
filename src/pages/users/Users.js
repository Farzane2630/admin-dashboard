import React, { useState } from "react";
import { userRows } from "../../datas";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
import "./Users.css";

export default function Users() {
  const [rows, setUserRows] = useState(userRows);

    const userDelete = userId =>{
    setUserRows(rows.filter(row=>{
      return row.id !== userId
    })) 
  }

  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 90,
    },
    {
      field: "user",
      headerName: "User",
      width: 250,
      renderCell: (params) => {
        return (
          <Link className="link" to="/">
            <div className="userListUser">
              <img src={params.row.avatar} className="userListImg" />
              <p>{params.row.username}</p>
            </div>
          </Link>
        )
      }
    },
    {
      field: 'email',
      headerName: 'Email',
      width: 200
    },
    {
      field: 'status',
      headerName: 'Status',
      width: 120
    },
    {
      field: 'transactions',
      headerName: 'Transactions',
      width: 160
    }, 
    {
      field: 'action',
      headerName: 'Actions',
      width: 150,
      renderCell: (params)=>{
        return(
          <>
          <Link to={`/users/${params.row.id}`}>
            <button className="userListEditIcon">
              Edit
            </button>
          </Link>
          <PersonRemoveIcon 
          className="userListDeleteIcon"
          onClick={()=> userDelete(params.row.id)} 
          />
          </>
        )
      }
    }
  ];

  return (
    <div className="userList">
      <DataGrid 
      rows={rows} 
      columns={columns}
      pageSize= {4}
      disableSelectionOnClick 
      />
    </div>
  );
}
