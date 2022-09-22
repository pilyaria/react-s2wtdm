import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import React, { useState } from 'react';
import { Tabs, Table, Tooltip, Space, Popconfirm, Modal, confirmPopConf, Button, Button, Tree, DatePicker, Switch, Input, Search, Form, Typography, Select, TreeSelect, ConfigProvider, Checkbox } from 'antd';
import moment from 'moment';
import Highlighter from 'react-highlight-words';
import {
  QuestionCircleTwoTone,
  EditTwoTone,
  DeleteTwoTone,
  WarningTwoTone,
  CheckCircleTwoTone,
  InfoCircleTwoTone,
  StopTwoTone,
  ExclamationCircleOutlined,
  FolderOutlined,
  UserOutlined,
  SearchOutlined,
  ScheduleOutlined,
  LineChartOutlined,
  AlertOutlined,
  FieldTimeOutlined,
  ApiOutlined,
  TeamOutlined,
  InteractionOutlined,
  SafetyCertificateOutlined,
  ProfileOutlined,
  CarryOutOutlined,
  WifiOutlined,
  ToolOutlined,
  SnippetsOutlined

} from '@ant-design/icons';
import reqwest from 'reqwest';
import ReactPaginate from 'react-paginate';
import Pagination from './components/Pagination';

import ruRU from 'antd/lib/locale/ru_RU';

//const { RangePicker } = DatePicker;

function onChangeData(dates, dateStrings) {
  console.log('From: ', dates[0], ', to: ', dates[1]);
  console.log('From: ', dateStrings[0], ', to: ', dateStrings[1]);
}

const { TabPane } = Tabs;
const { Column, ColumnGroup } = Table;

const { Search } = Input;
const onSearch = value => console.log(value);

function callback(key) {
  console.log(key);
}

function showConfirm() {
  confirm({
    title: 'Подтверждение',
    icon: <ExclamationCircleOutlined />,
    content: 'Вы действительно хотите удалить <b>1000</b> условий контроля?',
    onOk() {
      console.log('Да');
    },
    onCancel() {
      console.log('Отмена');
    },
  });
}

const { confirm } = Modal;

const data1 = [
  {
    key: '1',
    abonent: 'ДОМ №11 ТЭ',
    events: '53039',
  },
{
    key: '2',
    abonent: 'ДОМ №12 ЦО',
    events: '53039',
  },
  {
    key: '3',
    abonent: 'ДОМ №13 ЭЭ',
    events: '53039',
  },
  {
    key: '4',
    abonent: 'ДОМ №14 ГВС',
    events: '53039',
  },
  {
    key: '5',
    abonent: 'ДОМ №15 ХВС',
    events: '53039',
  },
  {
    key: '6',
    abonent: 'ДОМ №17 Газ',
    events: '53039',
  },
  {
    key: '7',
    abonent: 'ДОМ №18 Датчики',
    events: '53039',
  },
  {
    key: '8',
    abonent: 'ДОМ №19 Ст.воды',
    events: '53039',
  },
  {
    key: '9',
    abonent: 'ДОМ №20 ЦО',
    events: '53039',
  },
  {
    key: '10',
    abonent: 'ДОМ №21 ГВС',
    events: '53039',
  },
  
  
];

const data2 = [
  {
    key: '1',
    time: '13.05.2021 23:00',
    object: 'ДОМ №22 ТЭ',
    event: <a>ДОМ №22 ТЭ. t1 ниже темп. графика на 46,7 град.</a>,
    status: <WarningTwoTone twoToneColor="#eb2f96" style={{ fontSize: '20px'}} />,
    type_message: <Tooltip placement="top" title={'Групповое условие'}><TeamOutlined style={{ fontSize: '20px'}}/></Tooltip>,
  },

  {
    key: '2',
    time: '13.05.2021 23:00',
    object: 'ДОМ №4 ГВС',
    event: <a>Параметр p1 в норме. Значение = 2,180.</a>,
    status: <CheckCircleTwoTone  twoToneColor="#52c41a" style={{ fontSize: '20px'}} />,
    type_message: <Tooltip placement="top" title={'Индивидуальное условие'}><UserOutlined style={{ fontSize: '20px'}}/></Tooltip>,
  },

  {
    key: '3',
    time: '13.05.2021 23:00',
    object: 'ДОМ №22 ТЭ',
    event: <a>Коррекция часов прибора</a>,
    status: <Tooltip placement="top" title={'Предупреждение'}><InfoCircleTwoTone twoToneColor="#fadb14" style={{ fontSize: '20px'}} /></Tooltip>,
    type_message: <Tooltip placement="top" title={'Срабатывание датчиков'}><AlertOutlined  style={{ fontSize: '20px'}}/></Tooltip>,
  },

  {
    key: '4',
    time: '13.05.2021 23:00',
    object: 'ДОМ №22 ТЭ',
    event: <a>Часы прибора идут с опережением на 7ч.</a>,
    status: <WarningTwoTone twoToneColor="#eb2f96" style={{ fontSize: '20px'}} />,
    type_message: <Tooltip placement="top" title={'ПДЗ'}><LineChartOutlined  style={{ fontSize: '20px'}}/></Tooltip>,
  },

  {
    key: '5',
    time: '14.05.2021, 17:00',
    object: '0313/042 ЦО',
    event: <a>Остановка счета: время штатной работы 0 мин.</a>,
    status: <StopTwoTone twoToneColor="#eb2f96" style={{ fontSize: '20px'}} />,
    type_message: <Tooltip placement="top" title={'Неверное время прибора'}><FieldTimeOutlined  style={{ fontSize: '20px'}}/></Tooltip>,
  },

  {
    key: '6',
    time: '13.05.2021 23:00',
    object: 'ДОМ №22 ТЭ',
    event:  <a>Остановка счета: неисправность прибора 35 мин.</a>,
    status: <StopTwoTone twoToneColor="#eb2f96" style={{ fontSize: '20px'}} />,
    type_message: <Tooltip placement="top" title={'Отсутствие связи с прибором'}><WifiOutlined  style={{ fontSize: '20px'}}/></Tooltip>,
  },

 {
    key: '7',
    time: '13.05.2021 23:00',
    object: 'ДОМ №22 ТЭ',
    event: <a>Часы прибора отстают на 89 366ч 14мин.</a>,
    status: <WarningTwoTone twoToneColor="#eb2f96" style={{ fontSize: '20px'}} />,
    type_message: <Tooltip placement="top" title={'Изменение параметров прибора'}><InteractionOutlined  style={{ fontSize: '20px'}}/></Tooltip>,
  },

  {
    key: '8',
    time: '14.05.2021, 17:00',
    object: '0313/042 ЦО',
    event: <a>В приборе нет данных за час.</a>,
    status: <InfoCircleTwoTone twoToneColor="#fadb14" style={{ fontSize: '20px'}} />,
    type_message: <Tooltip placement="top" title={'Поверка'}><ToolOutlined  style={{ fontSize: '20px'}}/></Tooltip>,
  },

  {
    key: '9',
    time: '13.05.2021 23:00',
    object: 'ДОМ №22 ТЭ',
    event:  <a>Разность температур меньше минимального 60 мин.</a>,
    status: <WarningTwoTone twoToneColor="#eb2f96" style={{ fontSize: '20px'}} />,
    type_message: <Tooltip placement="top" title={'Условия прибора'}><ProfileOutlined  style={{ fontSize: '20px'}}/></Tooltip>,
  },
  
  {
    key: '10',
    time: '13.05.2021 23:00',
    object: 'ДОМ №4 ГВС',
    event: <a>t1-t2= 5,8 *C</a>,
    status: <CheckCircleTwoTone  twoToneColor="#52c41a" style={{ fontSize: '20px'}} />,
    type_message: <Tooltip placement="top" title={'Месячный отчёт'}><SnippetsOutlined  style={{ fontSize: '20px'}}/></Tooltip>,
  },

];

