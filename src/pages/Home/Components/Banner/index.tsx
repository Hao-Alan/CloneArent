import React from 'react';
import styled from 'styled-components/macro';
import FoodImage from './FoodImage/FoodImage';
import Chart from './Chart/Chart';
import ChartN from './Chart/ChartN';

const StyledContainer = styled.div`
  width: 100%;
  height: 300px;
  background-color:gray;
  display:flex;

`;




const Banner = () => {
    return (
        <StyledContainer>
            <FoodImage />
            <ChartN />
        </StyledContainer>
    );
};

export default Banner;
