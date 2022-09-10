import styled from '@emotion/styled';

const Container = styled.section`
  width: 300px;
  background-color: #9cc2d5;
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 30px;
  background-color: #9cc2d5;
  color: #0063b1;
  margin: 10px;
`;

const StatList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-evenly;
  margin: 0;
  padding-left: 0;
  padding-top: 20px;
  padding-bottom: 20px;
  background-color: #0063b1;
  color: #9cc2d5;
`;

const StatListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  font-size: 24px;
  height: 65px;
`;

export { Container, Title, StatList, StatListItem };
