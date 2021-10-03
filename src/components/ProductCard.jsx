import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import numberWithCommas from '../utils/numberWithCommas'

const ProductCard = props => {


    return (
        <div className = "product-card">
            <Link to={`/catalog/${props.slug}`}>
                <div className="product-card__image">
                    <img src={props.img01} alt="" />
                </div>
                <div className="product-card__main">                
                    <h3 className="product-card__main__name">{props.name}</h3>
                    <div className="product-card__main__price">
                        <span className="product-card__main__price__old">
                            <del>{numberWithCommas((props.price)*1.5)} đ</del>
                        </span>
                        {numberWithCommas(props.price)} đ                      
                    </div>
                </div>
            </Link>       
        </div>
    )
}

ProductCard.propTypes = {
    img01: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    slug: PropTypes.string.isRequired
}

export default ProductCard
