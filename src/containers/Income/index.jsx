import React from 'react';

import { Typography } from 'antd';
import { Button, Input } from 'antd';

import { PlusCircleOutlined } from '@ant-design/icons';

import AppTable from '../../components/AppTable';

const { Title } = Typography;
const { Search } = Input;

const Income = () => (
  <div>
    <Title level={2}>Ingresos</Title>
    <Button type="primary" icon={<PlusCircleOutlined />}>
      Nuevo Ingreso
    </Button>
    <Search
      placeholder="input search text"
      onSearch={value => console.log(value)}
      style={{ width: 200 }}
    />
    <AppTable />
  </div>
);

export default Income;