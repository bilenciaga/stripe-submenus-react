import React from 'react';
import phoneImg from './images/phone.svg';
import { useGlobalContext } from './context';

const Hero = () => {
  const { closeSubmenu } = useGlobalContext();
  return (
    <section className='hero' onMouseOver={closeSubmenu}>
      <div className='hero__center'>
        <article className='hero__info'>
          <h1>
            Payments infrastructure <br />
            for the internet
          </h1>
          <p>
            Millions of companies of all sizes—from startups to Fortune 500s—use
            Stripe’s software and APIs to accept payments, send payouts, and
            manage their businesses online.
          </p>
          <button className='btn btn__hero'>Start now</button>
        </article>
        <article className='hero__images'>
          <img src={phoneImg} className='hero__images-phone' alt='phone' />
        </article>
      </div>
    </section>
  );
};

export default Hero;
