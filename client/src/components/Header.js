import React, { useEffect } from 'react'
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCartPlus,
  faCreditCard,
  faSignInAlt,
} from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux'
import { logOut } from '../actions/userActions'
import { useHistory } from 'react-router-dom'
import GlobalSearch from './GlobalSearch'
import { addToCart, listCart } from '../actions/cartActions'
const Header = () => {
  const history = useHistory()
  const dispatch = useDispatch()

  const userLogIn = useSelector((state) => state.userLogIn)
  const { userInfo } = userLogIn

  const cart = useSelector((state) => state.cart)
  const { cartItems } = cart

  const cartList = useSelector((state) => state.cartList)
  const { cartItems: cardItemDb } = cartList
  useEffect(() => {
    dispatch(addToCart())
    if (userInfo && userInfo.token) {
      dispatch(listCart())
    }
  }, [dispatch, userInfo])

  const logoutHandler = () => {
    dispatch(logOut())
    history.push('/login')
  }

  return (
    <header>
      <Navbar bg='dark' expand='lg' variant='dark' collapseOnSelect>
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand>Food Store</Navbar.Brand>
          </LinkContainer>

          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto'>
              <GlobalSearch />
              <LinkContainer to='/cart'>
                <Nav.Link className='cart'>
                  <FontAwesomeIcon icon={faCartPlus} color='#fff' /> Cart
                  {cartItems.length > 0 && (
                    <span
                      style={{
                        backgroundColor: '#ef5777',
                        fontSize: '9px',
                        padding: '2px 5px',
                        borderRadius: '54%',
                        position: 'absolute',
                        top: '2px',
                        left: '59px',
                      }}
                    >
                      {cartItems.reduce((acc, item) => acc + item.qty, 0)}
                    </span>
                  )}
                </Nav.Link>
              </LinkContainer>

              {cardItemDb && (
                <LinkContainer to='/checkout'>
                  <Nav.Link className='checkout'>
                    <FontAwesomeIcon icon={faCreditCard} color='#fff' />{' '}
                    CheckOut
                  </Nav.Link>
                </LinkContainer>
              )}

              {userInfo ? (
                <NavDropdown title={userInfo.name}>
                  <LinkContainer to='/user/orderhistory'>
                    <NavDropdown.Item>Order History</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to='/user/wishlist'>
                    <NavDropdown.Item>Wishlist</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to='/user/password'>
                    <NavDropdown.Item>Password</NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Item onClick={logoutHandler}>
                    Logout
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <p style={{ color: '#636e72' }}>{userInfo.email}</p>
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <LinkContainer to='/login'>
                  <Nav.Link>
                    Sign In <FontAwesomeIcon icon={faSignInAlt} />
                  </Nav.Link>
                </LinkContainer>
              )}
              {userInfo && userInfo.role === 'admin' && (
                <NavDropdown title='Admin' id='adminmenu'>
                  <LinkContainer to='/admin/userlist'>
                    <NavDropdown.Item>User list</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to='/admin/products'>
                    <NavDropdown.Item>List Products</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to='/admin/product/create'>
                    <NavDropdown.Item>Create Products</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to='/admin/category'>
                    <NavDropdown.Item>Category</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to='/admin/addon'>
                    <NavDropdown.Item>Addon</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to='/admin/variables'>
                    <NavDropdown.Item>Variable</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to='/admin/attribute'>
                    <NavDropdown.Item>Attribute</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to='/admin/coupon'>
                    <NavDropdown.Item>Coupon</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to='/admin/orderList'>
                    <NavDropdown.Item>Orders</NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
