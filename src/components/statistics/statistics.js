import PropTypes from 'prop-types';
import { Container, Title, StatList, StatListItem } from './statistics.styled';

export function Statistic({ stats, title }) {
  return (
    <Container className="statistics">
      <Title className="title">{title}</Title>
      <StatList className="stat-list">
        {stats.map(stats => (
          <StatListItem className="item" key={stats.id}>
            <span className="label">{stats.label}</span>
            <span className="percentage">{stats.percentage}%</span>
          </StatListItem>
        ))}
      </StatList>
    </Container>
  );
}

Statistic.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.array.isRequired,
};
