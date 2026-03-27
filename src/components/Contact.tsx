import React from "react";
import styled from "styled-components";

const Section = styled.section`
  padding: 80px 0;
  background-color: var(--white);
  text-align: center;
`;

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const CTAContainer = styled.div`
  padding: 4rem 2rem;
  background-color: var(--navy);
  border-radius: 8px;
  box-shadow: 0 15px 35px rgba(36, 31, 84, 0.2);
`;

const Title = styled.h2`
  font-family: 'Georgia', serif;
  font-size: 2.5rem;
  color: var(--white);
  margin-bottom: 1.5rem;
`;

const ButtonPrimary = styled.a`
  padding: 1rem 3rem;
  font-size: 1.125rem;
  background-color: var(--gold);
  color: var(--navy);
  font-weight: 600;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1px;
  display: inline-block;

  &:hover {
    background-color: var(--gold-hover);
  }
`;

export function Contact() {
  return (
    <Section id="contact">
      <Container>
        <CTAContainer>
          <Title>Start A Conversation</Title>
          <ButtonPrimary href="mailto:contact@brookhaven.us">
            Contact Us
          </ButtonPrimary>
        </CTAContainer>
      </Container>
    </Section>
  );
}
