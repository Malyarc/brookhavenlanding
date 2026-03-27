import React from "react";
import styled, { keyframes } from "styled-components";

const kenBurns = keyframes`
  0% {
    transform: scale(1) translate(0, 0);
  }
  100% {
    transform: scale(1.12) translate(-1%, -1%);
  }
`;

const shimmer = keyframes`
  0% {
    transform: translateX(-100%) skewX(-15deg);
  }
  100% {
    transform: translateX(200%) skewX(-15deg);
  }
`;

const fadeUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(40px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const drawUnderline = keyframes`
  0% {
    width: 0;
  }
  100% {
    width: 100%;
  }
`;

const HeroSection = styled.section`
  position: relative;
  height: 100vh;
  min-height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background-color: var(--navy);
`;

const BgImageContainer = styled.div`
  position: absolute;
  inset: 0;
  z-index: 0;
  overflow: hidden;
`;

const BgImage = styled.div`
  position: absolute;
  inset: -5%;
  background-image: url('https://brookhaven.us/wp-content/uploads/2023/07/BH-digital-website-HeroImages_0002_BH-Photography1.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  animation: ${kenBurns} 25s linear infinite alternate;
`;

const OverlayWash = styled.div`
  position: absolute;
  inset: 0;
  background-color: rgba(36, 31, 84, 0.6);
`;

const ShimmerEffect = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 50%;
  height: 100%;
  background: linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0) 100%);
  animation: ${shimmer} 6s infinite linear;
  pointer-events: none;
  z-index: 1;
`;

const Content = styled.div`
  position: relative;
  z-index: 10;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  text-align: center;
`;

const Subtitle = styled.p`
  color: var(--white);
  font-family: 'Inter', sans-serif;
  font-size: 1.125rem;
  margin-bottom: 2rem;
  display: block;
  opacity: 0;
  animation: ${fadeUp} 0.8s ease-out 0.3s forwards;
  
  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`;

const Title = styled.h1`
  font-family: 'Georgia', serif;
  font-size: 2.5rem;
  color: var(--white);
  line-height: 1.2;
  margin-bottom: 1.5rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  opacity: 0;
  animation: ${fadeUp} 0.8s ease-out 0.6s forwards;
  
  @media (min-width: 768px) { font-size: 3.5rem; }
  @media (min-width: 1024px) { font-size: 4.5rem; }
`;

const HighlightWord = styled.span`
  position: relative;
  display: inline-block;

  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    height: 4px;
    background-color: var(--gold);
    animation: ${drawUnderline} 1s ease-out 1.5s forwards;
    width: 0;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  opacity: 0;
  animation: ${fadeUp} 0.8s ease-out 0.9s forwards;

  @media (min-width: 640px) {
    flex-direction: row;
    gap: 1.5rem;
  }
`;

const ButtonPrimary = styled.a`
  padding: 1rem 2rem;
  font-size: 1rem;
  background-color: var(--gold);
  color: var(--navy);
  font-weight: 600;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1px;

  &:hover {
    background-color: var(--gold-hover);
  }
`;

const ButtonOutline = styled.a`
  padding: 1rem 2rem;
  font-size: 1rem;
  background-color: transparent;
  color: var(--white);
  border: 2px solid var(--white);
  font-weight: 600;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1px;

  &:hover {
    background-color: var(--white);
    color: var(--navy);
  }
`;

export function Hero() {
  return (
    <HeroSection>
      <BgImageContainer>
        <BgImage />
        <OverlayWash />
        <ShimmerEffect />
      </BgImageContainer>

      <Content>
        <Title>
          Your Wealth Protected is Your <HighlightWord>Legacy</HighlightWord> Preserved.
        </Title>
        <Subtitle>Protect your future, and secure your legacy.</Subtitle>
        <ButtonGroup>
          <ButtonPrimary href="#contact">
            Speak with a Founder
          </ButtonPrimary>
          <ButtonOutline href="#contact">
            Start A Conversation
          </ButtonOutline>
        </ButtonGroup>
      </Content>
    </HeroSection>
  );
}
