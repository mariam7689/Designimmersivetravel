import { motion } from "motion/react";
import { ShoppingCart, Heart, Star } from "lucide-react";
import { useState } from "react";

export function ShopPage() {
  const [cart, setCart] = useState<string[]>([]);

  const products = [
    {
      id: "1",
      name: "Desertia Explorer T-Shirt",
      price: 29.99,
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400",
      category: "Clothing",
      rating: 4.8,
      reviews: 124,
    },
    {
      id: "2",
      name: "Desert Sunset Hoodie",
      price: 54.99,
      image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400",
      category: "Clothing",
      rating: 4.9,
      reviews: 89,
    },
    {
      id: "3",
      name: "Stainless Steel Water Bottle",
      price: 24.99,
      image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400",
      category: "Accessories",
      rating: 4.7,
      reviews: 203,
    },
    {
      id: "4",
      name: "Desertia Logo Sticker Pack",
      price: 9.99,
      image: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=400",
      category: "Accessories",
      rating: 4.6,
      reviews: 156,
    },
    {
      id: "5",
      name: "Desert Adventure Travel Kit",
      price: 79.99,
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400",
      category: "Travel Gear",
      rating: 4.9,
      reviews: 67,
    },
    {
      id: "6",
      name: "Bedouin Pattern Tote Bag",
      price: 34.99,
      image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=400",
      category: "Accessories",
      rating: 4.8,
      reviews: 112,
    },
  ];

  const addToCart = (productId: string) => {
    setCart([...cart, productId]);
  };

  const removeFromCart = (productId: string) => {
    setCart(cart.filter((id) => id !== productId));
  };

  const isInCart = (productId: string) => cart.includes(productId);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#2B2520] via-[#1a1410] to-black pt-24 pb-12">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold text-white mb-4">
            Desertia <span className="text-[#D4A574]">Shop</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Premium merchandise inspired by the beauty of Egypt's deserts
          </p>
        </motion.div>

        {/* Cart Summary */}
        {cart.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-[#D4A574]/20 backdrop-blur-md border border-[#D4A574]/30 rounded-xl p-4 mb-8 flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <ShoppingCart className="w-6 h-6 text-[#D4A574]" />
              <span className="text-white font-semibold">
                {cart.length} {cart.length === 1 ? "item" : "items"} in cart
              </span>
            </div>
            <button className="bg-[#D4A574] text-black px-6 py-2 rounded-lg font-semibold hover:bg-[#C17D4A] transition-colors">
              View Cart
            </button>
          </motion.div>
        )}

        {/* Products Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-2xl border border-white/10 hover:border-[#D4A574]/50 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-[#D4A574]/20"
            >
              {/* Product Image */}
              <div className="relative h-64 overflow-hidden bg-black/20">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <button className="absolute top-3 right-3 bg-black/50 hover:bg-black/70 p-2 rounded-full transition-colors">
                  <Heart className="w-5 h-5 text-white" />
                </button>
                <div className="absolute bottom-3 left-3 bg-[#D4A574] text-black px-3 py-1 rounded-full text-sm font-semibold">
                  {product.category}
                </div>
              </div>

              {/* Product Info */}
              <div className="p-5">
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#D4A574] transition-colors">
                  {product.name}
                </h3>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-[#D4A574] text-[#D4A574]" />
                    <span className="text-white font-semibold text-sm">{product.rating}</span>
                  </div>
                  <span className="text-gray-400 text-sm">({product.reviews} reviews)</span>
                </div>

                {/* Price & Actions */}
                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <div className="text-2xl font-bold text-[#D4A574]">${product.price}</div>
                  {isInCart(product.id) ? (
                    <button
                      onClick={() => removeFromCart(product.id)}
                      className="bg-red-500/20 text-red-400 px-4 py-2 rounded-lg font-semibold hover:bg-red-500/30 transition-colors"
                    >
                      Remove
                    </button>
                  ) : (
                    <button
                      onClick={() => addToCart(product.id)}
                      className="bg-[#D4A574] text-black px-4 py-2 rounded-lg font-semibold hover:bg-[#C17D4A] transition-colors flex items-center gap-2"
                    >
                      <ShoppingCart className="w-4 h-4" />
                      Add to Cart
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Gift Rewards Notice */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-12 bg-gradient-to-r from-[#D4A574]/20 to-[#C17D4A]/20 backdrop-blur-md rounded-2xl border border-[#D4A574]/30 p-8 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-3">Earn Rewards with Every Purchase!</h3>
          <p className="text-gray-300 mb-4">
            Get 10% back in reward points on all merchandise purchases
          </p>
          <button className="bg-[#D4A574] text-black px-6 py-3 rounded-xl font-semibold hover:bg-[#C17D4A] transition-colors">
            Learn More
          </button>
        </motion.div>
      </div>
    </div>
  );
}