//Для сортировщика
const sorter = (a, b) => (isNaN(a) && isNaN(b) ? (a || '').localeCompare(b || '') : a - b);

const columns3 = [
  {
    dataIndex:'edit',
    key:'edit',
    render: record => 
              <Space size="middle">
              <Popconfirm placement="right" title={'Вы действительно хотите удалить данное оповещение?'} onConfirm={confirmPopConf} okText="Да" cancelText="Нет">
              <Button shape="circle" icon={<EditTwoTone />} />
              </Popconfirm>
            
            </Space>
        
  },
  {
    title: <Space size="middle">
    <Button shape="circle" onClick={showConfirm} icon={<DeleteTwoTone />} />
    </Space>,
    dataIndex:'delete',
    key:'delete',
    render: record => 
              <Space size="middle">
                <Button shape="circle" onClick={showConfirm} icon={<DeleteTwoTone />} />
              </Space>
        
  },
  
  {
    title:'',
    dataIndex: 'type_condition',
    align: 'center',
    width: 15,
    sorter: true,
    filters: [
      { text: <FolderOutlined twoToneColor="#eb2f96" style={{ fontSize: '20px'}} />, value: 'info_icon' },
      { text: <UserOutlined twoToneColor="#fadb14" style={{ fontSize: '20px'}} />, value: 'error_icon' },
      { text: 'групповое', value: 'error_icon' },
      { text: 'индивидуальное', value: 'error_icon' },
    ],
    onFilter: (value, record) => record.status.indexOf(value) === 0,
  },

  // {
  //   title: '',
  //   dataIndex: 'type_condition',
  // },

  {
    title: 'Группа/ТУ',
    dataIndex: 'group_tu',
    key:'group_tu',
    sorter: true,
    sorter: (a, b) => sorter(a.group_tu, b.group_tu),
    sortDirections: ['descend', 'ascend'],
  },

  {
    title: 'Условие',
    dataIndex: 'condition',
    key: 'condition',
    sorter: (a, b) => sorter(a.condition, b.condition),
    sortDirections: ['descend', 'ascend'],
  },
  {
    title: 'Описание',
    dataIndex: 'discription',
    key:'discription',
    sorter: true,
    sorter: (a, b) => sorter(a.discription, b.discription),
    sortDirections: ['descend', 'ascend'],
  },
  {
    title: 'Сообщение',
    dataIndex: 'message',
    key:'mesage',
    sorter: true,
    sorter: (a, b) => sorter(a.discription, b.discription),
    sortDirections: ['descend', 'ascend'],
  },
  {
    title: 'Тип события',
    dataIndex: 'type_event',
    key: 'type_event',
    sorter: true,
    sorter: (a, b) => sorter(a.type, b.type),
    sortDirections: ['descend', 'ascend'],
 
  },
  {
    title: 'Тип ресурса',
    dataIndex: 'type_resource',
    key: 'type_resource',
    sorter: true,
    sorter: (a, b) => sorter(a.type, b.type),
    sortDirections: ['descend', 'ascend'],
 
  },
  {
    title: 'Период',
    dataIndex: 'period',
    key: 'period',
    sorter: true,
    sorter: (a, b) => sorter(a.type, b.type),
    sortDirections: ['descend', 'ascend'],
 
  },
   

];

const data3 = [
  {
    key: '1',
    type_condition:<Tooltip placement="top" title={'Групповое условие'}><FolderOutlined style={{ fontSize: '20px'}}/></Tooltip>,
    group_tu: 'ДОГОВОР',
    condition: 'T>0.1 and M1>0 and (M1-M2)/M1>0.04 and M1-M2>0.01',
    message: 'Утечка >4%',
    type_event: 'Предупреждение',
    discription: 'Утечка >4%',
    type_resource:'ТЭ',
    period:'часовые',  
  },
{
    key: '2',
    type_condition:<Tooltip placement="top" title={'Групповое условие'}><FolderOutlined style={{ fontSize: '20px'}}/></Tooltip>,
    group_tu: 'ДОГОВОР',
    condition: 'Tmax>0.1 and Tmax<0.5',
    message: 'Завышение расхода >6 мин',
    type_event: 'Предупреждение',
    discription: 'Завышение расхода >6 мин',
    type_resource:'ТЭ',
    period:'часовые', 
  },
  {
    key: '3',
    type_condition:<Tooltip placement="top" title={'Групповое условие'}><FolderOutlined style={{ fontSize: '20px'}}/></Tooltip>,
    group_tu: 'ДОГОВОР',
    condition: 'Tmax>0.5',
    message: 'Завышение расхода >30 мин',
    type_event: 'Авария',
    discription: 'Завышение расхода >30 мин',
    type_resource:'ТЭ',
    period:'часовые', 
  },
  {
    key: '4',
    type_condition:<Tooltip placement="top" title={'Групповое условие'}><FolderOutlined style={{ fontSize: '20px'}}/></Tooltip>,
    group_tu: 'ДОГОВОР',
    condition: 'Terr>0.001',
    message: 'Остановка счета: неисправность прибор',
    type_event: 'Авария',
    discription: 'Остановка счета: неисправность прибора',
    type_resource:'ТЭ',
    period:'часовые', 
  },
   {
    key: '5',
    type_condition:<Tooltip placement="top" title={'Индивидуальное условие'}><UserOutlined style={{ fontSize: '20px'}}/></Tooltip>,
    group_tu: '1004/029',
    condition: 'm1-m2>1000',
    message: 'Контроль утечки',
    type_event: 'Авария',
    discription: 'Контроль утечки',
    type_resource:'ТЭ',
    period:'часовые', 
  },
   {
    key: '6',
    type_condition:<Tooltip placement="top" title={'Индивидуальное условие'}><UserOutlined style={{ fontSize: '20px'}}/></Tooltip>,
    group_tu: '0737/356',
    condition: 'Т2>(Т1/2)',
    message: 'Завышение температуры',
    type_event: 'НС',
    discription: 'Завышение температуры',
    type_resource:'ТЭ',
    period:'часовые', 
  },
   {
    key: '7',
    type_condition:<Tooltip placement="top" title={'Индивидуальное условие'}><UserOutlined style={{ fontSize: '20px'}}/></Tooltip>,
    group_tu: '0806/161',
    condition: 't1>80',
    message: 't1>80',
    type_event: 'Сообщение',
    discription: 'Контроль температуры',
    type_resource:'ТЭ',
    period:'часовые', 
  },
  {
    key: '8',
    type_condition:<Tooltip placement="top" title={'Групповое условие'}><FolderOutlined style={{ fontSize: '20px'}}/></Tooltip>,
    group_tu: 'ДОГОВОР',
    condition: '	T>0.1 and M1>0 and (M1-M2)/M1>0.04 and M1-M2>0.01',
    message: 'Утечка >4%1',
    type_event: 'Предупреждение',
    discription: 'Утечка >4%',
    type_resource:'ТЭ',
    period:'часовые', 
  },
{
    key: '9',
    type_condition:<Tooltip placement="top" title={'Групповое условие'}><FolderOutlined style={{ fontSize: '20px'}}/></Tooltip>,
    group_tu: 'ДОГОВОР',
    condition: 'Tmax>0.1 and Tmax<0.5',
    message: 'Завышение расхода >6 мин',
    type_event: 'Предупреждение',
    discription: 'Завышение расхода >6 мин',
    type_resource:'ТЭ',
    period:'часовые', 
  },
  {
    key: '10',
    type_condition:<Tooltip placement="top" title={'Групповое условие'}><FolderOutlined style={{ fontSize: '20px'}}/></Tooltip>,
    group_tu: 'ДОГОВОР',
    condition: 'Tmax>0.5',
    message: 'Завышение расхода >30 ми',
    type_event: 'Авария',
    discription: 'Завышение расхода >30 мин',
    type_resource:'ТЭ',
    period:'часовые', 
  },
  {
    key: '11',
    type_condition:<Tooltip placement="top" title={'Групповое условие'}><FolderOutlined style={{ fontSize: '20px'}}/></Tooltip>,
    group_tu: 'ДОГОВОР',
    condition: 'Terr>0.001',
    message: 'Остановка счета: неисправность прибора',
    type_event: 'Авария',
    discription: 'Остановка счета: неисправность прибора',
    type_resource:'ТЭ',
    period:'часовые', 
  },
   {
    key: '12',
    type_condition:<Tooltip placement="top" title={'Индивидуальное условие'}><UserOutlined style={{ fontSize: '20px'}}/></Tooltip>,
    group_tu: '1004/029',
    condition: 'm1-m2>1000',
    message: 'Контроль утечки',
    type_event: 'Авария',
    discription: 'Контроль утечки',
    type_resource:'ТЭ',
    period:'часовые', 
  },
   {
    key: '13',
    type_condition:<Tooltip placement="top" title={'Индивидуальное условие'}><UserOutlined style={{ fontSize: '20px'}}/></Tooltip>,
    group_tu: '0737/356',
    condition: 'Т2>(Т1/2)',
    message: 'Завышение температуры',
    type_event: 'НС',
    discription: 'Завышение температуры',
    type_resource:'ТЭ',
    period:'часовые', 
  },
   {
    key: '14',
    type_condition:<Tooltip placement="top" title={'Индивидуальное условие'}><UserOutlined style={{ fontSize: '20px'}}/></Tooltip>,
    group_tu: '0806/161',
    condition: 't1>80',
    message: 't1>80',
    type_event: 'Сообщение',
    discription: 'Контроль температуры',
    type_resource:'ТЭ',
    period:'часовые', 
  },
  
];

