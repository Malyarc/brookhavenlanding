import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Menu, X } from "lucide-react";

const Header = styled.header<{ $isScrolled: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;
  transition: all 0.3s ease;
  padding: ${({ $isScrolled }) => ($isScrolled ? "1rem 0" : "1.5rem 0")};
  background-color: ${({ $isScrolled }) => ($isScrolled ? "var(--white)" : "transparent")};
  box-shadow: ${({ $isScrolled }) => ($isScrolled ? "0 2px 10px rgba(0,0,0,0.1)" : "none")};
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const NavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LogoContainer = styled.a`
  display: flex;
  align-items: center;
  cursor: pointer;
  img {
    height: 40px;
    transition: all 0.3s ease;
  }
`;

const DesktopNav = styled.nav`
  display: none;
  align-items: center;
  gap: 2rem;

  @media (min-width: 768px) {
    display: flex;
  }
`;

const NavLink = styled.a<{ $isScrolled: boolean }>`
  font-size: 0.9rem;
  font-weight: 500;
  color: ${({ $isScrolled }) => ($isScrolled ? "var(--navy)" : "var(--white)")};
  transition: color 0.2s ease;
  text-transform: uppercase;
  letter-spacing: 1px;

  &:hover {
    color: var(--gold);
  }
`;

const CTAButton = styled.a`
  padding: 0.75rem 1.5rem;
  font-weight: 600;
  font-size: 0.875rem;
  transition: all 0.3s ease;
  background-color: var(--gold);
  color: var(--navy);
  text-transform: uppercase;
  letter-spacing: 1px;
  display: inline-block;

  &:hover {
    background-color: var(--gold-hover);
  }
`;

const MobileToggle = styled.button<{ $isScrolled: boolean }>`
  display: block;
  background: none;
  border: none;
  padding: 0.5rem;
  color: ${({ $isScrolled }) => ($isScrolled ? "var(--navy)" : "var(--white)")};
  
  @media (min-width: 768px) {
    display: none;
  }
`;

const MobileMenu = styled.div<{ $isOpen: boolean }>`
  display: ${({ $isOpen }) => ($isOpen ? "block" : "none")};
  background-color: var(--white);
  padding: 1rem 0;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);

  @media (min-width: 768px) {
    display: none;
  }
`;

const MobileNavLink = styled.a`
  display: block;
  width: 100%;
  text-align: center;
  padding: 1rem;
  color: var(--navy);
  font-size: 1rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 1px;

  &:hover {
    color: var(--gold);
  }
`;

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#top" },
    { name: "Services", href: "#services" },
    { name: "Our Team", href: "#team" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <Header $isScrolled={isScrolled} id="top">
      <Container>
        <NavWrapper>
          <LogoContainer href="#top">
            <img 
              src={isScrolled 
                ? "https://brookhaven.us/wp-content/uploads/2023/08/Brookhaven-Logo-main.png" 
                : "https://brookhaven.us/wp-content/uploads/2023/07/Brookhaven-White-Horizontal.png"} 
              alt="Brookhaven Wealth Management" 
            />
          </LogoContainer>

          <DesktopNav>
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                href={link.href}
                $isScrolled={isScrolled}
              >
                {link.name}
              </NavLink>
            ))}
            <CTAButton href="#">
              PORTAL LOGIN
            </CTAButton>
          </DesktopNav>

          <MobileToggle $isScrolled={isScrolled} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </MobileToggle>
        </NavWrapper>
      </Container>

      <MobileMenu $isOpen={isMobileMenuOpen}>
        {navLinks.map((link) => (
          <MobileNavLink key={link.name} href={link.href} onClick={() => setIsMobileMenuOpen(false)}>
            {link.name}
          </MobileNavLink>
        ))}
        <div style={{ padding: "1rem", textAlign: "center" }}>
          <CTAButton href="#">
            PORTAL LOGIN
          </CTAButton>
        </div>
      </MobileMenu>
    </Header>
  );
}
