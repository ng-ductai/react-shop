import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'
import policy from '../assets/data/policy'
import productData from '../assets/data/products'
import SliderData from '../assets/data/slider'
import Grid from '../components/Grid'
import Helmet from '../components/Helmet'
import PolicyCard from '../components/PolicyCard'
import ProductCard from '../components/ProductCard'
import Section, { SectionBody, SectionTitle } from '../components/Section'
import Slider from '../components/Slider'

const Home = () => {

    useEffect(() => {
        window.scrollTo(0,0)
    }, [])

    return (
        <Helmet title="Trang chủ">
            <Slider
                data = {SliderData}
                control = {true}
                auto = {true}
                timeOut = {4000}
            />
            
            <Section>
                <SectionTitle>
                    Top sản phẩm bán chạy trong tuần
                </SectionTitle>
                <SectionBody>
                    <Grid 
                        col={5}
                        mdCol={2}
                        smCol={1}
                        gap={20}
                    >                                
                        {
                            productData.getProducts(5).map((item, index) => (
                                <ProductCard
                                    key={index}
                                    img01={item.image01}
                                    img02={item.image02}
                                    name={item.title}
                                    price={Number(item.price)}
                                    slug={item.slug}
                                />                                
                            ))                            
                        }
                    </Grid>
                </SectionBody>
            </Section>
        
            <Section>
                <SectionTitle>
                    sản phẩm mới
                </SectionTitle>
                <SectionBody>
                    <Grid
                        col={5}
                        mdCol={2}
                        smCol={1}
                        gap={20}
                    >
                        {
                            productData.getProducts(10).map((item, index) => (
                                <ProductCard
                                    key={index}
                                    img01={item.image01}
                                    img02={item.image02}
                                    name={item.title}
                                    price={Number(item.price)}
                                    slug={item.slug}
                                />
                            ))
                        }
                    </Grid>
                </SectionBody>
            </Section>

            <Section>
                <SectionTitle>
                    phổ biến
                </SectionTitle>
                <SectionBody>
                    <Grid
                        col={5}
                        mdCol={2}
                        smCol={1}
                        gap={20}
                    >
                        {
                            productData.getProducts(15).map((item, index) => (
                                <ProductCard
                                    key={index}
                                    img01={item.image01}
                                    img02={item.image02}
                                    name={item.title}
                                    price={Number(item.price)}
                                    slug={item.slug}
                                />
                            ))
                        }
                    </Grid>
                </SectionBody>
            </Section>

            <Section>
                <SectionBody>
                    <Grid 
                        col={4}
                        mdCol={2}
                        smCol={1}
                        gap={20}
                    >                                
                        {
                            policy.map((item, index) => <Link to="/policy" key={index}>
                                <PolicyCard                                     
                                    name={item.name}
                                    description={item.description}
                                    icon={item.icon}
                                />
                            </Link>)
                            
                        }
                    </Grid>
                </SectionBody>
            </Section>
            
        </Helmet>
    )
}

export default Home