const treeData1 = [
  {
    title: 'Группы',
    key: '0-0',
    value: '0-0',
    children: [
      {
        title: 'Договор',
        key: '0-0-0',
        value: '0-0-0',
        children: [
          {
            title: 'ЖК_Гарден Парк',
            key: '0-0-0-0',
            value: '0-0-0-0',
          },
          {
            title: 'ЖК_Легенда',
            key: '0-0-0-1',
            value: '0-0-0-1',
          },
          {
            title: 'ЖК_Эдальго',
            key: '0-0-0-2',
            value: '0-0-0-2',
          },
        ],
      },
      {
        title: 'Электрогорск',
        key: '0-0-1',
        value: '0-0-1',
        children: [
          {
            title: 'ЦДО "Истоки"',
            key: '0-0-1-0',
            value: '0-0-1-0',
          },
          {
            title: 'ЦДО"Истоки"',
            key: '0-0-1-1',
            value: '0-0-1-1',
          },
        ],
      },
      {
      title: 'ЛК МОЭК',
      key: '0-0-2',
      value: '0-0-2',
      children: [
        {
          title: '0150/004',
          key: '0-0-2-0',
          value: '0-0-2-0',
        },
        {
          title: '0303/047',
          key: '0-0-2-1',
          value: '0-0-2-1',
        },
        {
          title: 'ЦСКА',
          key: '0-0-2-3',
          value: '0-0-2-3',
        },
      ],
      },
      {
        title: '0003/004',
        key: '0-0-3',
        value: '0-0-3',
      },
    ],
  },
];

class Demo extends React.Component {
  state = {
     value: ['0-0'],
  };

  onChange = value => {
    console.log(value);
    this.setState({ value });
  };

  render() {
    return (
      <TreeSelect
        style={{ width: '100%' }}
        value={this.state.value}
        dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
        treeData={treeData1}
        placeholder="Выберите группу"
        //treeDefaultExpandAll
        onChange={this.onChange}
        treeCheckable
        maxTagCount={1}
       
      />
    );
  }
}

const TreeSelect1 = () => {

  const state = {
    value: ['0-0'],
  };

  const onSelect = (selectedKeys, info) => {
    console.log('selected', selectedKeys, info);
  };

  const onCheck = (checkedKeys, info) => {
    console.log('onCheck', checkedKeys, info);
  };

  return (
    <TreeSelect
      //checkable
      treeCheckable
      //treeDataSimpleMode
      // defaultExpandedKeys={['0-0']}
      // defaultSelectedKeys={['0-0']}
      // defaultCheckedKeys={['0-0']}
      //value = {state.value}
      onSelect={onSelect}
      onCheck={onCheck}
      treeData={treeData1}
      style={{ width: 200 }}
      //maxTag
      //style ={width: '100%'}
      //width = {50}
    />
  );
};

const treeData2 = [
  {
    title: 'Ресурсы',
    key: '0-0',
    children: [
      {
        title: 'ТЭ',
        key: '0-0-0',
      },
       {
        title: 'ЦО',
        key: '0-0-1',
      },
       {
        title: 'ГВС',
        key: '0-0-2',
      },
       {
        title: 'Вент',
        key: '0-0-3',
      },
       {
        title: 'ХВС',
        key: '0-0-4',
      },
       {
        title: 'ЭЭ',
        key: '0-0-5',
      },
       {
        title: 'Газ',
        key: '0-0-6',
      },
       {
        title: 'Пар',
        key: '0-0-7',
      },
    ],  
  },    
];

const TreeSelect2 = () => {
  const onSelect = (selectedKeys, info) => {
    console.log('selected', selectedKeys, info);
  };

  const onCheck = (checkedKeys, info) => {
    console.log('onCheck', checkedKeys, info);
  };

  return (
    <Tree
      checkable
      // defaultExpandedKeys={['0-0-0', '0-0-1']}
      // defaultSelectedKeys={['0-0-0', '0-0-1']}
      // defaultCheckedKeys={['0-0-0', '0-0-1']}
      onSelect={onSelect}
      onCheck={onCheck}
      treeData={treeData2}
    />
  );
};

