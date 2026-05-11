import { useState, useEffect } from 'react';

// ==================== DATA ====================

const categories = [
  {
    id: 1,
    name: 'Baby',
    description: 'Cozy & Cute',
    count: '120+ items',
    gradient: 'from-[#FFE4D4] to-[#FFF0E6]',
    iconColor: '#FFB38A',
    icon: 'ri-heart-pulse-line',
  },
  {
    id: 2,
    name: 'Boys',
    description: 'Cool & Comfy',
    count: '200+ items',
    gradient: 'from-[#D4E8FF] to-[#E6F2FF]',
    iconColor: '#9AD4FF',
    icon: 'ri-gamepad-line',
  },
  {
    id: 3,
    name: 'Girls',
    description: 'Pretty & Playful',
    count: '250+ items',
    gradient: 'from-[#FFE4F0] to-[#FFF4F8]',
    iconColor: '#FFB3D1',
    icon: 'ri-magic-line',
  },
  {
    id: 4,
    name: 'Accessories',
    description: 'Fun Extras',
    count: '80+ items',
    gradient: 'from-[#E4FFE4] to-[#F0FFF0]',
    iconColor: '#A8E6A8',
    icon: 'ri-star-smile-line',
  },
];

const products = [
  {
    id: 1,
    name: 'Rainbow Stripe Dress',
    price: '$24.99',
    originalPrice: '$34.99',
    badge: 'Sale',
    badgeColor: 'bg-[#FF9B9B]',
    image: '/images/product-dress.jpg',
    category: 'Girls',
    rating: 5,
  },
  {
    id: 2,
    name: 'Dino Explorer Set',
    price: '$29.99',
    originalPrice: null,
    badge: 'New',
    badgeColor: 'bg-[#A8D8EA]',
    image: '/images/product-dino.jpg',
    category: 'Boys',
    rating: 5,
  },
  {
    id: 3,
    name: 'Cozy Bear Onesie',
    price: '$19.99',
    originalPrice: null,
    badge: 'Hot',
    badgeColor: 'bg-[#FFD4A3]',
    image: '/images/product-onesie.jpg',
    category: 'Baby',
    rating: 5,
  },
  {
    id: 4,
    name: 'Floral Garden Top',
    price: '$18.99',
    originalPrice: '$24.99',
    badge: 'Sale',
    badgeColor: 'bg-[#FF9B9B]',
    image: '/images/product-floral.jpg',
    category: 'Girls',
    rating: 5,
  },
  {
    id: 5,
    name: 'Rocket Adventure PJs',
    price: '$22.99',
    originalPrice: null,
    badge: 'New',
    badgeColor: 'bg-[#A8D8EA]',
    image: '/images/product-pajama.jpg',
    category: 'Boys',
    rating: 5,
  },
  {
    id: 6,
    name: 'Sunshine Romper',
    price: '$16.99',
    originalPrice: null,
    badge: null,
    badgeColor: '',
    image: '/images/product-romper.jpg',
    category: 'Baby',
    rating: 5,
  },
];

