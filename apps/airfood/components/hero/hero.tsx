import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';
import { css } from 'styled-components';

/* eslint-disable-next-line */
export interface HeroProps {}

const StyledHero = styled.div`
  color: pink;
`;

export function Hero(props: HeroProps) {
  const images = [1, 2, 3, 4, 5].map((name, index) => {
    return (
      <Image
        key={index}
        alt="Customer Photo"
        src={`/static/img/customers/customer-${name}.jpg`}
        width={38}
        height={38}
      />
    );
  });

  console.log('🚀 ~ file: hero.tsx ~ line 73 ~ Hero ~ images', images);

  return (
    <Wrapper>
      <HeroStyle>
        <TextContainer>
          <Heading>
            <h1 className="text-3xl font-bold underline">Hello world!</h1>A
            healthy meal delivered to your door, every single day
          </Heading>
          <Description>
            The smart 365-days-per-year food subscription that will make you eat
            healthy again. Tailored to your personal tastes and nutritional
            needs. We have delivered 250,000+ meals last year!
          </Description>
          {/* <Link href="/" passHref>
            <PrimaryButton>Lets Eat Well!</PrimaryButton>
          </Link>
          <Link href="/" passHref>
            <OutlineButton>Learn more</OutlineButton>
          </Link> */}
          {/* <Link href="/" passHref>
            <ButtonStyles primary marginRightSm>
              Lets Eat Well!
            </ButtonStyles>
          </Link>
          <Link href="/" passHref>
            <ButtonStyles>Learn more</ButtonStyles>
          </Link> */}

          <DeliveredMeals>
            <DeliveredMealsImages>{images}</DeliveredMealsImages>
            <DeliveredText>
              <span>250,000 </span>meals delivered last year!
            </DeliveredText>
          </DeliveredMeals>
        </TextContainer>
        <ImageContainer>
          <ImageStyles
            src={'/static/img/hero.png'}
            width={1479}
            height={1459}
            alt="Airfood, different people eating healthy food."
          />
        </ImageContainer>
      </HeroStyle>
    </Wrapper>
  );
}

const DeliveredText = styled.div`
  font-size: 1.8rem;
  font-weight: 600;

  span {
    color: #cf711f;
    font-weight: 700;
  }
`;

const DeliveredMealsImages = styled.div`
  img {
    height: 4.8rem;
    width: 4.8rem;
    border: 3px solid #fdf239;
    border-radius: 50%;
    margin-right: -1.6rem;

    &:last-child {
      margin: 0;
    }
  }
`;

const DeliveredMeals = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;
  margin-top: 8rem;
`;

const Wrapper = styled.div`
  background-color: #fdf2e9;
  padding: 4.8rem 0 9.6rem 0;
`;

const HeroStyle = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 9.6rem;
  max-width: 130rem;
  margin: 0 auto;
  padding: 0 3.2rem;
  align-items: center;
`;
const TextContainer = styled.div``;
const Heading = styled.h1`
  font-size: 5.2rem;
  line-height: 4.9rem;
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
const ButtonStyles = css<{ primary: boolean; marginRightSm: boolean }>`
  &:link,
  &:visited {
    display: inline-block;
    text-decoration: none;
    font-size: 2rem;
    font-weight: 600;
    padding: 1.6rem 3.2rem;
    border-radius: 9px;
    transition: all 0.3s;
  }

  &:link,
  &:visited {
    background-color: ${(p) => (p.primary ? '#e67e22' : '#fff')};
    color: ${(p) => (p.primary ? '#fff' : '#555')};
  }
  &:hover,
  &:active {
    background-color: ${(p) => (p.primary ? '#cf711f' : '#fdf2e9')};
    box-shadow: ${(p) => (p.primary ? '' : 'inset 0 0 0 #fff')};
  }
  margin-right: ${(p) => (p.marginRightSm ? '1.6rem' : '0')};
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

export default Hero;