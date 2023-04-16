import React from 'react'
import Layout from '../../components/Layout'
import styled from 'styled-components'
import Loading from '../../components/Loading/Loading'
import { HexZone, Banner, MealCard } from './Components'



const StyledWrapper = styled.div`
display: flex;
align-items:center;
justify-content:center;
flex-direction:column;

`
const Home = () => {
    return (
        <Layout>
            <StyledWrapper>
                {/* <Loading /> */}
                <Banner />
                <HexZone />
                <MealCard />
            </StyledWrapper>
        </Layout>
    )
}

export default Home