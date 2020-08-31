import { Col, Divider, Layout, Row } from 'antd';
import 'antd/dist/antd.css';
import axios from 'axios';
import dayjs from 'dayjs';
import React, { useEffect, useState } from 'react';
import './App.css';
import { GlobalConfirmed } from './components/GlobalConfirmed';
import { GlobalDeaths } from './components/GlobalDeaths';
import { GlobalRecovered } from './components/GlobalRecovered';

const { Content } = Layout;

export const App = () => {
  const [data, setData] = useState<any>({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const url = `https://api.covid19api.com/summary`;
      setLoading(true);
      await axios.get(url).then((res) => setData(res.data));
      setLoading(false);
    };
    try {
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }, []);

  const { Global, Date } = data;
  console.log(Global);
  return (
    <Content style={{ padding: 40 }}>
      <Divider>Global Summary</Divider>
      <Row gutter={[16, 16]}>
        <Col lg={{ span: 8 }}>
          <GlobalConfirmed
            isCardLoading={loading}
            totalConfirmedValue={
              Global === undefined ? 0 : Number(Global.TotalConfirmed)
            }
            newConfirmedValue={
              Global === undefined ? 0 : Number(Global.NewConfirmed)
            }
            lastUpdate={
              data === undefined
                ? 'not found'
                : dayjs(Date).format('MMMM D, YYYY h:mma')
            }
          />
        </Col>

        <Col lg={{ span: 8 }}>
          <GlobalRecovered
            isCardLoading={loading}
            totalRecoveredValue={
              Global === undefined ? 0 : Number(Global.TotalRecovered)
            }
            newRecoveredValue={
              Global === undefined ? 0 : Number(Global.NewRecovered)
            }
            lastUpdate={
              data === undefined
                ? 'not found'
                : dayjs(Date).format('MMMM D, YYYY h:mma')
            }
          />
        </Col>

        <Col lg={{ span: 8 }}>
          <GlobalDeaths
            isCardLoading={loading}
            totalDeathsValue={
              Global === undefined ? 0 : Number(Global.TotalDeaths)
            }
            newDeathsValue={Global === undefined ? 0 : Number(Global.NewDeaths)}
            lastUpdate={
              data === undefined
                ? 'not found'
                : dayjs(Date).format('MMMM D, YYYY h:mma')
            }
          />
        </Col>
      </Row>
    </Content>
  );
};
