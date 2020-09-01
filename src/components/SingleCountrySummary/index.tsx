import { Card, Col, Row } from 'antd';
import React from 'react';
import { LastUpdate } from '../LastUpdate';

interface SingleCountrySummaryProps {
  filteredCountryData: any;
}

export const SingleCountrySummary = ({
  filteredCountryData,
}: SingleCountrySummaryProps) => {
  if (!filteredCountryData) {
    return null;
  }
  return (
    <Row>
      <Col lg={{ span: 6, offset: 9 }}>
        <Card hoverable={true} className="countrywise-summary-card">
          <h2>{filteredCountryData.Country}</h2>
          <p>
            Total Confirmed:{' '}
            <span className="confirmed">
              {filteredCountryData.TotalConfirmed}
            </span>{' '}
          </p>
          <p>
            New Confirmed:{' '}
            <span className="confirmed">
              {filteredCountryData.NewConfirmed}
            </span>
          </p>
          <p>
            Total Recovered:{' '}
            <span className="recovered">
              {filteredCountryData.TotalRecovered}
            </span>{' '}
          </p>
          <p>
            New Recovered:{' '}
            <span className="recovered">
              {filteredCountryData.NewRecovered}
            </span>{' '}
          </p>
          <p>
            Total Deaths:{' '}
            <span className="deaths">{filteredCountryData.TotalDeaths}</span>{' '}
          </p>
          <p>
            New Deaths:{' '}
            <span className="deaths">{filteredCountryData.NewDeaths}</span>{' '}
          </p>
          <LastUpdate date={filteredCountryData.date} />
        </Card>
      </Col>
    </Row>
  );
};
