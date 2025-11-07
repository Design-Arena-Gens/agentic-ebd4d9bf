'use client'

import { useState } from 'react'

interface Product {
  id: number
  name: string
  category: string
  price: number
  icon: string
}

interface CartItem extends Product {
  quantity: number
}

export default function Home() {
  const [cart, setCart] = useState<CartItem[]>([])
  const [showCart, setShowCart] = useState(false)

  const products: Product[] = [
    { id: 1, name: 'Classic Leather Boots', category: 'Men', price: 89.99, icon: '👞' },
    { id: 2, name: 'Running Sneakers', category: 'Men', price: 69.99, icon: '👟' },
    { id: 3, name: 'Elegant Heels', category: 'Women', price: 79.99, icon: '👠' },
    { id: 4, name: 'Casual Sandals', category: 'Women', price: 49.99, icon: '👡' },
    { id: 5, name: 'Sport Shoes', category: 'Kids', price: 39.99, icon: '👟' },
    { id: 6, name: 'School Shoes', category: 'Kids', price: 44.99, icon: '👞' },
    { id: 7, name: 'Formal Oxfords', category: 'Men', price: 99.99, icon: '👞' },
    { id: 8, name: 'Ballet Flats', category: 'Women', price: 54.99, icon: '🥿' },
  ]

  const addToCart = (product: Product) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id)
      if (existingItem) {
        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }
      return [...prevCart, { ...product, quantity: 1 }]
    })
  }

  const removeFromCart = (productId: number) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId))
  }

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)
  }

  const getCartCount = () => {
    return cart.reduce((count, item) => count + item.quantity, 0)
  }

  return (
    <>
      <header className="header">
        <div className="header-content">
          <a href="/" className="logo">Gupta Footwear</a>
          <nav className="nav">
            <a href="#categories">Categories</a>
            <a href="#products">Products</a>
            <a href="#features">Features</a>
            <button className="cart-btn" onClick={() => setShowCart(true)}>
              Cart ({getCartCount()})
            </button>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="container">
            <h1>Step Into Style</h1>
            <p>Premium quality footwear for every occasion</p>
            <a href="#products" className="cta-btn">Shop Now</a>
          </div>
        </section>

        <section id="categories" className="categories">
          <div className="container">
            <h2>Shop by Category</h2>
            <div className="category-grid">
              <div className="category-card">
                <div className="category-icon">👔</div>
                <h3>Men's Collection</h3>
                <p>Formal & casual shoes for men</p>
              </div>
              <div className="category-card">
                <div className="category-icon">👗</div>
                <h3>Women's Collection</h3>
                <p>Elegant & trendy footwear</p>
              </div>
              <div className="category-card">
                <div className="category-icon">🎒</div>
                <h3>Kids Collection</h3>
                <p>Comfortable shoes for little ones</p>
              </div>
            </div>
          </div>
        </section>

        <section id="products" className="products">
          <div className="container">
            <h2>Featured Products</h2>
            <div className="product-grid">
              {products.map(product => (
                <div key={product.id} className="product-card">
                  <div className="product-image">{product.icon}</div>
                  <div className="product-info">
                    <h3>{product.name}</h3>
                    <p className="product-category">{product.category}</p>
                    <p className="product-price">${product.price}</p>
                    <button
                      className="add-to-cart-btn"
                      onClick={() => addToCart(product)}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="features" className="features">
          <div className="container">
            <h2>Why Choose Gupta Footwear?</h2>
            <div className="feature-grid">
              <div className="feature-card">
                <div className="feature-icon">✨</div>
                <h3>Premium Quality</h3>
                <p>Handcrafted with finest materials</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🚚</div>
                <h3>Free Shipping</h3>
                <p>On orders above $50</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">↩️</div>
                <h3>Easy Returns</h3>
                <p>30-day return policy</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">💳</div>
                <h3>Secure Payment</h3>
                <p>100% secure transactions</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>Gupta Footwear</h3>
              <p>Your trusted destination for quality footwear since 1995.</p>
            </div>
            <div className="footer-section">
              <h3>Quick Links</h3>
              <ul>
                <li><a href="#categories">Categories</a></li>
                <li><a href="#products">Products</a></li>
                <li><a href="#features">About Us</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h3>Customer Service</h3>
              <ul>
                <li><a href="#help">Help Center</a></li>
                <li><a href="#shipping">Shipping Info</a></li>
                <li><a href="#returns">Returns</a></li>
                <li><a href="#faq">FAQ</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h3>Contact Us</h3>
              <ul>
                <li>Email: info@guptafootwear.com</li>
                <li>Phone: +1 (555) 123-4567</li>
                <li>Address: 123 Shoe Street, NY</li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2025 Gupta Footwear. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {showCart && (
        <div className="modal-overlay" onClick={() => setShowCart(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h2>Shopping Cart</h2>
            {cart.length === 0 ? (
              <div className="empty-cart">
                <p>Your cart is empty</p>
              </div>
            ) : (
              <>
                {cart.map(item => (
                  <div key={item.id} className="cart-item">
                    <div className="cart-item-info">
                      <h4>{item.name}</h4>
                      <p>Quantity: {item.quantity}</p>
                      <p className="cart-item-price">${(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                    <button
                      className="remove-btn"
                      onClick={() => removeFromCart(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                ))}
                <div className="cart-total">
                  <h3>Total: ${getTotalPrice()}</h3>
                </div>
                <button className="checkout-btn">
                  Proceed to Checkout
                </button>
              </>
            )}
            <button
              className="close-modal-btn"
              onClick={() => setShowCart(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  )
}
