import { Card, Col, Empty, Row } from 'antd';
import React from 'react';
import { LastUpdate } from '../LastUpdate';

interface SingleCountrySummaryProps {
  filteredCountryData: any;
}

export const SingleCountrySummary = ({
  filteredCountryData,
}: SingleCountrySummaryProps) => {
  return (
    <Row>
      <Col
        xs={{ span: 24 }}
        md={{ span: 12, offset: 6 }}
        lg={{ span: 12, offset: 6 }}
        xl={{ span: 8, offset: 8 }}
      >
        <Card hoverable={true} className="countrywise-summary-card">
          {Object.keys(filteredCountryData).length === 0 ? (
            <Empty />
          ) : (
            <>
              {' '}
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
                <span className="deaths">
                  {filteredCountryData.TotalDeaths}
                </span>{' '}
              </p>
              <p>
                New Deaths:{' '}
                <span className="deaths">{filteredCountryData.NewDeaths}</span>{' '}
              </p>
              <LastUpdate date={filteredCountryData.date} />
            </>
          )}
        </Card>
      </Col>
    </Row>
  );
};
