import '../styles.scss';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import ReservationForm from '../Components/ReservationForm';
import ReservationsContext from '../Components/ReservationsContext';

function Reservations() {
  return (
    <>
      <Navbar/>
      <main className='Reservations-Page-Container'>
        <section className='Main-Reservations-Section'>
          <h2> Reservations </h2>
          {/* Maybe make a feature for showing how many seats is left today to nudge action */}
          <div className='Outermost-Form-Container'>
            <ReservationsContext>
              <ReservationForm />
            </ReservationsContext>
          </div>
        </section>
      </main>
      <Footer/>
    </>
  );
}

export default Reservations;