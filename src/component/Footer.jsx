import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

export default function Footer() {
  return (
    <div>
      <footer>
        <div className='footer__container'>
          <div className='footer__copyright'>
            <p>Copyright 2023. PARK SEOL MIN</p>
          </div>
          <div className='footer__links'>
            <ul className='footer__link'>
              <li>
                <a href='/'>
                  <img
                    src={process.env.PUBLIC_URL + '/img/icon1.png'}
                    alt='twitter'
                  />
                </a>
              </li>
              <li>
                <a href='/'>
                  <img
                    src={process.env.PUBLIC_URL + '/img/icon2.png'}
                    alt='instargram'
                  />
                </a>
              </li>
              <li>
                <a href='/'>
                  <img
                    src={process.env.PUBLIC_URL + '/img/icon3.png'}
                    alt='facebook'
                  />
                </a>
              </li>
              <li>
                <a href='/'>
                  <img
                    src={process.env.PUBLIC_URL + '/img/icon4.png'}
                    alt='youtube'
                  />
                </a>
              </li>
            </ul>
          </div>
          <div className='footer__number'>
            <FontAwesomeIcon icon={faPhone} />
            <p>800-1234-5678</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
