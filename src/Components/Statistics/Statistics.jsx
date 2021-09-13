import { StatisticPannel, Statistic } from './Statistics.styled';

export const Statistics = ({good, neutral, bad, total, positivePercentage}) => {
    return (
        <StatisticPannel>
            <Statistic>Good: {good}</Statistic>
            <Statistic>Neutral: {neutral}</Statistic>
            <Statistic>Bad: {bad}</Statistic>
            <Statistic>Total: {total()}</Statistic>
            <Statistic>Positive feedback: {positivePercentage()}%</Statistic>
        </StatisticPannel>
    )
}