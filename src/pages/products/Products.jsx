import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import '../users/Users.css'
import { products } from '../../datas'

export default function Products() {
  const [rows, setProductRows] = useState(products);

    const productDelete = productId =>{
      setProductRows(rows.filter(row=>{
      return row.id !== productId
    })) 
  }

  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 90,
    },
    {
      field: "product",
      headerName: "Product",
      width: 250,
      renderCell: (params) => {
        return (
          <Link className="link" to="/">
            <div className="userListUser">
              <img src={params.row.avatar} className="userListImg" />
              <p>{params.row.title}</p>
            </div>
          </Link>
        )
      }
    },
    {
      field: 'price',
      headerName: 'Price',
      width: 120
    },
    {
      field: 'action',
      headerName: 'Actions',
      width: 150,
      renderCell: (params)=>{
        return(
          <>
          <Link to={`/products/${params.row.id}`}>
            <button className="userListEditIcon">
              Edit
            </button>
          </Link>
          <DeleteForeverIcon 
          className="userListDeleteIcon"
          onClick={()=> productDelete(params.row.id)} 
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
