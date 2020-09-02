import { Col, Divider, Layout, Row } from 'antd';
import 'antd/dist/antd.css';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './App.css';
import { CountrySelect } from './components/CountrySelect';
import { CountrywiseSummaryCard } from './components/CountrywiseSummaryCard';
import { GlobalConfirmed } from './components/GlobalConfirmed';
import { GlobalDeaths } from './components/GlobalDeaths';
import { GlobalRecovered } from './components/GlobalRecovered';
import { SingleCountrySummary } from './components/SingleCountrySummary';

const { Content } = Layout;

export const App = () => {
  const [data, setData] = useState<any>({});
  const [countries, setCountries] = useState<any>([]);
  const [loading, setLoading] = useState(false);
  const [choosenCountry, setChoosenCountry] = useState('');
  const [filteredCountryInfo, setFilteredCountryInfo] = useState([]);
  const [showSingleCountrySummary, setShowSingleCountrySummary] = useState(
    false,
  );

  useEffect(() => {
    const fetchCovidData = async () => {
      const url = `https://api.covid19api.com/summary`;
      setLoading(true);
      await axios.get(url).then((res) => setData(res.data));
      setLoading(false);
    };

    const fetchCountry = async () => {
      const url = `https://api.covid19api.com/countries`;
      await axios.get(url).then((res) => setCountries(res.data));
    };

    try {
      fetchCovidData();
      fetchCountry();
    } catch (error) {
      console.log(error);
    }
  }, []);

  const { Global, Countries, Date } = data;

  const handleFilterCountrySummary = () => {
    if (Countries !== undefined) {
      Countries.filter((item: any) =>
        item.Country === choosenCountry ? setFilteredCountryInfo(item) : null,
      );
    }
  };

  const resetFilterCountryInfo = () => {
    setFilteredCountryInfo([]);
  };

  console.log('hello');

  return (
    <Content className="main-container">
      <Divider>Global Summary</Divider>
      <Row gutter={[16, 16]}>
        <Col
          xs={{ span: 24 }}
          md={{ span: 8 }}
          lg={{ span: 8 }}
          xl={{ span: 8 }}
          xxl={{ span: 8 }}
        >
          <GlobalConfirmed
            isCardLoading={loading}
            totalConfirmedValue={
              Global === undefined ? 0 : Number(Global.TotalConfirmed)
            }
            newConfirmedValue={
              Global === undefined ? 0 : Number(Global.NewConfirmed)
            }
            lastUpdate={data === undefined ? 'not found' : Date}
          />
        </Col>

        <Col
          xs={{ span: 24 }}
          md={{ span: 8 }}
          lg={{ span: 8 }}
          xl={{ span: 8 }}
          xxl={{ span: 8 }}
        >
          <GlobalRecovered
            isCardLoading={loading}
            totalRecoveredValue={
              Global === undefined ? 0 : Number(Global.TotalRecovered)
            }
            newRecoveredValue={
              Global === undefined ? 0 : Number(Global.NewRecovered)
            }
            lastUpdate={data === undefined ? 'not found' : Date}
          />
        </Col>

        <Col
          xs={{ span: 24 }}
          md={{ span: 8 }}
          lg={{ span: 8 }}
          xl={{ span: 8 }}
          xxl={{ span: 8 }}
        >
          <GlobalDeaths
            isCardLoading={loading}
            totalDeathsValue={
              Global === undefined ? 0 : Number(Global.TotalDeaths)
            }
            newDeathsValue={Global === undefined ? 0 : Number(Global.NewDeaths)}
            lastUpdate={data === undefined ? 'not found' : Date}
          />
        </Col>
      </Row>

      <div className="countrywise-summary-container">
        <Divider>Countrywise Summary</Divider>
        <div className="country-select-container">
          <CountrySelect
            countryData={countries}
            handleChoosenCountry={(arg) => setChoosenCountry(arg)}
            handleChange={() => handleFilterCountrySummary()}
            resetFilteredCountry={resetFilterCountryInfo}
            handleShowSingleCountrySummary={(arg: any) =>
              setShowSingleCountrySummary(arg)
            }
            isDisabled={!choosenCountry ? true : false}
          />
        </div>

        {showSingleCountrySummary ? (
          <SingleCountrySummary
            filteredCountryData={
              filteredCountryInfo ? filteredCountryInfo : null
            }
          />
        ) : (
          <CountrywiseSummaryCard
            countryWiseData={Countries === undefined ? null : Countries}
          />
        )}
      </div>
    </Content>
  );
};
