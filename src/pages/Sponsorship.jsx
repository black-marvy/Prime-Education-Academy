import { useState, useContext, useEffect, useRef } from "react";
import Navbar from "../component/navbar";
import "../styles/Sponsorship.css";
import { cartContext } from "../context/CartContext";
import { useLocation, useNavigate } from "react-router-dom";
import Modal from "../component/modal";
import Footer from "../component/Footer";

const Donation = () => {
  const [amount, setAmount] = useState("");
  const [sortBy, setSortBy] = useState("default");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const verificationStarted = useRef(false);
  const navigate = useNavigate();
  const { addToCart, delCart, cart } = useContext(cartContext);

  const [modal, setModal] = useState({
    isOpen: false,
    title: "",
    message: "",
    type: "info",
  });

  const showModal = (title, message, type = "info") => {
    setModal({
      isOpen: true,
      title,
      message,
      type,
    });
  };

  const closeModal = () => {
    setModal((previous) => ({
      ...previous,
      isOpen: false,
    }));

    const params = new URLSearchParams(location.search);

    if (params.has("reference")) {
      navigate("/sponsorship", { replace: true });
    }
  };

  const donationAmount = [
    {
      id: 1,
      name: "School Fees",
      image:
        "https://media.istockphoto.com/id/936987292/photo/man-counting-college-savings-fund-tuition-fee-or-student-loan-with-calculator-education-price.jpg",
      price: 20000,
    },
    {
      id: 2,
      name: "School Shoes",
      image:
        "https://media.istockphoto.com/id/1150393183/photo/new-leather-student-shoes-isolated-on-white.jpg",
      price: 4000,
    },
    {
      id: 3,
      name: "School Uniform",
      image:
        "https://media.istockphoto.com/id/607886766/photo/business-image.jpg",
      price: 9500,
    },
    {
      id: 4,
      name: "School Sweat-shirt",
      image:
        "https://media.istockphoto.com/id/1675347103/photo/blank-sweatshirt-color-black-template-front-and-back-view-on-white-background-crew-neck-mock.jpg",
      price: 8800,
    },
    {
      id: 5,
      name: "School Textbook",
      image:
        "https://media.istockphoto.com/id/590073366/photo/books-of-knowledge.jpg",
      price: 15000,
    },
    {
      id: 6,
      name: "School Board",
      image:
        "https://media.istockphoto.com/id/500786898/photo/blank-blackboard.jpg",
      price: 21000,
    },
    {
      id: 7,
      name: "School Bag",
      image:
        "https://media.istockphoto.com/id/2167589456/photo/yellow-backpack-opened-isolated-on-white-school-bag-advertisement-design-knapsack-rucksack.jpg",
      price: 7000,
    },
    {
      id: 8,
      name: "Snacks",
      image:
        "https://media.istockphoto.com/id/1218956575/photo/healthy-school-lunch-box.jpg",
      price: 3000,
    },
    {
      id: 9,
      name: "School Books",
      image:
        "https://media.istockphoto.com/id/1160214744/photo/textbooks-in-the-school-backpack-education-concept-selective-focus.jpg",
      price: 4000,
    },
    {
      id: 10,
      name: "School Biro",
      image: "https://media.istockphoto.com/id/162407370/photo/pencil-case.jpg",
      price: 3000,
    },
    {
      id: 11,
      name: "School Supplies",
      image:
        "https://media.istockphoto.com/id/2151314310/photo/school-supplies-concept-back-to-school-colored-stationery-is-arranged-in-white-organizers.jpg",
      price: 5000,
    },
    {
      id: 12,
      name: "Sport Wear",
      image:
        "https://media.istockphoto.com/id/2182045269/vector/soccer-jersey-design-template-for-football-club-sport-t-shirt-design-template-jersey-vector.jpg",
      price: 7500,
    },
  ];

  const addDonation = () => {
    if (!amount || Number(amount) <= 0) {
      showModal(
        "Invalid Amount",
        "Please enter a valid donation amount.",
        "error",
      );
      return;
    }

    const newDonation = {
      id: Date.now(),
      amount: Number(amount),
      type: "Donation",
    };

    addToCart(newDonation);
    setAmount("");
  };

  const removeDonation = (id) => {
    delCart(id);
  };

  const total = cart.reduce((sum, item) => sum + item.amount, 0);

  const sortedDonations = [...donationAmount].sort((a, b) => {
    if (sortBy === "low-high") return a.price - b.price;
    if (sortBy === "high-low") return b.price - a.price;
    if (sortBy === "Most-recent") return b.id - a.id;
    if (sortBy === "Old") return a.id - b.id;

    return a.id - b.id;
  });

  const handleCheckout = async () => {
    if (!email.trim()) {
      showModal(
        "Email Required",
        "Please enter your email address before checkout.",
        "error",
      );
      return;
    }

    if (total <= 0) {
      showModal(
        "Empty Donation",
        "Please select a donation item or enter an amount before checkout.",
        "error",
      );
      return;
    }

    try {
      setLoading(true);

      const response = await fetch(
        "https://prime-academy-backend-ufg5.onrender.com/api/payment/initialize",
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            email: email.trim(),
            amount: total,
          }),
        },
      );

      const resulttext = await response.text();

      let result;
      try {
        result = JSON.parse(resulttext);
      } catch (error) {
        throw new Error(
          resulttext ||
            ` server returned an empty response, HTTP ${response.status}`,
        );
      }
      if (!response.ok || !result.data?.authorization_url) {
        throw new Error(result.message || "couldnt not initialize payment");
      }
      window.location.href = result.data.authorization_url;
    } catch (err) {
      console.error("checkout : ", err);
      showModal(
        "Payment Error",
        err.message || "Something went wrong. Please try again.",
        "error",
      );
      setLoading(false);
    }
  };

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const reference = params.get("reference");

    if (!reference || verificationStarted.current) {
      return;
    }

    verificationStarted.current = true;

    const verifyPayment = async () => {
      try {
        const res = await fetch(
          `http://localhost:8000/api/payment/verify/${encodeURIComponent(reference)}`,
        );

        const result = await res.json();

        if (res.ok && result.status === "success") {
          showModal(
            "Payment Successful!",
            "Thank you for supporting Prime Education Academy. Your payment has been verified.",
            "success",
          );
        } else {
          showModal(
            "Payment Not Verified",
            "We could not verify your payment. Please check your payment status or contact us for assistance.",
            "error",
          );
        }
      } catch (err) {
        showModal(
          "Verification Error",
          "Something went wrong while verifying your payment. Please try again later.",
          "error",
        );
      }
    };

    verifyPayment();
  }, [location.search]);

  return (
    <div className="donation-page">
      {" "}
      <Navbar />
      {/* HERO */}
      <section className="s-hero1">
        <div className="hero-overlay"></div>

        <div className="hero-content">
          <span className="hero-label">MAKE A DIFFERENCE</span>

          <h1>
            Sponsor a <span>Child</span>
          </h1>

          <p>
            Help provide the education, resources and opportunities every child
            deserves.
          </p>

          <a href="#donation-shop" className="hero-button">
            Start Giving
          </a>
        </div>

        <div className="hero-scroll">
          <span></span>
          Scroll to explore
        </div>
      </section>
      {/* INTRO */}
      <section className="donation-intro">
        <div>
          <span className="section-tag">YOUR IMPACT</span>

          <h2>
            Every contribution
            <span> creates an opportunity.</span>
          </h2>
        </div>

        <p>
          Choose what you would like to provide for a child. From school shoes
          and uniforms to books and learning supplies, your support helps make
          education possible.
        </p>
      </section>
      {/* SHOP */}
      <section className="donation-shop" id="donation-shop">
        <div className="shop-header">
          <div>
            <span className="section-tag">SPONSORSHIP SHOP</span>
            <h2>Choose an item to support</h2>
          </div>

          <div className="sort-wrapper">
            <label htmlFor="sort">Sort by</label>

            <select
              id="sort"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="default"> Default</option>
              <option value="low-high">Low-high</option>
              <option value="high-low">high-low</option>
              <option value="Most-recent">Most-recent</option>
              <option value="Old">Old</option>
            </select>
          </div>
        </div>

        <div className="donation-grid">
          {sortedDonations.map((value) => {
            const isSelected = cart.some(
              (item) => item.amount === value.price && item.type === value.name,
            );
            return (
              <div className="donation-card" key={value.id}>
                <div className="image-wrapper">
                  <img
                    src={value.image}
                    alt={value.name}
                    className="donation-image"
                  />
                  <div className="impact-badge">Make an impact</div>
                </div>

                <div className="donation-info">
                  <span className="item-number">0{value.id}</span>

                  <h3>{value.name}</h3>

                  <p className="price">₦{value.price.toLocaleString()}</p>

                  <button
                    onClick={() =>
                      addToCart({
                        id: Date.now(),
                        amount: Number(value.price),
                        type: value.name,
                      })
                    }
                    className={
                      isSelected
                        ? "donation-button selected"
                        : "donation-button"
                    }
                  >
                    {isSelected ? "Selected ✓" : "Select Item"}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      {/* CUSTOM DONATION */}
      <section className="custom-donation">
        <div className="custom-content">
          <span className="section-tag">GIVE YOUR WAY</span>

          <h2>Choose your own amount</h2>

          <p>
            Every amount matters. Enter any amount you would like to contribute
            toward a child's education.
          </p>

          <div className="amount-box">
            <span>₦</span>

            <input
              type="number"
              placeholder="Enter amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />

            <button onClick={addDonation}>Add Donation</button>
          </div>

          <div className="quick-amounts">
            {[5000, 10000, 20000, 50000].map((value) => (
              <button key={value} onClick={() => setAmount(value)}>
                ₦{value.toLocaleString()}
              </button>
            ))}
          </div>
        </div>
      </section>
      {/* CART */}
      <section className="cart-section" id="cart">
        <div className="cart-header">
          <div>
            <span className="section-tag">YOUR SUPPORT</span>
            <h2>Donation Cart</h2>
          </div>

          <div className="cart-count">
            {cart.length} {cart.length === 1 ? "item" : "items"}
          </div>
        </div>

        <div>
          {cart.length === 0 ? (
            <div className="empty-cart">
              <div className="empty-icon">♡</div>
              <h3>Your donation cart is empty</h3>
              <p>Select an item above and begin making a difference.</p>
            </div>
          ) : (
            <div className="cart-content">
              <div className="cart-items">
                {cart.map((item) => (
                  <div className="cart-item" key={item.id}>
                    <div>
                      <span>DONATION</span>
                      <h3>{item.type}</h3>
                    </div>

                    <strong>₦{item.amount.toLocaleString()}</strong>

                    <button
                      onClick={() => removeDonation(item.id)}
                      className="remove-button"
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>

              <div className="cart-summary">
                <span>Total contribution</span>

                <h2>₦{total.toLocaleString()}</h2>

                <div className="email-field">
                  <label htmlFor="email">Your email address</label>

                  <input
                    id="email"
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                <button
                  className="checkout-button"
                  onClick={handleCheckout}
                  disabled={loading || cart.length === 0}
                >
                  {loading ? "redirecting to payment" : "proceed to check out"}
                  {!loading && <span>→</span>}
                </button>

                <p>
                  Your contribution can help create a better educational future
                  for a child.
                </p>
              </div>
            </div>
          )}
        </div>
           </section>

    <Footer/>
      <Modal
        isOpen={modal.isOpen}
        title={modal.title}
        message={modal.message}
        type={modal.type}
        onClose={closeModal}
      />
    </div>
  );
};

export default Donation;