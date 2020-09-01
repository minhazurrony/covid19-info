import { Select } from 'antd';
import React from 'react';

const { Option } = Select;

interface CountrySelectProps {
  countryData: Array<any>;
}

export const CountrySelect = ({ countryData }: CountrySelectProps) => {
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

  const handleSelectValueChange = (value: any) => {
    console.log(value);
  };

  return (
    <Select
      showSearch
      style={{ width: 500 }}
      placeholder="Choose country"
      // optionFilterProp="children"
      allowClear={true}
      onChange={handleSelectValueChange}
    >
      {countryData.sort(compare).map((item) => {
        return (
          <Option key={item.Slug} value={item.Country}>
            {item.Country}
          </Option>
        );
      })}
    </Select>
  );
};
