import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const navigate = useNavigate();
  const goToLogin = () => {
    navigate('/login');
  };

  const search = (event) => {
    if (event.key === 'Enter') {
      let keyword = event.target.value;

      navigate(`/?q=${keyword}`);
    }
  };
  return (
    <>
      <div className='login'>
        <div className='search__box'>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          <input
            type='text'
            placeholder='제품 검색'
            onKeyPress={(event) => search(event)}
          />
        </div>
        <div className='login__button-group' onClick={goToLogin}>
          <FontAwesomeIcon icon={faUser} />
          <div className='login__button'>Login</div>
        </div>
      </div>
      <div className='logo'>
        <h1 className='logo__name'>
          <Link to='/'>Frock.</Link>
        </h1>
      </div>
      <div className='menu'>
        <ul className='menus'>
          <li>여성</li>
          <li>Divided</li>
          <li>남성</li>
          <li>신생아/유아</li>
          <li>아동</li>
          <li>H&M HOME</li>
          <li>Sale</li>
          <li>지속가능성</li>
        </ul>
      </div>
    </>
  );
}
