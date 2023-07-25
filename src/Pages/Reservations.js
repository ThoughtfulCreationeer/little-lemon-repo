import '../styles.scss';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

function Reservations() {
  return (
    <>
      <Navbar/>
      <main className='Reservations-Page-Container'>
        <section className='Main-Reservations-Section'>
          <h2> Reservations </h2>
          <p>Where food is a celebration, stories are shared, and everyone is family. Let us fill your plates with warmth, your glasses with cheer, and your heart with the true spirit of Greek hospitality. Here, every moment is a memory waiting to be savored.</p>
        </section>
      </main>
      <Footer/>
    </>
  );
}

export default Reservations;