const reviews = [
  {
    id: 1,
    name: 'Sarah Mitchell',
    role: 'Mom of 3',
    childAge: 'Kids: 1, 3 & 5 years',
    initials: 'SM',
    bgColor: 'from-[#FFE4F0] to-[#FFF4F8]',
    accentColor: '#FFB3D1',
    text: 'TinyTrends has completely changed how I shop for my kids! The quality is amazing and the designs are absolutely adorable. My kids love picking out their outfits every morning!',
    rating: 5,
  },
  {
    id: 2,
    name: 'Emily Rodriguez',
    role: 'Mom of twins',
    childAge: 'Kids: 2 years',
    initials: 'ER',
    bgColor: 'from-[#E4F4FF] to-[#F0F8FF]',
    accentColor: '#9AD4FF',
    text: "I can't say enough good things about this store. The twinning outfits are just perfect and the fabric is so gentle on my babies' skin. Plus the prices are very reasonable!",
    rating: 5,
  },
  {
    id: 3,
    name: 'Maria Chen',
    role: 'First-time mom',
    childAge: 'Baby: 8 months',
    initials: 'MC',
    bgColor: 'from-[#E4FFE4] to-[#F0FFF0]',
    accentColor: '#A8E6A8',
    text: 'The quality of these clothes is exceptional! Everything washes beautifully and stays soft. The organic cotton onesies are my absolute favorite for my little one.',
    rating: 5,
  },
  {
    id: 4,
    name: 'Jessica Thompson',
    role: 'Mom of 2',
    childAge: 'Kids: 4 & 6 years',
    initials: 'JT',
    bgColor: 'from-[#FFF4E4] to-[#FFFAF4]',
    accentColor: '#FFD99A',
    text: "My kids actually get excited about getting dressed now! The playful designs and comfortable fits make mornings so much easier. Definitely our go-to kids clothing store.",
    rating: 5,
  },
  {
    id: 5,
    name: 'Amanda Foster',
    role: 'Mom of 1',
    childAge: 'Toddler: 18 months',
    initials: 'AF',
    bgColor: 'from-[#F0E4FF] to-[#F8F4FF]',
    accentColor: '#D1B3FF',
    text: 'Best kids clothing store ever! The sizing is accurate, shipping was fast, and everything arrived beautifully packaged!',
    rating: 5,
  },
  {
    id: 6,
    name: 'Jennifer Park',
    role: 'Mom of 2',
    childAge: 'Kids: 2 & 4 years',
    initials: 'JP',
    bgColor: 'from-[#FFE4F0] to-[#FFF4F8]',
    accentColor: '#FFB3D1',
    text: 'The organic cotton is so soft! My kids have sensitive skin and these clothes are perfect. Will definitely order again!',
    rating: 5,
  },
];

