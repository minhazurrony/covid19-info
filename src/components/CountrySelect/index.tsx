import { Button, Select, Space } from 'antd';
import React from 'react';

const { Option } = Select;

interface CountrySelectProps {
  countryData: Array<any>;
  handleChoosenCountry: (arg: any) => void;
  handleChange: () => void;
  resetFilteredCountry: () => void;
  handleShowSingleCountrySummary: (arg: any) => void;
  isDisabled: boolean;
}

export const CountrySelect = ({
  countryData,
  handleChoosenCountry,
  handleChange,
  resetFilteredCountry,
  handleShowSingleCountrySummary,
  isDisabled,
}: CountrySelectProps) => {
  //sort country array of object by letter
  const compare = (a: any, b: any) => {
    const countryA = a.Country;
    const countryB = b.Country;

    let comparison = 0;
    if (countryA > countryB) {
      comparison = 1;
    } else if (countryA < countryB) {
      comparison = -1;
    }
    return comparison;
  };

  return (
    <Space>
      <Select
        showSearch
        style={{ width: 200 }}
        allowClear={true}
        placeholder="Choose country"
        optionFilterProp="value"
        onChange={(value: any) => {
          handleChoosenCountry(value);
        }}
        onClear={() => {
          handleChoosenCountry('');
          resetFilteredCountry();
          handleShowSingleCountrySummary(false);
        }}
      >
        {countryData.sort(compare).map((item) => {
          return (
            <Option key={item.Slug} value={item.Country}>
              {item.Country}
            </Option>
          );
        })}
      </Select>
      <Button
        type="primary"
        disabled={isDisabled}
        onClick={() => {
          handleChange();
          handleShowSingleCountrySummary(true);
        }}
      >
        Find Now!
      </Button>
    </Space>
  );
};
