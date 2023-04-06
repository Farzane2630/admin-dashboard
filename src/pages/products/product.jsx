import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import './Products.css'
import { productsData } from '../../datas'
import { products } from '../../datas'
import Chart from '../../components/chart/Chart'

export default function Product() {
    const params = useParams()
    const [productsList, setProducts] = useState(products)

    let mainProduct = productsList.find(product=>{
        return product.id == params.id
    })

    return (
        <div className='product'>
            <div className="productTitleContainer">
                <h1 className="productTitle">Product</h1>
                <Link to="/newProduct">
                    <button className='productTitleBtn'> create </button>
                </Link>
            </div>
            <div className="productTop">
                <div className="productTopLeft">
                    <Chart title="Sales in Month" data={productsData} dataKey="sales" />
                </div>
                <div className="productTopRight">
                    <div className="productTopRightInfo">
                        <img src={mainProduct.avatar} alt="product" className='productImg' />
                        <span className='productTitle'>{mainProduct.title}</span>
                    </div>
                    <div className="bottomInfo">

                        <div className="bottoninfoKeys">
                            <div className="bottoninfoKey">ID</div>
                            <div className="bottoninfoKey">Name</div>
                            <div className="bottoninfoKey">Sales</div>
                            <div className="bottoninfoKey">Active</div>
                            <div className="bottoninfoKey">In Stock</div>
                        </div>
                        <div className='bottomInfoValues'>
                            <div className='bottomInfoValue'>{mainProduct.id}</div>
                            <div className='bottomInfoValue'>{mainProduct.title}</div>
                            <div className='bottomInfoValue'>{mainProduct.price}</div>
                            <div className='bottomInfoValue'>{mainProduct.status}</div>
                            <div className='bottomInfoValue'>{mainProduct.stock}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="productBottom">
                <div className="productBottomLeft">
                    <form className="productForm">
                        <lable className="productFormTitle">Product Name</lable>
                        <input type="text" className="productInputName" placeholder='Insert Name' />
                        <lable>In Stock</lable>
                        <select id="instock">
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </select>
                        <lable>Active</lable>
                        <select id="active">
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </select>
                    </form>
                </div>
                <div className="productBottomRight"></div>
            </div>
        </div>
    )
}
