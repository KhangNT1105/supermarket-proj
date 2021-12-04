import React, { useState } from 'react';
import { Fragment } from 'react';
import {
  Button,
  Card,
  CardText,
  CardTitle,
  Col,
  Nav,
  NavItem,
  NavLink,
  Row,
  TabContent,
  TabPane,
} from 'reactstrap';
import ProductCard from '../../../components/productCard/ProductCard';
import './HomeProducts.scss';
function HomeProducts() {
  const [tab, setTab] = useState('1');
  const tabs = [
    {
      value: '1',
      label: 'SẢN PHẨM KHUYẾN MÃI',
      data: [
        {
          image:
            'http://sieuthithucphamamazing.com/thumb/286x191/1/upload/product/794457393282/chang-dung-heo-nac-day.jpg',
          productName: 'CHẲNG DỪNG HEO (NẠC DÂY)',
          unit: '(Kg- Sản phẩm chỉ bán nguyên thùng 10kg)',
          newPrice: '62.000 đ',
          oldPrice: '58.000 đ',
          productDescription:
            'Qui cách đóng gói: 10Kg/Thùng. Cách chế biến: Hấp,...',
        },
        {
          image:
            'http://sieuthithucphamamazing.com/thumb/286x191/1/upload/product/794457393282/chang-dung-heo-nac-day.jpg',
          productName: 'CHẲNG DỪNG HEO (NẠC DÂY)',
          unit: '(Kg- Sản phẩm chỉ bán nguyên thùng 10kg)',
          newPrice: '62.000 đ',
          oldPrice: '58.000 đ',
          productDescription:
            'Qui cách đóng gói: 10Kg/Thùng. Cách chế biến: Hấp,...',
        },
        {
          image:
            'http://sieuthithucphamamazing.com/thumb/286x191/1/upload/product/794457393282/chang-dung-heo-nac-day.jpg',
          productName: 'CHẲNG DỪNG HEO (NẠC DÂY)',
          unit: '(Kg- Sản phẩm chỉ bán nguyên thùng 10kg)',
          newPrice: '62.000 đ',
          oldPrice: '58.000 đ',
          productDescription:
            'Qui cách đóng gói: 10Kg/Thùng. Cách chế biến: Hấp,...',
        },
        {
          image:
            'http://sieuthithucphamamazing.com/thumb/286x191/1/upload/product/794457393282/chang-dung-heo-nac-day.jpg',
          productName: 'CHẲNG DỪNG HEO (NẠC DÂY)',
          unit: '(Kg- Sản phẩm chỉ bán nguyên thùng 10kg)',
          newPrice: '62.000 đ',
          oldPrice: '58.000 đ',
          productDescription:
            'Qui cách đóng gói: 10Kg/Thùng. Cách chế biến: Hấp,...',
        },
        {
          image:
            'http://sieuthithucphamamazing.com/thumb/286x191/1/upload/product/794457393282/chang-dung-heo-nac-day.jpg',
          productName: 'CHẲNG DỪNG HEO (NẠC DÂY)',
          unit: '(Kg- Sản phẩm chỉ bán nguyên thùng 10kg)',
          newPrice: '62.000 đ',
          oldPrice: '58.000 đ',
          productDescription:
            'Qui cách đóng gói: 10Kg/Thùng. Cách chế biến: Hấp,...',
        },
        {
          image:
            'http://sieuthithucphamamazing.com/thumb/286x191/1/upload/product/794457393282/chang-dung-heo-nac-day.jpg',
          productName: 'CHẲNG DỪNG HEO (NẠC DÂY)',
          unit: '(Kg- Sản phẩm chỉ bán nguyên thùng 10kg)',
          newPrice: '62.000 đ',
          oldPrice: '58.000 đ',
          productDescription:
            'Qui cách đóng gói: 10Kg/Thùng. Cách chế biến: Hấp,...',
        },
        {
          image:
            'http://sieuthithucphamamazing.com/thumb/286x191/1/upload/product/794457393282/chang-dung-heo-nac-day.jpg',
          productName: 'CHẲNG DỪNG HEO (NẠC DÂY)',
          unit: '(Kg- Sản phẩm chỉ bán nguyên thùng 10kg)',
          newPrice: '62.000 đ',
          oldPrice: '58.000 đ',
          productDescription:
            'Qui cách đóng gói: 10Kg/Thùng. Cách chế biến: Hấp,...',
        },
        {
          image:
            'http://sieuthithucphamamazing.com/thumb/286x191/1/upload/product/794457393282/chang-dung-heo-nac-day.jpg',
          productName: 'CHẲNG DỪNG HEO (NẠC DÂY)',
          unit: '(Kg- Sản phẩm chỉ bán nguyên thùng 10kg)',
          newPrice: '62.000 đ',
          oldPrice: '58.000 đ',
          productDescription:
            'Qui cách đóng gói: 10Kg/Thùng. Cách chế biến: Hấp,...',
        },
      ],
    },
    {
      value: '2',
      label: 'SẢN PHẨM CAO CẤP',
      data: [
        {
          image:
            'http://sieuthithucphamamazing.com/thumb/286x191/1/upload/product/794457393282/chang-dung-heo-nac-day.jpg',
          productName: 'CHẲNG DỪNG HEO (NẠC DÂY)',
          unit: '(Kg- Sản phẩm chỉ bán nguyên thùng 10kg)',
          newPrice: '62.000 đ',
          oldPrice: '58.000 đ',
          productDescription:
            'Qui cách đóng gói: 10Kg/Thùng. Cách chế biến: Hấp,...',
        },
        {
          image:
            'http://sieuthithucphamamazing.com/thumb/286x191/1/upload/product/794457393282/chang-dung-heo-nac-day.jpg',
          productName: 'CHẲNG DỪNG HEO (NẠC DÂY)',
          unit: '(Kg- Sản phẩm chỉ bán nguyên thùng 10kg)',
          newPrice: '62.000 đ',
          oldPrice: '58.000 đ',
          productDescription:
            'Qui cách đóng gói: 10Kg/Thùng. Cách chế biến: Hấp,...',
        },
        {
          image:
            'http://sieuthithucphamamazing.com/thumb/286x191/1/upload/product/794457393282/chang-dung-heo-nac-day.jpg',
          productName: 'CHẲNG DỪNG HEO (NẠC DÂY)',
          unit: '(Kg- Sản phẩm chỉ bán nguyên thùng 10kg)',
          newPrice: '62.000 đ',
          oldPrice: '58.000 đ',
          productDescription:
            'Qui cách đóng gói: 10Kg/Thùng. Cách chế biến: Hấp,...',
        },
        {
          image:
            'http://sieuthithucphamamazing.com/thumb/286x191/1/upload/product/794457393282/chang-dung-heo-nac-day.jpg',
          productName: 'CHẲNG DỪNG HEO (NẠC DÂY)',
          unit: '(Kg- Sản phẩm chỉ bán nguyên thùng 10kg)',
          newPrice: '62.000 đ',
          oldPrice: '58.000 đ',
          productDescription:
            'Qui cách đóng gói: 10Kg/Thùng. Cách chế biến: Hấp,...',
        },
        {
          image:
            'http://sieuthithucphamamazing.com/thumb/286x191/1/upload/product/794457393282/chang-dung-heo-nac-day.jpg',
          productName: 'CHẲNG DỪNG HEO (NẠC DÂY)',
          unit: '(Kg- Sản phẩm chỉ bán nguyên thùng 10kg)',
          newPrice: '62.000 đ',
          oldPrice: '58.000 đ',
          productDescription:
            'Qui cách đóng gói: 10Kg/Thùng. Cách chế biến: Hấp,...',
        },
        {
          image:
            'http://sieuthithucphamamazing.com/thumb/286x191/1/upload/product/794457393282/chang-dung-heo-nac-day.jpg',
          productName: 'CHẲNG DỪNG HEO (NẠC DÂY)',
          unit: '(Kg- Sản phẩm chỉ bán nguyên thùng 10kg)',
          newPrice: '62.000 đ',
          oldPrice: '58.000 đ',
          productDescription:
            'Qui cách đóng gói: 10Kg/Thùng. Cách chế biến: Hấp,...',
        },
        {
          image:
            'http://sieuthithucphamamazing.com/thumb/286x191/1/upload/product/794457393282/chang-dung-heo-nac-day.jpg',
          productName: 'CHẲNG DỪNG HEO (NẠC DÂY)',
          unit: '(Kg- Sản phẩm chỉ bán nguyên thùng 10kg)',
          newPrice: '62.000 đ',
          oldPrice: '58.000 đ',
          productDescription:
            'Qui cách đóng gói: 10Kg/Thùng. Cách chế biến: Hấp,...',
        },
        {
          image:
            'http://sieuthithucphamamazing.com/thumb/286x191/1/upload/product/794457393282/chang-dung-heo-nac-day.jpg',
          productName: 'CHẲNG DỪNG HEO (NẠC DÂY)',
          unit: '(Kg- Sản phẩm chỉ bán nguyên thùng 10kg)',
          newPrice: '62.000 đ',
          oldPrice: '58.000 đ',
          productDescription:
            'Qui cách đóng gói: 10Kg/Thùng. Cách chế biến: Hấp,...',
        },
      ],
    },
    {
      value: '3',
      label: 'SẢN PHẨM KHUYẾN MÃI',
      data: [
        {
          image:
            'http://sieuthithucphamamazing.com/thumb/286x191/1/upload/product/794457393282/chang-dung-heo-nac-day.jpg',
          productName: 'CHẲNG DỪNG HEO (NẠC DÂY)',
          unit: '(Kg- Sản phẩm chỉ bán nguyên thùng 10kg)',
          newPrice: '62.000 đ',
          oldPrice: '58.000 đ',
          productDescription:
            'Qui cách đóng gói: 10Kg/Thùng. Cách chế biến: Hấp,...',
        },
        {
          image:
            'http://sieuthithucphamamazing.com/thumb/286x191/1/upload/product/794457393282/chang-dung-heo-nac-day.jpg',
          productName: 'CHẲNG DỪNG HEO (NẠC DÂY)',
          unit: '(Kg- Sản phẩm chỉ bán nguyên thùng 10kg)',
          newPrice: '62.000 đ',
          oldPrice: '58.000 đ',
          productDescription:
            'Qui cách đóng gói: 10Kg/Thùng. Cách chế biến: Hấp,...',
        },
        {
          image:
            'http://sieuthithucphamamazing.com/thumb/286x191/1/upload/product/794457393282/chang-dung-heo-nac-day.jpg',
          productName: 'CHẲNG DỪNG HEO (NẠC DÂY)',
          unit: '(Kg- Sản phẩm chỉ bán nguyên thùng 10kg)',
          newPrice: '62.000 đ',
          oldPrice: '58.000 đ',
          productDescription:
            'Qui cách đóng gói: 10Kg/Thùng. Cách chế biến: Hấp,...',
        },
        {
          image:
            'http://sieuthithucphamamazing.com/thumb/286x191/1/upload/product/794457393282/chang-dung-heo-nac-day.jpg',
          productName: 'CHẲNG DỪNG HEO (NẠC DÂY)',
          unit: '(Kg- Sản phẩm chỉ bán nguyên thùng 10kg)',
          newPrice: '62.000 đ',
          oldPrice: '58.000 đ',
          productDescription:
            'Qui cách đóng gói: 10Kg/Thùng. Cách chế biến: Hấp,...',
        },
        {
          image:
            'http://sieuthithucphamamazing.com/thumb/286x191/1/upload/product/794457393282/chang-dung-heo-nac-day.jpg',
          productName: 'CHẲNG DỪNG HEO (NẠC DÂY)',
          unit: '(Kg- Sản phẩm chỉ bán nguyên thùng 10kg)',
          newPrice: '62.000 đ',
          oldPrice: '58.000 đ',
          productDescription:
            'Qui cách đóng gói: 10Kg/Thùng. Cách chế biến: Hấp,...',
        },
        {
          image:
            'http://sieuthithucphamamazing.com/thumb/286x191/1/upload/product/794457393282/chang-dung-heo-nac-day.jpg',
          productName: 'CHẲNG DỪNG HEO (NẠC DÂY)',
          unit: '(Kg- Sản phẩm chỉ bán nguyên thùng 10kg)',
          newPrice: '62.000 đ',
          oldPrice: '58.000 đ',
          productDescription:
            'Qui cách đóng gói: 10Kg/Thùng. Cách chế biến: Hấp,...',
        },
        {
          image:
            'http://sieuthithucphamamazing.com/thumb/286x191/1/upload/product/794457393282/chang-dung-heo-nac-day.jpg',
          productName: 'CHẲNG DỪNG HEO (NẠC DÂY)',
          unit: '(Kg- Sản phẩm chỉ bán nguyên thùng 10kg)',
          newPrice: '62.000 đ',
          oldPrice: '58.000 đ',
          productDescription:
            'Qui cách đóng gói: 10Kg/Thùng. Cách chế biến: Hấp,...',
        },
        {
          image:
            'http://sieuthithucphamamazing.com/thumb/286x191/1/upload/product/794457393282/chang-dung-heo-nac-day.jpg',
          productName: 'CHẲNG DỪNG HEO (NẠC DÂY)',
          unit: '(Kg- Sản phẩm chỉ bán nguyên thùng 10kg)',
          newPrice: '62.000 đ',
          oldPrice: '58.000 đ',
          productDescription:
            'Qui cách đóng gói: 10Kg/Thùng. Cách chế biến: Hấp,...',
        },
      ],
    },
    {
      value: '4',
      label: 'SẢN PHẨM KHUYẾN MÃI',
      data: [
        {
          image:
            'http://sieuthithucphamamazing.com/thumb/286x191/1/upload/product/794457393282/chang-dung-heo-nac-day.jpg',
          productName: 'CHẲNG DỪNG HEO (NẠC DÂY)',
          unit: '(Kg- Sản phẩm chỉ bán nguyên thùng 10kg)',
          newPrice: '62.000 đ',
          oldPrice: '58.000 đ',
          productDescription:
            'Qui cách đóng gói: 10Kg/Thùng. Cách chế biến: Hấp,...',
        },
        {
          image:
            'http://sieuthithucphamamazing.com/thumb/286x191/1/upload/product/794457393282/chang-dung-heo-nac-day.jpg',
          productName: 'CHẲNG DỪNG HEO (NẠC DÂY)',
          unit: '(Kg- Sản phẩm chỉ bán nguyên thùng 10kg)',
          newPrice: '62.000 đ',
          oldPrice: '58.000 đ',
          productDescription:
            'Qui cách đóng gói: 10Kg/Thùng. Cách chế biến: Hấp,...',
        },
        {
          image:
            'http://sieuthithucphamamazing.com/thumb/286x191/1/upload/product/794457393282/chang-dung-heo-nac-day.jpg',
          productName: 'CHẲNG DỪNG HEO (NẠC DÂY)',
          unit: '(Kg- Sản phẩm chỉ bán nguyên thùng 10kg)',
          newPrice: '62.000 đ',
          oldPrice: '58.000 đ',
          productDescription:
            'Qui cách đóng gói: 10Kg/Thùng. Cách chế biến: Hấp,...',
        },
        {
          image:
            'http://sieuthithucphamamazing.com/thumb/286x191/1/upload/product/794457393282/chang-dung-heo-nac-day.jpg',
          productName: 'CHẲNG DỪNG HEO (NẠC DÂY)',
          unit: '(Kg- Sản phẩm chỉ bán nguyên thùng 10kg)',
          newPrice: '62.000 đ',
          oldPrice: '58.000 đ',
          productDescription:
            'Qui cách đóng gói: 10Kg/Thùng. Cách chế biến: Hấp,...',
        },
        {
          image:
            'http://sieuthithucphamamazing.com/thumb/286x191/1/upload/product/794457393282/chang-dung-heo-nac-day.jpg',
          productName: 'CHẲNG DỪNG HEO (NẠC DÂY)',
          unit: '(Kg- Sản phẩm chỉ bán nguyên thùng 10kg)',
          newPrice: '62.000 đ',
          oldPrice: '58.000 đ',
          productDescription:
            'Qui cách đóng gói: 10Kg/Thùng. Cách chế biến: Hấp,...',
        },
        {
          image:
            'http://sieuthithucphamamazing.com/thumb/286x191/1/upload/product/794457393282/chang-dung-heo-nac-day.jpg',
          productName: 'CHẲNG DỪNG HEO (NẠC DÂY)',
          unit: '(Kg- Sản phẩm chỉ bán nguyên thùng 10kg)',
          newPrice: '62.000 đ',
          oldPrice: '58.000 đ',
          productDescription:
            'Qui cách đóng gói: 10Kg/Thùng. Cách chế biến: Hấp,...',
        },
        {
          image:
            'http://sieuthithucphamamazing.com/thumb/286x191/1/upload/product/794457393282/chang-dung-heo-nac-day.jpg',
          productName: 'CHẲNG DỪNG HEO (NẠC DÂY)',
          unit: '(Kg- Sản phẩm chỉ bán nguyên thùng 10kg)',
          newPrice: '62.000 đ',
          oldPrice: '58.000 đ',
          productDescription:
            'Qui cách đóng gói: 10Kg/Thùng. Cách chế biến: Hấp,...',
        },
        {
          image:
            'http://sieuthithucphamamazing.com/thumb/286x191/1/upload/product/794457393282/chang-dung-heo-nac-day.jpg',
          productName: 'CHẲNG DỪNG HEO (NẠC DÂY)',
          unit: '(Kg- Sản phẩm chỉ bán nguyên thùng 10kg)',
          newPrice: '62.000 đ',
          oldPrice: '58.000 đ',
          productDescription:
            'Qui cách đóng gói: 10Kg/Thùng. Cách chế biến: Hấp,...',
        },
      ],
    },
    {
      value: '5',
      label: 'SẢN PHẨM KHUYẾN MÃI',
      data: [
        {
          image:
            'http://sieuthithucphamamazing.com/thumb/286x191/1/upload/product/794457393282/chang-dung-heo-nac-day.jpg',
          productName: 'CHẲNG DỪNG HEO (NẠC DÂY)',
          unit: '(Kg- Sản phẩm chỉ bán nguyên thùng 10kg)',
          newPrice: '62.000 đ',
          oldPrice: '58.000 đ',
          productDescription:
            'Qui cách đóng gói: 10Kg/Thùng. Cách chế biến: Hấp,...',
        },
        {
          image:
            'http://sieuthithucphamamazing.com/thumb/286x191/1/upload/product/794457393282/chang-dung-heo-nac-day.jpg',
          productName: 'CHẲNG DỪNG HEO (NẠC DÂY)',
          unit: '(Kg- Sản phẩm chỉ bán nguyên thùng 10kg)',
          newPrice: '62.000 đ',
          oldPrice: '58.000 đ',
          productDescription:
            'Qui cách đóng gói: 10Kg/Thùng. Cách chế biến: Hấp,...',
        },
        {
          image:
            'http://sieuthithucphamamazing.com/thumb/286x191/1/upload/product/794457393282/chang-dung-heo-nac-day.jpg',
          productName: 'CHẲNG DỪNG HEO (NẠC DÂY)',
          unit: '(Kg- Sản phẩm chỉ bán nguyên thùng 10kg)',
          newPrice: '62.000 đ',
          oldPrice: '58.000 đ',
          productDescription:
            'Qui cách đóng gói: 10Kg/Thùng. Cách chế biến: Hấp,...',
        },
        {
          image:
            'http://sieuthithucphamamazing.com/thumb/286x191/1/upload/product/794457393282/chang-dung-heo-nac-day.jpg',
          productName: 'CHẲNG DỪNG HEO (NẠC DÂY)',
          unit: '(Kg- Sản phẩm chỉ bán nguyên thùng 10kg)',
          newPrice: '62.000 đ',
          oldPrice: '58.000 đ',
          productDescription:
            'Qui cách đóng gói: 10Kg/Thùng. Cách chế biến: Hấp,...',
        },
        {
          image:
            'http://sieuthithucphamamazing.com/thumb/286x191/1/upload/product/794457393282/chang-dung-heo-nac-day.jpg',
          productName: 'CHẲNG DỪNG HEO (NẠC DÂY)',
          unit: '(Kg- Sản phẩm chỉ bán nguyên thùng 10kg)',
          newPrice: '62.000 đ',
          oldPrice: '58.000 đ',
          productDescription:
            'Qui cách đóng gói: 10Kg/Thùng. Cách chế biến: Hấp,...',
        },
        {
          image:
            'http://sieuthithucphamamazing.com/thumb/286x191/1/upload/product/794457393282/chang-dung-heo-nac-day.jpg',
          productName: 'CHẲNG DỪNG HEO (NẠC DÂY)',
          unit: '(Kg- Sản phẩm chỉ bán nguyên thùng 10kg)',
          newPrice: '62.000 đ',
          oldPrice: '58.000 đ',
          productDescription:
            'Qui cách đóng gói: 10Kg/Thùng. Cách chế biến: Hấp,...',
        },
        {
          image:
            'http://sieuthithucphamamazing.com/thumb/286x191/1/upload/product/794457393282/chang-dung-heo-nac-day.jpg',
          productName: 'CHẲNG DỪNG HEO (NẠC DÂY)',
          unit: '(Kg- Sản phẩm chỉ bán nguyên thùng 10kg)',
          newPrice: '62.000 đ',
          oldPrice: '58.000 đ',
          productDescription:
            'Qui cách đóng gói: 10Kg/Thùng. Cách chế biến: Hấp,...',
        },
        {
          image:
            'http://sieuthithucphamamazing.com/thumb/286x191/1/upload/product/794457393282/chang-dung-heo-nac-day.jpg',
          productName: 'CHẲNG DỪNG HEO (NẠC DÂY)',
          unit: '(Kg- Sản phẩm chỉ bán nguyên thùng 10kg)',
          newPrice: '62.000 đ',
          oldPrice: '58.000 đ',
          productDescription:
            'Qui cách đóng gói: 10Kg/Thùng. Cách chế biến: Hấp,...',
        },
      ],
    },
  ];
  return (
    <div className='homeProducts'>
      <div className='homeProducts__wrapper container'>
        <Nav tabs>
          {tabs.map(({ label, value }, idx) => (
            <Fragment key={`tab-${idx}`}>
              <NavItem>
                <NavLink
                  className={`${tab === value ? 'active' : ''}`}
                  onClick={() => setTab(value)}
                >
                  {label}
                </NavLink>
              </NavItem>
            </Fragment>
          ))}
        </Nav>
        <TabContent activeTab={tab} className='homeProducts__tabContent'>
          {tabs.map((item) => (
            <TabPane tabId={item.value}>
              <Row className='homeProducts__tabContent__row'>
                {item.data.map((item) => (
                  <Col sm='3' className='homeProducts__tabContent__col'>
                    <ProductCard {...item} />
                  </Col>
                ))}
              </Row>
            </TabPane>
          ))}
        </TabContent>
      </div>
    </div>
  );
}

export default HomeProducts;
