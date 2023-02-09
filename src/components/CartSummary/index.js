import CartContext from '../../context/CartContext'
import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      let total = 0
      cartList.forEach(product => {
        total += product.price * product.quantity
      })

      return (
        <div className="cart-summary-container">
          <h1 className="order-total">
            Order Total: <span className="total-bill">RS {total}/-</span>
          </h1>
          <p className="cart-list-items">{cartList.length} Items in cart</p>
          <button type="button" className="check-out-btn">
            Checkout
          </button>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
