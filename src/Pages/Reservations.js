import './styles.scss';
import Navbar from './Navbar';
import Footer from './Footer';

function Reservations() {
  return (
    <>
      <header>
        <Navbar/>
        <h2> About us </h2>
      </header>
      <main>
        <section className='hero-section'>
        <p>Where food is a celebration, stories are shared, and everyone is family. Let us fill your plates with warmth, your glasses with cheer, and your heart with the true spirit of Greek hospitality. Here, every moment is a memory waiting to be savored.</p>
        </section>
      </main>
      <Footer/>
    </>
  );
}

export default Reservations;
