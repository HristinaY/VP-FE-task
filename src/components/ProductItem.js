import React from "react";

import Card from "./Card";
import BestSeller from "./ProductBanners/BestSeller";
import ShortProjection from "./ProductBanners/ShortProjection";
import OnSale from "./ProductBanners/OnSale";

import "./ProductItem.css";

const ProductItem = (props) => {
    const { data } = props;

    const clickHandler = () => {
        console.log("Quick view clicked");
    };

    return (
        <Card className="product-card">
            <div id={data.legacyId} className="product-item">
                <div className="product-item__img-wrap">
                    <img
                        src={data.image.url}
                        alt={data.image.attributes.imageAltText}
                    />

                    {data.price.isOnPromotion && <OnSale />}
                    {data.attributes.isBestSeller && <BestSeller />}
                    {data.attributes.isShortProjection && <ShortProjection />}

                    <button
                        className="btn product-item__quick-view"
                        onClick={clickHandler}
                    >
                        Quick view
                    </button>
                </div>

                <div className="product-item__content">
                    <div className="product-item__brand">
                        <img
                            className="product-item__brand-img"
                            src={data.brand.brandImage.url}
                            alt={data.brand.brandImage.attributes.imageAltText}
                        />
                    </div>
                    <a
                        className="product-item__name"
                        href={
                            "https://www.victorianplumbing.co.uk/" + data.slug
                        }
                    >
                        {data.productName}
                    </a>

                    <p className="product-item__price">
                        £{data.price.priceIncTax}
                    </p>
                </div>
            </div>
        </Card>
    );
};

export default ProductItem;
