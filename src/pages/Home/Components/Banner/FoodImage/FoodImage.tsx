import React from 'react'
import styled from 'styled-components/macro'
import { getStaticCDN } from '../../../../../utils/utils'
import { Progress } from 'antd'


const StyledContainer = styled.div`
width:40%;
height:100%;
position:relative;
`

const StyledImage = styled.div`
width:100%;
height:100%;


img{
    width:100%;
    height:100%;
    object-fit:cover;
    
}
`

const StyledTextContainer = styled.div`
font-size:1.5rem;
color:blue;
position:absolute;
top:50%;
left:50%;
transform:translate(-50%,-50%);
z-index:10;

.ant-progress-text{
    color:white !important
}

.ant-progress-inner{
    width: 170px !important;
    height: 170px !important;
    font-size: 20px !important;
}
`

const ProgressBar = styled.div`
    position: relative;

`

const ProgressContent = styled.div`
position:absolute;
top:50%;
left:50%;
transform:translate(-50%,-50%);
color:white;

.portion{
    ${props => props.theme.typo.style.small2ButtonOrLink}
    margin-right:5px;
    font-family: ${props => props.theme.typo.family.inter}
}

.percent{
    font-size:25px
}
`

const FoodImage = () => {
    return (

        <StyledContainer>
            <StyledImage>
                <img src={getStaticCDN("/Imagine/images/d01.jpg")} alt="hinh-bua-an" />
            </StyledImage>
            <StyledTextContainer>
                <ProgressBar>
                    <Progress type="circle" showInfo={false} strokeWidth={2} strokeColor={"white"} percent={75} />
                </ProgressBar>
                <ProgressContent>
                    <span className='portion'>5/21</span>
                    <span className='percent'>75%</span>
                </ProgressContent>
            </StyledTextContainer>
        </StyledContainer>
    )
}

export default FoodImage