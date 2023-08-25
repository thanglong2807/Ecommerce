import { styled } from "styled-components";

const Style = styled.header`
  background: var(--secondary-700, #1b6392);
  box-shadow: 0px -1px 0px 0px rgba(255, 255, 255, 0.16) inset;

  color: var(--gray-00, #fff);
  /* Body/Small/400 */
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 142.857% */
  .header-top {
    padding: 12px 0;
    width: 100%;
    align-items: center;
  }
  .header_top-item {
    align-items: center;
  }
  .list--top {
    gap: 12px;
    align-items: center;
    &::after {
      content: "";
      border-left: 1px solid #fff;
      margin-right: 12px;
      height: 16px;
    }
  }
  .select {
    align-items: center;
  }
  .header_main{
    padding: 20px 0;
    display: flex;
    justify-content: space-between;
  }
  .logo {
    display: flex;
    align-items: center;
    color: var(--gray-00, #fff);
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: 40px; /* 125% */
    letter-spacing: -0.64px;
    gap: 8px;
  }
  .search{
    border-radius: 2px;
background: var(--gray-00, #FFF);
box-shadow: 0px 8px 32px 0px rgba(0, 0, 0, 0.08);
display: flex;
align-items: center;
overflow: hidden;
width: 578px;
input{
    flex:1;
    padding: 0 0 0 20px ;
    max-width: 606px;
    &::placeholder{
        color: var(--gray-500, #77878F);
    }
}
button{
    padding:14px 20px;
}
  }
  .handle{
    display: flex;
    align-items: center;
    ul{
        display: flex;
    align-items: center;
gap: 24px;
    }
  }
`;

export default Style;
