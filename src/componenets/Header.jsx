import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { search } from '../redux/slices/productSlice';

function Header() {

  const [key, setKey] = useState("")
  const dispatch = useDispatch()

  const searchWithKey = () => {
    dispatch(search(key))
  }

  const { wishlist } = useSelector((state => state.wishReducer))
  const { cart } = useSelector((state) => state.cartReducer)



  return (
    <>
      <Navbar className="bg-body-tertiary sticky-top">
        <Container>
          <Navbar.Brand href="#home">
            <i className="fa-solid fa-bag-shopping fa-xl" style={{ color: "#481dbf", }} />
            {' '}
            ReduxCart
          </Navbar.Brand>

          <div className='d-flex ms-auto me-1'>
            <div className="d-flex">
              <input type="text " onChange={e => setKey(e.target.value)} placeholder='search' className='form-controls me-1' />
              <button onClick={searchWithKey} className='btn btn-success '>submit</button>
            </div>

          </div>
          <div className=''>
            <Link to={'./wish'} className='btn btn-outline-dark me-4'>
              <i className="fa-solid fa-heart" style={{ color: "#e90c22", }} />
              {' '}
              Wishlist
              <sup>
                <span className='badge bg-danger ms-1'>
                  {
                    wishlist?.length
                  }
                </span>
              </sup>
            </Link>
            <Link to={'./cart'} className='btn btn-outline-dark'>
              <i className="fa-solid fa-cart-shopping" style={{ color: "#15a817", }} />
              {' '}

              Cart
              <sup>
                <span className='badge bg-danger ms-1'>
                  {
                    cart?.length
                  }
                </span>
              </sup>
            </Link>
          </div>
        </Container>
      </Navbar>
    </>
  )
}

export default Header