const treeData3 = [
  {
    title: 'Тип условия',
    key: '0-0',
    children: [
      {
        title: 'Групповое',
        key: '0-0-0',
      },
       {
        title: 'Индивидуальное',
        key: '0-0-1',
      },
    ],  
  },    
];

const TreeSelect3 = () => {
  const onSelect = (selectedKeys, info) => {
    console.log('selected', selectedKeys, info);
  };

  const onCheck = (checkedKeys, info) => {
    console.log('onCheck', checkedKeys, info);
  };

  return (
    <Tree
      checkable
      // defaultExpandedKeys={['0-0-0', '0-0-1']}
      // defaultSelectedKeys={['0-0-0', '0-0-1']}
      defaultCheckedKeys={['0-0']}
      onSelect={onSelect}
      onCheck={onCheck}
      treeData={treeData3}
    />
  );
};

const { RangePicker } = DatePicker;

//Первый столбец с выбором галочек
const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
  getCheckboxProps: (record) => ({
    //disabled: record.key == 2,
    // Column configuration not to be checked
    key: record.key,
  }),
   
};

//Фильтр по таблице "Сообщения контроля"
class FilterSearch1 extends React.Component {
  state = {
    searchText: '',
    searchedColumn: '',
  };

  getColumnSearchProps = dataIndex => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={node => {
            this.searchInput = node;
          }}
          placeholder={`Найти ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ marginBottom: 8, display: 'block' }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Найти
          </Button>
          <Button onClick={() => this.handleReset(clearFilters)} size="small" style={{ width: 90 }}>
            Сброс
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({ closeDropdown: false });
              this.setState({
                searchText: selectedKeys[0],
                searchedColumn: dataIndex,
              });
            }}
          >
            Фильтр
          </Button>
        </Space>
      </div>
    ),
    filterIcon: filtered => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
    onFilter: (value, record) =>
      record[dataIndex]
        ? record[dataIndex].toString().toLowerCase().includes(value.toLowerCase())
        : '',
    onFilterDropdownVisibleChange: visible => {
      if (visible) {
        setTimeout(() => this.searchInput.select(), 100);
      }
    },
    render: text =>
      this.state.searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
          searchWords={[this.state.searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ''}
        />
      ) : (
        text
      ),
  });

  handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    this.setState({
      searchText: selectedKeys[0],
      searchedColumn: dataIndex,
    });
  };

  handleReset = clearFilters => {
    clearFilters();
    this.setState({ searchText: '' });
  };

  render() {
    const columns1 = [
  
    {
    title: 'Инфо',
    dataIndex: 'select',
    //render: record => <a>Выбрать</a>,
    render: record => 
      <Space size="middle">
        <Button type="primary" shape="circle" icon={<ScheduleOutlined />} />
      </Space>
  },
  
  {
    title: 'Точка учёта',
    dataIndex: 'abonent',
    key: 'abonent',
    ...this.getColumnSearchProps('abonent'),
    //align: 'right',
  },
  {
    title: 'Событий',
    dataIndex: 'events',
    // render: text => <a>{text}</a>,
  },
  {
    title: <Button size="small">Квитировано всё</Button>,
    dataIndex: 'read-all',
    render: record => <Button size="small">Квитировано</Button>,
    align: 'center',
  },
];

    return <Table 
              columns={columns1}
              dataSource={data1}
              rowSelection={{
                type: Checkbox,
                ...rowSelection,
              }}
              bordered
              title={() => 'Контроль по выбранным точкам учёта'}
            />;
  }
}

//Фильтр по таблице "Сообщения контроля"
class FilterSearch2 extends React.Component {
  state = {
    searchText: '',
    searchedColumn: '',
  };

  getColumnSearchProps = dataIndex => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={node => {
            this.searchInput = node;
          }}
          placeholder={`Найти ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ marginBottom: 8, display: 'block' }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Найти
          </Button>
          <Button onClick={() => this.handleReset(clearFilters)} size="small" style={{ width: 90 }}>
            Сброс
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({ closeDropdown: false });
              this.setState({
                searchText: selectedKeys[0],
                searchedColumn: dataIndex,
              });
            }}
          >
            Фильтр
          </Button>
        </Space>
      </div>
    ),
    filterIcon: filtered => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
    onFilter: (value, record) =>
      record[dataIndex]
        ? record[dataIndex].toString().toLowerCase().includes(value.toLowerCase())
        : '',
    onFilterDropdownVisibleChange: visible => {
      if (visible) {
        setTimeout(() => this.searchInput.select(), 100);
      }
    },
    render: text =>
      this.state.searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
          searchWords={[this.state.searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ''}
        />
      ) : (
        text
      ),
  });

  handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    this.setState({
      searchText: selectedKeys[0],
      searchedColumn: dataIndex,
    });
  };

  handleReset = clearFilters => {
    clearFilters();
    this.setState({ searchText: '' });
  };

  render() {
    const columns2 = [
  {
    title: 'Время',
    dataIndex: 'time',
    key: 'time',
    //render: text => <a>{text}</a>,
    sorter: true,
    sorter: (a, b) => sorter(a.time, b.time),
    sortDirections: ['descend', 'ascend'],
  },
  {
    title: 'Точка учёта',
    dataIndex: 'object',
    key: 'object',
    sorter: (a, b) => sorter(a.object, b.object),
    ...this.getColumnSearchProps('object'),
    //sortDirections: ['descend', 'ascend'],
    //align: 'right',
  },
  {
    title: 'Событие',
    dataIndex: 'event',
    key: 'event',
    render: text => <a>{text}</a>,
    sorter: (a, b) => sorter(a.event, b.event),
    sortDirections: ['descend', 'ascend'],
    ...this.getColumnSearchProps('event'),
  },
  {
    title: 'Статус'
    // <Tooltip placement="top" title={'Цветовое обозначение события для привлечения внимания'}>
    //           Статус<QuestionCircleTwoTone style={{ fontSize: '10px', placement:'topRight'}}/>
    //           </Tooltip>
            ,
    dataIndex: 'status',
    align: 'center',
   // sorter: true,
    filters: [
      { text: <WarningTwoTone twoToneColor="#eb2f96" style={{ fontSize: '20px'}} />, value: 'info_icon' },
      { text: <InfoCircleTwoTone twoToneColor="#fadb14" style={{ fontSize: '20px'}} />, value: 'error_icon' },
      { text: <CheckCircleTwoTone  twoToneColor="#52c41a" style={{ fontSize: '20px'}} />, value: 'ok_icon' },
      { text: <StopTwoTone twoToneColor="#eb2f96" style={{ fontSize: '20px'}} />, value: 'fatal_icon' },
    ],
    //onFilter: (value, record) => record.status.indexOf(value) === 0,
  },
  {
    title: 'Тип',
    dataIndex: 'type_message',
    align: 'center',
    //sorter: true,
    filters: [
      { text: <UserOutlined style={{ fontSize: '20px'}} />, value: 'User' },
      { text: <ScheduleOutlined style={{ fontSize: '20px'}} />, value: 'Schedule' },
      { text: <LineChartOutlined  twoToneColor="#52c41a" style={{ fontSize: '20px'}} />, value: 'LineChart' },
      { text: <AlertOutlined twoToneColor="#eb2f96" style={{ fontSize: '20px'}} />, value: 'Alert' },
      { text: <FieldTimeOutlined style={{ fontSize: '20px'}} />, value: 'FieldTime' },
      { text: <ApiOutlined style={{ fontSize: '20px'}} />, value: 'Api' },
      { text: <TeamOutlined  twoToneColor="#52c41a" style={{ fontSize: '20px'}} />, value: 'Team' },
      { text: <InteractionOutlined twoToneColor="#eb2f96" style={{ fontSize: '20px'}} />, value: 'Interaction' },
      { text: <SafetyCertificateOutlined  twoToneColor="#52c41a" style={{ fontSize: '20px'}} />, value: 'Certificate' },
      { text: <ProfileOutlined twoToneColor="#eb2f96" style={{ fontSize: '20px'}} />, value: 'Profile' },
    ],
    //onFilter: (value, record) => record.status.indexOf(value) === 0,
  },
];

    return <Table 
              columns={columns2}
              dataSource={data2}
              bordered
              title={() => 'Сообщения контроля по всем точкам учёта'}
            />;
  }
}

