import { Link } from 'gatsby';
import React from 'react';

import { formatPrice } from '../../utilities/utilities';

import styles from './ProductCard.module.scss';

export function ProductCard({ product }: { product: any }) {
  return (
    <Link className={styles.card + ' card'} to={'/products/' + product.slug}>
      <div className='card-image'>
        <figure className='image is-4by3'>
          <img
            src={product.productPreview + '?w=300&h=200&mode=crop'}
            alt='Placeholder image'
          />
        </figure>
      </div>
      <div className='card-content'>
        <div className='media'>
          <div className='media-content'>
            <p className='title is-4'>{product.productName}</p>
          </div>
        </div>

        <div className='content'>
          <p className='is-size-7'>{product.description}</p>
          <br />
          <ProductPrice price={product.priceWithTax} currencyCode={product.currencyCode}/>
        </div>
      </div>
    </Link>
  );
}

function ProductPrice({ price, currencyCode }) {
  return (
    <div className={styles.productPrice}>
      { price.min !== price.max && 'from'} {formatPrice(currencyCode, price.min)}
    </div>
  );
}
