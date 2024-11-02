"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Background, Container, ContainerTitle, Footer, FooterTitle, HeartImage, PageTitle, Subtitle, TextContainer, TogetherTimeText } from "../styles/index";

import { Countdown } from "./components/Countdown";
import { useState, useEffect } from "react";

export default function Home() {

  const [images, setImages] = useState([]);

  useEffect(() => {
    const loadImages = async () => {
      const res = await fetch('/api/images');
      const data = await res.json();
      setImages(data);
    };

    loadImages();
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7, // Configuração padrão para telas grandes
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: 'ease-in-out',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5, // Para telas entre 768px e 1024px
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3, // Para telas entre 480px e 768px
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2, // Para telas menores que 480px
        },
      },
    ],
  };


  return (
    <Background>
      <PageTitle>
        Álbum de memórias
      </PageTitle>
      <Container>
        <ContainerTitle>
          Diego + Bianca
        </ContainerTitle>
        <TextContainer>
          <Countdown />
          <TogetherTimeText>
            Juntos desde 20 de outubro de 2024
          </TogetherTimeText>
        </TextContainer>
        <Subtitle>Para sempre lembrar que te amo mais do que ontem, mas nunca mais do que amanhã</Subtitle>
      </Container>
      <Footer>
        <FooterTitle>"As pessoas que amamos nunca desaparecem. Elas vivem em nossos corações e na nossa memória." — Albus Dumbledore.</FooterTitle>
        <Slider {...settings}>
          {images.map((src, index) => (
            <div key={index} style={{ height: '100%' }}>
              <HeartImage src={src} alt={`Imagem ${index + 1}`} />
            </div>
          ))}
        </Slider>
      </Footer>
    </Background>
  );
}
