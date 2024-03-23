import React from 'react'
import { storageURL } from '../../../../config/config'
import { Rating } from '@mui/material';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';
import { useSelector } from 'react-redux';
import { cartDataSelector } from '../../../CartPage/cartSlice';
import { Link } from 'react-router-dom';
import BookmarkAddOutlinedIcon from '@mui/icons-material/BookmarkAddOutlined';
import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded';
import { theme } from '../../../../theme';
import { savedProductsDataSelector } from '../../savedProductsSlice';

export default function Product(props) {
    const cart = useSelector(cartDataSelector);
    const productsCartCounts = cart.productsCount;
    const saved = useSelector(savedProductsDataSelector);

    let { id, title, price, rating, thumbnail, stock, desc } = props.product;

    return (
        <div className="product-card col-lg-3 col-md-4 col-sm-6 p-0" id={id}>
            <div class="product-image-container overflow-hidden">
                <a href="">
                    <img className='w-100 product-image rounded-1' height="260" src={`${storageURL}${thumbnail}`} alt={desc} />
                    </a>
            </div>
            <div className="product-details p-2">
                <p className="product-title text-muted mb-1">{title}</p>
                <p className="product-price mb-1 fw-semibold">{price}$</p>
                <div className="d-flex align-items-center">
                    <Rating name="half-rating-read" readonly value={Math.round(rating * 2) / 2} precision={0.5} />
                    <p className='m-0 ms-1 text-muted'>({Math.round(rating * 2) / 2})</p>
                </div>
            </div>
            {props.isInCart(id) ?
                <div className=''>
                    <div className="d-flex justify-content-between flex-row align-items-center">
                        <div >
                            <button style={{ width: 70, margin: 0,padding:'8px',backgroundColor:'orange' }} onClick={() => { stock <= productsCartCounts[id] ? void (0) : props.changeInCart(id, 1) }} ><AddIcon /></button>
                        </div>
                        <div className='px-5 fs-5'>

                            <p>{productsCartCounts[id]}</p>
                        </div>

                        <div >

                            <button style={{ width: 70, margin: 0,padding:'8px',backgroundColor:'orange' }} onClick={() => { productsCartCounts[id] <= 1 ? void (0) : props.changeInCart(id, -1) }} ><RemoveIcon /></button>
                        </div>

                    </div>
{/* 
                    <div className="row">
                        <Link to="/cart">
                            <button className='bg-primary'>Go to Cart</button>
                        </Link>
                    </div> */}
                </div>
                :
                <button onClick={() => { props.addCart(id) }}>Add to Cart</button>}
            {
                saved.error ? '' :<span className='save-icon' style={{ backgroundColor: theme.palette.primary.main }}>
                    {
                        props.isProductSaved(id) ? <BookmarkAddedIcon onClick={() => {  props.unsaveProduct(id) }} /> :
                            <BookmarkAddOutlinedIcon onClick={() => { props.saveProduct(id)}} />
                    }
                </span>
            }
        </div>
    )
}