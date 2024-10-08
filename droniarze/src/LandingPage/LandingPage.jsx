import './LandingPage.css';
import React, { useState } from "react";

function LandingPage() {

  const [scrollPosition, setScrollPosition] = useState(0);

  function handleScroll(e) {
    const { scrollTop, scrollHeight, clientHeight } = e.target;
    const position = Math.ceil(
      (scrollTop / (scrollHeight - clientHeight)) * 100
    );
    setScrollPosition(position);
  };


  return (
    <>
      <section>
        <video className='w-screen object-cover' autoPlay loop muted>
          <source src="https://docs.material-tailwind.com/demo.mp4" type='video/mp4' />
        </video>
      </section>
      <section>
        <video className='w-screen object-cover' autoPlay loop muted>
          <source src="https://docs.material-tailwind.com/demo.mp4" type='video/mp4' />
        </video>
      </section>
      <section>
        <video className='w-screen object-cover' autoPlay loop muted>
          <source src="https://docs.material-tailwind.com/demo.mp4" type='video/mp4' />
        </video>
      </section>
      <section>
        <video className='w-screen object-cover' autoPlay loop muted>
          <source src="https://docs.material-tailwind.com/demo.mp4" type='video/mp4' />
        </video>
      </section>
    </>



    // todo create a 100vh veritcal scroller with img/vid as a background
    // todo one scroll wheel moves from one img to the other
  )
}

export default LandingPage