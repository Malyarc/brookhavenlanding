import React from "react";
import styled from "styled-components";

const Section = styled.section`
  padding: 80px 0;
  background-color: var(--medium-purple);
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  @media (min-width: 640px) { grid-template-columns: repeat(2, 1fr); }
  @media (min-width: 1024px) { grid-template-columns: repeat(5, 1fr); gap: 1.5rem; }
`;

const Card = styled.div`
  background-color: var(--white);
  padding: 2.5rem 1.5rem;
  text-align: center;
  border-radius: 4px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  border: 1px solid #eaeaea;
  transition: all 0.3s ease;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background-color: var(--gold);
    opacity: 0;
    transition: opacity 0.3s ease;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 20px rgba(0,0,0,0.15);
    
    &::before {
      opacity: 1;
    }
  }
`;

const IconImage = styled.img`
  width: 64px;
  height: 64px;
  margin: 0 auto 1.5rem;
  object-fit: contain;
`;

const CardTitle = styled.h3`
  font-size: 1.125rem;
  font-family: 'Georgia', serif;
  color: var(--navy);
  line-height: 1.4;
`;

const services = [
  {
    title: "Family Office",
    icon: "https://brookhaven.us/wp-content/uploads/2023/07/Family-Office.png",
  },
  {
    title: "Private Wealth Management",
    icon: "https://brookhaven.us/wp-content/uploads/2023/07/PrivateWealthManagement.png",
  },
  {
    title: "Tax Strategy",
    icon: "https://brookhaven.us/wp-content/uploads/2023/07/TaxStrategy.png",
  },
  {
    title: "Legal Expertise",
    icon: "https://brookhaven.us/wp-content/uploads/2023/07/Legal.png",
  },
  {
    title: "Insurance & Risk Mitigation",
    icon: "https://brookhaven.us/wp-content/uploads/2023/07/InsuranceAndRiskMitigation.png",
  },
];

export function Services() {
  return (
    <Section id="services">
      <Container>
        <Grid>
          {services.map((service, index) => (
            <Card key={index}>
              <IconImage src={service.icon} alt={service.title} />
              <CardTitle>{service.title}</CardTitle>
            </Card>
          ))}
        </Grid>
      </Container>
    </Section>
  );
}
