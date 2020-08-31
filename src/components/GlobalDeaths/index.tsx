import { Card } from 'antd';
import React from 'react';
import { CovidData } from '../CovidData';
import { LastUpdate } from '../LastUpdate';

interface GlobalDeathsProps {
  isCardLoading: boolean;
  totalDeathsValue: number;
  newDeathsValue: number;
  lastUpdate: string;
}

export const GlobalDeaths = ({
  isCardLoading,
  totalDeathsValue,
  newDeathsValue,
  lastUpdate,
}: GlobalDeathsProps) => {
  return (
    <Card
      hoverable={true}
      loading={isCardLoading}
      bordered={false}
      className="global-total-deaths-card"
    >
      <CovidData title="Total Recovered:" value={totalDeathsValue} />
      <CovidData title="New Recovered:" value={newDeathsValue} />
      <LastUpdate date={lastUpdate} />
    </Card>
  );
};
