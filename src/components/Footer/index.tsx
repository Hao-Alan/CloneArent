import React, { ReactNode } from 'react'
import styled from 'styled-components/macro'

const StyledWrapper = styled.div`
display:flex;
justify-content:flex-start;
align-items:center;
height:120px;
background-color: ${props => props.theme.color.gray400};
.content{
    max-width: ${props => props.theme.metrics.breakpoints.lg};
    margin:auto;
    display: flex;
    justify-content: space-between;
}
`

const StyledContent = styled.div`
    color: ${props => props.theme.color.white};
    font-size: ${props => props.theme.typo.style.lHeader};
    

&:not(:first-child){
    margin-left: 30px
}
    a{
        color: ${props => props.theme.color.light};
        text-decoration: none;
       &:hover{
            color: ${props => props.theme.color.dark600};
        }
      
    }
`


interface INavigatorProps {
    id: number,
    text: string | ReactNode,
    url: string
}

const NAVIGATORS: INavigatorProps[] = [
    { id: 1, text: '会員登録', url: '' },
    { id: 2, text: '運営会社', url: '' },
    { id: 3, text: '利用規約', url: '' },
    { id: 4, text: '個人情報の取扱について', url: 'dd' },
    { id: 5, text: '特定商取引法に基づく表記', url: 'cd' },
    { id: 6, text: 'お問い合わせ', url: '' },
];


const Footer = () => {
    const renderList = () => (
        NAVIGATORS.map((item) => (
            <StyledContent key={item.id} >
                <a href={item.url}>
                    {item?.text}
                </a>
            </StyledContent>
        ))
    )


    return (
        <StyledWrapper>
            <div className='content'>
                {renderList()}
            </div>
        </StyledWrapper>
    )
}

export default Footer