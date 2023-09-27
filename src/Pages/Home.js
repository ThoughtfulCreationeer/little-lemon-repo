import '../styles.scss';
import Navbar from '../Components/Navbar';
import SpecialsSection from '../Components/SpecialsSection';
import Testimonials from '../Components/Testimonials'
import Footer from '../Components/Footer';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <header>
        <Navbar/>
        <section className='hero-section'>
          <div className='hero-content'>
            <div className='intro-text'>
              <div className='page-headline'>
                <h1> Little Lemon </h1>
                <h2> Chicago </h2>
              </div>
              <p>Step into our vibrant haven, where the aroma of olive oil and the gentle murmur of our welcoming team brings the warmth of Mediterranean sunshine straight to your table. Little Lemon is more than just a Greek restaurant, it's a celebration of Greece's rich culinary heritage wrapped in a zestful embrace. </p>
              <Link to='/Reservations'>
                <button id='Yellow-Button' > Reserve a table </button>
              </Link>
            </div>
            <div className='image-container'>
              <img src="/restaurant-chef-B.jpg" alt=" One of our chefs finalizing a mean"/>
            </div>
          </div>
        </section>
      </header>
      <main>
        <section className="specials-section">
          <h2>Specials</h2>
          <SpecialsSection />
          <Link to='/Menu'>
            <button>See full menu</button>
          </Link>
        </section>
        <section className="testimonials-section">
            <h2>Testimonials</h2>
            <Testimonials />
        </section>
        <section className='final-section'>
          <img src='/Little-Lemon-in-a-square.png' alt='Little Lemon Trademark Square'/>
          <div className='final-text-container'>
            <div className='final-little-lemon-location'>
              <h2>Little Lemon</h2>
              <h3>Chicago</h3>
            </div>
            <p>Where food is a celebration, stories are shared, and everyone is family. Let us fill your plates with warmth, your glasses with cheer, and your heart with the true spirit of Greek hospitality. Here, every moment is a memory waiting to be savored.</p>
          </div>
          <Link to='/Reservations'>
                <button id='Yellow-Button' > Reserve a table </button>
          </Link>
        </section>
      </main>
      <Footer/>
    </>
  );
}

export default Home;
