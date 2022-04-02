import styled from 'styled-components';

const TableStyled = styled.section`

table {  
  font-size: 22px;
  border-collapse: collapse;
  margin: 0 auto;
  

td, th {
  padding: 10px;
  margin: 0
  width: 100%;
}

tbody tr:nth-child(2n){
  background-color: #eee;
}

th {
  position: sticky;
  top: 0;
  background-color: #333;
  color: white;
}

button {
    background-color: blue;
    border: none;
    border-radius: 8px;
    color: #fff;
    font-size: 12px;
    margin-left: 10px;
    padding: 8px
  }
  
`;

export default TableStyled;
