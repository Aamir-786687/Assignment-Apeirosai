import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CartItems from "../components/CartItems";
import DeliveryDetails from "../components/DeliveryDetails";
import PromoCode from "../components/PromoCode";
import OrderSummary from "../components/OrderSummary";
import Products from "../components/Products";
import { ShoppingBag } from "lucide-react";

const CheckoutPage = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [promoCode, setPromoCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const [applyingPromo, setApplyingPromo] = useState(false);

  // Constants
  const DELIVERY_FEE = 5.99;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Check if we have items in localStorage
        const savedCart = localStorage.getItem("cartItems");

        // Fetch all products
        const response = await fetch(
          "https://fakestoreapi.com/products?limit=6"
        );
        const fetchedProducts = await response.json();
        setProducts(fetchedProducts);

        if (savedCart) {
          setCartItems(JSON.parse(savedCart));
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Load any saved discount from localStorage
  useEffect(() => {
    const savedDiscount = localStorage.getItem("discount");
    const savedPromoCode = localStorage.getItem("promoCode");

    if (savedDiscount) {
      setDiscount(parseFloat(savedDiscount));
    }

    if (savedPromoCode) {
      setPromoCode(savedPromoCode);
    }
  }, []);

  const addToCart = (product) => {
    const newItem = { ...product, quantity: 1 };
    const updatedCart = [...cartItems, newItem];
    setCartItems(updatedCart);
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));
  };

  const isInCart = (productId) => {
    return cartItems.some((item) => item.id === productId);
  };

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;

    const updatedCart = cartItems.map((item) =>
      item.id === id ? { ...item, quantity: newQuantity } : item
    );

    setCartItems(updatedCart);
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));
  };

  const removeItem = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));
  };

  const handleApplyPromo = (code) => {
    setApplyingPromo(true);

    // Simulate API call with timeout
    setTimeout(() => {
      if (code === "SAVE10") {
        setDiscount(10);
        localStorage.setItem("discount", "10");
        localStorage.setItem("promoCode", code);
      } else {
        setDiscount(0);
        localStorage.removeItem("discount");
        localStorage.removeItem("promoCode");
      }
      setApplyingPromo(false);
    }, 800);
  };

  const handlePlaceOrder = () => {
    // Save order summary to localStorage for confirmation page
    const orderSummary = {
      items: cartItems,
      subtotal: calculateSubtotal(),
      discount: discount,
      deliveryFee: DELIVERY_FEE,
      total: calculateTotal(),
      orderId: `ORD-${Math.floor(Math.random() * 1000000)}`,
      orderDate: new Date().toISOString(),
    };

    localStorage.setItem("orderSummary", JSON.stringify(orderSummary));

    // Navigate to confirmation page
    navigate("/confirmation");
  };

  const calculateSubtotal = () => {
    return cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  };

  const calculateTotal = () => {
    const subtotal = calculateSubtotal();
    const discountAmount = subtotal * (discount / 100);
    return subtotal - discountAmount + DELIVERY_FEE;
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-teal-500"></div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 flex items-center">
          <ShoppingBag className="mr-2 text-teal-500" size={28} />
          Checkout
        </h1>
        <p className="text-gray-600 mt-2">
          Review your order before completing purchase
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <CartItems
            items={cartItems}
            updateQuantity={updateQuantity}
            removeItem={removeItem}
          />

          <DeliveryDetails />

          <PromoCode
            promoCode={promoCode}
            setPromoCode={setPromoCode}
            handleApplyPromo={handleApplyPromo}
            discount={discount}
            isLoading={applyingPromo}
          />

          <Products
            products={products}
            addToCart={addToCart}
            isInCart={isInCart}
          />
        </div>

        <div className="lg:col-span-1">
          <OrderSummary
            subtotal={calculateSubtotal()}
            discount={discount}
            handlePlaceOrder={handlePlaceOrder}
            cartItems={cartItems}
            calculateSubtotal={calculateSubtotal}
          />
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
