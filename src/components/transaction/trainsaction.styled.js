import styled from '@emotion/styled';

const Table = styled.table`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  background-color: #a0c0d6;
  color: #2a3240;
  margin-bottom: 60px;
  font-size: 18px;
`;

const TH = styled.th`
  width: 100px;
  font-weight: 900;
`;

const TD = styled.td`
  width: 100px;
  font-weight: 500;
`;

export { Table, TH, TD };
