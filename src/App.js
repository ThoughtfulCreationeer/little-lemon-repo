import './styles.scss';
import SpecialsSection from './SpecialsSection';
import Testimonials from './Testimonials'

function App() {
  return (
    <>
      <header>
        <nav>
          <a href="home">
            <img src="/logo-n-text.png" alt="Little Lomon's logo"/>
          </a>
          <ul>
            <li>
              <a href=''>Home</a>
            </li>
            <li>
              <a href=''>About</a>
            </li>
            <li>
              <a href=''>Menu</a>
            </li>
            <li>
              <a href=''>Reservations</a>
            </li>
            <li>
              <a href=''>Order Online</a>
            </li>
            <li>
              <a href=''>Login</a>
            </li>
          </ul>
        </nav>
        <section className='hero-section'>
          <div className='hero-content'>
            <div className='intro-text'>
              <div className='page-headline'>
                <h1> Little Lemon </h1>
                <h2> Chicago </h2>
              </div>
              <p className='opening-text'>Step into our vibrant haven, where the aroma of olive oil and the gentle murmur of our welcoming team brings the warmth of Mediterranean sunshine straight to your table. Little Lemon is more than just a Greek restaurant, it's a celebration of Greece's rich culinary heritage wrapped in a zestful embrace. </p>
              <button> Reserve a table </button>
            </div>
            <div className='image-container'>
              <img src="/restaurant-chef-B.jpg" alt="Picture of one of our chefs finalizing a mean"/>
            </div>
          </div>
        </section>
      </header>
      <main>
        <section>
          <SpecialsSection />
        </section>
        <section>
          <Testimonials />
        </section>
        <section className='final-section'>
          <div>
            <h2>Little Lemon</h2>
            <h3>Chicago</h3>
          </div>
        </section>
      </main>
      <footer>
      </footer>
    </>
  );
}

export default App;
