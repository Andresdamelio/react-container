import styled, { css } from 'styled-components';

export const Container: any = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 20px 0 40px;
`;

export const Group = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Button = styled.button`
  padding: 8px 10px;
  background: rgb(32 40 62 / 1);
  color: #fff;
  font-weight: 700;
  font-family: sans-serif;
  border: 1px solid #fff;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background: #fde68a;
    color: #000;
    border-color: #000;
  }

  ${(props: any) =>
    props.mright &&
    css`
      margin-right: 12px;
    `};

  ${(props: any) =>
    props.active &&
    css`
      background: #eab308;
      color: #000;
      border-color: #000;
    `};
`;

export const List: any = styled.section`
  display: block;
  width: 100%;
`;

export const Body: any = styled.section`
  display: flex;
`;

export const Title = styled.h2`
  font-family: sans-serif;
  font-size: 2rem;
  color: #fff;
  font-weight: 700;
`;

List.Body = Body;
List.Title = Title;
Container.Group = Group;
Container.Button = Button;