function onChange1(pagination, filters, sorter, extra) {
  console.log('params', pagination, filters, sorter, extra);
}

//Для селекта
const { Option } = Select;
function handleChange(value) {
  console.log(`selected ${value}`);
}

//Модальное окно добавления условия
class ModalСondition extends React.Component {
  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  hideModal = () => {
    this.setState({
      visible: false,
    });
  };

  //Модальное окно добавления рассылки
  render() {
    return (
      <>
        <Button type="primary" onClick={this.showModal}>
          Добавить условие
        </Button>

        {/* <Button shape="circle"
          onClick={this.showModal}
          icon={<PlusCircleTwoTone twoToneColor="#52c41a" />}
        /> */}

        <Modal
          title="Добавление условия"
          visible={this.state.visible}
          onOk={this.hideModal}
          onCancel={this.hideModal}
          okText="Добавить"
          cancelText="Отмена"
        >
             <div className="site-input-group-wrapper">
              <Input.Group size="small">
              <Space direction="vertical">
                <Space>
                  Новое условие
                  <Select defaultValue="Утечка больше" size="small" onChange={handleChange}>
                      <Option value="sms">Утечка больше</Option>
                      <Option value="sms">Подмес больше</Option>
                      <Option value="e-mail">t1 - t2</Option>
                      <Option value="e-mail">t2 меньше t1/2 + </Option>
                  </Select>
                  <Input size="small" placeholder="100" style={{ width: '70px'}} />
                  кг
                </Space>
                <Space>
                  Тип условия
                  <Select defaultValue="Групповое" size="small" onChange={handleChange}>
                      <Option value="sms">Групповое</Option>
                      <Option value="e-mail">Индивидуальное</Option>
                  </Select>
                </Space>
                <Space>
                  Для точки учёта/группы
                  <Select defaultValue="Номер точки учёта" size="small" onChange={handleChange}>
                    <Option value="sms">ДОМ 1</Option>
                    <Option value="e-mail">ДОМ 2</Option>
                    <Option value="sms">ДОМ 3</Option>
                    <Option value="e-mail">ДОМ 4</Option>
                    <Option value="sms">ДОМ 5</Option>
                    <Option value="e-mail">ДОМ 6</Option>
                  </Select>

                </Space>
                <Switch
                  checkedChildren=  "Режим эксперта"
                  unCheckedChildren="Режим эксперта"
                  defaultunChecked
                />
              </Space>
              
             
              </Input.Group>
            </div>
            
        </Modal>
      </>
    );
  }
}

//третья тестовая вкладка с пагинацией, но грузит json данные, после чего показывает мои
const getRandomuserParams = params => ({
  results: params.pagination.pageSize,
  page: params.pagination.current,
  ...params,
});

class PaginationTab extends React.Component {
  state = {
    data: [],
    pagination: {
      current: 1,
      pageSize: 10,
    },
    loading: false,
  };

  componentDidMount() {
    const { pagination } = this.state;
    this.fetch({ pagination });
  }

  handleTableChange = (pagination, filters, sorter) => {
    this.fetch({
      sortField: sorter.field,
      sortOrder: sorter.order,
      pagination,
      ...filters,
    });
  };

  //здесь происходит случайное наполнение таблицы - без этого у меня не получается наполнить своими данными
  fetch = (params = {}) => {
    this.setState({ loading: true });
    reqwest({
      url: 'https://randomuser.me/api',
      method: 'get',
      type: 'json',
      data: getRandomuserParams(params),
    }).then(data => {
      console.log(data);
      this.setState({
        loading: false,
        data: data.results,
        pagination: {
          ...params.pagination,
          total: 200,
          // 200 is mock data, you should read it from server
          // total: data.totalCount,
        },
      });
    });
  };

  render() {
    const { data, pagination, loading } = this.state;
    return (
      <Table
        columns={columns3}
        //rowKey={record => record.login.uuid}
        dataSource={data3}
        pagination={pagination}
        loading={loading}
        onChange={this.handleTableChange}
        title={() => 'Табличка с выбором количества строк на странице'}
      />
    );
  }
}

