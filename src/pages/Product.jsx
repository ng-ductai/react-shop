import React, {useEffect, } from 'react'
import Helmet from '../components/Helmet'
import Section, { SectionBody, SectionTitle } from '../components/Section'
import productData from '../assets/data/products'
import Grid from '../components/Grid'
import ProductCard from '../components/ProductCard'
import ProductViewDetail from '../components/ProductViewDetail'

const Product = props => {

    const product = productData.getProductBySlug(props.match.params.slug)

    const relatedProducts = productData.getProducts(8)

    useEffect(() => {
        window.scrollTo(0,0)
    }, [product])

    return (
        <Helmet title={product.title}>
            <Section>
                <SectionBody>
                    <ProductViewDetail product={product}/>
                </SectionBody>
            </Section>
            <Section>
                <SectionTitle>                    
                        Khám phá thêm                    
                </SectionTitle>
                <SectionBody>
                    <Grid
                        col={4}
                        mdCol={2}
                        smCol={1}
                        gap={20}
                    >
                    {
                        relatedProducts.map((item,index) => (
                            <ProductCard 
                                key={index}
                                img01={item.image01}
                                name={item.title}
                                price={Number(item.price)}
                                slug={item.slug}   
                            />
                        ))
                    }
                    </Grid>
                </SectionBody>
            </Section>
        </Helmet>
    )
}

export default Product
