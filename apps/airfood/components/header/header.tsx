import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';
import { css } from 'styled-components';
/* eslint-disable-next-line */
export interface HeaderProps {}

export function Header(props: HeaderProps) {
  return (
    <Wrapper>
      <Hero>
        <TextContainer>
          <Heading>
            A healthy meal delivered to your door, every single day
          </Heading>
          <Description>
            The smart 365-days-per-year food subscription that will make you eat
            healthy again. Tailored to your personal tastes and nutritional
            needs. We have delivered 250,000+ meals last year!
          </Description>
          <Link href="/" passHref>
            <PrimaryButton>Lets Eat Well!</PrimaryButton>
          </Link>
          <Link href="/" passHref>
            <OutlineButton>Learn more</OutlineButton>
          </Link>
        </TextContainer>
        <ImageContainer>
          <ImageStyles
            src={'/static/img/hero.png'}
            width={1479}
            height={1459}
            alt="Airfood, different people eating healthy food."
          />
        </ImageContainer>
      </Hero>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  background-color: #fdf2e9;
  padding: 9.6rem 0;
`;

const Hero = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 9.6rem;
  max-width: 130rem;
  margin: 0 auto;
  align-items: center;
`;
const TextContainer = styled.div``;
const Heading = styled.h1`
  font-size: 5.2rem;
  line-height: 4.5rem;
  font-weight: 700;
  color: #333;
  letter-spacing: -0.5px;
  margin-bottom: 3.2rem;
`;
const Description = styled.p`
  font-size: 2rem;
  line-height: 1.5;
  margin-bottom: 4.8rem;
`;

const ImageContainer = styled.div``;
const ImageStyles = styled(Image)`
  width: 100%;
`;
const ButtonStyles = css`
  &:link,
  &:visited {
    display: inline-block;
    text-decoration: none;
    font-size: 2rem;
    padding: 1.6rem 3.2rem;
    border-radius: 9px;
    transition: all 0.3s;
  }
`;

const PrimaryButton = styled.a`
  ${ButtonStyles}
  &:link,
  &:visited {
    background-color: #e67e22;
    color: #fff;
  }
  &:hover,
  &:active {
    background-color: #cf711f;
  }
  margin-right: 1.6rem;
`;
const OutlineButton = styled.a`
  ${ButtonStyles}
  &:link,
  &:visited {
    background-color: #fff;
    color: #555;
  }

  &:hover,
  &:active {
    background-color: #fdf2e9;
    box-shadow: inset 0 0 0 #fff;
  }
`;
export default Header;
