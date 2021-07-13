import styled from 'styled-components';

export const CartStyles = styled.div`
    table {
      width: 100%;
    }
  
  thead > tr {
    height: 100px;
    background: #f7f7f7;
  }
  
  .space-type {
    width: 200px;
  }
  
  .space-type + th {
    width: 150px;
  }
  //
  //thead > tr > th:nth-child(2 + n) {
  //  width: 14%;
  //}
  
  //.datetime {
  //  width: 50%;
  //}
`
