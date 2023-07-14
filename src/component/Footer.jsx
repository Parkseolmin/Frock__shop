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
                <a href='#'>
                  <img
                    src='http://dhgh9590.dothome.co.kr/frock/img/icon1.png'
                    alt=''
                  />
                </a>
              </li>
              <li>
                <a href='#'>
                  <img
                    src='http://dhgh9590.dothome.co.kr/frock/img/icon2.png'
                    alt=''
                  />
                </a>
              </li>
              <li>
                <a href='#'>
                  <img
                    src='	http://dhgh9590.dothome.co.kr/frock/img/icon3.png'
                    alt=''
                  />
                </a>
              </li>
              <li>
                <a href='#'>
                  <img
                    src='	http://dhgh9590.dothome.co.kr/frock/img/icon4.png'
                    alt=''
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
