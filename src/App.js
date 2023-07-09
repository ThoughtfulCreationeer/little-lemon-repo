import './App.css';
import SpecialsSection from './SpecialsSection';

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
        <h1> Little lemon </h1>
        <h2> Chicago </h2>
        <p>This an awesome text giving insight into what fantastic food is being made at Little Lemon resturant</p>
      </header>
      <main>
        <SpecialsSection />
        <section>
          <h2>Testimonial</h2>
        </section>
        <section>
          <h2>Little lemon</h2>
        </section>
      </main>
      <footer>
      </footer>
    </>
  );
}

export default App;
