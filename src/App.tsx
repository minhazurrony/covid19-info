import { Card, Col, Divider, Layout, Row } from 'antd';
import 'antd/dist/antd.css';
import axios from 'axios';
import dayjs from 'dayjs';
import React, { useEffect, useState } from 'react';
import './App.css';
import { CovidData } from './components/CovidData';
import { LastUpdate } from './components/LastUpdate';

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
          <Card
            hoverable={true}
            loading={loading}
            bordered={false}
            className="global-total-confirmed-card"
          >
            <CovidData
              title="Total Confirmed:"
              value={Global === undefined ? 0 : Number(Global.TotalConfirmed)}
            />
            <CovidData
              title="New Confirmed:"
              value={Global === undefined ? 0 : Number(Global.NewConfirmed)}
            />
            <LastUpdate
              date={
                data === undefined
                  ? 'not found'
                  : dayjs(Date).format('MMMM D, YYYY h:mma')
              }
            />
          </Card>
        </Col>
        <Col lg={{ span: 8 }}>
          <Card
            hoverable={true}
            loading={loading}
            bordered={false}
            className="global-total-recovered-card"
          >
            <CovidData
              title="Total Recovered:"
              value={Global === undefined ? 0 : Number(Global.TotalRecovered)}
            />
            <CovidData
              title="New Recovered:"
              value={Global === undefined ? 0 : Number(Global.NewRecovered)}
            />
            <LastUpdate
              date={
                data === undefined
                  ? 'not found'
                  : dayjs(Date).format('MMMM D, YYYY h:mma')
              }
            />
          </Card>
        </Col>

        <Col lg={{ span: 8 }}>
          <Card
            hoverable={true}
            loading={loading}
            bordered={false}
            className="global-total-deaths-card"
          >
            <CovidData
              title="Total Deaths:"
              value={Global === undefined ? 0 : Number(Global.TotalDeaths)}
            />
            <CovidData
              title="New Deaths:"
              value={Global === undefined ? 0 : Number(Global.NewDeaths)}
            />
            <LastUpdate
              date={
                data === undefined
                  ? 'not found'
                  : dayjs(Date).format('MMMM D, YYYY h:mma')
              }
            />
          </Card>
        </Col>
      </Row>
    </Content>
  );
};
