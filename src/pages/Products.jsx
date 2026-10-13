import { useState, useRef, useEffect, useCallback } from 'react';
import {
  ShoppingBag, Play, Pause, X,
  ChevronLeft, ChevronRight, Sparkles,
  Check, Maximize2, ArrowRight,
  AlertCircle, Trash2, Lock
} from 'lucide-react';
import { LINKS } from '../constants';

/* ─────────────────────────────────────────
   MINIMUM ORDER REQUIREMENT
   ───────────────────────────────────────── */
export const MIN_ORDER_AMOUNT = 599;

/* ─────────────────────────────────────────
   PRODUCT DEFINITIONS
   ───────────────────────────────────────── */
const PRODUCTS_DATA = [
  {
    id: 'bottle',
    hash: 'bottle',
    name: 'Blue Glass Water Bottle',
    price: 599,


    eyebrow: '💧 Inner Reset',
    tag: 'Drink Your Intention.',
    lead1: 'A 21-day water ritual focused on four areas of your life.',
    pills: ['HEALTH', 'RELATIONSHIPS', 'CAREER', 'MONEY'],
    lead2: 'Fill your bottle, choose your intention, affirm, practice Ho\'oponopono and drink mindfully.',
    steps: ['Fill.', 'Intend.', 'Affirm.', 'Sip.', 'Act.'],
    features: [
      'Blue represents calm, clarity and emotional balance.',
      'Glass represents clarity and transparency.',
      'Four life areas printed on the bottle guide your intention.',
    ],
    highlighted: '/images/products/water-bottle/highlighted/water-bottle.png',
    images: [
      '/images/products/water-bottle/highlighted/water-bottle.png',
      '/images/products/water-bottle/images/WhatsApp Image 2026-10-09 at 9.55.44 AM.jpeg',
      '/images/products/water-bottle/images/WhatsApp Image 2026-10-09 at 9.55.44 AM (1).jpeg',
      '/images/products/water-bottle/images/WhatsApp Image 2026-10-09 at 9.55.44 AM (2).jpeg',
    ],
    video: {
      url: '/images/products/water-bottle/videos/water-bottle.mp4',
      poster: '/images/products/water-bottle/highlighted/water-bottle.png',
    },
    collectionDesc: 'Drink your intention.',
  },
  {
    id: 'acrylic',
    hash: 'acrylic',
    name: "Ho'oponopono Acrylic Sticker",
    shortName: 'Acrylic Sticker',
    price: 99,
    eyebrow: '🤍 Inner Reset',
    tag: 'Four Powerful Words. Wherever You Need Them.',
    words: [
      'I am sorry.',
      'Please forgive me.',
      'Thank you.',
      'I love you.',
    ],
    lead1: 'An easy-to-paste acrylic reminder sticker with a sunrise-over-the-sea design for your:',
    pills: ['ROOM', 'ENTRANCE', 'FRIDGE', 'KITCHEN', 'ALMIRAH', 'MIRROR', 'DESK', 'MEDITATION SPACE'],
    steps: ['Pause.', 'Breathe.', 'Repeat.', 'Receive.'],
    lead2: 'Place it where you can see it.',
    highlighted: '/images/products/Arcyclic/highlighted/Arcyclic.png',
    images: [
      '/images/products/Arcyclic/highlighted/Arcyclic.png',
      '/images/products/Arcyclic/images/WhatsApp Image 2026-10-09 at 4.20.04 PM.jpeg',
      '/images/products/Arcyclic/images/WhatsApp Image 2026-10-09 at 4.20.05 PM.jpeg',
    ],
    video: {
      url: '/images/products/Arcyclic/videos/Arcylic-card.mp4',
      poster: '/images/products/Arcyclic/highlighted/Arcyclic.png',
    },
    collectionDesc: 'Four powerful words, wherever you need them.',
  },
  {
    id: 'moneybox',
    hash: 'moneybox',
    name: 'Money Box',
    price: 999,
    eyebrow: '💰 Inner Reset',
    tag: 'I always have surplus money.',
    subtitle: 'Money is not just about numbers.',
    lead1: 'Our relationship with money is also shaped by the thoughts, habits and emotions we repeat every day.',
    lead2: 'The Inner Reset Money Box gives you a simple way to pause and create a conscious money ritual.',
    affirmation: 'I ALWAYS HAVE SURPLUS MONEY.',
    habitNote: 'Put money inside — it could be ₹10, ₹20, ₹50, or ₹100. The amount is not the point. The habit of consciously keeping something aside is.',
    cycle: 'KEEP • USE • REPLENISH • REPEAT',
    steps: ['Keep.', 'Use.', 'Replenish.', 'Repeat.'],
    features: [
      'When you need it, use it. When you have money again, replenish it.',
      'Every time you put money inside, pause and say your affirmation: “I always have surplus money.”',
      'With a touch of Itra fragrance, the ritual becomes something you can see, touch and experience.',
      'From “I don’t have enough” to “I am learning to create, receive and manage money consciously.”',
      'Because abundance is not only about having more — it is also about becoming more conscious of what you already have.',
    ],
    highlighted: '/images/products/money-box/highlighted/money-box.jpeg',
    images: [
      '/images/products/money-box/highlighted/money-box.jpeg',
      '/images/products/money-box/images/WhatsApp Image 2026-10-09 at 4.20.01 PM.jpeg',
      '/images/products/money-box/images/WhatsApp Image 2026-10-09 at 4.20.02 PM.jpeg',
      '/images/products/money-box/images/WhatsApp Image 2026-10-09 at 4.20.03 PM (1).jpeg',
      '/images/products/money-box/images/WhatsApp Image 2026-10-09 at 4.20.03 PM.jpeg',
      '/images/products/money-box/images/WhatsApp Image 2026-10-09 at 4.20.06 PM.jpeg',
    ],
    video: {
      url: '/images/products/money-box/videos/money-box.mp4',
      poster: '/images/products/money-box/highlighted/money-box.jpeg',
    },
    collectionDesc: 'A conscious money ritual for surplus and abundance.',
  },
  {
    id: 'card',
    hash: 'card',
    name: 'Inner Reset Intention Card',
    shortName: 'Intention Card',
    price: 99,
    eyebrow: '✨ Inner Reset',
    tag: 'Thank You, Universe…',
    subtitle: 'A little card for the things your heart truly wishes for.',
    lead1: 'There are things we think about every day — a healthier body, a peaceful relationship, a better career, financial abundance, or a dream quietly carried for years.',
    lead2: 'The Inner Reset Intention Card gives you a simple space to write it down, feel it, and consciously welcome it into your life.',
    pills: ['HEALTH', 'RELATIONSHIPS', 'CAREER', 'MONEY', 'DREAMS'],
    steps: ['Pause.', 'Write.', 'Feel.', 'Give Thanks.', 'Act.'],
    features: [
      'Begin your intention: “Thank you, Universe, for easily and effortlessly…” and write what you choose to welcome.',
      'Pause and imagine how it feels if your intention became your living reality with heartfelt gratitude.',
      'Keep it where you can see it: beside your bed, on your work desk, near your mirror, or inside your journal.',
      'Take one small aligned action each day that consciously moves you closer to your desire.',
    ],
    cycle: 'PAUSE • WRITE • FEEL • GIVE THANKS • ACT',
    highlighted: '/images/products/intention/highlighhted/Intention.png',
    images: [
      '/images/products/intention/highlighhted/Intention.png',
    ],
    collectionDesc: 'A little card for the things your heart truly wishes for.',
  },
];

/* ─────────────────────────────────────────
   FOCUS PAIRINGS (FOR "FIND YOUR INNER RESET")
   ───────────────────────────────────────── */
const FOCUS_OPTIONS = [
  {
    id: 'health',
    label: '💚 Health',
    recommendation: 'Blue Water Bottle + Intention Card',
    productIds: ['bottle', 'card'],
    desc: 'Hydrate with conscious affirmations for physical vitality, nervous system healing, and balanced wellness.',
    jumpId: 'bottle',
  },
  {
    id: 'relationships',
    label: '❤️ Relationships',
    recommendation: "Ho'oponopono Acrylic + Water Bottle",
    productIds: ['acrylic', 'bottle'],
    desc: 'Invoke the sacred frequency of forgiveness, loving kindness, and heartfelt connection in your home.',
    jumpId: 'acrylic',
  },
  {
    id: 'career',
    label: '✨ Career',
    recommendation: 'Intention Card + Water Bottle',
    productIds: ['card', 'bottle'],
    desc: 'Clarify professional milestones, maintain laser focus, and anchor aligned daily actions for success.',
    jumpId: 'card',
  },
  {
    id: 'money',
    label: '💰 Money',
    recommendation: 'Money Box + Intention Card',
    productIds: ['moneybox', 'card'],
    desc: 'Transform your money relationship into overflow, abundance consciousness, and serene surplus.',
    jumpId: 'moneybox',
  },
];

/* ─────────────────────────────────────────
   VIDEO PLAYER COMPONENT
   ───────────────────────────────────────── */
function VideoPlayer({ video, productName }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  // Autoplay, loop, and muted on mount / video url change
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    v.muted = true;
    v.defaultMuted = true;
    v.loop = true;
    v.playsInline = true;

    const startPlayback = () => {
      const playPromise = v.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
            setIsLoading(false);
          })
          .catch(() => {
            // Re-enforce mute and retry
            v.muted = true;
            v.play()
              .then(() => {
                setIsPlaying(true);
                setIsLoading(false);
              })
              .catch(() => {
                setIsLoading(false);
              });
          });
      }
    };

    startPlayback();
  }, [video.url]);

  const togglePlay = useCallback((e) => {
    if (e && e.stopPropagation) e.stopPropagation();
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.muted = true;
      v.play()
        .then(() => {
          setIsPlaying(true);
          setIsLoading(false);
        })
        .catch(() => setIsLoading(false));
    } else {
      v.pause();
      setIsPlaying(false);
    }
  }, []);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    const onPlay = () => { setIsPlaying(true); setIsLoading(false); };
    const onPause = () => setIsPlaying(false);
    const onWaiting = () => setIsLoading(true);
    const onPlaying = () => { setIsPlaying(true); setIsLoading(false); };
    const onCanPlay = () => {
      setIsLoading(false);
      if (v.paused) {
        v.muted = true;
        v.play().catch(() => {});
      }
    };

    v.addEventListener('play', onPlay);
    v.addEventListener('pause', onPause);
    v.addEventListener('waiting', onWaiting);
    v.addEventListener('playing', onPlaying);
    v.addEventListener('canplay', onCanPlay);

    return () => {
      v.removeEventListener('play', onPlay);
      v.removeEventListener('pause', onPause);
      v.removeEventListener('waiting', onWaiting);
      v.removeEventListener('playing', onPlaying);
      v.removeEventListener('canplay', onCanPlay);
    };
  }, []);

  return (
    <div className="ir-video-wrapper" onClick={togglePlay}>
      <video
        ref={videoRef}
        src={video.url}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-label={`Product video for ${productName}`}
        className="ir-video-element"
      >
        <source src={video.url} type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>

      {/* Floating live playback pill */}
      <div className="ir-video-badge" title="Continuous loop (Muted)">
        <span className="ir-video-live-dot" />
        <span>Looping Video</span>
      </div>

      <button
        type="button"
        className={`ir-video-play-btn ${isPlaying ? 'playing' : ''}`}
        onClick={togglePlay}
        aria-label={isPlaying ? 'Pause video' : 'Play video'}
      >
        {isLoading ? (
          <span className="ir-spinner" />
        ) : isPlaying ? (
          <Pause size={24} />
        ) : (
          <Play size={24} style={{ marginLeft: 3 }} />
        )}
      </button>
    </div>
  );
}

/* ─────────────────────────────────────────
   LIGHTBOX MODAL COMPONENT
   ───────────────────────────────────────── */
