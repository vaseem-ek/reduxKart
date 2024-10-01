import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { removefromWishlist } from '../redux/slices/wishSlice'
import { addTocart } from '../redux/slices/cartSlice'

function Wish() {

    const { wishlist } = useSelector((state) => state.wishReducer)
    const dispatch = useDispatch()

    const handleAddcart=(product)=>{
        dispatch(addTocart(product))
        dispatch(removefromWishlist(product.id))
    }
    return (
        <>
            <div className="container-fluid">
                <h4 className='text-center text-info mt-4'>Wish List</h4>
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">

                    {
                        wishlist?.length > 0 ?
                            <>
                                {
                                    wishlist?.map(item => (
                                        <div className="col mb-5">
                                            <div className="card h-100">
                                                <Link to={`/view/${item?.id}`}>
                                                    <img className="card-img-top" src={item?.thumbnail} alt="..." />
                                                </Link>
                                                <div className="card-body p-4">
                                                    <div className="text-center">

                                                        <h5 className="fw-bolder">{item?.title}</h5>

                                                        ${item?.price}
                                                    </div>
                                                </div>
                                                {
                                                    <div className='card-footer d-flex justify-content-between'>
                                                        <button className='btn border' onClick={()=>dispatch(removefromWishlist(item?.id))}><i className="fa-solid fa-heart-circle-xmark" style={{ color: "#cb7410", }} /></button>
                                                        <button className='btn border' onClick={()=>dispatch(handleAddcart(item))}><i className="fa-solid fa-cart-plus" style={{ color: "#B197FC", }} /></button>

                                                    </div>
                                                }


                                            </div>
                                        </div>

                                    ))
                                }
                            </>
                            :
                            <h3 className='text-center text-warning'>no added</h3>
                    }


                </div>
            </div>
        </>
    )
}

export default Wish
