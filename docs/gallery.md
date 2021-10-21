---
order: 1
---

# 组件概览

```tsx
import React from 'react';
import {
  Row,
  Col,
  Button,
  PageHeader,
  Card,
  Menu,
  Dropdown,
  Pagination,
  Steps,
  Checkbox,
  DatePicker,
  Input,
  Radio,
  Slider,
  Switch,
  TimePicker,
  TreeSelect,
  Tabs,
  Timeline,
  Tree,
  message,
} from '@jd/find-react';
import {
  DownOutlined,
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import moment from 'moment';

const { SubMenu } = Menu;
const { Step } = Steps;
const { TreeNode } = TreeSelect;
const { TabPane } = Tabs;

export default () => (
  <div>
    <h1>京东红 @red-6</h1>
    <br />
    <h2>通用</h2>
    <br />
    <h3>Button</h3>
    <Button type="primary">hello</Button>
    <br />
    <h2>导航</h2>
    <br />
    <h3>Dropdown</h3>
    <Dropdown
      overlay={
        <Menu>
          <Menu.Item>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.jd.com"
            >
              1st menu item
            </a>
          </Menu.Item>
          <Menu.Item icon={<DownOutlined />} disabled>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.jd.com"
            >
              2nd menu item (disabled)
            </a>
          </Menu.Item>
          <Menu.Item disabled>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.jd.com"
            >
              3rd menu item (disabled)
            </a>
          </Menu.Item>
          <Menu.Item danger>a danger item</Menu.Item>
        </Menu>
      }
    >
      <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
        Hover me <DownOutlined />
      </a>
    </Dropdown>
    <h3>Menu</h3>
    <Menu mode="horizontal" defaultSelectedKeys={['mail']}>
      <Menu.Item key="mail" icon={<MailOutlined />}>
        Navigation One
      </Menu.Item>
      <Menu.Item key="app" disabled icon={<AppstoreOutlined />}>
        Navigation Two
      </Menu.Item>
      <SubMenu
        key="SubMenu"
        icon={<SettingOutlined />}
        title="Navigation Three - Submenu"
      >
        <Menu.ItemGroup title="Item 1">
          <Menu.Item key="setting:1">Option 1</Menu.Item>
          <Menu.Item key="setting:2">Option 2</Menu.Item>
        </Menu.ItemGroup>
        <Menu.ItemGroup title="Item 2">
          <Menu.Item key="setting:3">Option 3</Menu.Item>
          <Menu.Item key="setting:4">Option 4</Menu.Item>
        </Menu.ItemGroup>
      </SubMenu>
    </Menu>
    <h3>PageHeader</h3>
    <PageHeader
      onBack={() => null}
      title="Title"
      subTitle="This is a subtitle"
    />
    <h3>Steps</h3>
    <Steps current={1}>
      <Step title="Finished" description="This is a description." />
      <Step
        title="In Progress"
        subTitle="Left 00:00:08"
        description="This is a description."
      />
      <Step title="Waiting" description="This is a description." />
    </Steps>
    <h3>Pagination</h3>
    <Pagination defaultCurrent={1} total={50} />
    <br />
    <h2>数据录入</h2>
    <br />
    <h3>CheckBox</h3>
    <Checkbox onChange={() => {}} defaultChecked>
      Checkbox
    </Checkbox>
    <h3>DatePicker</h3>
    <DatePicker onChange={() => {}}></DatePicker>
    <h3>Input</h3>
    <Input placeholder="Basic usage" />
    <h3>Radio</h3>
    <Radio.Group onChange={() => {}} value={1}>
      <Radio value={1}>A</Radio>
      <Radio value={2}>B</Radio>
      <Radio value={3}>C</Radio>
      <Radio value={4}>D</Radio>
    </Radio.Group>
    <h3>Slider</h3>
    <Slider defaultValue={30} />
    <h3>Slider</h3>
    <Switch defaultChecked onChange={() => {}} />
    <h3>TimePicker</h3>
    <TimePicker
      onChange={() => {}}
      defaultOpenValue={moment('00:00:00', 'HH:mm:ss')}
    />
    <h3>TreeSelect</h3>
    <TreeSelect
      showSearch
      style={{ width: '100%' }}
      dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
      placeholder="Please select"
      allowClear
      treeDefaultExpandAll
      onChange={() => {}}
    >
      <TreeNode value="parent 1" title="parent 1">
        <TreeNode value="parent 1-0" title="parent 1-0">
          <TreeNode value="leaf1" title="leaf1" />
          <TreeNode value="leaf2" title="leaf2" />
        </TreeNode>
        <TreeNode value="parent 1-1" title="parent 1-1">
          <TreeNode
            value="leaf3"
            title={<b style={{ color: '#08c' }}>leaf3</b>}
          />
        </TreeNode>
      </TreeNode>
    </TreeSelect>
    <br />
    <h2>数据展示</h2>
    <br />
    <h3>Card</h3>
    <Card
      title="Default size card"
      extra={<a href="#">More</a>}
      style={{ width: 300 }}
    >
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
    </Card>
    <h2>Tabs</h2>
    <Tabs defaultActiveKey="1" onChange={() => {}}>
      <TabPane tab="Tab 1" key="1">
        Content of Tab Pane 1
      </TabPane>
      <TabPane tab="Tab 2" key="2">
        Content of Tab Pane 2
      </TabPane>
      <TabPane tab="Tab 3" key="3">
        Content of Tab Pane 3
      </TabPane>
    </Tabs>
    <h2>Timeline</h2>
    <Timeline>
      <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
      <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
      <Timeline.Item>Technical testing 2015-09-01</Timeline.Item>
      <Timeline.Item>Network problems being solved 2015-09-01</Timeline.Item>
    </Timeline>
    <h2>Tree</h2>
    <Tree
      checkable
      defaultExpandedKeys={['0-0-0', '0-0-1']}
      defaultSelectedKeys={['0-0-0', '0-0-1']}
      defaultCheckedKeys={['0-0-0', '0-0-1']}
      treeData={[
        {
          title: 'parent 1',
          key: '0-0',
          children: [
            {
              title: 'parent 1-0',
              key: '0-0-0',
              disabled: true,
              children: [
                {
                  title: 'leaf',
                  key: '0-0-0-0',
                  disableCheckbox: true,
                },
                {
                  title: 'leaf',
                  key: '0-0-0-1',
                },
              ],
            },
            {
              title: 'parent 1-1',
              key: '0-0-1',
              children: [
                {
                  title: <span style={{ color: '#1890ff' }}>sss</span>,
                  key: '0-0-1-0',
                },
              ],
            },
          ],
        },
      ]}
    />
    <br />
  </div>
);
```
