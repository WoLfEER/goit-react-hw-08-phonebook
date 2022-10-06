import styled from '@emotion/styled';

export const Container = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  &:not(last-child) {
    margin-bottom: 20px;
  }

  button {
    margin-right: 10px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    border-radius: 4px;
    border-style: none;
    color: #ffffff;
    font-size: 14px;
    background: #ffa17f; /* fallback for old browsers */

    &:hover,
    &:focus {
      transform: scale(1.1);
      /* autoprefixer: off */
      transition: transform 500ms cubic-bezier(0.4, 0, 0.2, 1);
    }
  }
`;

export const Wrap = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Name = styled.p`
  font-size: 17px;
  font-weight: 500;
`;

export const Phone = styled.p`
  color: gray;
`;
