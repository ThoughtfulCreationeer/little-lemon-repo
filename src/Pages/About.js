import '../styles.scss';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

function About() {
  return (
    <>
      <Navbar/>
      <main className='About-Page-Container'>
        <section className='Main-About-Section'>
          <img src="DishPhotos/Restaurantfood.jpg" alt="Greek Bouschetta alla Little Lemon" />
          <div>
            <h2> About us </h2>
            <p>Welcome to Little Lemon, a slice of Greece nestled in the heart of Chicago.</p>
            <p>Founded in 2023, Little Lemon was born out of a deep love for Greek culinary tradition and a dream to share it with the world. Our founders, Alex and Maria, a dynamic duo with Greek roots, wanted to create a space where authentic Greek cuisine meets the warmth of Mediterranean hospitality. This vision turned into Little Lemon - a Greek culinary haven, named in honor of one of Greece's ubiquitous culinary staples.</p>
            <p>We pride ourselves on sourcing the freshest local produce, combined with premium Greek ingredients, to create dishes that sing with flavor. Each plate is a harmony of taste, texture, and tradition, prepared with an abundance of love.</p>
            <p>But Little Lemon is more than just a restaurant - it's a cultural rendezvous. Our blue and white decor is reminiscent of the charming Greek Isles, and the ambiance is filled with the soft melodies of traditional Bouzouki music, offering you an immersive Mediterranean experience.</p>
            <p>In Greek culture, food is a celebration, a way of coming together. At Little Lemon, we carry forward this ethos. We are not just serving meals, we are serving memories. We invite you to our table, to share our passion for Greek cuisine, and to be part of the Little Lemon family.</p>
            <p>Join us on this extraordinary culinary journey. Opa!</p>
          </div>
        </section>
      </main>
      <Footer/>
    </>
  );
}

export default About;
