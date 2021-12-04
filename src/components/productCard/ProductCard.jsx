import React from 'react';
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardSubtitle,
  CardText,
  CardTitle,
} from 'reactstrap';
import './ProductCard.scss';
function ProductCard({
  image,
  productName,
  unit,
  newPrice,
  oldPrice,
  productDescription,
}) {
  return (
    <div className='productCard'>
      <Card>
        <CardImg alt='Card image cap' src={image} top width='100%' />
        <CardBody>
          <CardTitle className='productCard__title' tag='h5'>
            {productName}
          </CardTitle>
          <CardSubtitle className='mb-2 text-muted productCard__unit' tag='h6'>
            {unit}
          </CardSubtitle>
          <CardText className='productCard__price'>
            <del>{oldPrice}</del>
            <span>{newPrice}</span>
          </CardText>
          <CardText className='productCard__description'>
            {productDescription}
          </CardText>
          <div className='productCard__btn'>
            <Button>THÊM VÀO GIỎ</Button>
            <Button outline>MUA NGAY</Button>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}

export default ProductCard;
