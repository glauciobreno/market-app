import styled from "styled-components";

export const ProductsArea = styled.div`
  display: flex;
  gap: 50px;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-bottom: 70px;
  margin-top: 30px;

  div {
    height: 320px;
    width: 230px;
    border: 1px solid rgb(194, 193, 193);
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    padding: 20px;

    box-shadow: 0px 5px 8px rgba(0, 0, 0, 0.135216);
    border-radius: 8px;

    button {
      font-size: 25px;
      background: transparent;
      border: none;
      color: #0f52ba;
      cursor: pointer;
    }
  }
`;
