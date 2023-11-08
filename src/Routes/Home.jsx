import React from 'react';
import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styles from '../Routes/styles/home.module.css';
import reset from '../Routes/styles/estilo.module.css';


function Home() {
  const [slidePreview, setSlidePreview] = useState(1);

  const imagens = [
    { id: '1', image: './src/assets/pexels-cottonbro-studio-5900773 (1).jpg', desc: 'Niguiris' },
    { id: '2', image: './src/assets/pexels-ivan-samkov-8951202.jpg', desc: 'Uramaki Pepino' },
    { id: '3', image: './src/assets/pexels-oleksandr-p-12955612 (1).jpg', desc: 'Uramaki Variados' }
  ];

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 720) {
        setSlidePreview(1);
      } else {
        setSlidePreview(2);
      }
    }

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, []);

  return (
    <section>
      <Swiper
        slidePreview={slidePreview}
        pagination={{ clickable: true }}
        navigation
      >
        {imagens.map((item) => (
          <SwiperSlide key={item.id}>
            <div className={styles.cardSlide}>
              <img src={item.image} alt={item.desc} className={styles.cardImage} />
              <div>
                <p className={styles.cardTxt}>{item.desc}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={styles.container}>
        <h2>Cardapio</h2>
        
          <div className={styles.containerCards}>
            <div className={styles.cardItem}>
              <h1>Urumakis Variados</h1>
              <img src="./src/assets/pexels-oleksandr-p-12955612 (1).jpg" alt="uramakis variados" />
              <p>Uramaki é um tipo de sushi em que o arroz fica por fora da alga nori.</p>
              <p>
                Valor
                <div className={styles.preco}>
                  R$ 29,90
                </div>
              </p>
              <a className={styles.btn}>Pedir</a>
            </div>
            <div className={styles.cardItem}>
              <h1>Uramakis Pepino</h1>
              <img src="./src/assets/pexels-ivan-samkov-8951202.jpg" alt="uramaki pepino" />
              <p>Uramaki de pepino é um sushi com pepino, arroz e outros ingredientes dentro da alga nori, com o arroz na parte externa.</p>
              <p>
                Valor
                <div className={styles.preco}>
                  R$ 29,90
                </div>
              </p>
              <a className={styles.btn}>Pedir</a>
            </div>
            <div className={styles.cardItem}>
              <h1>Niguiris</h1>
              <img src="./src/assets/pexels-cottonbro-studio-5900773 (1).jpg" alt="niguiris" />
              <p>Nigiri é sushi japonês: arroz com peixe cru e condimentos.</p>
              <p>
                Valor
                <div className={styles.preco}>
                  R$ 38,98
                </div>
              </p>
              <a className={styles.btn}>Pedir</a>
            </div>
          </div>

        
      </div>
    </section>
  );
}

export default Home;