// ==================== NAVBAR ====================

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-[#FF9B9B] to-[#FFB5B5] rounded-full flex items-center justify-center shadow-lg">
              <i className="ri-t-shirt-air-line text-white text-xl"></i>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-[#6B4E9C] font-fredoka leading-tight">
                TinyTrends
              </h1>
              <p className="text-xs text-[#8B6E7C] font-patrick">
                Dress your little stars ✨
              </p>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#shop"
              className="text-gray-600 hover:text-[#FF9B9B] transition-colors font-medium"
            >
              Shop
            </a>
            <a
              href="#about"
              className="text-gray-600 hover:text-[#FF9B9B] transition-colors font-medium"
            >
              About
            </a>
            <a
              href="#reviews"
              className="text-gray-600 hover:text-[#FF9B9B] transition-colors font-medium"
            >
              Reviews
            </a>
            <a
              href="#contact"
              className="text-gray-600 hover:text-[#FF9B9B] transition-colors font-medium"
            >
              Contact
            </a>
          </div>

          {/* Cart & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <button className="relative p-2 hover:bg-[#FFF0F0] rounded-full transition-colors">
              <i className="ri-shopping-cart-2-line text-xl text-[#6B4E9C]"></i>
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#FF9B9B] text-white text-xs rounded-full flex items-center justify-center font-bold">
                3
              </span>
            </button>
            <button
              className="md:hidden p-2 hover:bg-[#FFF0F0] rounded-full transition-colors"
              onClick={() => setIsOpen(!isOpen)}
            >
              <i
                className={`text-xl text-[#6B4E9C] ${isOpen ? 'ri-close-line' : 'ri-menu-3-line'}`}
              ></i>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-[#FFE4D4]">
            <div className="flex flex-col gap-3 pt-4">
              <a
                href="#shop"
                className="text-gray-600 hover:text-[#FF9B9B] transition-colors font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                Shop
              </a>
              <a
                href="#about"
                className="text-gray-600 hover:text-[#FF9B9B] transition-colors font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                About
              </a>
              <a
                href="#reviews"
                className="text-gray-600 hover:text-[#FF9B9B] transition-colors font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                Reviews
              </a>
              <a
                href="#contact"
                className="text-gray-600 hover:text-[#FF9B9B] transition-colors font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

// ==================== HERO ====================

function Hero() {
  return (
    <section className="relative min-h-screen bg-[#FFFBF5] overflow-hidden pt-20">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-[5%] w-20 h-20 bg-[#FFD4A3]/30 rounded-full blur-xl animate-float"></div>
        <div className="absolute top-40 right-[8%] w-32 h-32 bg-[#A8D8EA]/20 rounded-full blur-2xl animate-float-slow"></div>
        <div className="absolute bottom-32 left-[10%] w-24 h-24 bg-[#FF9B9B]/20 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-20 right-[15%] w-16 h-16 bg-[#B4E7CE]/30 rounded-full blur-lg animate-float-slow"></div>

        {/* Floating decorative icons */}
        <div className="absolute top-32 left-[20%] text-4xl animate-wiggle opacity-20">
          ⭐
        </div>
        <div className="absolute top-60 right-[25%] text-3xl animate-float opacity-20">
          🌈
        </div>
        <div className="absolute bottom-40 left-[30%] text-3xl animate-float-slow opacity-20">
          💝
        </div>
        <div className="absolute bottom-60 right-[20%] text-4xl animate-wiggle opacity-20">
          🦋
        </div>

        {/* Large decorative blobs */}
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-gradient-to-br from-[#FFE4F0] to-transparent rounded-full opacity-40"></div>
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-gradient-to-tr from-[#D4E8FF] to-transparent rounded-full opacity-30"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <div className="inline-block mb-6 transform -rotate-2">
              <div className="bg-gradient-to-r from-[#FF9B9B] to-[#FFD4A3] text-white px-5 py-2 rounded-full text-sm font-bold shadow-md">
                🎉 New Summer Collection!
              </div>
            </div>

            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#6B4E9C] mb-6 font-fredoka leading-tight">
              Adorable Clothes for{' '}
              <span className="text-[#FF9B9B]">Happy Kids</span>
            </h2>

            <p className="text-lg md:text-xl text-[#8B6E7C] mb-8 leading-relaxed max-w-lg mx-auto lg:mx-0">
              Discover our collection of organic cotton clothing designed with
              love. Comfortable, sustainable, and irresistibly cute! 🌟
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#shop"
                className="bg-gradient-to-r from-[#FF9B9B] to-[#FFB5B5] text-white px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all inline-flex items-center justify-center gap-2"
              >
                <span>Shop Now</span>
                <i className="ri-arrow-right-line"></i>
              </a>
              <a
                href="#about"
                className="border-2 border-[#6B4E9C] text-[#6B4E9C] px-8 py-4 rounded-full font-bold hover:bg-[#6B4E9C] hover:text-white transition-all inline-flex items-center justify-center gap-2"
              >
                <span>Our Story</span>
                <i className="ri-heart-line"></i>
              </a>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-6 mt-10 justify-center lg:justify-start">
              <div className="flex items-center gap-2 text-sm text-[#8B6E7C]">
                <div className="w-8 h-8 bg-[#B4E7CE] rounded-full flex items-center justify-center">
                  <i className="ri-leaf-line text-[#4CAF50] text-sm"></i>
                </div>
                <span>100% Organic</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-[#8B6E7C]">
                <div className="w-8 h-8 bg-[#FFD4A3] rounded-full flex items-center justify-center">
                  <i className="ri-shield-check-line text-[#E6A040] text-sm"></i>
                </div>
                <span>Safe Fabrics</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-[#8B6E7C]">
                <div className="w-8 h-8 bg-[#A8D8EA] rounded-full flex items-center justify-center">
                  <i className="ri-truck-line text-[#4AA8C7] text-sm"></i>
                </div>
                <span>Free Shipping</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="absolute -top-8 -left-8 w-64 h-64 bg-[#FFD4A3]/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-[#A8D8EA]/20 rounded-full blur-3xl"></div>

            {/* Main image with decorative frame */}
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full bg-gradient-to-br from-[#FF9B9B] to-[#FFD4A3] rounded-3xl transform rotate-3"></div>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/images/hero-kids.jpg"
                  alt="Happy kids in colorful clothes"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#6B4E9C]/20 to-transparent"></div>
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl transform -rotate-3 animate-bounce-gentle">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#FF9B9B] to-[#FFB5B5] rounded-full flex items-center justify-center">
                    <i className="ri-star-fill text-white"></i>
                  </div>
                  <div>
                    <p className="font-bold text-[#6B4E9C] text-sm font-fredoka">
                      4.9/5
                    </p>
                    <p className="text-xs text-gray-500">500+ Reviews</p>
                  </div>
                </div>
              </div>

              {/* Floating hearts */}
              <div className="absolute -top-4 -right-4 bg-white rounded-full p-3 shadow-lg animate-bounce-gentle">
                <span className="text-2xl">❤️</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" className="w-full">
          <path
            fill="#F0FAF5"
            d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
          />
        </svg>
      </div>
    </section>
  );
}

// ==================== CATEGORIES ====================

function Categories() {
  return (
    <section id="shop" className="py-24 px-6 bg-[#F0FAF5] relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4 transform -rotate-2">
            <span className="bg-gradient-to-r from-[#A8D8EA] to-[#B4E7CE] text-[#6B4E9C] px-5 py-2 rounded-full text-sm font-bold shadow-md inline-block">
              ✨ Browse Collection
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#6B4E9C] mb-4 font-fredoka">
            Shop by Category
          </h2>
          <p className="text-lg text-[#8B6E7C] max-w-2xl mx-auto">
            Find the perfect outfit for your little one! From newborns to
            adventurous toddlers, we've got something special for every child.
          </p>
        </div>

        {/* Category Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((cat, index) => (
            <div
              key={cat.id}
              className={`group cursor-pointer transform hover:scale-105 transition-all duration-300`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div
                className={`bg-gradient-to-br ${cat.gradient} rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow text-center relative overflow-hidden`}
              >
                {/* Decorative circle */}
                <div className="absolute -top-8 -right-8 w-32 h-32 bg-white/30 rounded-full blur-xl group-hover:scale-125 transition-transform duration-500"></div>

                <div className="relative z-10">
                  <div
                    className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center shadow-md"
                    style={{ backgroundColor: cat.iconColor + '40' }}
                  >
                    <i
                      className={`${cat.icon} text-3xl`}
                      style={{ color: cat.iconColor }}
                    ></i>
                  </div>

                  <h3 className="text-2xl font-bold text-[#6B4E9C] mb-2 font-fredoka">
                    {cat.name}
                  </h3>
                  <p className="text-[#8B6E7C] mb-3">{cat.description}</p>
                  <span className="inline-block bg-white/60 text-[#6B4E9C] text-sm font-semibold px-4 py-1 rounded-full">
                    {cat.count}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ==================== FEATURED PRODUCTS ====================

function Products() {
  return (
    <section className="py-24 px-6 bg-[#FFFBF5] relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 text-5xl opacity-10">👕</div>
        <div className="absolute top-40 right-20 text-4xl opacity-10">👗</div>
        <div className="absolute bottom-20 left-40 text-4xl opacity-10">🧸</div>
        <div className="absolute bottom-40 right-10 text-5xl opacity-10">🎀</div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4 transform rotate-1">
            <span className="bg-gradient-to-r from-[#FF9B9B] to-[#FFD4A3] text-white px-5 py-2 rounded-full text-sm font-bold shadow-md inline-block">
              🔥 Popular Picks
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#6B4E9C] mb-4 font-fredoka">
            Our Best Sellers
          </h2>
          <p className="text-lg text-[#8B6E7C] max-w-2xl mx-auto">
            Parents' favorites that kids can't stop wearing! Tried, tested, and
            loved by thousands of families.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Product Image */}
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {product.badge && (
                  <span
                    className={`absolute top-4 left-4 ${product.badgeColor} text-white text-xs font-bold px-3 py-1 rounded-full shadow-md`}
                  >
                    {product.badge}
                  </span>
                )}
                {/* Quick action overlay */}
                <div className="absolute inset-0 bg-[#6B4E9C]/0 group-hover:bg-[#6B4E9C]/10 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <button className="bg-white text-[#6B4E9C] px-6 py-2 rounded-full font-bold shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    Quick View
                  </button>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(product.rating)].map((_, i) => (
                    <i key={i} className="ri-star-fill text-sm text-[#FFD4A3]"></i>
                  ))}
                </div>
                <span className="text-xs text-[#8B6E7C] bg-[#F5F0FF] px-2 py-1 rounded-full">
                  {product.category}
                </span>
                <h3 className="text-lg font-bold text-[#4A3428] mt-2 mb-2 font-fredoka">
                  {product.name}
                </h3>
                <div className="flex items-center gap-3">
                  <span className="text-xl font-bold text-[#FF9B9B]">
                    {product.price}
                  </span>
                  {product.originalPrice && (
                    <span className="text-sm text-gray-400 line-through">
                      {product.originalPrice}
                    </span>
                  )}
                </div>
                <button className="mt-4 w-full bg-gradient-to-r from-[#6B4E9C] to-[#8B6EB4] text-white py-3 rounded-full font-bold hover:from-[#FF9B9B] hover:to-[#FFB5B5] transition-all duration-300 flex items-center justify-center gap-2">
                  <i className="ri-shopping-cart-2-line"></i>
                  <span>Add to Cart</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ==================== REVIEWS ====================

function Reviews() {
  return (
    <section
      id="reviews"
      className="py-24 px-6 bg-gradient-to-br from-[#F5F0FF] to-[#FFF5F5] relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 text-5xl opacity-10">💬</div>
        <div className="absolute top-40 right-20 text-4xl opacity-10">⭐</div>
        <div className="absolute bottom-20 left-40 text-4xl opacity-10">💝</div>
        <div className="absolute bottom-40 right-10 text-5xl opacity-10">🌟</div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4 transform -rotate-1">
            <span className="bg-gradient-to-r from-[#FFD4A3] to-[#FF9B9B] text-white px-5 py-2 rounded-full text-sm font-bold shadow-md inline-block">
              💕 Parent Love
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#6B4E9C] mb-4 font-fredoka">
            What Parents Say
          </h2>
          <p className="text-lg text-[#8B6E7C] max-w-2xl mx-auto">
            Don't just take our word for it - hear from the amazing families who
            love TinyTrends!
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {reviews.map((review) => (
            <div
              key={review.id}
              className={`bg-gradient-to-br ${review.bgColor} rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden group`}
            >
              <div className="absolute -top-8 -right-8 w-24 h-24 bg-white/40 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>

              <div className="relative z-10">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <i key={i} className="ri-star-fill text-lg text-[#FFD4A3]"></i>
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-gray-600 text-sm leading-relaxed mb-5 min-h-[72px]">
                  "{review.text}"
                </p>

                {/* Reviewer Info */}
                <div className="flex items-center gap-3 pt-4 border-t border-white/50">
                  <div
                    className="w-11 h-11 rounded-full overflow-hidden border-2 border-white shadow-md flex-shrink-0 flex items-center justify-center font-bold text-white"
                    style={{ backgroundColor: review.accentColor }}
                  >
                    {review.initials}
                  </div>
                  <div>
                    <h4 className="font-bold text-[#6B4E9C] text-sm font-fredoka">
                      {review.name}
                    </h4>
                    <p className="text-xs text-gray-500">{review.childAge}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-4">
          <div className="bg-white/80 backdrop-blur-sm px-5 py-3 rounded-full shadow-md flex items-center gap-3 hover:shadow-lg transition-shadow">
            <div className="w-9 h-9 bg-gradient-to-br from-[#FFE4D4] to-[#FFF0E6] rounded-full flex items-center justify-center">
              <i className="ri-group-fill text-[#FF9B9B]"></i>
            </div>
            <div>
              <p className="font-bold text-[#6B4E9C] text-sm font-fredoka">
                500+
              </p>
              <p className="text-xs text-gray-500">Happy Families</p>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm px-5 py-3 rounded-full shadow-md flex items-center gap-3 hover:shadow-lg transition-shadow">
            <div className="w-9 h-9 bg-gradient-to-br from-[#D4E8FF] to-[#E6F2FF] rounded-full flex items-center justify-center">
              <i className="ri-star-fill text-[#9AD4FF]"></i>
            </div>
            <div>
              <p className="font-bold text-[#6B4E9C] text-sm font-fredoka">
                4.9/5
              </p>
              <p className="text-xs text-gray-500">Average Rating</p>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm px-5 py-3 rounded-full shadow-md flex items-center gap-3 hover:shadow-lg transition-shadow">
            <div className="w-9 h-9 bg-gradient-to-br from-[#FFE4F0] to-[#FFF4F8] rounded-full flex items-center justify-center">
              <i className="ri-heart-fill text-[#FFB3D1]"></i>
            </div>
            <div>
              <p className="font-bold text-[#6B4E9C] text-sm font-fredoka">
                98%
              </p>
              <p className="text-xs text-gray-500">Would Recommend</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ==================== ABOUT ====================

function About() {
  return (
    <section
      id="about"
      className="py-24 px-6 bg-[#FFF9E6] relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-20 left-10">
          <i className="ri-scissors-line text-6xl text-[#6B4E9C]"></i>
        </div>
        <div className="absolute top-40 right-20">
          <i className="ri-t-shirt-line text-5xl text-[#FF9B9B]"></i>
        </div>
        <div className="absolute bottom-20 left-40">
          <i className="ri-heart-fill text-4xl text-[#FFD4A3]"></i>
        </div>
        <div className="absolute bottom-40 right-10">
          <i className="ri-star-fill text-5xl text-[#A8D8EA]"></i>
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="inline-block mb-8 transform -rotate-3">
              <div className="border-2 border-dashed border-[#8B6E7C] px-6 py-2 rounded-lg">
                <span className="text-sm text-[#8B6E7C] font-bold">
                  /OUR STORY
                </span>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -top-8 -left-8 w-64 h-64 bg-[#FFD4A3]/20 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-[#A8D8EA]/20 rounded-full blur-3xl"></div>

              <div className="relative rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
                <img
                  src="/images/about-story.jpg"
                  alt="Our Story"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#6B4E9C]/30 to-transparent"></div>
              </div>

              {/* Floating stat card */}
              <div className="absolute -bottom-8 -right-8 bg-white rounded-2xl p-6 shadow-xl transform rotate-3">
                <div className="text-center">
                  <div className="text-4xl font-bold text-[#FF9B9B] mb-1 font-fredoka">
                    10K+
                  </div>
                  <div className="text-sm text-gray-600">Happy Kids</div>
                </div>
              </div>
            </div>

            {/* Team info */}
            <div className="mt-12 flex items-center gap-6">
              <div className="text-sm text-gray-400">
                <span>• Est. 2020</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  {['🌸', '🌺', '🌻', '🌷'].map((emoji, i) => (
                    <div
                      key={i}
                      className="w-14 h-14 rounded-full overflow-hidden border-3 border-white shadow-md flex items-center justify-center bg-gradient-to-br from-[#FFE4F0] to-[#FFF4F8] text-xl"
                    >
                      {emoji}
                    </div>
                  ))}
                </div>
                <div className="text-sm text-[#4A3428] font-medium">
                  Founded by parents,
                  <br />
                  designed for kids
                </div>
              </div>
            </div>
          </div>

          {/* Text Side */}
          <div>
            <h2 className="text-5xl md:text-6xl font-bold text-[#6B4E9C] mb-8 font-fredoka leading-tight">
              Made with Love for Little Ones
            </h2>

            <div className="space-y-6 text-lg text-[#4A3428] leading-relaxed font-light">
              <p>
                TinyTrends was born from a simple belief: every child deserves
                clothing that's as special as they are. As parents ourselves, we
                understand the importance of comfort, quality, and style.
              </p>
              <p>
                We carefully select only the softest, most sustainable fabrics
                that are gentle on delicate skin. Each piece is designed with
                both parents and kids in mind – easy to wear, easy to care for,
                and absolutely adorable.
              </p>
              <p>
                Our mission goes beyond just selling clothes. We're building a
                community of families who value quality, sustainability, and the
                joy of watching their little ones grow in comfort and style.
              </p>
              <p>
                From newborns to active toddlers, we're here to dress your
                children in pieces that celebrate their unique personalities
                while giving you peace of mind about what they're wearing.
              </p>
            </div>

            {/* Feature Grid */}
            <div className="grid grid-cols-2 gap-6 mt-12">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#B4E7CE] rounded-full flex items-center justify-center flex-shrink-0">
                  <i className="ri-leaf-line text-2xl text-white"></i>
                </div>
                <div>
                  <h4 className="font-bold text-[#6B4E9C] mb-1">
                    100% Organic
                  </h4>
                  <p className="text-sm text-gray-600">Sustainable materials</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#FFD4A3] rounded-full flex items-center justify-center flex-shrink-0">
                  <i className="ri-heart-line text-2xl text-white"></i>
                </div>
                <div>
                  <h4 className="font-bold text-[#6B4E9C] mb-1">
                    Made with Care
                  </h4>
                  <p className="text-sm text-gray-600">Quality craftsmanship</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#FF9B9B] rounded-full flex items-center justify-center flex-shrink-0">
                  <i className="ri-shield-check-line text-2xl text-white"></i>
                </div>
                <div>
                  <h4 className="font-bold text-[#6B4E9C] mb-1">
                    Safety First
                  </h4>
                  <p className="text-sm text-gray-600">Tested & certified</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#A8D8EA] rounded-full flex items-center justify-center flex-shrink-0">
                  <i className="ri-truck-line text-2xl text-white"></i>
                </div>
                <div>
                  <h4 className="font-bold text-[#6B4E9C] mb-1">
                    Fast Shipping
                  </h4>
                  <p className="text-sm text-gray-600">Delivered with love</p>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <button className="bg-gradient-to-r from-[#FF9B9B] to-[#FFB5B5] text-white px-10 py-4 rounded-full font-bold shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all whitespace-nowrap">
                <div className="flex items-center gap-3">
                  <span>Learn More About Us</span>
                  <i className="ri-arrow-right-line"></i>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ==================== FOOTER ====================

function Footer() {
  const [email, setEmail] = useState('');

  return (
    <footer
      id="contact"
      className="bg-gradient-to-br from-[#B4E7CE] to-[#A8D8EA] pt-20 pb-8 px-6"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          {/* Shop Column */}
          <div>
            <h3 className="text-xl font-bold text-[#6B4E9C] mb-4 font-fredoka">
              Shop
            </h3>
            <div className="w-20 h-1 bg-[#FF9B9B] rounded-full mb-6"></div>
            <ul className="space-y-3">
              {['Boys', 'Girls', 'Babies', 'Accessories'].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="flex items-center gap-2 text-gray-700 hover:text-[#FF9B9B] transition-colors"
                  >
                    <i className="ri-star-fill text-xs text-[#FFD4A3]"></i>
                    <span>{item}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Help Column */}
          <div>
            <h3 className="text-xl font-bold text-[#6B4E9C] mb-4 font-fredoka">
              Help
            </h3>
            <div className="w-20 h-1 bg-[#FF9B9B] rounded-full mb-6"></div>
            <ul className="space-y-3">
              {['FAQs', 'Shipping', 'Returns', 'Size Guide'].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="flex items-center gap-2 text-gray-700 hover:text-[#FF9B9B] transition-colors"
                  >
                    <i className="ri-heart-fill text-xs text-[#FF9B9B]"></i>
                    <span>{item}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* About Column */}
          <div>
            <h3 className="text-xl font-bold text-[#6B4E9C] mb-4 font-fredoka">
              About
            </h3>
            <div className="w-20 h-1 bg-[#FF9B9B] rounded-full mb-6"></div>
            <ul className="space-y-3">
              {['Our Story', 'Blog', 'Careers', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="flex items-center gap-2 text-gray-700 hover:text-[#FF9B9B] transition-colors"
                  >
                    <i className="ri-arrow-right-s-line text-sm text-[#A8D8EA]"></i>
                    <span>{item}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Column */}
          <div>
            <h3 className="text-xl font-bold text-[#6B4E9C] mb-4 font-fredoka">
              Connect
            </h3>
            <div className="w-20 h-1 bg-[#FF9B9B] rounded-full mb-6"></div>
            <p className="text-gray-700 mb-4 text-sm">
              Join our newsletter for exclusive offers and updates!
            </p>
            <div className="flex gap-2 mb-6">
              <input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-4 py-2 rounded-full border-2 border-white/50 bg-white/50 backdrop-blur-sm focus:outline-none focus:border-[#FF9B9B] transition-colors text-sm"
              />
              <button className="bg-[#FF9B9B] text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-[#FF7B7B] transition-colors flex-shrink-0">
                <i className="ri-send-plane-fill"></i>
              </button>
            </div>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 bg-gradient-to-br from-[#FF9B9B] to-[#FFB5B5] rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform"
              >
                <i className="ri-instagram-line"></i>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gradient-to-br from-[#A8D8EA] to-[#C8E8F5] rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform"
              >
                <i className="ri-facebook-fill"></i>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gradient-to-br from-[#FF9B9B] to-[#FFB5B5] rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform"
              >
                <i className="ri-pinterest-fill"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t-2 border-white/30 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-4xl font-bold text-[#6B4E9C] mb-2 font-fredoka">
                TinyTrends
              </h2>
              <p className="text-lg text-gray-700 font-patrick mb-2">
                Dress your little stars ✨
              </p>
              <div className="flex items-center gap-3">
                <div className="w-16 h-1 bg-[#FF9B9B] rounded-full"></div>
                <i className="ri-heart-fill text-[#FF9B9B]"></i>
              </div>
              <p className="text-xs text-gray-600 mt-2">
                Made with love for little ones
              </p>
            </div>

            <div className="text-center md:text-right">
              <p className="text-sm text-gray-600 mb-2">
                © 2024 TinyTrends. All rights reserved.
              </p>
              <div className="flex items-center justify-center md:justify-end gap-4 text-xs text-gray-500">
                <a
                  href="#"
                  className="hover:text-[#FF9B9B] transition-colors"
                >
                  Privacy Policy
                </a>
                <span>•</span>
                <a
                  href="#"
                  className="hover:text-[#FF9B9B] transition-colors"
                >
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ==================== MAIN APP ====================

export default function App() {
  return (
    <div className="min-h-screen bg-[#FFFBF5]">
      <Navbar />
      <Hero />
      <Categories />
      <Products />
      <Reviews />
      <About />
      <Footer />
    </div>
  );
}
