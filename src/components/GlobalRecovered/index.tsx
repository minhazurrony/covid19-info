import { Card } from 'antd';
import React from 'react';
import { CovidData } from '../CovidData';
import { LastUpdate } from '../LastUpdate';

interface GlobalRecoveredProps {
  isCardLoading: boolean;
  totalRecoveredValue: number;
  newRecoveredValue: number;
  lastUpdate: string;
}

export const GlobalRecovered = ({
  isCardLoading,
  totalRecoveredValue,
  newRecoveredValue,
  lastUpdate,
}: GlobalRecoveredProps) => {
  return (
    <Card
      hoverable={true}
      loading={isCardLoading}
      bordered={false}
      className="global-total-recovered-card"
    >
      <CovidData title="Total Recovered:" value={totalRecoveredValue} />
      <CovidData title="New Recovered:" value={newRecoveredValue} />
      <LastUpdate date={lastUpdate} />
    </Card>
  );
};