const originData = [
  {
    key: '1',
    type_condition:<Tooltip placement="top" title={'Групповое условие'}><FolderOutlined style={{ fontSize: '20px'}}/></Tooltip>,
    group_tu: 'ДОГОВОР',
    condition: '	T>0.1 and M1>0 and (M1-M2)/M1>0.04 and M1-M2>0.01',
    type: 'Предупреждение',
    discription: 'Утечка >4%',
  },
{
    key: '2',
    type_condition:<Tooltip placement="top" title={'Групповое условие'}><FolderOutlined style={{ fontSize: '20px'}}/></Tooltip>,
    group_tu: 'ДОГОВОР',
    condition: 'Tmax>0.1 and Tmax<0.5',
    type: 'Предупреждение',
    discription: 'Завышение расхода >6 мин',
  },
  {
    key: '3',
    type_condition:<Tooltip placement="top" title={'Групповое условие'}><FolderOutlined style={{ fontSize: '20px'}}/></Tooltip>,
    group_tu: 'ДОГОВОР',
    condition: 'Tmax>0.5',
    type: 'Авария',
    discription: 'Завышение расхода >30 мин',
  },
  {
    key: '4',
    type_condition:<Tooltip placement="top" title={'Групповое условие'}><FolderOutlined style={{ fontSize: '20px'}}/></Tooltip>,
    group_tu: 'ДОГОВОР',
    condition: 'Terr>0.001',
    type: 'Авария',
    discription: 'Остановка счета: неисправность прибора',
  },
   {
    key: '5',
    type_condition:<Tooltip placement="top" title={'Индивидуальное условие'}><UserOutlined style={{ fontSize: '20px'}}/></Tooltip>,
    group_tu: '1004/029',
    condition: 'm1-m2>1000',
    type: 'Авария',
    discription: 'Контроль утечки',
  },
   {
    key: '6',
    type_condition:<Tooltip placement="top" title={'Индивидуальное условие'}><UserOutlined style={{ fontSize: '20px'}}/></Tooltip>,
    group_tu: '0737/356',
    condition: 'Т2>(Т1/2)',
    type: 'НС',
    discription: 'Завышение температуры',
  },
   {
    key: '7',
    type_condition:<Tooltip placement="top" title={'Индивидуальное условие'}><UserOutlined style={{ fontSize: '20px'}}/></Tooltip>,
    group_tu: '0806/161',
    condition: 't1>80',
    type: 'Сообщение',
    discription: 'Контроль температуры',
  },
  {
    key: '8',
    type_condition:<Tooltip placement="top" title={'Групповое условие'}><FolderOutlined style={{ fontSize: '20px'}}/></Tooltip>,
    group_tu: 'ДОГОВОР',
    condition: '	T>0.1 and M1>0 and (M1-M2)/M1>0.04 and M1-M2>0.01',
    type: 'Предупреждение',
    discription: 'Утечка >4%',
  },
{
    key: '9',
    type_condition:<Tooltip placement="top" title={'Групповое условие'}><FolderOutlined style={{ fontSize: '20px'}}/></Tooltip>,
    group_tu: 'ДОГОВОР',
    condition: 'Tmax>0.1 and Tmax<0.5',
    type: 'Предупреждение',
    discription: 'Завышение расхода >6 мин',
  },
  {
    key: '10',
    type_condition:<Tooltip placement="top" title={'Групповое условие'}><FolderOutlined style={{ fontSize: '20px'}}/></Tooltip>,
    group_tu: 'ДОГОВОР',
    condition: 'Tmax>0.5',
    type: 'Авария',
    discription: 'Завышение расхода >30 мин',
  },
  {
    key: '11',
    type_condition:<Tooltip placement="top" title={'Групповое условие'}><FolderOutlined style={{ fontSize: '20px'}}/></Tooltip>,
    group_tu: 'ДОГОВОР',
    condition: 'Terr>0.001',
    type: 'Авария',
    discription: 'Остановка счета: неисправность прибора',
  },
   {
    key: '12',
    type_condition:<Tooltip placement="top" title={'Индивидуальное условие'}><UserOutlined style={{ fontSize: '20px'}}/></Tooltip>,
    group_tu: '1004/029',
    condition: 'm1-m2>1000',
    type: 'Авария',
    discription: 'Контроль утечки',
  },
   {
    key: '13',
    type_condition:<Tooltip placement="top" title={'Индивидуальное условие'}><UserOutlined style={{ fontSize: '20px'}}/></Tooltip>,
    group_tu: '0737/356',
    condition: 'Т2>(Т1/2)',
    type: 'НС',
    discription: 'Завышение температуры',
  },
   {
    key: '14',
    type_condition:<Tooltip placement="top" title={'Индивидуальное условие'}><UserOutlined style={{ fontSize: '20px'}}/></Tooltip>,
    group_tu: '0806/161',
    condition: 't1>80',
    type: 'Сообщение',
    discription: 'Контроль температуры',
  },
];

const EditableCell = ({
  editing,
  dataIndex,
  title,
  inputType,
  record,
  index,
  children,
  ...restProps
  }) => {
  const inputNode = inputType === 'number' ? <InputNumber /> : <Input />;
  return (
    <td {...restProps}>
      {editing ? (
        <Form.Item
          name={dataIndex}
          style={{
            margin: 0,
          }}
          rules={[
            {
              required: true,
              message: `Пожалуйста, заполните ${title}!`,
            },
          ]}
        >
          {inputNode}
        </Form.Item>
      ) : (
        children
      )}
    </td>
  );
};


