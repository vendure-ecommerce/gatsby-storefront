import React from "react"
import styles from "./ProductCard.module.scss"
import { Link } from "gatsby"
import { formatPrice } from "../../utilities/utilities"

export function ProductCard({ product }: { product: any }) {
  return (
    <Link className={styles.card + " card"} to={'/products/' + product.slug}>
      <div className="card-image">
        <figure className="image is-4by3">
          <img
            src={product.featuredAsset.preview + "?w=300&h=200&mode=crop"}
            alt="Placeholder image"
          />
        </figure>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-content">
            <p className="title is-4">{product.name}</p>
          </div>
        </div>

        <div className="content">
          <p className="is-size-7">{product.description}</p>
          <br />
          <ProductPrice variants={product.variants} />
        </div>
      </div>
    </Link>
  )
}

function ProductPrice({ variants }) {
  const price = Math.min(...variants.map(v => v.priceWithTax))
  return (
    <div className={styles.productPrice}>
      {variants.length > 1 && "from"} {formatPrice(variants[0].currencyCode, price)}
    </div>
  )
}
