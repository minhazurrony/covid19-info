import { Card } from 'antd';
import React from 'react';
import { CovidData } from '../CovidData';
import { LastUpdate } from '../LastUpdate';

interface GlobalConfirmedProps {
  isCardLoading: boolean;
  totalConfirmedValue: number;
  newConfirmedValue: number;
  lastUpdate: string;
}

export const GlobalConfirmed = ({
  isCardLoading,
  totalConfirmedValue,
  newConfirmedValue,
  lastUpdate,
}: GlobalConfirmedProps) => {
  return (
    <Card
      hoverable={true}
      loading={isCardLoading}
      bordered={false}
      className="global-total-confirmed-card"
    >
      <CovidData title="Total Confirmed:" value={totalConfirmedValue} />
      <CovidData title="New Confirmed:" value={newConfirmedValue} />
      <LastUpdate date={lastUpdate} />
    </Card>
  );
};
