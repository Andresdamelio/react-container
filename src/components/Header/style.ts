import styled from 'styled-components';

export const Header: any = styled.header`
  width: 100%;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: rgb(255 255 255 / 0.2);
  background: rgb(18 24 41 / 1);
  margin-bottom: 2.5rem;
`;

export const Body = styled.section`
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px;
`;

export const Selector = styled.select`
  padding: 5px;
  border-radius: 5px;
  background: rgb(32 40 62 / 1);
  color: #fff;
  font-weight: bold;

  &:focus-visible {
    outline: none;
  }
`;

export const Title = styled.h1`
  color: #fff;
  font-family: sans-serif;
  font-weight: 700;
  font-size: 2rem;
  margin: 0;
  margin-left: 10px;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

export const Brand = styled.div`
  display: flex;
  align-items: center;
`;

export const Image = styled.img`
  height: 2.5rem;

  @media (max-width: 768px) {
    height: 1.5rem;
  }
`;

Header.Body = Body;
Header.Selector = Selector;
Header.Title = Title;
Header.Brand = Brand;
Header.Image = Image;