function LightboxModal({ imageSrc, altText, onClose, onPrev, onNext, hasNav }) {
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (hasNav && e.key === 'ArrowLeft') onPrev();
      if (hasNav && e.key === 'ArrowRight') onNext();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKey);
    };
  }, [onClose, onPrev, onNext, hasNav]);

  return (
    <div className="ir-lightbox-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="ir-lightbox-content" onClick={(e) => e.stopPropagation()}>
        <button
          className="ir-lightbox-close"
          onClick={onClose}
          aria-label="Close fullscreen preview"
        >
          <X size={24} />
        </button>

        {hasNav && (
          <>
            <button
              className="ir-lightbox-nav prev"
              onClick={(e) => { e.stopPropagation(); onPrev(); }}
              aria-label="Previous image"
            >
              <ChevronLeft size={28} />
            </button>
            <button
              className="ir-lightbox-nav next"
              onClick={(e) => { e.stopPropagation(); onNext(); }}
              aria-label="Next image"
            >
              <ChevronRight size={28} />
            </button>
          </>
        )}

        <img src={imageSrc} alt={altText} className="ir-lightbox-img" />
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────
   MAIN PRODUCTS PAGE COMPONENT
   ───────────────────────────────────────── */
export default function Products() {
  // Product gallery states: track active image index & media mode ('image' | 'video')
  const [selectedImages, setSelectedImages] = useState({
    bottle: 0,
    acrylic: 0,
    moneybox: 0,
    card: 0,
  });
  const [mediaModes, setMediaModes] = useState({
    bottle: 'image',
    acrylic: 'image',
    moneybox: 'image',
    card: 'image',
  });

  // Quantities for each product
  const [quantities, setQuantities] = useState({
    bottle: 1,
    acrylic: 1,
    moneybox: 1,
    card: 1,
  });

  // Interactive Stitch ritual tab for each product ('ritual' | 'pillars' | 'craft')
  const [activeProductTabs, setActiveProductTabs] = useState({
    bottle: 'ritual',
    acrylic: 'words',
    moneybox: 'affirmation',
    card: 'manifest',
  });

  const handleSetProductTab = (productId, tabKey) => {
    setActiveProductTabs((prev) => ({ ...prev, [productId]: tabKey }));
  };

  // Sacred Bag (Cart) state persisted to localStorage
  const [cartItems, setCartItems] = useState(() => {
    try {
      const saved = localStorage.getItem('inner_reset_sacred_bag');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isBagOpen, setIsBagOpen] = useState(false);
  const [showCheckoutModal, setShowCheckoutModal] = useState(false);
  const [orderConfirmed, setOrderConfirmed] = useState(null);

  const [checkoutForm, setCheckoutForm] = useState({
    name: '',
    phone: '',
    address: '',
    city: '',
    pincode: '',
  });

  useEffect(() => {
    try {
      localStorage.setItem('inner_reset_sacred_bag', JSON.stringify(cartItems));
    } catch {}
  }, [cartItems]);

  const cartCount = cartItems.reduce((acc, item) => acc + item.count, 0);
  const cartSubtotal = cartItems.reduce((acc, item) => acc + item.price * item.count, 0);
  const isOrderEligible = cartSubtotal >= MIN_ORDER_AMOUNT;
  const amountNeeded = Math.max(0, MIN_ORDER_AMOUNT - cartSubtotal);

  // Lightbox state
  const [lightbox, setLightbox] = useState(null); // { productId, imageIndex }

  // Interactive focus tab in "Find Your Inner Reset"
  const [activeFocus, setActiveFocus] = useState(FOCUS_OPTIONS[0]);

  // Toast message
  const [toast, setToast] = useState(null); // { message, id }
  const toastTimeoutRef = useRef(null);

  const showToast = useCallback((message) => {
    if (toastTimeoutRef.current) clearTimeout(toastTimeoutRef.current);
    const id = Date.now();
    setToast({ message, id });
    toastTimeoutRef.current = setTimeout(() => {
      setToast(null);
    }, 4000);
  }, []);

  const handleSelectImage = (productId, idx) => {
    setSelectedImages((prev) => ({ ...prev, [productId]: idx }));
    setMediaModes((prev) => ({ ...prev, [productId]: 'image' }));
  };

  const handleToggleMediaMode = (productId) => {
    setMediaModes((prev) => ({
      ...prev,
      [productId]: 'video',
    }));
  };

  const handleUpdateQuantity = (productId, delta) => {
    setQuantities((prev) => ({
      ...prev,
      [productId]: Math.max(1, prev[productId] + delta),
    }));
  };

  const handleAddToCart = (product, customCount) => {
    const count = customCount !== undefined ? customCount : (quantities[product.id] || 1);
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, count: item.count + count } : item
        );
      }
      return [
        ...prev,
        {
          id: product.id,
          name: product.name,
          price: product.price,
          image: product.highlighted || product.images[0],
          count,
        },
      ];
    });
    setIsBagOpen(true);
    showToast(`Added ${count} × “${product.name}” (₹${product.price * count}) to your Sacred Bag ✦`);
  };

  const handleAddComboToBag = (productIds) => {
    if (!productIds || productIds.length === 0) return;
    const productsToAdd = productIds
      .map((id) => PRODUCTS_DATA.find((p) => p.id === id))
      .filter(Boolean);

    if (productsToAdd.length === 0) return;

    setCartItems((prev) => {
      let updated = [...prev];
      productsToAdd.forEach((product) => {
        const existingIdx = updated.findIndex((item) => item.id === product.id);
        if (existingIdx > -1) {
          updated[existingIdx] = {
            ...updated[existingIdx],
            count: updated[existingIdx].count + 1,
          };
        } else {
          updated.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.highlighted || product.images[0],
            count: 1,
          });
        }
      });
      return updated;
    });

    const comboTotal = productsToAdd.reduce((sum, p) => sum + p.price, 0);
    const names = productsToAdd.map((p) => p.name).join(' & ');
    setIsBagOpen(true);
    showToast(`Added Sacred Combo: ${names} (₹${comboTotal}) to your Sacred Bag ✦`);
  };

  const handleUpdateCartItemQty = (productId, delta) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.id === productId) {
            const newCount = item.count + delta;
            return newCount > 0 ? { ...item, count: newCount } : null;
          }
          return item;
        })
        .filter(Boolean)
    );
  };

  const handleRemoveCartItem = (productId) => {
    setCartItems((prev) => prev.filter((item) => item.id !== productId));
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    if (!isOrderEligible) {
      alert(`Minimum order of ₹${MIN_ORDER_AMOUNT} is mandatory for placing an order.`);
      return;
    }
    const orderId = `IR-${Math.floor(100000 + Math.random() * 900000)}`;
    const orderData = {
      orderId,
      items: [...cartItems],
      subtotal: cartSubtotal,
      customer: { ...checkoutForm },
      date: new Date().toLocaleDateString('en-IN', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
      }),
    };
    setOrderConfirmed(orderData);
    setCartItems([]);
    setShowCheckoutModal(false);
  };

  const handleScrollTo = (targetId) => {
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', `#${targetId}`);
    }
  };

  return (
    <div className="ir-page">
      {/* ─────────────────────────────────────────
          1. HERO HEADER
          ───────────────────────────────────────── */}
      <header className="ir-hero">
        <div className="ir-orb" />
        <div className="ir-wrap ir-hero-grid">
          {/* Left Text */}
          <div className="ir-hero-content">
            <div className="ir-eyebrow">
              <Sparkles size={13} />
              <span>By Shaifaly Sangal</span>
            </div>
            <h1 className="ir-hero-title">
              Inner <em>Reset</em>
            </h1>
            <p className="ir-hero-sub">Small Rituals. Powerful Shifts.</p>
            <p className="ir-lead">
              Simple intention-based products to help you pause, focus, affirm and create conscious daily rituals.
            </p>
            <p className="ir-lead" style={{ marginTop: 12 }}>
              Choose your intention. Create your ritual. Begin your Inner Reset.
            </p>

            

            <div className="ir-hero-actions">
              <button
                type="button"
                className="ir-btn ir-btn-solid"
                onClick={() => handleScrollTo('collection')}
              >
                Shop Now
              </button>
              <button
                type="button"
                className="ir-btn ir-btn-bag-trigger"
                onClick={() => setIsBagOpen(true)}
              >
                <ShoppingBag size={16} /> Sacred Bag {cartCount > 0 ? `(${cartCount} • ₹${cartSubtotal})` : '(0)'}
              </button>
            </div>

           
           
          </div>

          {/* Right Floating Hero Visual */}
          <div className="ir-hero-visual">
            <div className="ir-hero-frame">
              <img
                src="/hero.png"
                alt="Inner Reset Complete Intention Ritual Collection"
                className="ir-hero-img"
                loading="eager"
              />
              <div className="ir-hero-badge">
                <Sparkles size={13} />
                <span>Sacred 4-Ritual Suite</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ─────────────────────────────────────────
          2. MARQUEE RIBBON
          ───────────────────────────────────────── */}
      <div className="ir-marq" aria-hidden="true">
        <div className="ir-marq-track">
          <span>✦</span>PAUSE<span>✦</span>INTEND<span>✦</span>RESET
          <span>✦</span>PAUSE<span>✦</span>INTEND<span>✦</span>RESET
          <span>✦</span>PAUSE<span>✦</span>INTEND<span>✦</span>RESET
          <span>✦</span>PAUSE<span>✦</span>INTEND<span>✦</span>RESET
          <span>✦</span>PAUSE<span>✦</span>INTEND<span>✦</span>RESET
          <span>✦</span>PAUSE<span>✦</span>INTEND<span>✦</span>RESET
          <span>✦</span>PAUSE<span>✦</span>INTEND<span>✦</span>RESET
          <span>✦</span>PAUSE<span>✦</span>INTEND<span>✦</span>RESET
        </div>
      </div>

      {/* ─────────────────────────────────────────
          3. THE INNER RESET COLLECTION OVERVIEW
          ───────────────────────────────────────── */}
      <section id="collection" className="ir-collection-section">
        <div className="ir-wrap">
          <div className="ir-section-head">
            <div className="ir-eyebrow">
              <Sparkles size={13} />
              <span>The Inner Reset Collection</span>
            </div>
            <h2 className="ir-h2">Rituals for every corner of life</h2>
          </div>

          <div className="ir-collection-grid">
            {/* Card 1: Water Bottle */}
            <a
              href="#bottle"
              onClick={(e) => { e.preventDefault(); handleScrollTo('bottle'); }}
              className="ir-collection-card"
            >
              <div className="ir-card-image-wrap">
                <img
                  src="/images/products/water-bottle/images/WhatsApp Image 2026-10-09 at 9.55.44 AM.jpeg"
                  alt="Blue Glass Water Bottle"
                  loading="lazy"
                />
                <span className="ir-card-price-pill">₹{PRODUCTS_DATA[0].price}</span>
              </div>
              <h3 className="ir-card-title">{PRODUCTS_DATA[0].name}</h3>
              <p className="ir-card-desc">{PRODUCTS_DATA[0].collectionDesc}</p>
              <div className="ir-card-footer">
                <span className="ir-card-price-display">₹{PRODUCTS_DATA[0].price}</span>
                <span className="ir-card-link">Explore Ritual <ArrowRight size={14} /></span>
              </div>
            </a>

            {/* Card 2: Acrylic Sticker */}
            <a
              href="#acrylic"
              onClick={(e) => { e.preventDefault(); handleScrollTo('acrylic'); }}
              className="ir-collection-card"
            >
              <div className="ir-card-image-wrap">
                <img
                  src="/images/products/Arcyclic/highlighted/Arcyclic.png"
                  alt="Ho'oponopono Acrylic Sticker"
                  loading="lazy"
                />
                <span className="ir-card-price-pill">₹{PRODUCTS_DATA[1].price}</span>
              </div>
              <h3 className="ir-card-title">{PRODUCTS_DATA[1].name}</h3>
              <p className="ir-card-desc">{PRODUCTS_DATA[1].collectionDesc}</p>
              <div className="ir-card-footer">
                <span className="ir-card-price-display">₹{PRODUCTS_DATA[1].price}</span>
                <span className="ir-card-link">Explore Ritual <ArrowRight size={14} /></span>
              </div>
            </a>

            {/* Card 3: Money Box */}
            <a
              href="#moneybox"
              onClick={(e) => { e.preventDefault(); handleScrollTo('moneybox'); }}
              className="ir-collection-card"
            >
              <div className="ir-card-image-wrap">
                <img
                  src="/images/products/money-box/highlighted/money-box.jpeg"
                  alt="Money Box"
                  loading="lazy"
                />
                <span className="ir-card-price-pill">₹{PRODUCTS_DATA[2].price}</span>
              </div>
              <h3 className="ir-card-title">{PRODUCTS_DATA[2].name}</h3>
              <p className="ir-card-desc">{PRODUCTS_DATA[2].collectionDesc}</p>
              <div className="ir-card-footer">
                <span className="ir-card-price-display">₹{PRODUCTS_DATA[2].price}</span>
                <span className="ir-card-link">Explore Ritual <ArrowRight size={14} /></span>
              </div>
            </a>

            {/* Card 4: Intention Card */}
            <a
              href="#card"
              onClick={(e) => { e.preventDefault(); handleScrollTo('card'); }}
              className="ir-collection-card"
            >
              <div className="ir-card-image-wrap">
                <img
                  src={PRODUCTS_DATA[3].highlighted}
                  alt={PRODUCTS_DATA[3].name}
                  loading="lazy"
                />
                <span className="ir-card-price-pill">₹{PRODUCTS_DATA[3].price}</span>
              </div>
              <h3 className="ir-card-title">{PRODUCTS_DATA[3].name}</h3>
              <p className="ir-card-desc">{PRODUCTS_DATA[3].collectionDesc}</p>
              <div className="ir-card-footer">
                <span className="ir-card-price-display">₹{PRODUCTS_DATA[3].price}</span>
                <span className="ir-card-link">Explore Ritual <ArrowRight size={14} /></span>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────
          4. WHAT IS INNER RESET?
          ───────────────────────────────────────── */}
      <section className="ir-what">
        <div className="ir-wrap ir-text-center">
          <div className="ir-eyebrow">
            <Sparkles size={13} />
            <span>What is Inner Reset?</span>
          </div>
          <h2 className="ir-h2">Meaningful change begins small</h2>
          <p className="ir-lead ir-center-lead">
            Inner Reset is a collection of simple everyday tools designed around intention,
            gratitude, affirmations and conscious action.
          </p>

          <div className="ir-moments">
            <div className="ir-moment-card">
              <div className="ir-moment-icon">💧</div>
              <h3 className="ir-moment-title">A Mindful Sip</h3>
              <p className="ir-moment-desc">
                Charging everyday hydration with cellular clarity and intention-guided life wellness.
              </p>
            </div>
            <div className="ir-moment-card">
              <div className="ir-moment-icon">📜</div>
              <h3 className="ir-moment-title">A Written Decree</h3>
              <p className="ir-moment-desc">
                Putting pen to consecrated parchment to collapse subconscious doubt into tangible reality.
              </p>
            </div>
            <div className="ir-moment-card">
              <div className="ir-moment-icon">🤍</div>
              <h3 className="ir-moment-title">Four Healing Words</h3>
              <p className="ir-moment-desc">
                Ancient Hawaiian Ho'oponopono forgiveness dissolving subconscious resistance wherever placed.
              </p>
            </div>
            <div className="ir-moment-card">
              <div className="ir-moment-icon">🪙</div>
              <h3 className="ir-moment-title">A Conscious Surplus</h3>
              <p className="ir-moment-desc">
                Cultivating gratitude around everyday wealth flow so currency circulates freely back to you.
              </p>
            </div>
          </div>

          <div className="ir-big-accent">Pause. Intend. Reset.</div>
        </div>
      </section>

      {/* ─────────────────────────────────────────
          5. PRODUCT 1: BLUE GLASS WATER BOTTLE
          ───────────────────────────────────────── */}
      <section id="bottle" className="ir-prod-section">
        <div className="ir-wrap ir-prod-grid">
          {/* Gallery Column */}
          <div className="ir-gal">
            <div className={`ir-gal-main ${mediaModes.bottle === 'video' ? 'ir-main-video' : ''}`}>
              {mediaModes.bottle === 'video' && PRODUCTS_DATA[0].video ? (
                <VideoPlayer
                  video={PRODUCTS_DATA[0].video}
                  productName={PRODUCTS_DATA[0].name}
                />
              ) : (
                <div className="ir-img-zoom-wrap">
                  <img
                    src={PRODUCTS_DATA[0].images[selectedImages.bottle]}
                    alt={`${PRODUCTS_DATA[0].name} preview`}
                    className="ir-main-img"
                  />
                  <button
                    type="button"
                    className="ir-zoom-btn"
                    onClick={() => setLightbox({ productId: 'bottle', imageIndex: selectedImages.bottle })}
                    aria-label="Enlarge image"
                  >
                    <Maximize2 size={16} />
                  </button>
                </div>
              )}
            </div>

            {/* Thumbnails + Video Toggle */}
            <div className="ir-thumbs">
              {PRODUCTS_DATA[0].images.map((src, i) => (
                <button
                  key={src}
                  type="button"
                  className={`ir-thumb-btn ${mediaModes.bottle === 'image' && selectedImages.bottle === i ? 'on' : ''}`}
                  onClick={() => handleSelectImage('bottle', i)}
                  aria-label={`Show photo ${i + 1}`}
                >
                  <img src={src} alt="" />
                </button>
              ))}

              {PRODUCTS_DATA[0].video && (
                <button
                  type="button"
                  className={`ir-thumb-btn ir-video-thumb-btn ${mediaModes.bottle === 'video' ? 'on' : ''}`}
                  onClick={() => handleToggleMediaMode('bottle')}
                  aria-label="Play product video"
                >
                  <div className="ir-thumb-play-icon">
                    <Play size={18} fill="currentColor" />
                  </div>
                  <span>Video</span>
                </button>
              )}
            </div>
          </div>

          {/* Product Details Column */}
          <div className="ir-prod-info">
            <div className="ir-eyebrow">
              <span>{PRODUCTS_DATA[0].eyebrow}</span>
            </div>
            <h2 className="ir-h2">{PRODUCTS_DATA[0].name}</h2>

            {/* Compact Unified Commerce Panel */}
            <div className="ir-commerce-panel">
              <div className="ir-price-group">
                <span className="ir-price-num">₹{PRODUCTS_DATA[0].price}</span>
               
              </div>
              <div className="ir-action-bar">
                <div className="ir-qty-box">
                  <button
                    type="button"
                    onClick={() => handleUpdateQuantity('bottle', -1)}
                    aria-label="Decrease quantity"
                  >
                    -
                  </button>
                  <span>{quantities.bottle}</span>
                  <button
                    type="button"
                    onClick={() => handleUpdateQuantity('bottle', 1)}
                    aria-label="Increase quantity"
                  >
                    +
                  </button>
                </div>

                <button
                  type="button"
                  className="ir-btn ir-btn-solid ir-add-bag-btn"
                  onClick={() => handleAddToCart(PRODUCTS_DATA[0])}
                >
                  <ShoppingBag size={16} /> Add to Sacred Bag • ₹{PRODUCTS_DATA[0].price * quantities.bottle}
                </button>
              </div>
            </div>

            {/* Interactive Ritual Segmented Control */}
            <div className="ir-segment-tabs" role="tablist" aria-label="Blue Glass Water Bottle details tabs">
              <button
                type="button"
                role="tab"
                aria-selected={activeProductTabs.bottle === 'ritual'}
                className={`ir-seg-btn ${activeProductTabs.bottle === 'ritual' ? 'active' : ''}`}
                onClick={() => handleSetProductTab('bottle', 'ritual')}
              >
                <span className="ir-seg-dot">✦</span> The Ritual
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={activeProductTabs.bottle === 'pillars'}
                className={`ir-seg-btn ${activeProductTabs.bottle === 'pillars' ? 'active' : ''}`}
                onClick={() => handleSetProductTab('bottle', 'pillars')}
              >
                <span className="ir-seg-dot">🌿</span> Life Pillars
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={activeProductTabs.bottle === 'craft'}
                className={`ir-seg-btn ${activeProductTabs.bottle === 'craft' ? 'active' : ''}`}
                onClick={() => handleSetProductTab('bottle', 'craft')}
              >
                <span className="ir-seg-dot">✨</span> Craftsmanship
              </button>
            </div>

            {/* Active Tab Panel */}
            {activeProductTabs.bottle === 'ritual' && (
              <div className="ir-tab-content-panel" role="tabpanel">
                <div className="ir-quote-tag">“{PRODUCTS_DATA[0].tag}”</div>
                <p className="ir-quote-lead" style={{ marginBottom: 14 }}>{PRODUCTS_DATA[0].lead1}</p>
                <span className="ir-block-label">Daily 5-Step Practice</span>
                <div className="ir-stepper-grid">
                  {PRODUCTS_DATA[0].steps.map((st, i) => (
                    <div key={st} className="ir-step-item">
                      <span className="ir-step-circle">{i + 1}</span>
                      <span className="ir-step-name">{st}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeProductTabs.bottle === 'pillars' && (
              <div className="ir-tab-content-panel" role="tabpanel">
                <span className="ir-block-label">Four Inscribed Life Areas</span>
                <div className="ir-pills" style={{ margin: '8px 0 14px' }}>
                  {PRODUCTS_DATA[0].pills.map((pill) => (
                    <span key={pill}>✦ {pill}</span>
                  ))}
                </div>
                <p className="ir-quote-lead">{PRODUCTS_DATA[0].lead2}</p>
                <div className="ir-feat-grid" style={{ marginTop: 12, paddingTop: 12 }}>
                  <div className="ir-feat-cell"><span className="ir-feat-star">✦</span><span>Blue represents calm, clarity and emotional balance.</span></div>
                  <div className="ir-feat-cell"><span className="ir-feat-star">✦</span><span>Glass represents clarity and transparency.</span></div>
                </div>
              </div>
            )}

            {activeProductTabs.bottle === 'craft' && (
              <div className="ir-tab-content-panel" role="tabpanel">
                <span className="ir-block-label">Atelier Specifications</span>
                <div className="ir-feat-grid" style={{ margin: 0, border: 'none', paddingTop: 4 }}>
                  {PRODUCTS_DATA[0].features.map((feat) => (
                    <div key={feat} className="ir-feat-cell">
                      <span className="ir-feat-star">✦</span>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────
          6. PRODUCT 2: HO'OPONOPONO ACRYLIC
          ───────────────────────────────────────── */}
      <section id="acrylic" className="ir-prod-section ir-section-alt">
        <div className="ir-wrap ir-prod-grid ir-prod-grid-rev">
          {/* Gallery Column (orders right on desktop) */}
          <div className="ir-gal">
            <div className={`ir-gal-main ${mediaModes.acrylic === 'video' ? 'ir-main-video' : 'ir-main-landscape'}`}>
              {mediaModes.acrylic === 'video' && PRODUCTS_DATA[1].video ? (
                <VideoPlayer
                  video={PRODUCTS_DATA[1].video}
                  productName={PRODUCTS_DATA[1].name}
                />
              ) : (
                <div className="ir-img-zoom-wrap">
                  <img
                    src={PRODUCTS_DATA[1].images[selectedImages.acrylic]}
                    alt={`${PRODUCTS_DATA[1].name} preview`}
                    className="ir-main-img"
                  />
                  <button
                    type="button"
                    className="ir-zoom-btn"
                    onClick={() => setLightbox({ productId: 'acrylic', imageIndex: selectedImages.acrylic })}
                    aria-label="Enlarge image"
                  >
                    <Maximize2 size={16} />
                  </button>
                </div>
              )}
            </div>

            <div className="ir-thumbs">
              {PRODUCTS_DATA[1].images.map((src, i) => (
                <button
                  key={src}
                  type="button"
                  className={`ir-thumb-btn ${mediaModes.acrylic === 'image' && selectedImages.acrylic === i ? 'on' : ''}`}
                  onClick={() => handleSelectImage('acrylic', i)}
                  aria-label={`Show photo ${i + 1}`}
                >
                  <img src={src} alt="" />
                </button>
              ))}

              {PRODUCTS_DATA[1].video && (
                <button
                  type="button"
                  className={`ir-thumb-btn ir-video-thumb-btn ${mediaModes.acrylic === 'video' ? 'on' : ''}`}
                  onClick={() => handleToggleMediaMode('acrylic')}
                  aria-label="Play product video"
                >
                  <div className="ir-thumb-play-icon">
                    <Play size={18} fill="currentColor" />
                  </div>
                  <span>Video</span>
                </button>
              )}
            </div>
          </div>

          {/* Product Details Column */}
          <div className="ir-prod-info">
            <div className="ir-eyebrow">
              <span>{PRODUCTS_DATA[1].eyebrow}</span>
            </div>
            <h2 className="ir-h2">{PRODUCTS_DATA[1].name}</h2>

            {/* Compact Unified Commerce Panel */}
            <div className="ir-commerce-panel">
              <div className="ir-price-group">
                <span className="ir-price-num">₹{PRODUCTS_DATA[1].price}</span>
                
              </div>
              <div className="ir-action-bar">
                <div className="ir-qty-box">
                  <button
                    type="button"
                    onClick={() => handleUpdateQuantity('acrylic', -1)}
                    aria-label="Decrease quantity"
                  >
                    -
                  </button>
                  <span>{quantities.acrylic}</span>
                  <button
                    type="button"
                    onClick={() => handleUpdateQuantity('acrylic', 1)}
                    aria-label="Increase quantity"
                  >
                    +
                  </button>
                </div>

                <button
                  type="button"
                  className="ir-btn ir-btn-solid ir-add-bag-btn"
                  onClick={() => handleAddToCart(PRODUCTS_DATA[1])}
                >
                  <ShoppingBag size={16} /> Add to Sacred Bag • ₹{PRODUCTS_DATA[1].price * quantities.acrylic}
                </button>
              </div>
            </div>

            {/* Interactive Ritual Segmented Control */}
            <div className="ir-segment-tabs" role="tablist" aria-label="Ho'oponopono sticker details tabs">
              <button
                type="button"
                role="tab"
                aria-selected={activeProductTabs.acrylic === 'words'}
                className={`ir-seg-btn ${activeProductTabs.acrylic === 'words' ? 'active' : ''}`}
                onClick={() => handleSetProductTab('acrylic', 'words')}
              >
                <span className="ir-seg-dot">✦</span> The 4 Words
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={activeProductTabs.acrylic === 'placements'}
                className={`ir-seg-btn ${activeProductTabs.acrylic === 'placements' ? 'active' : ''}`}
                onClick={() => handleSetProductTab('acrylic', 'placements')}
              >
                <span className="ir-seg-dot">📍</span> Placements
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={activeProductTabs.acrylic === 'craft'}
                className={`ir-seg-btn ${activeProductTabs.acrylic === 'craft' ? 'active' : ''}`}
                onClick={() => handleSetProductTab('acrylic', 'craft')}
              >
                <span className="ir-seg-dot">✨</span> Specifications
              </button>
            </div>

            {/* Active Tab Panel */}
            {activeProductTabs.acrylic === 'words' && (
              <div className="ir-tab-content-panel" role="tabpanel">
                <div className="ir-words-card" style={{ margin: '0 0 12px', padding: '12px 16px' }}>
                  {PRODUCTS_DATA[1].words.map((w) => (
                    <p key={w} style={{ fontSize: '1.25rem', margin: '2px 0' }}>“{w}”</p>
                  ))}
                </div>
                <span className="ir-block-label">Subconscious Practice</span>
                <div className="ir-stepper-grid">
                  {PRODUCTS_DATA[1].steps.map((st, i) => (
                    <div key={st} className="ir-step-item">
                      <span className="ir-step-circle">{i + 1}</span>
                      <span className="ir-step-name">{st}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeProductTabs.acrylic === 'placements' && (
              <div className="ir-tab-content-panel" role="tabpanel">
                <span className="ir-block-label">{PRODUCTS_DATA[1].lead1}</span>
                <div className="ir-pills" style={{ margin: '8px 0 14px' }}>
                  {PRODUCTS_DATA[1].pills.map((pill) => (
                    <span key={pill}>✦ {pill}</span>
                  ))}
                </div>
                <p className="ir-quote-lead">{PRODUCTS_DATA[1].lead2}</p>
              </div>
            )}

            {activeProductTabs.acrylic === 'craft' && (
              <div className="ir-tab-content-panel" role="tabpanel">
                <span className="ir-block-label">Material & Construction</span>
                <div className="ir-feat-grid" style={{ margin: 0, border: 'none', paddingTop: 4 }}>
                  <div className="ir-feat-cell"><span className="ir-feat-star">✦</span><span>Waterproof high-grade metallic acrylic with radiant sunrise-over-sea motif</span></div>
                  <div className="ir-feat-cell"><span className="ir-feat-star">✦</span><span>Residue-free adhesive backing safe for glass, mirrors, and wood</span></div>
                  <div className="ir-feat-cell"><span className="ir-feat-star">✦</span><span>Compact footprint designed for constant passive subconscious vision</span></div>
                  <div className="ir-feat-cell"><span className="ir-feat-star">✦</span><span>{PRODUCTS_DATA[1].lead2}</span></div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────
          7. PRODUCT 3: MONEY BOX
          ───────────────────────────────────────── */}
      <section id="moneybox" className="ir-prod-section">
        <div className="ir-wrap ir-prod-grid">
          {/* Gallery Column */}
          <div className="ir-gal">
            <div className={`ir-gal-main ${mediaModes.moneybox === 'video' ? 'ir-main-video' : 'ir-main-square'}`}>
              {mediaModes.moneybox === 'video' && PRODUCTS_DATA[2].video ? (
                <VideoPlayer
                  video={PRODUCTS_DATA[2].video}
                  productName={PRODUCTS_DATA[2].name}
                />
              ) : (
                <div className="ir-img-zoom-wrap">
                  <img
                    src={PRODUCTS_DATA[2].images[selectedImages.moneybox]}
                    alt={`${PRODUCTS_DATA[2].name} preview`}
                    className="ir-main-img"
                  />
                  <button
                    type="button"
                    className="ir-zoom-btn"
                    onClick={() => setLightbox({ productId: 'moneybox', imageIndex: selectedImages.moneybox })}
                    aria-label="Enlarge image"
                  >
                    <Maximize2 size={16} />
                  </button>
                </div>
              )}
            </div>

            <div className="ir-thumbs">
              {PRODUCTS_DATA[2].images.map((src, i) => (
                <button
                  key={src}
                  type="button"
                  className={`ir-thumb-btn ${mediaModes.moneybox === 'image' && selectedImages.moneybox === i ? 'on' : ''}`}
                  onClick={() => handleSelectImage('moneybox', i)}
                  aria-label={`Show photo ${i + 1}`}
                >
                  <img src={src} alt="" />
                </button>
              ))}

              {PRODUCTS_DATA[2].video && (
                <button
                  type="button"
                  className={`ir-thumb-btn ir-video-thumb-btn ${mediaModes.moneybox === 'video' ? 'on' : ''}`}
                  onClick={() => handleToggleMediaMode('moneybox')}
                  aria-label="Play product video"
                >
                  <div className="ir-thumb-play-icon">
                    <Play size={18} fill="currentColor" />
                  </div>
                  <span>Video</span>
                </button>
              )}
            </div>

            <div className="ir-cyc-badge" style={{ marginTop: 14 }}>
              {PRODUCTS_DATA[2].cycle}
            </div>
          </div>

          {/* Product Details Column */}
          <div className="ir-prod-info">
            <div className="ir-eyebrow">
              <span>{PRODUCTS_DATA[2].eyebrow}</span>
            </div>
            <h2 className="ir-h2">{PRODUCTS_DATA[2].name}</h2>

            {/* Compact Unified Commerce Panel */}
            <div className="ir-commerce-panel">
              <div className="ir-price-group">
                <span className="ir-price-num">₹{PRODUCTS_DATA[2].price}</span>
               
              </div>
              <div className="ir-action-bar">
                <div className="ir-qty-box">
                  <button
                    type="button"
                    onClick={() => handleUpdateQuantity('moneybox', -1)}
                    aria-label="Decrease quantity"
                  >
                    -
                  </button>
                  <span>{quantities.moneybox}</span>
                  <button
                    type="button"
                    onClick={() => handleUpdateQuantity('moneybox', 1)}
                    aria-label="Increase quantity"
                  >
                    +
                  </button>
                </div>

                <button
                  type="button"
                  className="ir-btn ir-btn-solid ir-add-bag-btn"
                  onClick={() => handleAddToCart(PRODUCTS_DATA[2])}
                >
                  <ShoppingBag size={16} /> Add to Sacred Bag • ₹{PRODUCTS_DATA[2].price * quantities.moneybox}
                </button>
              </div>
            </div>

            {/* Interactive Ritual Segmented Control */}
            <div className="ir-segment-tabs" role="tablist" aria-label="Money box details tabs">
              <button
                type="button"
                role="tab"
                aria-selected={activeProductTabs.moneybox === 'affirmation'}
                className={`ir-seg-btn ${activeProductTabs.moneybox === 'affirmation' ? 'active' : ''}`}
                onClick={() => handleSetProductTab('moneybox', 'affirmation')}
              >
                <span className="ir-seg-dot">🪙</span> Surplus Ritual
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={activeProductTabs.moneybox === 'steps'}
                className={`ir-seg-btn ${activeProductTabs.moneybox === 'steps' ? 'active' : ''}`}
                onClick={() => handleSetProductTab('moneybox', 'steps')}
              >
                <span className="ir-seg-dot">🌿</span> Ritual Steps
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={activeProductTabs.moneybox === 'mindset'}
                className={`ir-seg-btn ${activeProductTabs.moneybox === 'mindset' ? 'active' : ''}`}
                onClick={() => handleSetProductTab('moneybox', 'mindset')}
              >
                <span className="ir-seg-dot">✦</span> Mindset Shift
              </button>
            </div>

            {/* Active Tab Panel */}
            {activeProductTabs.moneybox === 'affirmation' && (
              <div className="ir-tab-content-panel" role="tabpanel" style={{ textAlign: 'center' }}>
                <p className="ir-quote-tag" style={{ color: 'var(--ir-gold)', fontSize: '1.25rem', letterSpacing: '0.04em', margin: '4px 0 8px' }}>
                  “{PRODUCTS_DATA[2].affirmation}”
                </p>
                <p className="ir-quote-lead" style={{ maxWidth: 460, margin: '0 auto 12px' }}>
                  {PRODUCTS_DATA[2].subtitle} {PRODUCTS_DATA[2].lead1}
                </p>
                <div className="ir-cyc-badge" style={{ margin: '8px 0 0' }}>
                  {PRODUCTS_DATA[2].cycle}
                </div>
              </div>
            )}

            {activeProductTabs.moneybox === 'steps' && (
              <div className="ir-tab-content-panel" role="tabpanel">
                <span className="ir-block-label">Abundance Stepper ({PRODUCTS_DATA[2].cycle})</span>
                <div className="ir-stepper-grid" style={{ marginBottom: 14 }}>
                  {PRODUCTS_DATA[2].steps.map((st, i) => (
                    <div key={st} className="ir-step-item">
                      <span className="ir-step-circle">{i + 1}</span>
                      <span className="ir-step-name">{st}</span>
                    </div>
                  ))}
                </div>
                <p className="ir-quote-lead">{PRODUCTS_DATA[2].habitNote} {PRODUCTS_DATA[2].lead2}</p>
              </div>
            )}

            {activeProductTabs.moneybox === 'mindset' && (
              <div className="ir-tab-content-panel" role="tabpanel">
                <span className="ir-block-label">Mindset & Consecration</span>
                <div className="ir-feat-grid" style={{ margin: 0, border: 'none', paddingTop: 4 }}>
                  {PRODUCTS_DATA[2].features.map((feat) => (
                    <div key={feat} className="ir-feat-cell">
                      <span className="ir-feat-star">✦</span>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────
          8. PRODUCT 4: INTENTION CARD
          ───────────────────────────────────────── */}
      <section id="card" className="ir-prod-section ir-section-alt">
        <div className="ir-wrap ir-prod-grid ir-prod-grid-rev">
          {/* Gallery Column (orders right on desktop for alternating flow) */}
          <div className="ir-gal">
            <div className="ir-gal-main ir-main-square ir-card-visual-box">
              <div className="ir-img-zoom-wrap">
                <img
                  src={PRODUCTS_DATA[3].highlighted}
                  alt={`${PRODUCTS_DATA[3].name} preview`}
                  className="ir-main-img"
                />
                <button
                  type="button"
                  className="ir-zoom-btn"
                  onClick={() => setLightbox({ productId: 'card', imageIndex: 0 })}
                  aria-label="Enlarge image"
                >
                  <Maximize2 size={16} />
                </button>
              </div>
            </div>

            <div className="ir-cyc-badge" style={{ marginTop: 14 }}>
              {PRODUCTS_DATA[3].cycle}
            </div>
          </div>

          {/* Product Details Column */}
          <div className="ir-prod-info">
            <div className="ir-eyebrow">
              <span>{PRODUCTS_DATA[3].eyebrow}</span>
            </div>
            <h2 className="ir-h2">{PRODUCTS_DATA[3].name}</h2>

            {/* Compact Unified Commerce Panel */}
            <div className="ir-commerce-panel">
              <div className="ir-price-group">
                <span className="ir-price-num">₹{PRODUCTS_DATA[3].price}</span>
                
              </div>
              <div className="ir-action-bar">
                <div className="ir-qty-box">
                  <button
                    type="button"
                    onClick={() => handleUpdateQuantity('card', -1)}
                    aria-label="Decrease quantity"
                  >
                    -
                  </button>
                  <span>{quantities.card}</span>
                  <button
                    type="button"
                    onClick={() => handleUpdateQuantity('card', 1)}
                    aria-label="Increase quantity"
                  >
                    +
                  </button>
                </div>

                <button
                  type="button"
                  className="ir-btn ir-btn-solid ir-add-bag-btn"
                  onClick={() => handleAddToCart(PRODUCTS_DATA[3])}
                >
                  <ShoppingBag size={16} /> Add to Sacred Bag • ₹{PRODUCTS_DATA[3].price * quantities.card}
                </button>
              </div>
            </div>

            {/* Interactive Ritual Segmented Control */}
            <div className="ir-segment-tabs" role="tablist" aria-label="Intention card details tabs">
              <button
                type="button"
                role="tab"
                aria-selected={activeProductTabs.card === 'manifest'}
                className={`ir-seg-btn ${activeProductTabs.card === 'manifest' ? 'active' : ''}`}
                onClick={() => handleSetProductTab('card', 'manifest')}
              >
                <span className="ir-seg-dot">✨</span> The Prompt
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={activeProductTabs.card === 'steps'}
                className={`ir-seg-btn ${activeProductTabs.card === 'steps' ? 'active' : ''}`}
                onClick={() => handleSetProductTab('card', 'steps')}
              >
                <span className="ir-seg-dot">📝</span> Manifest Steps
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={activeProductTabs.card === 'pillars'}
                className={`ir-seg-btn ${activeProductTabs.card === 'pillars' ? 'active' : ''}`}
                onClick={() => handleSetProductTab('card', 'pillars')}
              >
                <span className="ir-seg-dot">✦</span> Life Focus
              </button>
            </div>

            {/* Active Tab Panel */}
            {activeProductTabs.card === 'manifest' && (
              <div className="ir-tab-content-panel" role="tabpanel" style={{ textAlign: 'center' }}>
                <p className="ir-quote-tag" style={{ color: 'var(--ir-gold)', fontSize: '1.22rem', margin: '4px 0 8px' }}>
                  “Thank you, Universe, for easily and effortlessly…”
                </p>
                <p className="ir-quote-lead" style={{ maxWidth: 440, margin: '0 auto 12px' }}>
                  {PRODUCTS_DATA[3].subtitle}
                </p>
                <p className="ir-quote-lead" style={{ fontSize: '0.85rem' }}>
                  {PRODUCTS_DATA[3].lead2}
                </p>
              </div>
            )}

            {activeProductTabs.card === 'steps' && (
              <div className="ir-tab-content-panel" role="tabpanel">
                <span className="ir-block-label">Manifestation Practice</span>
                <div className="ir-stepper-grid" style={{ marginBottom: 14 }}>
                  {PRODUCTS_DATA[3].steps.map((st, i) => (
                    <div key={st} className="ir-step-item">
                      <span className="ir-step-circle">{i + 1}</span>
                      <span className="ir-step-name">{st}</span>
                    </div>
                  ))}
                </div>
                <div className="ir-feat-grid" style={{ margin: 0, border: 'none', paddingTop: 4 }}>
                  {PRODUCTS_DATA[3].features.map((feat) => (
                    <div key={feat} className="ir-feat-cell">
                      <span className="ir-feat-star">✦</span>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeProductTabs.card === 'pillars' && (
              <div className="ir-tab-content-panel" role="tabpanel">
                <span className="ir-block-label">Core Focus Areas</span>
                <div className="ir-pills" style={{ margin: '8px 0 14px' }}>
                  {PRODUCTS_DATA[3].pills.map((pill) => (
                    <span key={pill}>✦ {pill}</span>
                  ))}
                </div>
                <p className="ir-quote-lead">
                  Write what you are choosing to welcome into your life across health, relationships, career, or financial abundance.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────
          9. FIND YOUR INNER RESET (INTERACTIVE)
          ───────────────────────────────────────── */}
      <section className="ir-find">
        <div className="ir-wrap ir-text-center">
          <div className="ir-eyebrow ir-eyebrow-gold">
            <Sparkles size={13} />
            <span>Find Your Inner Reset</span>
          </div>
          <h2 className="ir-h2 ir-h2-light">What would you like to focus on?</h2>

          <div className="ir-tabs">
            {FOCUS_OPTIONS.map((f) => (
              <button
                key={f.id}
                type="button"
                className={`ir-tab-btn ${activeFocus.id === f.id ? 'on' : ''}`}
                onClick={() => setActiveFocus(f)}
              >
                {f.label}
              </button>
            ))}
          </div>

          {(() => {
            const comboProducts = (activeFocus.productIds || [])
              .map((id) => PRODUCTS_DATA.find((p) => p.id === id))
              .filter(Boolean);
            const comboTotal = comboProducts.reduce((sum, p) => sum + p.price, 0);

            return (
              <div className="ir-out">
                <div className="ir-out-eyebrow">
                  <Sparkles size={13} />
                  <span>SACRED INTENTION PAIRING</span>
                </div>
                <div className="ir-out-heading">
                  {activeFocus.recommendation.includes(' + ') ? (
                    <>
                      <span>{activeFocus.recommendation.split(' + ')[0]}</span>
                      <span className="ir-out-plus"> + </span>
                      <span className="ir-out-part-nowrap">{activeFocus.recommendation.split(' + ')[1]}</span>
                    </>
                  ) : (
                    activeFocus.recommendation
                  )}
                </div>
                <p className="ir-out-desc">{activeFocus.desc}</p>

                {/* Visual Combo Products Preview */}
                {comboProducts.length > 0 && (
                  <div className="ir-combo-container">
                    <div className="ir-combo-items-row">
                      {comboProducts.map((prod, idx) => (
                        <div key={prod.id} className="ir-combo-item-group">
                          {idx > 0 && (
                            <div className="ir-combo-sign" aria-hidden="true">
                              <span>+</span>
                            </div>
                          )}
                          <div
                            className="ir-combo-card"
                            onClick={() => handleScrollTo(prod.id)}
                            title={`Click to view ${prod.name}`}
                          >
                            <div className="ir-combo-img-wrap">
                              <img
                                src={prod.highlighted || prod.images[0]}
                                alt={prod.name}
                                className="ir-combo-img"
                                loading="lazy"
                              />
                            </div>
                            <div className="ir-combo-card-info">
                              <span className="ir-combo-card-tag">{prod.eyebrow}</span>
                              <h4 className="ir-combo-card-name">{prod.name}</h4>
                              <span className="ir-combo-card-price">₹{prod.price}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* One-Tap Combo Bar */}
                    <div className="ir-combo-action-footer">
                      <div className="ir-combo-meta">
                        <div className="ir-combo-total-badge">
                          <span className="ir-combo-total-text">Pair Ritual Value:</span>
                          <span className="ir-combo-total-num">₹{comboTotal}</span>
                        </div>
                        {comboTotal >= MIN_ORDER_AMOUNT && (
                          <span className="ir-combo-qual-badge">
                            <Check size={13} /> Eligible for Instant Checkout (Min ₹{MIN_ORDER_AMOUNT} Met)
                          </span>
                        )}
                      </div>

                      <div className="ir-combo-cta-group">
                        <button
                          type="button"
                          className="ir-btn ir-btn-gold ir-combo-add-both-btn"
                          onClick={() => handleAddComboToBag(activeFocus.productIds)}
                        >
                          <ShoppingBag size={17} /> Add Both to Sacred Bag (₹{comboTotal})
                        </button>
                        <button
                          type="button"
                          className="ir-btn-outline-ritual"
                          onClick={() => handleScrollTo(activeFocus.jumpId)}
                        >
                          Explore Details <ArrowRight size={14} />
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })()}
        </div>
      </section>

      {/* ─────────────────────────────────────────
          10. THE INNER RESET PHILOSOPHY
          ───────────────────────────────────────── */}
      <section className="ir-phil">
        <div className="ir-wrap ir-text-center">
          <div className="ir-eyebrow">
            <Sparkles size={13} />
            <span>The Inner Reset Philosophy</span>
          </div>
          <div className="ir-phil-content">
            <p>You don't have to change everything at once.</p>
            <p>Start with one intention.</p>
            <p>Create one small ritual.</p>
            <p>Repeat it every day.</p>
            <p>Take one aligned action.</p>
            <p className="ir-phil-accent">Small rituals. Powerful shifts.</p>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────
          11. CREATED BY SHAIFALY SANGAL
          ───────────────────────────────────────── */}
      <section className="ir-by">
        <div className="ir-wrap ir-text-center">
          <div className="ir-creator-card">
            <div className="ir-creator-visual">
              <div className="ir-creator-avatar-wrap">
                <img
                  src="/images/1683954830807.jpeg"
                  alt="Shaifaly Sangal - Life Healer, Coach & Author"
                  className="ir-creator-img"
                  loading="lazy"
                />
                <div className="ir-creator-badge" title="Certified Life Healer">✦</div>
              </div>
            </div>
            <div className="ir-creator-content">
              <div className="ir-eyebrow ir-eyebrow-gold">
                <Sparkles size={13} />
                <span>Created by Shaifaly Sangal</span>
              </div>
              <h2 className="ir-h2 ir-creator-name">Shaifaly Sangal</h2>
              <div className="ir-creator-role">Life Healer • Coach • Author</div>
              <p className="ir-lead ir-center-lead">
                Inner Reset was created to bring simple, meaningful intention practices into everyday life.
              </p>
              <div className="ir-big-accent">
                Your Intention. Your Energy. Your Shift.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────
          12. START YOUR INNER RESET (FINAL CTA)
          ───────────────────────────────────────── */}
      <section className="ir-final">
        <div className="ir-wrap ir-text-center">
          <div className="ir-eyebrow ir-eyebrow-gold">
            <Sparkles size={13} />
            <span>Start Your Inner Reset</span>
          </div>
          <h2 className="ir-h2 ir-h2-light">Which ritual will you choose today?</h2>
          <div style={{ marginTop: 32 }}>
            <button
              type="button"
              className="ir-btn ir-btn-light"
              onClick={() => handleScrollTo('collection')}
            >
              Shop the Collection
            </button>
          </div>
          <p className="ir-final-mantra">PAUSE. INTEND. RESET.</p>
        </div>
      </section>

      {/* ─────────────────────────────────────────
          TOAST NOTIFICATION
          ───────────────────────────────────────── */}
      {toast && (
        <div className="ir-toast" role="status" aria-live="polite">
          <div className="ir-toast-icon">
            <Check size={16} />
          </div>
          <span className="ir-toast-text">{toast.message}</span>
          <button
            type="button"
            className="ir-toast-close"
            onClick={() => setToast(null)}
            aria-label="Close notification"
          >
            <X size={15} />
          </button>
        </div>
      )}

      {/* ─────────────────────────────────────────
          LIGHTBOX MODAL
          ───────────────────────────────────────── */}
      {lightbox && (
        <LightboxModal
          imageSrc={
            PRODUCTS_DATA.find((p) => p.id === lightbox.productId)?.images[lightbox.imageIndex] || ''
          }
          altText="Product photo in high resolution"
          onClose={() => setLightbox(null)}
          hasNav={
            (PRODUCTS_DATA.find((p) => p.id === lightbox.productId)?.images.length || 0) > 1
          }
          onPrev={() => {
            const product = PRODUCTS_DATA.find((p) => p.id === lightbox.productId);
            if (!product) return;
            setLightbox({
              productId: lightbox.productId,
              imageIndex:
                (lightbox.imageIndex - 1 + product.images.length) % product.images.length,
            });
          }}
          onNext={() => {
            const product = PRODUCTS_DATA.find((p) => p.id === lightbox.productId);
            if (!product) return;
            setLightbox({
              productId: lightbox.productId,
              imageIndex: (lightbox.imageIndex + 1) % product.images.length,
            });
          }}
        />
      )}

      {/* ─────────────────────────────────────────
          FLOATING SACRED BAG BUTTON
          ───────────────────────────────────────── */}
      <button
        type="button"
        className={`ir-floating-bag ${cartCount > 0 ? 'has-items' : ''}`}
        onClick={() => setIsBagOpen(true)}
        aria-label="Open Sacred Bag"
      >
        <div className="ir-floating-bag-icon">
          <ShoppingBag size={20} />
          {cartCount > 0 && (
            <span className="ir-floating-bag-badge">{cartCount}</span>
          )}
        </div>
        <div className="ir-floating-bag-text">
          <span className="ir-floating-bag-label">Sacred Bag</span>
          <span className="ir-floating-bag-sub">
            {cartSubtotal > 0 ? `₹${cartSubtotal}` : 'Empty'}
          </span>
        </div>
      </button>

      {/* ─────────────────────────────────────────
          SACRED BAG SLIDE-OVER DRAWER
          ───────────────────────────────────────── */}
      {isBagOpen && (
        <div className="ir-drawer-overlay" onClick={() => setIsBagOpen(false)}>
          <div
            className="ir-drawer"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label="Sacred Bag"
          >
            {/* Header */}
            <div className="ir-drawer-header">
              <div className="ir-drawer-title-wrap">
                <ShoppingBag size={20} />
                <h3 className="ir-drawer-title">Your Sacred Bag</h3>
                <span className="ir-drawer-count">{cartCount} {cartCount === 1 ? 'item' : 'items'}</span>
              </div>
              <button
                type="button"
                className="ir-drawer-close"
                onClick={() => setIsBagOpen(false)}
                aria-label="Close bag"
              >
                <X size={20} />
              </button>
            </div>

            {/* Minimum Order Enforcement Banner */}
            <div className={`ir-min-order-status-card ${isOrderEligible ? 'success' : 'alert'}`}>
              <div className="ir-status-top">
                {isOrderEligible ? (
                  <Check size={18} className="ir-status-icon success" />
                ) : (
                  <AlertCircle size={18} className="ir-status-icon alert" />
                )}
                <div>
                  <div className="ir-status-title">
                    {isOrderEligible
                      ? '✓ Minimum Order Requirement Met!'
                      : `Minimum order of ₹${MIN_ORDER_AMOUNT} is required`}
                  </div>
                  <div className="ir-status-desc">
                    {isOrderEligible
                      ? `Your order total is ₹${cartSubtotal}. You are eligible to place this order.`
                      : `Add ₹${amountNeeded} more to reach the mandatory minimum order of ₹${MIN_ORDER_AMOUNT}.`}
                  </div>
                </div>
              </div>

              {/* Progress bar */}
              <div className="ir-min-order-bar">
                <div
                  className="ir-min-order-progress"
                  style={{ width: `${Math.min(100, Math.round((cartSubtotal / MIN_ORDER_AMOUNT) * 100))}%` }}
                />
              </div>
              <div className="ir-bar-meta">
                <span>₹{cartSubtotal} in bag</span>
                <span>₹{MIN_ORDER_AMOUNT} minimum</span>
              </div>
            </div>

            {/* Drawer Body / Items List */}
            <div className="ir-drawer-body">
              {cartItems.length === 0 ? (
                <div className="ir-empty-bag">
                  <div className="ir-empty-bag-icon">
                    <ShoppingBag size={42} strokeWidth={1.5} />
                  </div>
                  <p className="ir-empty-bag-title">Your Sacred Bag is Empty</p>
                  <p className="ir-empty-bag-sub">
                    Explore our intentional tools above and begin your daily reset ritual.
                  </p>
                  <button
                    type="button"
                    className="ir-btn ir-btn-solid"
                    onClick={() => {
                      setIsBagOpen(false);
                      handleScrollTo('collection');
                    }}
                    style={{ marginTop: 16 }}
                  >
                    Explore Rituals
                  </button>
                </div>
              ) : (
                <div className="ir-cart-list">
                  {cartItems.map((item) => (
                    <div key={item.id} className="ir-cart-item">
                      <img src={item.image} alt={item.name} className="ir-cart-item-img" />
                      <div className="ir-cart-item-info">
                        <div className="ir-cart-item-name">{item.name}</div>
                        <div className="ir-cart-item-unit">₹{item.price} each</div>
                        <div className="ir-cart-item-controls">
                          <div className="ir-cart-qty-pill">
                            <button
                              type="button"
                              onClick={() => handleUpdateCartItemQty(item.id, -1)}
                              aria-label="Decrease quantity"
                            >
                              −
                            </button>
                            <span>{item.count}</span>
                            <button
                              type="button"
                              onClick={() => handleUpdateCartItemQty(item.id, 1)}
                              aria-label="Increase quantity"
                            >
                              +
                            </button>
                          </div>
                          <span className="ir-cart-item-total">₹{item.price * item.count}</span>
                        </div>
                      </div>
                      <button
                        type="button"
                        className="ir-cart-item-del"
                        onClick={() => handleRemoveCartItem(item.id)}
                        aria-label="Remove item"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  ))}

                  {/* Quick-add buttons to easily fulfill minimum order */}
                  {!isOrderEligible && (
                    <div className="ir-quick-add-box">
                      <div className="ir-quick-add-label">Quickly reach ₹599:</div>
                      <div className="ir-quick-add-buttons">
                        <button
                          type="button"
                          className="ir-quick-add-btn"
                          onClick={() => handleAddToCart(PRODUCTS_DATA[1], 1)}
                        >
                          + Add Sticker (₹99)
                        </button>
                        <button
                          type="button"
                          className="ir-quick-add-btn"
                          onClick={() => handleAddToCart(PRODUCTS_DATA[0], 1)}
                        >
                          + Add Bottle (₹499)
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Drawer Footer */}
            {cartItems.length > 0 && (
              <div className="ir-drawer-footer">
                <div className="ir-drawer-summary-row">
                  <span>Bag Subtotal</span>
                  <span className="ir-summary-price">₹{cartSubtotal}</span>
                </div>
                <div className="ir-drawer-policy-note">
                  Courier shipping applicable as per delivery policy.
                </div>

                {isOrderEligible ? (
                  <button
                    type="button"
                    className="ir-checkout-submit-btn active"
                    onClick={() => {
                      setIsBagOpen(false);
                      setShowCheckoutModal(true);
                    }}
                  >
                    Proceed to Order (₹{cartSubtotal}) <ArrowRight size={16} />
                  </button>
                ) : (
                  <button
                    type="button"
                    className="ir-checkout-submit-btn disabled"
                    disabled
                  >
                    <Lock size={16} /> Add ₹{amountNeeded} More to Order (Min. ₹{MIN_ORDER_AMOUNT})
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      )}

      {/* ─────────────────────────────────────────
          CHECKOUT MODAL (WHEN SUBMITTING ORDER >= ₹599)
          ───────────────────────────────────────── */}
      {showCheckoutModal && (
        <div className="ir-modal-overlay" onClick={() => setShowCheckoutModal(false)}>
          <div
            className="ir-checkout-modal"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
          >
            <div className="ir-modal-header">
              <h3>Delivery &amp; Order Details</h3>
              <button
                type="button"
                className="ir-modal-close"
                onClick={() => setShowCheckoutModal(false)}
                aria-label="Close"
              >
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handlePlaceOrder} className="ir-checkout-form">
              <div className="ir-order-recap-banner">
                <div className="ir-recap-left">
                  <strong>Order Total: ₹{cartSubtotal}</strong>
                  <span>({cartCount} items • Meets ₹599 minimum)</span>
                </div>
                <div className="ir-recap-badge">
                  <Check size={14} /> Eligible
                </div>
              </div>

              <div className="ir-form-grid">
                <div className="ir-form-group">
                  <label>Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Shaifaly Sangal"
                    value={checkoutForm.name}
                    onChange={(e) =>
                      setCheckoutForm((f) => ({ ...f, name: e.target.value }))
                    }
                  />
                </div>
                <div className="ir-form-group">
                  <label>Phone / WhatsApp Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 9818884988"
                    value={checkoutForm.phone}
                    onChange={(e) =>
                      setCheckoutForm((f) => ({ ...f, phone: e.target.value }))
                    }
                  />
                </div>
              </div>

              <div className="ir-form-group">
                <label>Delivery Address *</label>
                <textarea
                  required
                  rows={2}
                  placeholder="House / Flat No., Street, Area / Landmark"
                  value={checkoutForm.address}
                  onChange={(e) =>
                    setCheckoutForm((f) => ({ ...f, address: e.target.value }))
                  }
                />
              </div>

              <div className="ir-form-grid">
                <div className="ir-form-group">
                  <label>City *</label>
                  <input
                    type="text"
                    required
                    placeholder="City"
                    value={checkoutForm.city}
                    onChange={(e) =>
                      setCheckoutForm((f) => ({ ...f, city: e.target.value }))
                    }
                  />
                </div>
                <div className="ir-form-group">
                  <label>PIN Code *</label>
                  <input
                    type="text"
                    required
                    placeholder="6-digit PIN"
                    value={checkoutForm.pincode}
                    onChange={(e) =>
                      setCheckoutForm((f) => ({ ...f, pincode: e.target.value }))
                    }
                  />
                </div>
              </div>

              <div className="ir-modal-actions">
                <button
                  type="button"
                  className="ir-btn ir-btn-outline"
                  onClick={() => setShowCheckoutModal(false)}
                >
                  Back to Bag
                </button>
                <button
                  type="submit"
                  className="ir-btn ir-btn-solid"
                  style={{ flex: 1 }}
                >
                  Confirm &amp; Place Order (₹{cartSubtotal})
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ─────────────────────────────────────────
          ORDER CONFIRMATION SUCCESS MODAL
          ───────────────────────────────────────── */}
      {orderConfirmed && (
        <div className="ir-modal-overlay" onClick={() => setOrderConfirmed(null)}>
          <div
            className="ir-checkout-modal ir-order-success-modal"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
          >
            <div className="ir-success-icon-wrap">
              <Check size={36} />
            </div>
            <h2>Order Placed Successfully!</h2>
            <p className="ir-order-num">Order Reference: <strong>#{orderConfirmed.orderId}</strong></p>
            <p className="ir-success-sub">
              Thank you, <strong>{orderConfirmed.customer.name}</strong>! Your Inner Reset order for ₹{orderConfirmed.subtotal} has been received. Our team will contact you shortly on <strong>{orderConfirmed.customer.phone}</strong> to confirm dispatch details.
            </p>

            <div className="ir-order-summary-box">
              <h4>Order Summary</h4>
              {orderConfirmed.items.map((it) => (
                <div key={it.id} className="ir-summary-line">
                  <span>{it.count} × {it.name}</span>
                  <span>₹{it.price * it.count}</span>
                </div>
              ))}
              <div className="ir-summary-total">
                <span>Total Amount</span>
                <span>₹{orderConfirmed.subtotal}</span>
              </div>
            </div>

            <button
              type="button"
              className="ir-btn ir-btn-solid"
              onClick={() => setOrderConfirmed(null)}
              style={{ width: '100%', marginTop: 20 }}
            >
              Continue Exploring
            </button>
          </div>
        </div>
      )}

      {/* ─────────────────────────────────────────
          PAGE STYLES (STICKING 100% TO SITE THEME)
          ───────────────────────────────────────── */}
      <style>{`
        /* ── Theme Tokens bound to website's current theme ── */
        .ir-page {
          --ir-bg: var(--bg-light, #fdfbf7);
          --ir-bg-alt: #f5efe4;
          --ir-ink: var(--text-main, #14303F);
          --ir-mute: var(--text-muted, #5d6f78);
          --ir-gold: var(--accent-gold, #B8935A);
          --ir-blue: #3F6E86;
          --ir-card: var(--glass-surface, #ffffff);
          --ir-line: rgba(20, 48, 63, 0.12);
          --ir-shadow: 0 16px 40px -15px rgba(20, 48, 63, 0.15);

          font-family: 'Plus Jakarta Sans', sans-serif;
          color: var(--ir-ink);
          background-color: var(--ir-bg);
          overflow-x: hidden;
          line-height: 1.7;
          width: 100%;
          max-width: 100vw;
          box-sizing: border-box;
        }

        .dark .ir-page, body.dark .ir-page {
          --ir-bg: var(--bg-dark, #0a0a0a);
          --ir-bg-alt: #131f26;
          --ir-ink: var(--text-main, #F3EBDD);
          --ir-mute: var(--text-muted, #9db0b9);
          --ir-gold: #e4c28d;
          --ir-blue: #60a5fa;
          --ir-card: rgba(26, 50, 63, 0.85);
          --ir-line: rgba(243, 235, 221, 0.14);
          --ir-shadow: 0 16px 40px -15px rgba(0, 0, 0, 0.6);
        }

        /* ── Typography & Headings ── */
        .ir-page h1, .ir-page h2, .ir-page h3 {
          font-family: 'Outfit', sans-serif;
          font-weight: 600;
          line-height: 1.15;
          color: var(--ir-ink);
          letter-spacing: -0.015em;
          overflow-wrap: break-word;
          word-break: break-word;
        }

        .ir-h2 {
          font-size: clamp(28px, 5.2vw, 52px);
          margin-bottom: 18px;
          overflow-wrap: break-word;
          word-break: break-word;
        }

        .ir-eyebrow {
          font-size: 11px;
          letter-spacing: 0.26em;
          text-transform: uppercase;
          color: var(--ir-gold);
          margin-bottom: 14px;
          font-weight: 700;
          display: inline-flex;
          align-items: center;
          gap: 6px;
        }

        .ir-eyebrow-light { color: #f3ebdd; }
        .ir-eyebrow-gold { color: #e4c28d; }

        .ir-lead {
          color: var(--ir-mute);
          font-size: 1.05rem;
          line-height: 1.8;
          max-width: 580px;
          overflow-wrap: break-word;
        }

        .ir-center-lead {
          margin: 0 auto;
        }

        .ir-text-center {
          text-align: center;
        }

        .ir-tag {
          font-family: 'Outfit', sans-serif;
          font-style: italic;
          font-size: 26px;
          color: var(--ir-gold);
          margin-bottom: 14px;
          overflow-wrap: break-word;
        }

        .ir-big-accent {
          font-family: 'Outfit', sans-serif;
          font-style: italic;
          font-size: clamp(24px, 4vw, 32px);
          color: var(--ir-blue);
          margin-top: 36px;
          overflow-wrap: break-word;
        }

        /* ── Common Layout Container ── */
        .ir-wrap {
          width: 100%;
          max-width: 1120px;
          margin: 0 auto;
          padding: 0 24px;
          box-sizing: border-box;
        }

        @media (max-width: 640px) {
          .ir-wrap {
            padding: 0 16px;
          }
        }

        section.ir-what,
        section.ir-collection-section,
        section.ir-prod-section,
        section.ir-find,
        section.ir-phil,
        section.ir-by,
        section.ir-final {
          padding: 88px 0;
        }

        .ir-section-alt {
          background-color: var(--ir-bg-alt);
        }

        /* ── Buttons ── */
        .ir-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 14px 34px;
          border: 1px solid var(--ir-ink);
          color: var(--ir-ink);
          text-decoration: none;
          font-size: 12px;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          font-weight: 700;
          position: relative;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.2, 0.8, 0.2, 1);
          z-index: 1;
          border-radius: 40px;
          background: transparent;
          cursor: pointer;
          font-family: inherit;
        }

        .ir-btn:before {
          content: "";
          position: absolute;
          inset: 0;
          background: var(--ir-ink);
          transform: translateY(101%);
          transition: transform 0.4s cubic-bezier(0.2, 0.8, 0.2, 1);
          z-index: -1;
        }

        .ir-btn:hover {
          color: var(--ir-bg);
          transform: translateY(-2px);
        }

        .ir-btn:hover:before {
          transform: none;
        }

        .ir-btn-solid {
          background: var(--ir-ink);
          color: var(--ir-bg);
        }

        .ir-btn-solid:before {
          background: var(--ir-gold);
        }

        .ir-btn-solid:hover {
          color: #ffffff;
        }

        .dark .ir-btn-solid,
        body.dark .ir-btn-solid {
          background: var(--ir-gold);
          border-color: var(--ir-gold);
          color: #0b171f;
          font-weight: 800;
        }

        .dark .ir-btn-solid:before,
        body.dark .ir-btn-solid:before {
          background: #ffffff;
        }

        .dark .ir-btn-solid:hover,
        body.dark .ir-btn-solid:hover {
          color: #0b171f;
        }

        .ir-btn-wa {
          border-color: #22c55e;
          color: #22c55e;
        }

        .ir-btn-wa:before {
          background: #22c55e;
        }

        .ir-btn-wa:hover {
          color: #ffffff;
        }

        .ir-btn-gold {
          background: var(--ir-gold);
          border-color: var(--ir-gold);
          color: #14303F;
        }

        .ir-btn-gold:before {
          background: #ffffff;
        }

        .ir-btn-gold:hover {
          color: #14303F;
        }

        .ir-btn-light {
          border-color: #F3EBDD;
          color: #F3EBDD;
        }

        .ir-btn-light:before {
          background: #F3EBDD;
        }

        .ir-btn-light:hover {
          color: #14303F;
        }

        /* ── 1. Hero ── */
        .ir-hero {
          padding: 64px 0 92px;
          position: relative;
          overflow: hidden;
        }

        .ir-hero-grid {
          display: grid;
          gap: 48px;
          align-items: center;
        }

        @media (min-width: 900px) {
          .ir-hero-grid {
            grid-template-columns: 1.1fr 1.15fr;
            gap: 40px;
          }
        }

        .ir-hero-title {
          font-size: clamp(48px, 8.5vw, 92px);
          letter-spacing: -0.025em;
          line-height: 1.05;
          margin-bottom: 6px;
        }

        .ir-hero-title em {
          color: var(--ir-blue);
          font-style: italic;
        }

        .ir-hero-sub {
          font-family: 'Outfit', sans-serif;
          font-style: italic;
          font-size: 26px;
          margin: 18px 0 12px;
          color: var(--ir-gold);
        }

        .ir-hero-actions {
          display: inline-flex;
          flex-direction: row;
          align-items: center;
          gap: 14px;
          flex-wrap: nowrap;
          margin-top: 32px;
          max-width: 100%;
        }

        .ir-hero-actions .ir-btn {
          white-space: nowrap;
          flex: 0 0 auto;
          padding: 13px 24px;
          font-size: 12px;
          letter-spacing: 0.14em;
          border-radius: 99px;
          transition: all 0.25s ease;
        }

        @media (max-width: 520px) {
          .ir-hero-actions {
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 8px;
            width: 100%;
          }
          .ir-hero-actions .ir-btn {
            flex: 1 1 50%;
            padding: 12px 10px;
            font-size: 11px;
            letter-spacing: 0.05em;
            justify-content: center;
            text-align: center;
          }
        }

        .ir-hero-visual {
          position: relative;
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .ir-hero-frame {
          position: relative;
          width: 100%;
          max-width: 620px;
          border-radius: 24px;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(184, 147, 90, 0.35);
          box-shadow: 0 24px 60px -15px rgba(20, 48, 63, 0.28);
          overflow: hidden;
          padding: 8px;
          transition: transform 0.4s ease, box-shadow 0.4s ease;
          animation: ir-float 8s ease-in-out infinite;
        }

        .dark .ir-hero-frame,
        body.dark .ir-hero-frame {
          background: rgba(18, 35, 46, 0.65);
          border: 1px solid rgba(228, 194, 141, 0.32);
          box-shadow: 0 28px 70px -15px rgba(0, 0, 0, 0.75);
        }

        .ir-hero-frame:hover {
          transform: translateY(-4px);
          box-shadow: 0 32px 75px -12px rgba(184, 147, 90, 0.45);
          border-color: var(--ir-gold, #e4c28d);
        }

        .ir-hero-img {
          width: 100%;
          height: auto;
          display: block;
          border-radius: 18px;
          object-fit: contain;
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .ir-hero-frame:hover .ir-hero-img {
          transform: scale(1.015);
        }

        .ir-hero-badge {
          position: absolute;
          bottom: 18px;
          right: 18px;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 6px 14px;
          border-radius: 99px;
          background: rgba(14, 28, 38, 0.88);
          border: 1px solid rgba(228, 194, 141, 0.4);
          color: var(--ir-gold, #e4c28d);
          font-size: 0.74rem;
          font-weight: 700;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.4);
          pointer-events: none;
        }

        @media (max-width: 640px) {
          .ir-hero {
            padding: 36px 0 60px;
          }
          .ir-hero-grid {
            gap: 32px;
          }
          .ir-hero-badge {
            bottom: 12px;
            right: 12px;
            font-size: 0.68rem;
            padding: 5px 10px;
          }
        }

        .ir-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.35;
          background: var(--ir-blue);
          width: 340px;
          height: 340px;
          top: -80px;
          right: -80px;
          z-index: 0;
          animation: ir-float 9s ease-in-out infinite;
          pointer-events: none;
        }

        @media (max-width: 640px) {
          .ir-orb {
            width: 200px;
            height: 200px;
            right: -30px;
            top: -40px;
          }
        }

        @keyframes ir-float {
          50% { transform: translateY(-12px); }
        }

        /* ── 2. Marquee ── */
        .ir-marq {
          background: var(--ir-ink);
          color: var(--ir-bg);
          overflow: hidden;
          padding: 18px 0;
          white-space: nowrap;
          border-top: 1px solid var(--ir-line);
          border-bottom: 1px solid var(--ir-line);
          width: 100%;
          max-width: 100vw;
          position: relative;
          box-sizing: border-box;
        }

        .ir-marq-track {
          display: inline-block;
          animation: ir-mq 28s linear infinite;
          font-family: 'Outfit', sans-serif;
          font-size: 22px;
          letter-spacing: 0.22em;
          font-weight: 500;
        }

        .ir-marq-track span {
          margin: 0 26px;
          color: var(--ir-gold);
        }

        @keyframes ir-mq {
          to { transform: translateX(-50%); }
        }

        /* ── 3. What is Inner Reset ── */
        .ir-what {
          background: var(--ir-bg-alt);
        }

        .ir-moments {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(min(100%, 220px), 1fr));
          gap: 16px;
          margin: 44px 0 34px;
          width: 100%;
          box-sizing: border-box;
        }

        @media (max-width: 520px) {
          .ir-moments {
            grid-template-columns: 1fr;
            gap: 12px;
            margin: 28px 0 24px;
          }
        }

        .ir-moment-card {
          padding: 28px 16px;
          border: 1px solid var(--ir-line);
          background: var(--ir-card);
          font-family: 'Outfit', sans-serif;
          font-size: 22px;
          border-radius: 16px;
          transition: transform 0.4s, border-color 0.4s, box-shadow 0.4s;
          color: var(--ir-ink);
          box-sizing: border-box;
          width: 100%;
          min-width: 0;
        }

        .ir-moment-card:hover {
          transform: translateY(-6px);
          border-color: var(--ir-gold);
          box-shadow: var(--ir-shadow);
        }

        /* ── 4. The Inner Reset Collection ── */
        .ir-collection-section {
          background: var(--ir-bg);
          width: 100%;
          overflow: hidden;
        }

        .ir-section-head {
          margin-bottom: 42px;
        }

        .ir-collection-grid {
          display: grid;
          gap: 24px;
          grid-template-columns: repeat(auto-fit, minmax(min(100%, 250px), 1fr));
          width: 100%;
          max-width: 100%;
          box-sizing: border-box;
        }

        @media (max-width: 600px) {
          .ir-collection-grid {
            grid-template-columns: 1fr;
            gap: 18px;
          }
        }

        .ir-collection-card {
          background: var(--ir-card);
          border: 1px solid var(--ir-line);
          border-radius: 22px;
          padding: 24px;
          text-decoration: none;
          color: inherit;
          display: flex;
          flex-direction: column;
          transition: transform 0.4s, box-shadow 0.4s, border-color 0.4s;
          width: 100%;
          max-width: 100%;
          min-width: 0;
          box-sizing: border-box;
        }

        @media (max-width: 480px) {
          .ir-collection-card {
            padding: 18px 16px;
            border-radius: 18px;
          }
        }

        .ir-collection-card:hover {
          transform: translateY(-8px);
          box-shadow: var(--ir-shadow);
          border-color: var(--ir-gold);
        }

        .ir-card-image-wrap {
          border-radius: 16px;
          overflow: hidden;
          aspect-ratio: 1;
          margin-bottom: 20px;
          background: var(--ir-bg-alt);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 12px;
          box-sizing: border-box;
          width: 100%;
          max-width: 100%;
        }

        .ir-card-image-wrap img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          transition: transform 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
          display: block;
        }

        .ir-collection-card:hover .ir-card-image-wrap img {
          transform: scale(1.03);
        }

        .ir-card-mockup {
          border-radius: 16px;
          aspect-ratio: 1;
          margin-bottom: 20px;
          background: linear-gradient(135deg, #f6e9d6, #ebd2b6);
          color: #14303F;
          display: grid;
          place-items: center;
          padding: 22px;
          text-align: center;
          font-family: 'Outfit', sans-serif;
          font-style: italic;
          font-size: 20px;
          line-height: 1.4;
          box-sizing: border-box;
          width: 100%;
        }

        .ir-card-title {
          font-size: 24px;
          margin-bottom: 8px;
          overflow-wrap: break-word;
        }

        .ir-card-desc {
          color: var(--ir-mute);
          font-size: 0.95rem;
          margin-bottom: 18px;
          overflow-wrap: break-word;
        }

        .ir-card-link {
          margin-top: auto;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 11px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          font-weight: 700;
          color: var(--ir-gold);
        }

        /* ── 5, 6, 7, 8. Product Deep Dives ── */
        .ir-prod-grid {
          display: grid;
          grid-template-columns: minmax(0, 1fr);
          gap: 36px;
          align-items: start;
          width: 100%;
          max-width: 100%;
          box-sizing: border-box;
        }

        .ir-gal {
          width: 100%;
          max-width: 100%;
          min-width: 0;
          box-sizing: border-box;
        }

        .ir-prod-info {
          width: 100%;
          max-width: 100%;
          min-width: 0;
          box-sizing: border-box;
        }

        @media (min-width: 860px) {
          .ir-prod-grid {
            grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
            gap: 48px;
          }
          .ir-prod-grid-rev .ir-gal {
            order: 2;
          }
          .ir-gal {
            position: sticky;
            top: 105px;
          }
        }

        .ir-gal-main {
          border-radius: 24px;
          overflow: hidden;
          background: var(--ir-bg-alt);
          aspect-ratio: 4/5;
          position: relative;
          box-shadow: var(--ir-shadow);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: aspect-ratio 0.3s ease;
        }

        .ir-main-landscape { aspect-ratio: 4/3; }
        .ir-main-square { aspect-ratio: 1; }
        .ir-main-video { aspect-ratio: 16/9 !important; }

        .ir-img-zoom-wrap {
          width: 100%;
          height: 100%;
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .ir-main-img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          transition: transform 1.2s cubic-bezier(0.2, 0.8, 0.2, 1);
          display: block;
          padding: 16px;
          box-sizing: border-box;
        }

        .ir-img-zoom-wrap:hover .ir-main-img {
          transform: scale(1.03);
        }

        .ir-zoom-btn {
          position: absolute;
          bottom: 14px;
          right: 14px;
          background: rgba(20, 48, 63, 0.6);
          color: #ffffff;
          border: none;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          display: grid;
          place-items: center;
          cursor: pointer;
          backdrop-filter: blur(8px);
          transition: background 0.3s;
        }

        .ir-zoom-btn:hover {
          background: var(--ir-gold);
          color: #14303F;
        }

        .ir-thumbs {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 14px;
        }

        .ir-thumb-btn {
          width: 68px;
          height: 68px;
          border: 2px solid transparent;
          border-radius: 12px;
          overflow: hidden;
          padding: 4px;
          box-sizing: border-box;
          cursor: pointer;
          opacity: 0.6;
          transition: opacity 0.3s, border-color 0.3s, transform 0.3s;
          background: var(--ir-bg-alt);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .ir-thumb-btn.on, .ir-thumb-btn:hover {
          opacity: 1;
          border-color: var(--ir-gold);
          transform: translateY(-2px);
        }

        .ir-thumb-btn img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          display: block;
        }

        .ir-video-thumb-btn {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background: var(--ir-ink);
          color: var(--ir-bg);
          font-size: 10px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          gap: 4px;
        }

        .ir-thumb-play-icon {
          color: var(--ir-gold);
        }

        /* ── Pills & Steps ── */
        .ir-pills {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin: 18px 0;
        }

        .ir-pills span {
          padding: 6px 16px;
          border: 1px solid var(--ir-line);
          border-radius: 30px;
          font-size: 11px;
          letter-spacing: 0.16em;
          font-weight: 600;
          color: var(--ir-mute);
          background: var(--ir-card);
          transition: all 0.3s;
        }

        .ir-pills span:hover {
          background: var(--ir-blue);
          color: #ffffff;
          border-color: var(--ir-blue);
        }

        .ir-steps {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin: 22px 0;
          font-family: 'Outfit', sans-serif;
          font-size: 22px;
        }

        .ir-steps b {
          font-weight: 600;
          color: var(--ir-blue);
        }

        .ir-feat {
          list-style: none;
          padding: 0;
          margin: 20px 0 28px;
          border-top: 1px solid var(--ir-line);
        }

        .ir-feat li {
          padding: 12px 0;
          border-bottom: 1px solid var(--ir-line);
          display: flex;
          gap: 12px;
          color: var(--ir-mute);
          font-size: 1rem;
        }

        .ir-feat li:before {
          content: "◦";
          color: var(--ir-gold);
          font-size: 1.3rem;
          line-height: 1;
        }

        .ir-words-card {
          margin: 18px 0;
          padding: 24px;
          background: var(--ir-card);
          border: 1px solid var(--ir-line);
          border-radius: 18px;
        }

        .ir-words-card p {
          font-family: 'Outfit', sans-serif;
          font-size: 24px;
          line-height: 1.4;
          margin: 4px 0;
          font-weight: 500;
          color: var(--ir-ink);
        }

        .ir-quote-card {
          margin: 18px 0;
          padding: 22px;
          border-radius: 16px;
          background: linear-gradient(135deg, rgba(246, 233, 214, 0.6), rgba(235, 210, 182, 0.4));
          font-family: 'Outfit', sans-serif;
          font-style: italic;
          font-size: 22px;
          color: var(--ir-ink);
          border-left: 3px solid var(--ir-gold);
        }

        .ir-cyc-badge {
          font-size: 11px;
          letter-spacing: 0.22em;
          font-weight: 700;
          color: var(--ir-gold);
          margin: 20px 0;
        }

        /* ── Intention Card Specific Rich Sections ── */
        .ir-subtitle {
          font-family: 'Outfit', sans-serif;
          font-size: 1.15rem;
          color: var(--ir-mute);
          margin-bottom: 20px;
          line-height: 1.5;
        }

        .ir-desires-block {
          background: var(--ir-card);
          border: 1px solid var(--ir-line);
          border-radius: 18px;
          padding: 22px;
          margin: 20px 0;
        }

        .ir-desires-label {
          font-size: 0.85rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--ir-gold);
          margin-bottom: 12px;
        }

        .ir-desires-list {
          display: flex;
          flex-direction: column;
          gap: 8px;
          margin-bottom: 14px;
        }

        .ir-desire-pill {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 0.95rem;
          color: var(--ir-ink);
          font-weight: 500;
        }

        .ir-desire-dot {
          color: var(--ir-gold);
          font-size: 11px;
        }

        .ir-desire-reflection {
          font-family: 'Outfit', sans-serif;
          font-style: italic;
          font-size: 1.05rem;
          color: var(--ir-blue);
          margin-top: 10px;
          line-height: 1.4;
        }

        .ir-prompt-ritual-card {
          margin: 24px 0;
          padding: 24px;
          border-radius: 20px;
          background: linear-gradient(135deg, rgba(184, 147, 90, 0.12), rgba(63, 110, 134, 0.1));
          border: 1px solid rgba(184, 147, 90, 0.35);
        }

        .ir-prompt-start-label {
          font-size: 0.82rem;
          font-weight: 700;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--ir-gold);
          margin-bottom: 8px;
        }

        .ir-prompt-quote {
          font-family: 'Outfit', sans-serif;
          font-style: italic;
          font-size: 1.35rem;
          font-weight: 600;
          color: var(--ir-ink);
          line-height: 1.35;
          margin-bottom: 8px;
        }

        .ir-prompt-sub {
          font-size: 0.92rem;
          color: var(--ir-mute);
          margin-bottom: 14px;
        }

        .ir-prompt-mantra {
          font-family: 'Outfit', sans-serif;
          font-size: 1rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          color: var(--ir-gold);
          text-transform: uppercase;
        }

        .ir-card-guide-section {
          margin: 32px 0;
        }

        .ir-guide-title {
          font-family: 'Outfit', sans-serif;
          font-size: 1.4rem;
          font-weight: 700;
          color: var(--ir-ink);
          margin-bottom: 18px;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .ir-guide-steps {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .ir-guide-step-card {
          display: flex;
          gap: 16px;
          align-items: flex-start;
          padding: 16px 18px;
          border-radius: 16px;
          background: var(--ir-card);
          border: 1px solid var(--ir-line);
          transition: transform 0.3s, border-color 0.3s;
        }

        .ir-guide-step-card:hover {
          transform: translateX(4px);
          border-color: var(--ir-gold);
        }

        .ir-step-num-badge {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: var(--ir-bg-alt);
          border: 1px solid var(--ir-gold);
          color: var(--ir-gold);
          display: grid;
          place-items: center;
          font-weight: 800;
          font-size: 0.85rem;
          flex-shrink: 0;
        }

        .ir-step-content {
          flex: 1;
        }

        .ir-step-name {
          font-family: 'Outfit', sans-serif;
          font-size: 1.05rem;
          font-weight: 700;
          letter-spacing: 0.06em;
          color: var(--ir-ink);
          margin-bottom: 4px;
        }

        .ir-step-desc {
          font-size: 0.9rem;
          color: var(--ir-mute);
          line-height: 1.55;
          margin: 0;
        }

        .ir-inspiration-box {
          margin: 32px 0;
          padding: 24px;
          background: var(--ir-card);
          border: 1px solid var(--ir-line);
          border-radius: 20px;
        }

        .ir-inspire-head {
          margin-bottom: 16px;
        }

        .ir-inspire-sub {
          display: block;
          font-size: 0.86rem;
          color: var(--ir-mute);
          margin-top: 4px;
        }

        .ir-inspire-tabs {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 18px;
        }

        .ir-inspire-tab-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 7px 14px;
          border-radius: 99px;
          border: 1px solid var(--ir-line);
          background: var(--ir-bg-alt);
          color: var(--ir-ink);
          font-size: 0.82rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.25s;
        }

        .ir-inspire-tab-btn.active, .ir-inspire-tab-btn:hover {
          background: var(--ir-ink);
          color: var(--ir-bg);
          border-color: var(--ir-ink);
        }

        .ir-inspire-card {
          padding: 20px;
          border-radius: 16px;
          background: var(--ir-bg-alt);
          border-left: 4px solid var(--ir-gold);
          margin-bottom: 16px;
          animation: ir-fade-up 0.3s ease;
        }

        .ir-inspire-card-tag {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.72rem;
          letter-spacing: 0.18em;
          font-weight: 800;
          color: var(--ir-gold);
          margin-bottom: 8px;
        }

        .ir-inspire-quote {
          font-family: 'Outfit', sans-serif;
          font-style: italic;
          font-size: 1.15rem;
          line-height: 1.5;
          color: var(--ir-ink);
          margin: 0;
        }

        .ir-remember-note {
          font-size: 0.85rem;
          color: var(--ir-mute);
          line-height: 1.5;
          padding-top: 12px;
          border-top: 1px dashed var(--ir-line);
        }

        .ir-remember-note strong {
          color: var(--ir-gold);
        }

        .ir-daily-ritual-section {
          margin: 32px 0;
        }

        .ir-places-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 18px;
        }

        .ir-place-tag {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 6px 14px;
          border-radius: 99px;
          background: var(--ir-card);
          border: 1px solid var(--ir-line);
          font-size: 0.84rem;
          font-weight: 600;
          color: var(--ir-mute);
        }

        .ir-daily-question-card {
          padding: 22px;
          border-radius: 18px;
          background: linear-gradient(135deg, rgba(63, 110, 134, 0.12), rgba(20, 48, 63, 0.08));
          border: 1px solid var(--ir-line);
        }

        .ir-dq-lead {
          font-size: 0.9rem;
          color: var(--ir-mute);
          margin-bottom: 10px;
        }

        .ir-dq-question {
          font-family: 'Outfit', sans-serif;
          font-style: italic;
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--ir-ink);
          line-height: 1.35;
          margin-bottom: 10px;
        }

        .ir-dq-sub {
          font-size: 0.86rem;
          color: var(--ir-mute);
          margin: 0;
          line-height: 1.5;
        }

        .ir-closing-shift-badge {
          margin: 28px 0;
          padding: 20px;
          border-radius: 18px;
          background: var(--ir-ink);
          color: var(--ir-bg);
          text-align: center;
        }

        .ir-cs-title {
          font-family: 'Outfit', sans-serif;
          font-size: 1.05rem;
          font-weight: 800;
          letter-spacing: 0.18em;
          color: var(--ir-gold);
          margin-bottom: 6px;
        }

        .ir-cs-line {
          font-size: 0.85rem;
          color: rgba(243, 235, 221, 0.8);
          margin-bottom: 8px;
        }

        .ir-cs-mantra {
          font-size: 0.78rem;
          letter-spacing: 0.3em;
          font-weight: 700;
          color: #ffffff;
        }

        .ir-card-mantra-box {
          margin-top: 20px;
          padding: 20px;
          border-radius: 18px;
          background: var(--ir-card);
          border: 1px solid var(--ir-line);
          text-align: center;
        }

        .ir-mantra-eyebrow {
          font-size: 0.72rem;
          letter-spacing: 0.2em;
          font-weight: 800;
          color: var(--ir-gold);
          margin-bottom: 8px;
        }

        .ir-mantra-quote {
          font-family: 'Outfit', sans-serif;
          font-style: italic;
          font-size: 1.1rem;
          color: var(--ir-ink);
          line-height: 1.4;
          margin-bottom: 12px;
        }

        .ir-mantra-footer {
          display: flex;
          justify-content: center;
          gap: 12px;
          font-size: 0.75rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          font-weight: 700;
          color: var(--ir-blue);
        }

        /* ── Action / Commerce Bar ── */
        .ir-action-bar {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          align-items: center;
          margin-top: 32px;
        }

        .ir-qty-box {
          display: inline-flex;
          align-items: center;
          border: 1px solid var(--ir-line);
          background: var(--ir-card);
          border-radius: 40px;
          padding: 4px 8px;
        }

        .ir-qty-box button {
          background: transparent;
          border: none;
          width: 32px;
          height: 32px;
          cursor: pointer;
          font-size: 18px;
          color: var(--ir-ink);
          display: grid;
          place-items: center;
          border-radius: 50%;
          transition: background 0.2s;
        }

        .ir-qty-box button:hover {
          background: var(--ir-bg-alt);
        }

        .ir-qty-box span {
          width: 30px;
          text-align: center;
          font-weight: 700;
          font-size: 15px;
          color: var(--ir-ink);
        }

        /* ── Video Player ── */
        .ir-video-wrapper {
          position: relative;
          width: 100%;
          height: 100%;
          background: #000;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .ir-video-element {
          width: 100%;
          height: 100%;
          object-fit: contain;
          display: block;
        }

        .ir-video-play-btn {
          position: absolute;
          inset: 0;
          margin: auto;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          border: none;
          background: rgba(20, 48, 63, 0.8);
          color: #ffffff;
          display: grid;
          place-items: center;
          cursor: pointer;
          backdrop-filter: blur(8px);
          transition: transform 0.3s, background 0.3s, opacity 0.3s;
        }

        .ir-video-play-btn:hover {
          background: var(--ir-gold);
          color: #14303F;
          transform: scale(1.1);
        }

        .ir-video-play-btn.playing {
          opacity: 0;
          pointer-events: none;
        }

        .ir-video-wrapper:hover .ir-video-play-btn.playing {
          opacity: 0.85;
          pointer-events: auto;
        }

        .ir-video-badge {
          position: absolute;
          top: 14px;
          left: 14px;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 5px 12px;
          border-radius: 99px;
          background: rgba(20, 48, 63, 0.75);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          color: #ffffff;
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          pointer-events: none;
          z-index: 2;
        }

        .ir-video-live-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #22c55e;
          box-shadow: 0 0 8px #22c55e;
          animation: ir-pulse 2s infinite;
        }

        @keyframes ir-pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(0.85); }
        }

        .ir-spinner {
          width: 22px;
          height: 22px;
          border: 2px solid rgba(255, 255, 255, 0.3);
          border-top-color: #ffffff;
          border-radius: 50%;
          animation: ir-spin 0.7s linear infinite;
        }

        @keyframes ir-spin {
          to { transform: rotate(360deg); }
        }

        /* ── 9. Find Your Inner Reset ── */
        .ir-find {
          background: #14303F;
          color: #F3EBDD;
          position: relative;
        }

        .dark .ir-find,
        body.dark .ir-find {
          background: #08131a;
          color: #F3EBDD;
        }

        .ir-h2-light {
          color: #ffffff !important;
        }

        .dark .ir-h2-light,
        body.dark .ir-h2-light {
          color: #F8F5EE !important;
        }

        .ir-tabs {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 12px;
          margin: 32px 0;
        }

        .ir-tab-btn {
          background: rgba(255, 255, 255, 0.06);
          color: #F3EBDD;
          border: 1px solid rgba(228, 194, 141, 0.32);
          padding: 12px 26px;
          border-radius: 40px;
          font-family: inherit;
          font-size: 13px;
          letter-spacing: 0.16em;
          cursor: pointer;
          transition: all 0.3s;
        }

        .dark .ir-tab-btn,
        body.dark .ir-tab-btn {
          background: rgba(255, 255, 255, 0.08);
          color: #F8F5EE;
          border-color: rgba(228, 194, 141, 0.35);
        }

        .ir-tab-btn.on, .ir-tab-btn:hover {
          background: linear-gradient(135deg, #e4c28d 0%, #b8935a 100%);
          border-color: #e4c28d;
          color: #08131a !important;
          font-weight: 800;
          transform: translateY(-2px);
          box-shadow: 0 4px 18px rgba(184, 147, 90, 0.4);
        }

        .dark .ir-tab-btn.on,
        body.dark .ir-tab-btn.on {
          background: linear-gradient(135deg, #f0d5a8 0%, #c49f65 100%);
          border-color: #f0d5a8;
          color: #060e14 !important;
          font-weight: 800;
        }

        .ir-out {
          max-width: 820px;
          margin: 0 auto;
          padding: 34px 30px;
          border: 1px solid rgba(228, 194, 141, 0.28);
          border-radius: 26px;
          background: rgba(20, 38, 50, 0.6);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          animation: ir-fade-up 0.4s ease-out;
          box-shadow: 0 16px 45px rgba(0, 0, 0, 0.35);
        }

        .dark .ir-out,
        body.dark .ir-out {
          background: rgba(12, 25, 34, 0.85);
          border: 1px solid rgba(228, 194, 141, 0.32);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.55);
        }

        @keyframes ir-fade-up {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .ir-out-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.72rem;
          font-weight: 800;
          letter-spacing: 0.18em;
          color: var(--ir-gold, #e4c28d);
          margin-bottom: 12px;
          text-transform: uppercase;
        }

        .ir-out-heading {
          font-family: 'Outfit', sans-serif;
          font-size: clamp(20px, 2.7vw, 32px);
          color: #ffffff;
          margin-bottom: 12px;
          font-weight: 700;
          letter-spacing: -0.01em;
          line-height: 1.25;
        }

        .dark .ir-out-heading,
        body.dark .ir-out-heading {
          color: #F8F5EE;
        }

        @media (min-width: 680px) {
          .ir-out-heading {
            white-space: nowrap;
          }
        }

        .ir-out-plus {
          color: var(--ir-gold, #e4c28d);
          margin: 0 4px;
          font-weight: 800;
        }

        .ir-out-part-nowrap {
          white-space: nowrap;
        }

        .ir-out-desc {
          color: #c9dbe6;
          font-size: 1.02rem;
          line-height: 1.7;
          margin-bottom: 24px;
          max-width: 640px;
          margin-left: auto;
          margin-right: auto;
        }

        .dark .ir-out-desc,
        body.dark .ir-out-desc {
          color: #cddfe9;
        }

        /* ── Combo Showcase in Find Your Inner Reset ── */
        .ir-combo-container {
          margin-top: 24px;
          padding: 24px 24px 20px;
          border-radius: 20px;
          background: rgba(9, 19, 27, 0.88);
          border: 1px solid rgba(228, 194, 141, 0.35);
          box-shadow: 0 12px 36px rgba(0, 0, 0, 0.45);
          text-align: left;
        }

        .dark .ir-combo-container,
        body.dark .ir-combo-container {
          background: rgba(6, 14, 20, 0.94);
          border: 1px solid rgba(228, 194, 141, 0.38);
          box-shadow: 0 16px 45px rgba(0, 0, 0, 0.65);
        }

        .ir-combo-items-row {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
          flex-wrap: wrap;
          margin-bottom: 20px;
        }

        .ir-combo-item-group {
          display: flex;
          align-items: center;
          gap: 16px;
          flex: 1;
          min-width: 250px;
        }

        .ir-combo-sign {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 34px;
          height: 34px;
          border-radius: 50%;
          background: rgba(184, 147, 90, 0.22);
          border: 1.5px solid var(--ir-gold, #e4c28d);
          color: var(--ir-gold, #e4c28d);
          font-size: 1.2rem;
          font-weight: 800;
          flex-shrink: 0;
        }

        .ir-combo-card {
          flex: 1;
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 12px 16px;
          border-radius: 16px;
          background: rgba(20, 39, 52, 0.8);
          border: 1px solid rgba(255, 255, 255, 0.12);
          cursor: pointer;
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .dark .ir-combo-card,
        body.dark .ir-combo-card {
          background: rgba(16, 32, 43, 0.9);
          border: 1px solid rgba(228, 194, 141, 0.22);
        }

        .ir-combo-card:hover {
          transform: translateY(-2px);
          background: rgba(28, 54, 70, 0.95);
          border-color: var(--ir-gold, #e4c28d);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.45);
        }

        .dark .ir-combo-card:hover,
        body.dark .ir-combo-card:hover {
          background: rgba(22, 44, 58, 0.98);
          border-color: #e4c28d;
        }

        .ir-combo-img-wrap {
          width: 56px;
          height: 56px;
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.08);
          padding: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          border: 1px solid rgba(228, 194, 141, 0.22);
        }

        .dark .ir-combo-img-wrap,
        body.dark .ir-combo-img-wrap {
          background: rgba(0, 0, 0, 0.4);
          border: 1px solid rgba(228, 194, 141, 0.25);
        }

        .ir-combo-img {
          max-width: 100%;
          max-height: 100%;
          object-fit: contain;
        }

        .ir-combo-card-info {
          display: flex;
          flex-direction: column;
          min-width: 0;
        }

        .ir-combo-card-tag {
          font-size: 0.68rem;
          letter-spacing: 0.08em;
          color: var(--ir-gold, #e4c28d);
          font-weight: 700;
          text-transform: uppercase;
        }

        .ir-combo-card-name {
          font-family: 'Outfit', sans-serif;
          font-size: 0.95rem;
          font-weight: 700;
          color: #ffffff;
          margin: 2px 0 4px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .dark .ir-combo-card-name,
        body.dark .ir-combo-card-name {
          color: #F8F5EE;
        }

        .ir-combo-card-price {
          font-family: 'Outfit', sans-serif;
          font-size: 1rem;
          font-weight: 800;
          color: var(--ir-gold, #e4c28d);
        }

        .ir-combo-action-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          flex-wrap: wrap;
          padding-top: 18px;
          border-top: 1px dashed rgba(228, 194, 141, 0.25);
        }

        .ir-combo-meta {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .ir-combo-total-badge {
          display: flex;
          align-items: baseline;
          gap: 8px;
        }

        .ir-combo-total-text {
          font-size: 0.8rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: #a4bac8;
        }

        .ir-combo-total-num {
          font-family: 'Outfit', sans-serif;
          font-size: 1.65rem;
          font-weight: 800;
          color: #ffffff;
          line-height: 1;
        }

        .dark .ir-combo-total-num,
        body.dark .ir-combo-total-num {
          color: #F8F5EE;
        }

        .ir-combo-qual-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.78rem;
          color: #4ade80;
          font-weight: 700;
        }

        .ir-combo-cta-group {
          display: inline-flex;
          flex-direction: row;
          align-items: center;
          gap: 12px;
          flex-wrap: nowrap;
        }

        .ir-combo-cta-group .ir-btn,
        .ir-combo-cta-group .ir-btn-outline-ritual,
        .ir-combo-add-both-btn {
          white-space: nowrap;
          flex: 0 0 auto;
        }

        .ir-combo-add-both-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-weight: 800;
          padding: 13px 26px;
          border-radius: 99px;
          border: none;
          background: linear-gradient(135deg, #e4c28d 0%, #b8935a 100%);
          color: #08131a !important;
          box-shadow: 0 4px 18px rgba(184, 147, 90, 0.4);
          transition: transform 0.2s, box-shadow 0.2s;
          cursor: pointer;
        }

        .ir-combo-add-both-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 26px rgba(184, 147, 90, 0.55);
        }

        .dark .ir-combo-add-both-btn,
        body.dark .ir-combo-add-both-btn {
          background: linear-gradient(135deg, #f0d5a8 0%, #c49f65 100%);
          color: #060e14 !important;
          box-shadow: 0 4px 20px rgba(228, 194, 141, 0.45);
        }

        .ir-btn-outline-ritual {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 13px 24px;
          border-radius: 99px;
          border: 1px solid rgba(228, 194, 141, 0.45);
          background: rgba(255, 255, 255, 0.06);
          color: #ffffff !important;
          font-family: inherit;
          font-size: 0.88rem;
          font-weight: 700;
          letter-spacing: 0.03em;
          cursor: pointer;
          text-decoration: none;
          transition: all 0.25s ease;
        }

        .ir-btn-outline-ritual:hover {
          background: rgba(228, 194, 141, 0.2);
          border-color: var(--ir-gold, #e4c28d);
          color: #ffffff !important;
          transform: translateY(-2px);
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.4);
        }

        .dark .ir-btn-outline-ritual,
        body.dark .ir-btn-outline-ritual {
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(228, 194, 141, 0.45);
          color: #ffffff !important;
        }

        .dark .ir-btn-outline-ritual:hover,
        body.dark .ir-btn-outline-ritual:hover {
          background: rgba(228, 194, 141, 0.25);
          border-color: #f0d5a8;
          color: #ffffff !important;
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.6);
        }

        .ir-btn-outline-ritual svg {
          color: #ffffff !important;
          stroke: #ffffff !important;
          transition: transform 0.2s ease;
        }

        .ir-btn-outline-ritual:hover svg {
          transform: translateX(3px);
        }

        @media (max-width: 640px) {
          .ir-out {
            padding: 24px 18px;
          }
          .ir-combo-container {
            padding: 18px 14px;
          }
          .ir-combo-items-row {
            flex-direction: column;
            gap: 10px;
          }
          .ir-combo-item-group {
            flex-direction: column;
            width: 100%;
            gap: 10px;
            min-width: 0;
          }
          .ir-combo-card {
            width: 100%;
          }
          .ir-combo-action-footer {
            flex-direction: column;
            align-items: stretch;
            text-align: center;
          }
          .ir-combo-meta {
            align-items: center;
            text-align: center;
          }
          .ir-combo-cta-group {
            display: flex;
            flex-direction: column;
            align-items: stretch;
            gap: 10px;
            width: 100%;
          }
          .ir-combo-cta-group .ir-combo-add-both-btn {
            width: 100%;
            justify-content: center;
            font-size: 0.88rem;
            padding: 13px 18px;
            white-space: normal;
            text-align: center;
            box-sizing: border-box;
          }
          .ir-combo-cta-group .ir-btn-outline-ritual {
            width: 100%;
            justify-content: center;
            font-size: 0.88rem;
            padding: 12px 18px;
            white-space: normal;
            text-align: center;
            box-sizing: border-box;
          }
        }

        /* ── 10. Philosophy ── */
        .ir-phil-content p {
          font-family: 'Outfit', sans-serif;
          font-size: clamp(24px, 4vw, 36px);
          margin: 8px 0;
          line-height: 1.35;
          font-weight: 500;
        }

        .ir-phil-accent {
          color: var(--ir-blue) !important;
          font-style: italic;
          margin-top: 26px !important;
        }

        /* ── 11. Created by Shaifaly ── */
        .ir-by {
          background: var(--ir-bg-alt);
          position: relative;
          padding: 96px 0;
        }

        .dark .ir-by,
        body.dark .ir-by {
          background: #09131a;
        }

        .ir-creator-card {
          max-width: 680px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .ir-creator-visual {
          position: relative;
          margin-bottom: 24px;
        }

        .ir-creator-avatar-wrap {
          position: relative;
          width: 170px;
          height: 170px;
          border-radius: 50%;
          padding: 6px;
          background: linear-gradient(135deg, rgba(228, 194, 141, 0.9) 0%, rgba(184, 147, 90, 0.35) 100%);
          box-shadow: 0 16px 45px -8px rgba(184, 147, 90, 0.45);
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease;
        }

        .ir-creator-avatar-wrap:hover {
          transform: translateY(-4px) scale(1.02);
          box-shadow: 0 22px 50px -6px rgba(184, 147, 90, 0.6);
        }

        .ir-creator-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center 15%;
          border-radius: 50%;
          display: block;
          border: 3px solid var(--ir-card);
        }

        .ir-creator-badge {
          position: absolute;
          bottom: 4px;
          right: 4px;
          width: 34px;
          height: 34px;
          border-radius: 50%;
          background: linear-gradient(135deg, #e4c28d, #b8935a);
          color: #0b171f;
          display: grid;
          place-items: center;
          font-weight: 800;
          font-size: 0.95rem;
          border: 2.5px solid var(--ir-card);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.35);
        }

        .ir-creator-name {
          font-family: 'Outfit', sans-serif;
          font-size: clamp(30px, 4.5vw, 46px);
          font-weight: 700;
          margin: 6px 0 6px;
          color: var(--ir-ink);
        }

        .ir-creator-role {
          font-size: 0.88rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          font-weight: 700;
          color: var(--ir-gold);
          margin-bottom: 18px;
        }

        /* ── 12. Final Banner ── */
        .ir-final {
          background: linear-gradient(160deg, var(--ir-blue), #14303F);
          color: #F3EBDD;
        }

        .ir-final-mantra {
          margin-top: 48px;
          letter-spacing: 0.32em;
          font-size: 13px;
          color: rgba(243, 235, 221, 0.7);
        }

        /* ── Toast ── */
        .ir-toast {
          position: fixed;
          bottom: 32px;
          right: 24px;
          background: var(--ir-card);
          border: 1px solid var(--ir-gold);
          border-radius: 50px;
          padding: 12px 20px;
          display: flex;
          align-items: center;
          gap: 12px;
          color: var(--ir-ink);
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.25);
          z-index: 1000;
          animation: ir-toast-in 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        @keyframes ir-toast-in {
          from { opacity: 0; transform: translateY(20px) scale(0.92); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }

        .ir-toast-icon {
          width: 26px;
          height: 26px;
          border-radius: 50%;
          background: var(--ir-gold);
          color: #14303F;
          display: grid;
          place-items: center;
          flex-shrink: 0;
        }

        .ir-toast-text {
          font-size: 13px;
          font-weight: 600;
        }

        .ir-toast-close {
          background: transparent;
          border: none;
          color: var(--ir-mute);
          cursor: pointer;
          display: grid;
          place-items: center;
          padding: 2px;
        }

        /* ── Lightbox Modal ── */
        .ir-lightbox-overlay {
          position: fixed;
          inset: 0;
          background: rgba(10, 15, 20, 0.88);
          backdrop-filter: blur(12px);
          z-index: 2000;
          display: grid;
          place-items: center;
          padding: 24px;
        }

        .ir-lightbox-content {
          position: relative;
          max-width: 90vw;
          max-height: 90vh;
        }

        .ir-lightbox-img {
          max-width: 85vw;
          max-height: 85vh;
          width: auto;
          height: auto;
          border-radius: 16px;
          object-fit: contain;
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.5);
          display: block;
        }

        .ir-lightbox-close {
          position: absolute;
          top: -46px;
          right: 0;
          background: transparent;
          border: none;
          color: #ffffff;
          cursor: pointer;
          transition: transform 0.2s;
        }

        .ir-lightbox-close:hover {
          transform: scale(1.2);
          color: var(--ir-gold);
        }

        .ir-lightbox-nav {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(20, 48, 63, 0.6);
          color: #ffffff;
          border: none;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          display: grid;
          place-items: center;
          cursor: pointer;
          transition: background 0.2s;
        }

        .ir-lightbox-nav.prev { left: -60px; }
        .ir-lightbox-nav.next { right: -60px; }

        .ir-lightbox-nav:hover {
          background: var(--ir-gold);
          color: #14303F;
        }

        @media (max-width: 768px) {
          .ir-lightbox-nav.prev { left: 8px; }
          .ir-lightbox-nav.next { right: 8px; }
        }

        /* ── Price Display & Minimum Order Badges ── */
        .ir-hero-min-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin-top: 20px;
          padding: 8px 18px;
          border-radius: 99px;
          background: rgba(184, 147, 90, 0.12);
          border: 1px solid rgba(184, 147, 90, 0.35);
          color: var(--ir-gold);
          font-size: 0.85rem;
          font-weight: 600;
          letter-spacing: 0.02em;
        }

        .ir-btn-bag-trigger {
          background: var(--ir-card);
          color: var(--ir-ink);
          border: 1px solid var(--ir-line);
        }

        .ir-btn-bag-trigger:hover {
          border-color: var(--ir-gold);
          color: var(--ir-gold);
        }

        .ir-card-image-wrap, .ir-card-mockup {
          position: relative;
        }

        .ir-card-price-pill {
          position: absolute;
          top: 12px;
          right: 12px;
          background: rgba(20, 48, 63, 0.85);
          color: #ffffff;
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          font-size: 0.82rem;
          font-weight: 700;
          padding: 4px 12px;
          border-radius: 99px;
          letter-spacing: 0.03em;
          border: 1px solid rgba(255, 255, 255, 0.15);
          z-index: 2;
        }

        .ir-card-footer {
          margin-top: auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 12px;
          border-top: 1px dashed var(--ir-line);
          flex-wrap: wrap;
          gap: 8px;
        }

        .ir-card-link {
          margin-top: auto;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 11px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          font-weight: 700;
          color: var(--ir-gold);
          white-space: nowrap;
        }

        .ir-card-price-display {
          font-family: 'Outfit', sans-serif;
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--ir-ink);
        }

        .ir-price-badge-row {
          display: flex;
          align-items: center;
          gap: 12px;
          margin: 12px 0 16px;
        }

        .ir-price-num {
          font-family: 'Outfit', sans-serif;
          font-size: clamp(2rem, 3.5vw, 2.5rem);
          font-weight: 800;
          color: var(--ir-ink);
          line-height: 1;
        }

        .ir-min-order-tag {
          font-size: 0.78rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          padding: 4px 10px;
          border-radius: 99px;
          background: rgba(184, 147, 90, 0.15);
          color: var(--ir-gold);
          border: 1px solid rgba(184, 147, 90, 0.3);
        }

        /* ── Floating Sacred Bag Button ── */
        .ir-floating-bag {
          position: fixed;
          bottom: 28px;
          right: 28px;
          z-index: 990;
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 10px 20px 10px 14px;
          border-radius: 99px;
          background: rgba(20, 48, 63, 0.92);
          color: #ffffff;
          border: 1px solid rgba(255, 255, 255, 0.2);
          box-shadow: 0 12px 36px rgba(0, 0, 0, 0.25);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          cursor: pointer;
          transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.3s;
        }

        @media (max-width: 600px) {
          .ir-floating-bag {
            bottom: 18px;
            right: 14px;
            padding: 8px 14px 8px 10px;
            gap: 8px;
          }
          .ir-floating-bag-label {
            font-size: 0.78rem;
          }
          .ir-floating-bag-sub {
            font-size: 0.7rem;
          }
        }

        .ir-floating-bag:hover {
          transform: translateY(-3px) scale(1.03);
          box-shadow: 0 16px 42px rgba(0, 0, 0, 0.32);
        }

        .ir-floating-bag.has-items {
          background: linear-gradient(135deg, #14303F 0%, #224b61 100%);
          border-color: var(--ir-gold);
        }

        .ir-floating-bag-icon {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .ir-floating-bag-badge {
          position: absolute;
          top: -8px;
          right: -8px;
          background: var(--ir-gold);
          color: #14303F;
          font-size: 0.72rem;
          font-weight: 800;
          width: 18px;
          height: 18px;
          border-radius: 50%;
          display: grid;
          place-items: center;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
        }

        .ir-floating-bag-text {
          display: flex;
          flex-direction: column;
          line-height: 1.15;
          text-align: left;
        }

        .ir-floating-bag-label {
          font-size: 0.84rem;
          font-weight: 700;
          letter-spacing: 0.02em;
        }

        .ir-floating-bag-sub {
          font-size: 0.75rem;
          color: var(--ir-gold);
          font-weight: 600;
        }

        /* ── Sacred Bag Drawer ── */
        .ir-drawer-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.6);
          backdrop-filter: blur(6px);
          -webkit-backdrop-filter: blur(6px);
          z-index: 2000;
          display: flex;
          justify-content: flex-end;
          animation: irFadeIn 0.25s ease;
        }

        .ir-drawer {
          width: min(440px, 100vw);
          height: 100%;
          background: var(--ir-bg);
          box-shadow: -10px 0 40px rgba(0, 0, 0, 0.3);
          display: flex;
          flex-direction: column;
          animation: irSlideLeft 0.35s cubic-bezier(0.16, 1, 0.3, 1);
          color: var(--ir-ink);
        }

        @keyframes irSlideLeft {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }

        @keyframes irFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .ir-drawer-header {
          padding: 22px 24px;
          border-bottom: 1px solid var(--ir-line);
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .ir-drawer-title-wrap {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .ir-drawer-title {
          font-family: 'Outfit', sans-serif;
          font-size: 1.28rem;
          font-weight: 700;
          margin: 0;
        }

        .ir-drawer-count {
          font-size: 0.75rem;
          font-weight: 700;
          padding: 3px 8px;
          background: var(--ir-bg-alt);
          border-radius: 99px;
          color: var(--ir-mute);
        }

        .ir-drawer-close {
          background: transparent;
          border: none;
          color: var(--ir-mute);
          cursor: pointer;
          display: grid;
          place-items: center;
          padding: 6px;
          border-radius: 50%;
          transition: background 0.2s, color 0.2s;
        }

        .ir-drawer-close:hover {
          background: var(--ir-bg-alt);
          color: var(--ir-ink);
        }

        /* ── Minimum Order Status Card ── */
        .ir-min-order-status-card {
          margin: 16px 20px;
          padding: 16px;
          border-radius: 18px;
          border: 1px solid var(--ir-line);
        }

        .ir-min-order-status-card.alert {
          background: rgba(234, 179, 8, 0.08);
          border-color: rgba(234, 179, 8, 0.35);
        }

        .ir-min-order-status-card.success {
          background: rgba(34, 197, 94, 0.08);
          border-color: rgba(34, 197, 94, 0.35);
        }

        .ir-status-top {
          display: flex;
          gap: 12px;
          align-items: flex-start;
          margin-bottom: 12px;
        }

        .ir-status-icon.alert {
          color: #d97706;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .ir-status-icon.success {
          color: #16a34a;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .ir-status-title {
          font-weight: 700;
          font-size: 0.9rem;
          line-height: 1.3;
        }

        .ir-status-desc {
          font-size: 0.8rem;
          color: var(--ir-mute);
          margin-top: 2px;
          line-height: 1.4;
        }

        .ir-min-order-bar {
          height: 7px;
          background: rgba(0, 0, 0, 0.08);
          border-radius: 99px;
          overflow: hidden;
        }

        .dark .ir-min-order-bar {
          background: rgba(255, 255, 255, 0.12);
        }

        .ir-min-order-progress {
          height: 100%;
          background: linear-gradient(90deg, #eab308, #22c55e);
          border-radius: 99px;
          transition: width 0.4s ease;
        }

        .ir-bar-meta {
          display: flex;
          justify-content: space-between;
          font-size: 0.72rem;
          color: var(--ir-mute);
          font-weight: 600;
          margin-top: 6px;
        }

        /* ── Drawer Body ── */
        .ir-drawer-body {
          flex: 1;
          overflow-y: auto;
          padding: 8px 20px 20px;
        }

        .ir-empty-bag {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 60px 20px;
        }

        .ir-empty-bag-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 76px;
          height: 76px;
          border-radius: 50%;
          background: rgba(184, 147, 90, 0.1);
          border: 1px dashed rgba(184, 147, 90, 0.3);
          color: var(--ir-gold);
          opacity: 0.9;
          margin: 0 auto 18px;
        }

        .ir-empty-bag-icon svg {
          display: block;
          margin: auto;
        }

        .ir-empty-bag-title {
          font-family: 'Outfit', sans-serif;
          font-size: 1.25rem;
          font-weight: 700;
          margin-bottom: 6px;
          color: var(--ir-ink);
        }

        .ir-empty-bag-sub {
          font-size: 0.88rem;
          color: var(--ir-mute);
          line-height: 1.5;
          max-width: 280px;
          margin: 0 auto;
        }

        .ir-cart-list {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .ir-cart-item {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 12px;
          background: var(--ir-card);
          border: 1px solid var(--ir-line);
          border-radius: 16px;
        }

        .ir-cart-item-img {
          width: 58px;
          height: 58px;
          object-fit: contain;
          border-radius: 12px;
          background: var(--ir-bg-alt);
          flex-shrink: 0;
          padding: 4px;
          box-sizing: border-box;
        }

        .ir-cart-item-info {
          flex: 1;
          min-width: 0;
        }

        .ir-cart-item-name {
          font-weight: 700;
          font-size: 0.9rem;
          line-height: 1.3;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .ir-cart-item-unit {
          font-size: 0.76rem;
          color: var(--ir-mute);
          margin-top: 2px;
        }

        .ir-cart-item-controls {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: 8px;
        }

        .ir-cart-qty-pill {
          display: inline-flex;
          align-items: center;
          border: 1px solid var(--ir-line);
          border-radius: 99px;
          padding: 2px 6px;
          background: var(--ir-bg-alt);
        }

        .ir-cart-qty-pill button {
          background: transparent;
          border: none;
          color: var(--ir-ink);
          width: 22px;
          height: 22px;
          display: grid;
          place-items: center;
          cursor: pointer;
          font-size: 15px;
          border-radius: 50%;
        }

        .ir-cart-qty-pill span {
          width: 22px;
          text-align: center;
          font-size: 0.82rem;
          font-weight: 700;
        }

        .ir-cart-item-total {
          font-weight: 700;
          font-size: 0.95rem;
          color: var(--ir-ink);
        }

        .ir-cart-item-del {
          background: transparent;
          border: none;
          color: var(--ir-mute);
          cursor: pointer;
          padding: 8px;
          border-radius: 50%;
          display: grid;
          place-items: center;
          transition: color 0.2s, background 0.2s;
        }

        .ir-cart-item-del:hover {
          color: #ef4444;
          background: rgba(239, 68, 68, 0.1);
        }

        /* ── Quick Add Recommendations in Drawer ── */
        .ir-quick-add-box {
          margin-top: 8px;
          padding: 14px;
          background: rgba(184, 147, 90, 0.08);
          border: 1px dashed rgba(184, 147, 90, 0.4);
          border-radius: 14px;
        }

        .ir-quick-add-label {
          font-size: 0.78rem;
          font-weight: 700;
          color: var(--ir-gold);
          text-transform: uppercase;
          letter-spacing: 0.06em;
          margin-bottom: 8px;
        }

        .ir-quick-add-buttons {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
        }

        .ir-quick-add-btn {
          background: var(--ir-card);
          border: 1px solid var(--ir-line);
          border-radius: 99px;
          padding: 6px 12px;
          font-size: 0.78rem;
          font-weight: 600;
          color: var(--ir-ink);
          cursor: pointer;
          transition: all 0.2s;
        }

        .ir-quick-add-btn:hover {
          border-color: var(--ir-gold);
          color: var(--ir-gold);
        }

        /* ── Drawer Footer ── */
        .ir-drawer-footer {
          padding: 20px;
          border-top: 1px solid var(--ir-line);
          background: var(--ir-card);
        }

        .ir-drawer-summary-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 1rem;
          font-weight: 600;
          margin-bottom: 4px;
        }

        .ir-summary-price {
          font-family: 'Outfit', sans-serif;
          font-size: 1.45rem;
          font-weight: 800;
          color: var(--ir-ink);
        }

        .ir-drawer-policy-note {
          font-size: 0.75rem;
          color: var(--ir-mute);
          margin-bottom: 16px;
        }

        .ir-checkout-submit-btn {
          width: 100%;
          padding: 14px 24px;
          border-radius: 99px;
          font-weight: 700;
          font-size: 0.95rem;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          cursor: pointer;
          border: none;
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .ir-checkout-submit-btn.active {
          background: var(--ir-ink);
          color: var(--ir-bg);
          box-shadow: 0 8px 24px rgba(20, 48, 63, 0.25);
        }

        .ir-checkout-submit-btn.active:hover {
          background: var(--ir-gold);
          color: #14303F;
          transform: translateY(-2px);
        }

        .dark .ir-checkout-submit-btn.active,
        body.dark .ir-checkout-submit-btn.active {
          background: #e4c28d;
          color: #0b171f;
          box-shadow: 0 8px 24px rgba(228, 194, 141, 0.3);
          font-weight: 800;
        }

        .dark .ir-checkout-submit-btn.active:hover,
        body.dark .ir-checkout-submit-btn.active:hover {
          background: #ffffff;
          color: #0b171f;
          transform: translateY(-2px);
        }

        .ir-checkout-submit-btn.disabled {
          background: rgba(0, 0, 0, 0.08);
          color: var(--ir-mute);
          cursor: not-allowed;
          font-size: 0.85rem;
        }

        .dark .ir-checkout-submit-btn.disabled,
        body.dark .ir-checkout-submit-btn.disabled {
          background: rgba(255, 255, 255, 0.1);
          color: rgba(243, 235, 221, 0.75);
          border: 1px solid rgba(243, 235, 221, 0.18);
        }

        /* ── Dark theme cart button contrast enhancements ── */
        .dark .ir-quick-add-btn,
        body.dark .ir-quick-add-btn {
          background: rgba(228, 194, 141, 0.12);
          border-color: rgba(228, 194, 141, 0.35);
          color: #e4c28d;
        }

        .dark .ir-quick-add-btn:hover,
        body.dark .ir-quick-add-btn:hover {
          background: #e4c28d;
          color: #0b171f;
          border-color: #e4c28d;
        }

        .dark .ir-drawer-close,
        body.dark .ir-drawer-close {
          color: #F3EBDD;
        }

        .dark .ir-drawer-close:hover,
        body.dark .ir-drawer-close:hover {
          background: rgba(255, 255, 255, 0.1);
          color: #e4c28d;
        }

        /* ── Checkout & Order Confirmation Modals ── */
        .ir-modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.65);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          z-index: 2500;
          display: grid;
          place-items: center;
          padding: 20px;
          animation: irFadeIn 0.25s ease;
        }

        .ir-checkout-modal {
          background: var(--ir-bg);
          border: 1px solid var(--ir-line);
          border-radius: 28px;
          width: min(540px, 100%);
          max-height: 90vh;
          overflow-y: auto;
          box-shadow: 0 24px 70px rgba(0, 0, 0, 0.3);
          padding: 28px;
          color: var(--ir-ink);
        }

        .ir-modal-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 20px;
        }

        .ir-modal-header h3 {
          font-family: 'Outfit', sans-serif;
          font-size: 1.35rem;
          margin: 0;
        }

        .ir-modal-close {
          background: transparent;
          border: none;
          color: var(--ir-mute);
          cursor: pointer;
          padding: 4px;
        }

        .ir-order-recap-banner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 12px 18px;
          background: rgba(34, 197, 94, 0.08);
          border: 1px solid rgba(34, 197, 94, 0.25);
          border-radius: 14px;
          margin-bottom: 20px;
        }

        .ir-recap-left strong {
          display: block;
          font-size: 0.95rem;
        }

        .ir-recap-left span {
          font-size: 0.78rem;
          color: var(--ir-mute);
        }

        .ir-recap-badge {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          font-size: 0.75rem;
          font-weight: 700;
          color: #16a34a;
        }

        .ir-form-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
        }

        @media (max-width: 500px) {
          .ir-form-grid {
            grid-template-columns: 1fr;
          }
        }

        .ir-form-group {
          margin-bottom: 14px;
        }

        .ir-form-group label {
          display: block;
          font-size: 0.8rem;
          font-weight: 600;
          color: var(--ir-mute);
          margin-bottom: 6px;
        }

        .ir-form-group input, .ir-form-group textarea {
          width: 100%;
          padding: 10px 14px;
          border-radius: 12px;
          border: 1px solid var(--ir-line);
          background: var(--ir-card);
          color: var(--ir-ink);
          font-family: inherit;
          font-size: 0.9rem;
          outline: none;
          transition: border-color 0.2s, box-shadow 0.2s;
        }

        .ir-form-group input:focus, .ir-form-group textarea:focus {
          border-color: var(--ir-gold);
          box-shadow: 0 0 0 3px rgba(184, 147, 90, 0.15);
        }

        .ir-modal-actions {
          display: flex;
          gap: 12px;
          margin-top: 22px;
        }

        /* ── Success Modal ── */
        .ir-order-success-modal {
          text-align: center;
        }

        .ir-success-icon-wrap {
          width: 72px;
          height: 72px;
          border-radius: 50%;
          background: rgba(34, 197, 94, 0.12);
          color: #16a34a;
          display: grid;
          place-items: center;
          margin: 0 auto 16px;
        }

        .ir-order-success-modal h2 {
          font-family: 'Outfit', sans-serif;
          font-size: 1.6rem;
          margin-bottom: 6px;
        }

        .ir-order-num {
          font-size: 0.95rem;
          color: var(--ir-gold);
          margin-bottom: 12px;
        }

        .ir-success-sub {
          font-size: 0.9rem;
          color: var(--ir-mute);
          line-height: 1.6;
          margin-bottom: 24px;
        }

        .ir-order-summary-box {
          background: var(--ir-card);
          border: 1px solid var(--ir-line);
          border-radius: 18px;
          padding: 16px;
          text-align: left;
        }

        .ir-order-summary-box h4 {
          font-size: 0.82rem;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: var(--ir-mute);
          margin-bottom: 10px;
        }

        .ir-summary-line {
          display: flex;
          justify-content: space-between;
          font-size: 0.88rem;
          padding: 6px 0;
          border-bottom: 1px dashed var(--ir-line);
        }

        .ir-summary-total {
          display: flex;
          justify-content: space-between;
          font-weight: 800;
          font-size: 1.05rem;
          padding-top: 12px;
          margin-top: 6px;
        }

        /* ── Stitch Atelier: Ritual Segmented Tabs ── */
        .ir-segment-tabs {
          display: flex;
          align-items: center;
          gap: 6px;
          background: rgba(20, 48, 63, 0.05);
          border: 1px solid var(--ir-line);
          border-radius: 99px;
          padding: 4px;
          margin: 16px 0 14px;
          width: 100%;
          max-width: 100%;
          overflow-x: auto;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: none;
          box-sizing: border-box;
        }

        .ir-segment-tabs::-webkit-scrollbar {
          display: none;
        }

        .ir-seg-btn {
          background: transparent;
          border: none;
          padding: 7px 16px;
          border-radius: 99px;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 0.82rem;
          font-weight: 700;
          color: var(--ir-mute);
          cursor: pointer;
          transition: all 0.25s ease;
          white-space: nowrap;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          flex-shrink: 0;
        }

        .ir-seg-btn:hover {
          color: var(--ir-ink);
        }

        .ir-seg-btn.active {
          background: var(--ir-card);
          color: var(--ir-ink);
          box-shadow: 0 2px 10px -2px rgba(20, 48, 63, 0.12);
          border: 1px solid rgba(184, 147, 90, 0.3);
        }

        .ir-seg-btn.active span.ir-seg-dot {
          color: var(--ir-gold);
        }

        /* ── Tab Content Container ── */
        .ir-tab-content-panel {
          background: var(--ir-card);
          border: 1px solid var(--ir-line);
          border-radius: 18px;
          padding: 20px 22px;
          min-height: 200px;
          box-shadow: 0 4px 20px -6px rgba(20, 48, 63, 0.04);
          animation: ir-tab-fade 0.3s ease-out;
          width: 100%;
          max-width: 100%;
          box-sizing: border-box;
          overflow-wrap: break-word;
          word-break: break-word;
        }

        @keyframes ir-tab-fade {
          from {
            opacity: 0.4;
            transform: translateY(4px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 600px) {
          .ir-segment-tabs {
            width: 100%;
            justify-content: flex-start;
          }
          .ir-seg-btn {
            padding: 6px 12px;
            font-size: 0.78rem;
          }
          .ir-tab-content-panel {
            padding: 16px 14px;
          }
        }

        /* ── Stitch Atelier: Unified Commerce Panel ── */
        .ir-commerce-panel {
          display: inline-flex;
          align-items: center;
          gap: 16px;
          flex-wrap: wrap;
          margin: 14px 0 20px;
          padding: 10px 18px;
          background: var(--ir-card);
          border: 1px solid var(--ir-line);
          border-radius: 18px;
          box-shadow: 0 4px 16px -4px rgba(20, 48, 63, 0.05);
          width: 100%;
          max-width: 100%;
          box-sizing: border-box;
        }

        .ir-commerce-panel .ir-price-group {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          flex-shrink: 0;
        }

        .ir-commerce-panel .ir-price-num {
          font-family: 'Outfit', sans-serif;
          font-size: clamp(1.85rem, 3.2vw, 2.35rem);
          font-weight: 800;
          color: var(--ir-ink);
          line-height: 1;
        }

        .ir-commerce-panel .ir-min-order-tag {
          font-size: 0.74rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          padding: 4px 10px;
          border-radius: 99px;
          background: rgba(184, 147, 90, 0.15);
          color: var(--ir-gold);
          border: 1px solid rgba(184, 147, 90, 0.3);
          white-space: nowrap;
        }

        .ir-commerce-panel .ir-action-bar {
          display: inline-flex;
          flex-direction: row;
          flex-wrap: wrap;
          gap: 12px;
          align-items: center;
          margin-top: 0;
          margin-left: 0;
          max-width: 100%;
        }

        .ir-commerce-panel .ir-qty-box {
          flex: 0 0 auto;
        }

        .ir-commerce-panel .ir-add-bag-btn {
          flex: 1 1 auto;
          min-width: 0;
          max-width: 100%;
          white-space: normal;
          text-align: center;
          padding: 13px 20px;
          font-size: 11px;
          letter-spacing: 0.1em;
          line-height: 1.3;
          box-sizing: border-box;
        }

        @media (max-width: 640px) {
          .ir-commerce-panel {
            display: flex;
            flex-direction: column;
            align-items: stretch;
            gap: 14px;
            padding: 14px 12px;
            width: 100%;
            box-sizing: border-box;
          }
          .ir-commerce-panel .ir-price-group {
            width: 100%;
            justify-content: flex-start;
          }
          .ir-commerce-panel .ir-action-bar {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            align-items: center;
            margin-left: 0;
            width: 100%;
            gap: 10px;
          }
          .ir-commerce-panel .ir-qty-box {
            flex: 0 0 auto;
          }
          .ir-commerce-panel .ir-add-bag-btn {
            flex: 1 1 180px;
            min-width: 0;
            max-width: 100%;
            white-space: normal;
            text-align: center;
            padding: 12px 14px;
            font-size: 11px;
            letter-spacing: 0.08em;
            line-height: 1.35;
            box-sizing: border-box;
          }
        }

        @media (max-width: 440px) {
          .ir-commerce-panel .ir-action-bar {
            flex-direction: column;
            align-items: stretch;
            gap: 10px;
          }
          .ir-commerce-panel .ir-qty-box {
            align-self: flex-start;
          }
          .ir-commerce-panel .ir-add-bag-btn {
            width: 100%;
            flex: 0 0 auto;
          }
        }

        /* ── Stitch Atelier: Mantra / Quote Callout ── */
        .ir-quote-card {
          margin: 14px 0 16px;
          padding: 14px 18px;
          border-radius: 14px;
          background: rgba(184, 147, 90, 0.07);
          border-left: 3px solid var(--ir-gold);
          border-right: 1px solid rgba(184, 147, 90, 0.15);
          border-top: 1px solid rgba(184, 147, 90, 0.15);
          border-bottom: 1px solid rgba(184, 147, 90, 0.15);
        }

        .ir-quote-tag {
          font-family: 'Outfit', sans-serif;
          font-style: italic;
          font-size: 1.15rem;
          font-weight: 700;
          color: var(--ir-ink);
          margin: 0 0 4px;
        }

        .ir-quote-lead {
          font-size: 0.92rem;
          color: var(--ir-mute);
          line-height: 1.5;
          margin: 0;
        }

        /* ── Block Labels & Pillars ── */
        .ir-block-label {
          display: block;
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--ir-gold);
          margin-bottom: 8px;
        }

        .ir-pillars-block {
          margin: 12px 0 16px;
        }

        .ir-pillars-block .ir-pills {
          margin: 6px 0 0;
        }

        /* ── Horizontal Ritual Stepper ── */
        .ir-stepper-panel {
          margin: 14px 0 18px;
          padding: 12px 16px;
          background: var(--ir-card);
          border: 1px solid var(--ir-line);
          border-radius: 14px;
        }

        .ir-stepper-grid {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 6px;
          margin-top: 6px;
          flex-wrap: wrap;
        }

        .ir-step-item {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .ir-step-circle {
          width: 22px;
          height: 22px;
          border-radius: 50%;
          background: var(--ir-ink);
          color: var(--ir-bg);
          font-size: 11px;
          font-weight: 800;
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }

        .ir-step-name {
          font-size: 0.82rem;
          font-weight: 700;
          color: var(--ir-ink);
          text-transform: uppercase;
          letter-spacing: 0.04em;
        }

        /* ── 2-Column Features Grid ── */
        .ir-feat-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
          gap: 8px 14px;
          margin: 14px 0 18px;
          padding-top: 12px;
          border-top: 1px solid var(--ir-line);
        }

        .ir-feat-cell {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          font-size: 0.88rem;
          color: var(--ir-mute);
          line-height: 1.45;
        }

        .ir-feat-star {
          color: var(--ir-gold);
          font-size: 0.75rem;
          line-height: 1.6;
          flex-shrink: 0;
        }

        /* ── Hero Metrics Row ── */
        .ir-hero-metrics {
          display: inline-flex;
          align-items: center;
          gap: 20px;
          margin-top: 28px;
          padding: 12px 20px;
          background: var(--ir-card);
          border: 1px solid var(--ir-line);
          border-radius: 16px;
          backdrop-filter: blur(12px);
          max-width: 100%;
          box-shadow: 0 4px 20px -4px rgba(20, 48, 63, 0.05);
        }

        .ir-metric-item {
          display: flex;
          flex-direction: column;
        }

        .ir-metric-val {
          font-family: 'Outfit', sans-serif;
          font-size: 1.25rem;
          font-weight: 800;
          color: var(--ir-ink);
          line-height: 1.1;
        }

        .ir-metric-lbl {
          font-size: 0.68rem;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: var(--ir-mute);
          font-weight: 600;
          margin-top: 2px;
        }

        .ir-metric-sep {
          width: 1px;
          height: 28px;
          background: var(--ir-line);
        }

        @media (max-width: 600px) {
          .ir-hero-metrics {
            flex-direction: column;
            align-items: flex-start;
            gap: 12px;
            width: 100%;
          }
          .ir-metric-sep {
            display: none;
          }
        }

        /* ── Enhanced What is Inner Reset Moment Cards ── */
        .ir-moment-card {
          padding: 24px 20px;
          border: 1px solid var(--ir-line);
          background: var(--ir-card);
          border-radius: 18px;
          transition: transform 0.35s ease, border-color 0.35s ease, box-shadow 0.35s ease;
          display: flex;
          flex-direction: column;
          text-align: left;
          width: 100%;
          max-width: 100%;
          min-width: 0;
          box-sizing: border-box;
        }

        .ir-moment-icon {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: rgba(184, 147, 90, 0.12);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
          margin-bottom: 14px;
          border: 1px solid rgba(184, 147, 90, 0.25);
        }

        .ir-moment-title {
          font-family: 'Outfit', sans-serif;
          font-size: 1.22rem;
          font-weight: 700;
          color: var(--ir-ink);
          margin: 0 0 6px;
        }

        .ir-moment-desc {
          font-size: 0.88rem;
          color: var(--ir-mute);
          line-height: 1.5;
          margin: 0;
        }

        .ir-moment-card:hover {
          transform: translateY(-5px);
          border-color: var(--ir-gold);
          box-shadow: 0 12px 30px -8px rgba(184, 147, 90, 0.18);
        }
      `}</style>
    </div>
  );
}
