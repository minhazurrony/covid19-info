import { Card, Col, Pagination, Row, Spin } from 'antd';
import React, { useState } from 'react';
import { LastUpdate } from '../LastUpdate';
import './countryWiseSummary.css';

interface CountrywiseSummaryCardProps {
  countryWiseData: any;
}

export const CountrywiseSummaryCard = ({
  countryWiseData,
}: CountrywiseSummaryCardProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(8);

  if (!countryWiseData) {
    return (
      <div className="loader-container">
        <Spin tip="Loading..." />
      </div>
    );
  }

  // Get current Country
  const indexOfLastCountry = currentPage * itemsPerPage;
  const indexOfFirstCountry = indexOfLastCountry - itemsPerPage;
  const currentCountry = countryWiseData.slice(
    indexOfFirstCountry,
    indexOfLastCountry,
  );
  return (
    <>
      <Row gutter={[16, 16]}>
        {currentCountry.map((item: any) => (
          <Col
            xs={{ span: 24 }}
            md={{ span: 8 }}
            lg={{ span: 6 }}
            key={item.Slug}
            className="country-column"
          >
            <Card hoverable={true} className="countrywise-summary-card">
              <h2>{item.Country}</h2>
              <p>
                Total Confirmed:{' '}
                <span className="confirmed">{item.TotalConfirmed}</span>{' '}
              </p>
              <p>
                New Confirmed:{' '}
                <span className="confirmed">{item.NewConfirmed}</span>
              </p>
              <p>
                Total Recovered:{' '}
                <span className="recovered">{item.TotalRecovered}</span>{' '}
              </p>
              <p>
                New Recovered:{' '}
                <span className="recovered">{item.NewRecovered}</span>{' '}
              </p>
              <p>
                Total Deaths: <span className="deaths">{item.TotalDeaths}</span>{' '}
              </p>
              <p>
                New Deaths: <span className="deaths">{item.NewDeaths}</span>{' '}
              </p>
              <LastUpdate date={item.date} />
            </Card>
          </Col>
        ))}
      </Row>
      <Pagination
        current={currentPage}
        showSizeChanger={false}
        defaultPageSize={itemsPerPage}
        pageSize={itemsPerPage}
        total={countryWiseData.length}
        onChange={(page) => setCurrentPage(page)}
        hideOnSinglePage={true}
        className="styled-pagination"
      />
    </>
  );
};
