import React, { useEffect, useRef } from 'react';

const SliderComponent = () => {
  const intervalId = useRef(null); // useRef를 함수 컴포넌트 바깥에 위치시킴
  useEffect(() => {
    const upBtn = document.querySelector('.up-button');
    const downBtn = document.querySelector('.down-button');
    const sidebar = document.querySelector('.sidebar');
    const container = document.querySelector('.containerbox');
    const mainSlide = document.querySelector('.main-slide');

    if (!upBtn || !downBtn || !sidebar || !container || !mainSlide) {
      // 요소들 중 하나라도 찾을 수 없을 경우, 오류 처리 또는 초기화 로직을 수행
      return;
    }

    const slideCount = mainSlide.querySelectorAll('div').length;
    let activeSlideIndex = 0;

    sidebar.style.top = `-${(slideCount - 1) * 100}vh`;

    const changeSlide = (direction) => {
      if (direction === 'up') {
        activeSlideIndex++;
        if (activeSlideIndex === slideCount) {
          activeSlideIndex = 0;
        }
      } else if (direction === 'down') {
        activeSlideIndex--;
        if (activeSlideIndex < 0) {
          activeSlideIndex = slideCount - 1;
        }
      }
      const height = container.clientHeight;

      mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`;
      sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`;
    };

    const autoChangeSlide = () => {
      changeSlide('up');
    };

    intervalId.current = setInterval(autoChangeSlide, 3000); // 3초마다 슬라이드 전환

    upBtn.addEventListener('click', () => {
      clearInterval(intervalId.current); // 수동 전환 시 자동 전환 중단
      changeSlide('up');
      intervalId.current = setInterval(autoChangeSlide, 3000); // 3초마다 슬라이드 전환 재시작
    });

    downBtn.addEventListener('click', () => {
      clearInterval(intervalId.current); // 수동 전환 시 자동 전환 중단
      changeSlide('down');
      intervalId.current = setInterval(autoChangeSlide, 3000); // 3초마다 슬라이드 전환 재시작
    });

    return () => {
      clearInterval(intervalId.current);
      upBtn.removeEventListener('click', () => {
        changeSlide('up');
      });

      downBtn.removeEventListener('click', () => {
        changeSlide('down');
      });
    };
  }, []);

  return (
    <div>
      <div className='containerbox'>
        <div className='sidebar'>
          <div
            style={{
              background:
                'linear-gradient(90deg, rgba(189,195,199,1) 0%, rgba(44,62,80,1) 50%, rgba(44,62,80,1) 100%)',
            }}
          >
            <h1 className='sidebar__text'>Sunset Serenade</h1>
            <p className='sidebar__text__phrases'>
              Embracing the Magic of Dusk
            </p>
          </div>
          <div
            style={{
              background:
                'linear-gradient(90deg, rgba(154,132,120,1) 0%, rgba(154,132,120,1) 50%, rgba(30,19,12,1) 100%)',
            }}
          >
            <h1 className='sidebar__text'>Mesmerizing Harmonies</h1>
            <p className='sidebar__text__phrases'>
              When Art and Soul Intertwine
            </p>
          </div>
          <div
            style={{
              background:
                'linear-gradient(90deg, rgba(58,97,134,1) 0%, rgba(137,37,62,1) 50%, rgba(137,37,62,1) 100%)',
            }}
          >
            <h1 className='sidebar__text'>Noir Whispers</h1>
            <p className='sidebar__text__phrases'>
              Embracing the Shadows of Creativity
            </p>
          </div>
          <div
            style={{
              backgroundImage:
                'linear-gradient(90deg, rgba(178,159,148,1) 0%, rgba(178,159,148,1) 50%, rgba(96,56,19,1) 100%)',
            }}
          >
            <h1 className='sidebar__text'>Black Canvas</h1>
            <p className='sidebar__text__phrases'>
              Unleashing the Power of Darkness
            </p>
          </div>
        </div>
        <div className='main-slide'>
          <div
            style={{
              backgroundImage: `url(${process.env.PUBLIC_URL}/img/slider1.png)`,
            }}
          ></div>
          <div
            style={{
              backgroundImage: `url(${process.env.PUBLIC_URL}/img/slider2.png)`,
            }}
          ></div>
          <div
            style={{
              backgroundImage: `url(${process.env.PUBLIC_URL}/img/slider3.png)`,
            }}
          ></div>
          <div
            style={{
              backgroundImage: `url(${process.env.PUBLIC_URL}/img/slider4.jpg)`,
            }}
          ></div>
        </div>
        <div className='controls'>
          <button className='down-button arrow__btn'>
            <i className='fas fa-arrow-down'></i>
          </button>
          <button className='up-button arrow__btn'>
            <i className='fas fa-arrow-up'></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SliderComponent;
