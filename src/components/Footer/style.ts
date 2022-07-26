import styled from 'styled-components';

export const Footer: any = styled.footer`
  width: 100%;
  border-top-width: 1px;
  border-top-style: solid;
  border-top-color: rgb(255 255 255 / 0.2);
  background: rgb(18 24 41 / 1);
  margin-top: 2.5rem;
`;

export const Body = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

export const Text = styled.h3`
  font-familiy: sans-serif;
  font-weight: 700;
  color: #fff;
  font-size: 1rem;
  text-align: center;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 0.7rem;
  }
`;

Footer.Body = Body;
Footer.Text = Text;
