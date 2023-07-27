import '../styles.scss';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import ReservationForm from '../Components/ReservationForm';

function Reservations() {
  return (
    <>
      <Navbar/>
      <main className='Reservations-Page-Container'>
        <section className='Main-Reservations-Section'>
          <h2> Reservations </h2>
          <div className='Outermost-Form-Container'>
            <ReservationForm />
          </div>
        </section>
      </main>
      <Footer/>
    </>
  );
}

export default Reservations;
