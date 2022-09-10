import styled from '@emotion/styled';

const ProfileBox = styled.div`
  width: 300px;
  background-color: #ffd662;
  color: #01539d;
  border-radius: 10px;
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 25px;
  padding: 15px;
`;

const ProfileImg = styled.img`
  width: 180px;
  height: 180px;
  border-radius: 50%;
  background-color: white;
  border-width: 2px;
  border-style: solid;
  border-color: #01539d;
`;

const Name = styled.p`
  font-size: 32px;
  font-weight: 600;
  color: black;
  margin: 25px;
`;

const InfoProfile = styled.p`
  margin: 10px;
  font-weight: 500;
  font-size: 24px;
`;

const StatsBox = styled.ul`
  display: flex;
  justify-content: space-around;
  font-size: 18px;
  font-weight: 500;
  list-style: none;
  padding: 0;
  margin-bottom: 0;
  background-color: #ffc41d;
`;

const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 75px;
  border-top-width: 1px;
  border-bottom-width: 0;
  border-left-width: 0;
  border-right-width: 0;
  border-style: solid;
  border-color: #01539d;
  padding: 12px;
`;

const StatsItemCenter = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 75px;
  border-top-width: 1px;
  border-bottom-width: 0;
  border-left-width: 1px;
  border-right-width: 1px;
  border-style: solid;
  border-color: #01539d;
  padding: 12px;
`;

const StatsLabel = styled.span`
  margin-bottom: 5px;
`;

export {
  ProfileBox,
  Description,
  ProfileImg,
  Name,
  InfoProfile,
  StatsBox,
  StatsItem,
  StatsItemCenter,
  StatsLabel,
};