//табличка с редактируемой строкой
const EditableTable = () => {
  const [form] = Form.useForm();
  const [data, setData] = useState(originData);
  const [editingKey, setEditingKey] = useState('');

  const isEditing = (record) => record.key === editingKey;

  const edit = (record) => {
    form.setFieldsValue({
      name: '',
      age: '',
      address: '',
      ...record,
    });
    setEditingKey(record.key);
  };

  const cancel = () => {
    setEditingKey('');
  };

  const save = async (key) => {
    try {
      const row = await form.validateFields();
      const newData = [...data];
      const index = newData.findIndex((item) => key === item.key);

      if (index > -1) {
        const item = newData[index];
        newData.splice(index, 1, { ...item, ...row });
        setData(newData);
        setEditingKey('');
      } else {
        newData.push(row);
        setData(newData);
        setEditingKey('');
      }
    } catch (errInfo) {
      console.log('Ошибка:', errInfo);
    }
  };



  const columns = [
     {
      title: '',
      dataIndex: 'operation',
      align: 'center',
      width: 25,
      render: (_, record) => {
        const editable = isEditing(record);
        return editable ? (
          <span>
            <a
              href="javascript:;"
              onClick={() => save(record.key)}
              style={{
                marginRight: 8,
              }}
            >
              Сохранить
            </a>
            <Popconfirm title="Отменить?" onConfirm={cancel}>
              <a>Отмена</a>
            </Popconfirm>
          </span>
        ) : (
          <Typography.Link disabled={editingKey !== ''} onClick={() => edit(record)}>
            <Tooltip placement="top" title={'Редактировать'}><Button shape="circle" icon={<EditTwoTone />} /></Tooltip>
          </Typography.Link>
        );
      },
    },
    {
      dataIndex:'delete',
      key:'delete',
      align: 'center',
      width: 25,
      //  render: (_, record) =>
      //     this.state.dataSource.length >= 1 ? (
      //       <Popconfirm title="Удалить запись?" onConfirm={() => this.handleDelete(record.key)}>
      //         <Tooltip placement="top" title={'Удалить'}><Button shape="circle" icon={<DeleteTwoTone />} /></Tooltip>
      //       </Popconfirm>
      //     ) : null,

      render: record => 
                <Space size="middle">
                  <Tooltip placement="top" title={'Удалить'}><Button shape="circle" onClick={showConfirm} icon={<DeleteTwoTone />} /></Tooltip>
                </Space>
          
    },
    
    {
      title: '',
      dataIndex: 'type_condition',
      align: 'center',
      width: 25,
    },

    {
      title: 'Группа/ТУ',
      dataIndex: 'group_tu',
      key:'group_tu',
      sorter: true,
      width: 70,
      sorter: (a, b) => sorter(a.group_tu, b.group_tu),
      sortDirections: ['descend', 'ascend'],
    },

    {
      title: 'Условие',
      dataIndex: 'condition',
      key: 'condition',
      width: 400,
      sorter: (a, b) => sorter(a.condition, b.condition),
      sortDirections: ['descend', 'ascend'],
      editable: true,
    },
    {
      title: 'Тип',
      dataIndex: 'type',
      key: 'type',
      width: 70,
      sorter: true,
      sorter: (a, b) => sorter(a.type, b.type),
      sortDirections: ['descend', 'ascend'],
      editable: true,
  
    },
    {
      title: 'Описание',
      dataIndex: 'discription',
      key:'discription',
      sorter: true,
      sorter: (a, b) => sorter(a.discription, b.discription),
      sortDirections: ['descend', 'ascend'],
      editable: true,
    }, 

  ];
  const mergedColumns = columns.map((col) => {
    if (!col.editable) {
      return col;
    }

    return {
      ...col,
      onCell: (record) => ({
        record,
        inputType: col.dataIndex === 'age' ? 'number' : 'text',
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    };
  });
  return (
    <Form form={form} component={false}>
      <Table
        components={{
          body: {
            cell: EditableCell,
          },
        }}
        bordered
        title={() => 'Табличка с редактируемой строкой'}
        width={1000}
        dataSource={data}
        columns={mergedColumns}
        rowClassName="editable-row"
        pagination={{
          onChange: cancel,
        }}
      />
    </Form>
  );
};


//Табличка с удаляемой строкой
const EditableContext = React.createContext(null);

const EditableRow = ({ index, ...props }) => {
  const [form] = Form.useForm();
  return (
    <Form form={form} component={false}>
      <EditableContext.Provider value={form}>
        <tr {...props} />
      </EditableContext.Provider>
    </Form>
  );
};

const DeleteableCell = ({
  title,
  editable,
  children,
  dataIndex,
  record,
  handleSave,
  ...restProps
}) => {
  const [editing, setEditing] = useState(false);
  const inputRef = useRef(null);
  const form = useContext(EditableContext);
  useEffect(() => {
    if (editing) {
      inputRef.current.focus();
    }
  }, [editing]);

  const toggleEdit = () => {
    setEditing(!editing);
    form.setFieldsValue({
      [dataIndex]: record[dataIndex],
    });
  };

  const save = async () => {
    try {
      const values = await form.validateFields();
      toggleEdit();
      handleSave({ ...record, ...values });
    } catch (errInfo) {
      console.log('Ошибка:', errInfo);
    }
  };

  let childNode = children;

  if (editable) {
    childNode = editing ? (
      <Form.Item
        style={{
          margin: 0,
        }}
        name={dataIndex}
        rules={[
          {
            required: true,
            message: `${title} требуется.`,
          },
        ]}
      >
        <Input ref={inputRef} onPressEnter={save} onBlur={save} />
      </Form.Item>
    ) : (
      <div
        className="editable-cell-value-wrap"
        style={{
          paddingRight: 24,
        }}
        onClick={toggleEdit}
      >
        {children}
      </div>
    );
  }
  return <td {...restProps}>{childNode}</td>;
};

class DeleteableTable extends React.Component {
  constructor(props) {
    super(props);
    this.columns = [
      {
      title: '',
      dataIndex: 'edit',
      align: 'center',
      width: 25,
      render: record => 
              <Space size="middle">
              <Popconfirm placement="right" title={'Вы действительно хотите удалить данное оповещение?'} onConfirm={confirmPopConf} okText="Да" cancelText="Нет">
              <Button shape="circle" icon={<EditTwoTone />} />
              </Popconfirm>
            
            </Space>
    },
    {
      dataIndex:'delete',
      key:'delete',
      align: 'center',
      width: 25,
      render: (_, record) =>
          this.state.dataSource.length >= 1 ? (
            <Popconfirm title="Удалить данное условие?" onConfirm={() => this.handleDelete(record.key)}>
              <Button shape="circle" icon={<DeleteTwoTone />} />
            </Popconfirm>
          ) : null,
         
    },
    {
      title:'',
      dataIndex: 'type_condition',
      align: 'center',
      width: 25,
      sorter: true,
      filters: [
        { text: <WarningTwoTone twoToneColor="#eb2f96" style={{ fontSize: '20px'}} />, value: 'info_icon' },
        { text: <InfoCircleTwoTone twoToneColor="#fadb14" style={{ fontSize: '20px'}} />, value: 'error_icon' },
        { text: <CheckCircleTwoTone  twoToneColor="#52c41a" style={{ fontSize: '20px'}} />, value: 'ok_icon' },
        { text: <StopTwoTone twoToneColor="#eb2f96" style={{ fontSize: '20px'}} />, value: 'fatal_icon' },
      ],
      onFilter: (value, record) => record.status.indexOf(value) === 0,
    },
    // {
    //   title: '',
    //   dataIndex: 'type_condition',
    //   align: 'center',
    //   width: 25,
    // },

    {
      title: 'Группа/ТУ',
      dataIndex: 'group_tu',
      key:'group_tu',
      sorter: true,
      width: 70,
      sorter: (a, b) => sorter(a.group_tu, b.group_tu),
      sortDirections: ['descend', 'ascend'],
    },

    {
      title: 'Условие',
      dataIndex: 'condition',
      key: 'condition',
      width: 400,
      sorter: (a, b) => sorter(a.condition, b.condition),
      sortDirections: ['descend', 'ascend'],
      editable: true,
    },
    {
      title: 'Тип',
      dataIndex: 'type',
      key: 'type',
      width: 70,
      sorter: true,
      sorter: (a, b) => sorter(a.type, b.type),
      sortDirections: ['descend', 'ascend'],
      editable: true,
  
    },
    {
      title: 'Описание',
      dataIndex: 'discription',
      key:'discription',
      sorter: true,
      sorter: (a, b) => sorter(a.discription, b.discription),
      sortDirections: ['descend', 'ascend'],
      editable: true,
    },
      // {
      //   title: 'operation',
      //   dataIndex: 'operation',
      //   render: (_, record) =>
      //     this.state.dataSource.length >= 1 ? (
      //       <Popconfirm title="Sure to delete?" onConfirm={() => this.handleDelete(record.key)}>
      //         <a>Delete</a>
      //       </Popconfirm>
      //     ) : null,
      // },
    ];
    this.state = {
      dataSource: [
       {
          key: '1',
          type_condition:<Tooltip placement="top" title={'Групповое условие'}><FolderOutlined style={{ fontSize: '20px'}}/></Tooltip>,
          group_tu: 'ДОГОВОР',
          condition: '	T>0.1 and M1>0 and (M1-M2)/M1>0.04 and M1-M2>0.01',
          type: 'Предупреждение',
          discription: 'Утечка >4%',
        },
        {
          key: '2',
          type_condition:<Tooltip placement="top" title={'Групповое условие'}><FolderOutlined style={{ fontSize: '20px'}}/></Tooltip>,
          group_tu: 'ДОГОВОР',
          condition: 'Tmax>0.1 and Tmax<0.5',
          type: 'Предупреждение',
          discription: 'Завышение расхода >6 мин',
        },
        {
          key: '3',
          type_condition:<Tooltip placement="top" title={'Групповое условие'}><FolderOutlined style={{ fontSize: '20px'}}/></Tooltip>,
          group_tu: 'ДОГОВОР',
          condition: 'Tmax>0.5',
          type: 'Авария',
          discription: 'Завышение расхода >30 мин',
        },
        {
          key: '4',
          type_condition:<Tooltip placement="top" title={'Групповое условие'}><FolderOutlined style={{ fontSize: '20px'}}/></Tooltip>,
          group_tu: 'ДОГОВОР',
          condition: 'Terr>0.001',
          type: 'Авария',
          discription: 'Остановка счета: неисправность прибора',
        },
        {
          key: '5',
          type_condition:<Tooltip placement="top" title={'Индивидуальное условие'}><UserOutlined style={{ fontSize: '20px'}}/></Tooltip>,
          group_tu: '1004/029',
          condition: 'm1-m2>1000',
          type: 'Авария',
          discription: 'Контроль утечки',
        },
        {
          key: '6',
          type_condition:<Tooltip placement="top" title={'Индивидуальное условие'}><UserOutlined style={{ fontSize: '20px'}}/></Tooltip>,
          group_tu: '0737/356',
          condition: 'Т2>(Т1/2)',
          type: 'НС',
          discription: 'Завышение температуры',
        },
        {
          key: '7',
          type_condition:<Tooltip placement="top" title={'Индивидуальное условие'}><UserOutlined style={{ fontSize: '20px'}}/></Tooltip>,
          group_tu: '0806/161',
          condition: 't1>80',
          type: 'Сообщение',
          discription: 'Контроль температуры',
        },
        {
          key: '8',
          type_condition:<Tooltip placement="top" title={'Групповое условие'}><FolderOutlined style={{ fontSize: '20px'}}/></Tooltip>,
          group_tu: 'ДОГОВОР',
          condition: '	T>0.1 and M1>0 and (M1-M2)/M1>0.04 and M1-M2>0.01',
          type: 'Предупреждение',
          discription: 'Утечка >4%',
        },
        {
          key: '9',
          type_condition:<Tooltip placement="top" title={'Групповое условие'}><FolderOutlined style={{ fontSize: '20px'}}/></Tooltip>,
          group_tu: 'ДОГОВОР',
          condition: 'Tmax>0.1 and Tmax<0.5',
          type: 'Предупреждение',
          discription: 'Завышение расхода >6 мин',
        },
        {
          key: '10',
          type_condition:<Tooltip placement="top" title={'Групповое условие'}><FolderOutlined style={{ fontSize: '20px'}}/></Tooltip>,
          group_tu: 'ДОГОВОР',
          condition: 'Tmax>0.5',
          type: 'Авария',
          discription: 'Завышение расхода >30 мин',
        },
        {
          key: '11',
          type_condition:<Tooltip placement="top" title={'Групповое условие'}><FolderOutlined style={{ fontSize: '20px'}}/></Tooltip>,
          group_tu: 'ДОГОВОР',
          condition: 'Terr>0.001',
          type: 'Авария',
          discription: 'Остановка счета: неисправность прибора',
        },
        {
          key: '12',
          type_condition:<Tooltip placement="top" title={'Индивидуальное условие'}><UserOutlined style={{ fontSize: '20px'}}/></Tooltip>,
          group_tu: '1004/029',
          condition: 'm1-m2>1000',
          type: 'Авария',
          discription: 'Контроль утечки',
        },
        {
          key: '13',
          type_condition:<Tooltip placement="top" title={'Индивидуальное условие'}><UserOutlined style={{ fontSize: '20px'}}/></Tooltip>,
          group_tu: '0737/356',
          condition: 'Т2>(Т1/2)',
          type: 'НС',
          discription: 'Завышение температуры',
        },
        {
          key: '14',
          type_condition:<Tooltip placement="top" title={'Индивидуальное условие'}><UserOutlined style={{ fontSize: '20px'}}/></Tooltip>,
          group_tu: '0806/161',
          condition: 't1>80',
          type: 'Сообщение',
          discription: 'Контроль температуры',
        },
      ],
      count: 14,
    };
  }

  handleDelete = (key) => {
    const dataSource = [...this.state.dataSource];
    this.setState({
      dataSource: dataSource.filter((item) => item.key !== key),
    });
  };
  handleAdd = () => {
    const { count, dataSource } = this.state;
    const newData = {
      key: count,
      name: `Edward King ${count}`,
      age: '32',
      address: `London, Park Lane no. ${count}`,
    };
    this.setState({
      dataSource: [...dataSource, newData],
      count: count + 1,
    });
  };
  handleSave = (row) => {
    const newData = [...this.state.dataSource];
    const index = newData.findIndex((item) => row.key === item.key);
    const item = newData[index];
    newData.splice(index, 1, { ...item, ...row });
    this.setState({
      dataSource: newData,
    });
  };

  render() {
    const { dataSource } = this.state;
    const components = {
      body: {
        row: EditableRow,
        cell: EditableCell,
      },
    };
    const columns = this.columns.map((col) => {
      if (!col.editable) {
        return col;
      }

      return {
        ...col,
        onCell: (record) => ({
          record,
          editable: col.editable,
          dataIndex: col.dataIndex,
          title: col.title,
          handleSave: this.handleSave,
        }),
      };
    });
    return (

        <Table
          components={components}
          rowClassName={() => 'editable-row'}
          bordered
          dataSource={dataSource}
          columns={columns}
          title={() => 'Табличка с удаляемой строкой'}
        />

    );
  }
}

ReactDOM.render(
  <ConfigProvider locale={ruRU}>
  <Tabs onChange={callback} type="card">
    <TabPane tab="Сообщения Контроля" key="1">
    <Space direction="vertical">
      <Space size="large">
        <RangePicker
          ranges={{
            Сегодня: [moment(), moment()],
            'Этот месяц': [moment().startOf('month'), moment().endOf('month')],
          }}
          format="DD.MM.YYYY"
          size="small"
          style={{ width: '170px' }}
          onChange={onChangeData}
        />
        <Switch
            checkedChildren=  " Все сообщения "
            unCheckedChildren="Новые сообщения"
            defaultChecked
          />
        {/* <Space direction="vertical" size="10">     */}
          Период обновления (мс)
          <Search
              placeholder="600"
              allowClear
              enterButton="OK"
              size="small"
              onSearch={onSearch}
              style={{ width: 100 }}
          />
        {/* </Space> */}
        <Space>
            {/* <TreeSelect1 /> */}
            <Demo />
            <TreeSelect2 />
            <Button>Выбрать</Button>
          </Space>
        {/* <Input placeholder="600" />   */}
      </Space>
       <Space  size="large">
      <FilterSearch1 />
      <FilterSearch2 />
      {/* <Table
        columns={columns1}
        dataSource={data1}
        bordered
        title={() => 'Контроль по выбранным точкам учёта'}
        // pagination={{ pageSize: 5 }}
        //footer={() => 'Footer'}
      /> */}

      {/* <Table
        columns={columns2}
        dataSource={data2}
        bordered
        title={() => 'Сообщения контроля по всем точкам учёта'}
        onChange={onChange1}
      /> */}
    </Space>
   
   

      
    </Space>  
    </TabPane>
    <TabPane tab="Условия контроля" key="2">
      <Space direction="vertical"> 
        <Space direction="vertical">
          <Space>
            <TreeSelect1 />
            <TreeSelect2 />
            <TreeSelect3 />
          </Space>
          <Button>Добавить условие</Button>
          <ModalСondition />
        </Space>
        <Space>
          {/* const columns = [
            {
              title: 'Группа/ТУ',
              dataIndex: 'group_tu',
              key:'group_tu',
              ...this.getColumnSearchProps('group_tu'),
            }
          ];
          return <Table columns={columns} dataSource={data3} />; */}
        {/* <App1 /> */}
        <Table
          columns={columns3}
          dataSource={data3}
          bordered
          title={() => 'Условия контрорля'}
          //sticky
          pagination={{ pageSize: 10 }}

          //footer={() => 'Footer'}
        />

        
      </Space>  
    </Space>
    </TabPane>
    <TabPane tab="tmp" key="3">
      <EditableTable />
      <DeleteableTable />
      <PaginationTab /> 
    </TabPane>
  </Tabs>
  </ConfigProvider>,
  document.getElementById('container'),
  
);
