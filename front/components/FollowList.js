import React, { useMemo } from 'react';
import { List, Button, Card } from 'antd';
import { StopOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';

const FollowList = ({ header, data }) => {
  const style = useMemo(() => ({ marginBottom: 20 }), []);
  const grid = useMemo(() => ({ gutter: 4, xs: 2, md: 3 }), []);
  const div = useMemo(() => ({ textAlign: 'center', margin: '10px 0' }), []);
  const Listitem = useMemo(() => ({ marginTop: 20 }), []);
  const actions = useMemo(() => ([<StopOutlined key="stop" />]), []);
  return (
    <List
      style={style}
      grid={grid}
      size="small"
      header={<div>{header}</div>}
      loadMore={<div style={div}><Button>더 보기</Button></div>}
      bordered
      dataSource={data}
      renderItem={(item) => (
        <List.Item style={Listitem}>
          <Card actions={actions}>
            <Card.Meta description={item.nickname} />
          </Card>
        </List.Item>
      )}
    />
  );
};

FollowList.propTypes = {
  header: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
};

export default FollowList;
