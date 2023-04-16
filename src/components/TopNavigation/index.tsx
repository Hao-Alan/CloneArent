import React, { ReactNode, useState } from 'react'
import styled from 'styled-components'
import { getStaticCDN } from '../../utils/utils'
import { NavLink } from 'react-router-dom'
import PopupOver from '../PopupOverItem'



const StyledContainer = styled.div`
  background-color: ${props => props.theme.color.gray400};
  color:${props => props.theme.color.light};
`

const StyledWrapper = styled.div`
display: flex;
max-width: ${props => props.theme.metrics.breakpoints.lg};
margin: auto;
justify-content: space-between;
height:64px;

`

const StyledLogo = styled.div`
display: flex;

`
const StyledNavigator = styled.div`
display: flex;
font-family:${props => props.theme.typo.family.hiraginoKakuGothic};

.sub-container{
    display: none;

   @media screen and (min-width: ${props => props.theme.metrics.breakpoints.lg}) {
    display:flex;
    align-items:center;
}
}
`


const StyledPopup = styled.div`
display:flex;

`

const StyledNavlink = styled(NavLink)`
text-decoration:none;
color:${props => props.theme.color.dark600};
margin:15px;

&:hover{
    color:${props => props.theme.color.primary300};
}

&.active{
    color:${props => props.theme.color.primary300};

}




`

const StyledItems = styled.div`
    display:flex;  
    align-items:center;


    &:hover{
       cursor:pointer;
    }
    .noti-icons{
        display:flex;
        position:relative;
        align-items:center;
        justify-items:center;
        
        img{
            width:32px;
            height:32px;
        }

        .notification{
            position: absolute;
            width: 16px;
            height:16px;
            border-radius: 50%;
            background-color: ${props => props.theme.color.primary500};
            display: flex;
            align-items:center;
            justify-content:center;
            font-size: 10px;
            top:-2px;
            right:-6px;
        }
    }

    .text{
        margin-left:5px;
    }
`


const StyledItemsContainer = styled.div`
  width: 280px;
  font-family: ${(props) => props.theme.typo.family.hiraginoKakuGothic};
  ${(props) => props.theme.typo.style.l1Header}

  background-color:  ${(props) => props.theme.color.gray400};
  color: ${(props) => props.theme.color.light};
`;

const StyledFloatSubMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 32px;
  height: 72px;
  width: 100%;
  position: relative;
  &:hover {
    cursor: pointer;
    color: ${(props) => props.theme.color.light};
  }

  &:after {
    content: '';
    display: block;
    height: 1px;
    width: 100%;
    background: #ffffff;
    mix-blend-mode: normal;
    opacity: 0.15;
    position: absolute;
    bottom: 0;
    left: 0;
  }
`;


const StyledMenuButton = styled.div`
  display: 'flex';
  justify-content: center;
  align-items: center;
  margin-left: 30px;

  &:hover {
    cursor: pointer;
  }

  @media screen and (min-width: 960px) {
    margin-right: unset;
  }
`;
/* -------------------------LIST CONTENT--------------------- */
interface ItemProps {
    id: number,
    content: string | ReactNode,
    url: string
}


const ListItem = [
    { id: 1, content: '自分の記録', url: '/myRecord' },
    { id: 2, content: '体重グラフ', url: '/random1' },
    { id: 3, content: '目標', url: '/random2' },
    { id: 4, content: '選択中のコース', url: '/random3' },
    { id: 5, content: 'コラム一覧', url: '/column' },
    { id: 6, content: '設定', url: '/random4' },
];






const TopNavigation = () => {
    const [isOpenPopUp, setIsOpenPopUp] = useState(false)

    const renderFloatSubMenu = () =>
        <StyledItemsContainer>
            {ListItem?.map((item: ItemProps) => (
                <StyledNavlink
                    key={item.id}
                    to={item.url}
                    className={({ isActive }) => (isActive ? 'active' : '')}
                >
                    <StyledFloatSubMenu>{item.content}</StyledFloatSubMenu>
                </StyledNavlink>
            ))}
        </StyledItemsContainer>



    return (
        <StyledContainer>
            <StyledWrapper>
                <StyledLogo>
                    <img src={getStaticCDN("/Imagine/TopNavigation/logo.svg")} alt="arent-logo" />
                </StyledLogo>
                <StyledNavigator>
                    <div className='sub-container'>
                        <StyledNavlink to={"/"}>
                            <StyledItems>
                                <div className='noti-icons'>
                                    <img src={getStaticCDN("/Imagine/TopNavigation/icon_info.svg")} alt="home-logo" />
                                </div>
                                <div className='text'>Home</div>
                            </StyledItems>

                        </StyledNavlink>
                        <StyledNavlink to={"about"}>
                            <StyledItems>
                                <div className='noti-icons'>
                                    <img src={getStaticCDN("/Imagine/TopNavigation/icon_memo.svg")} alt="home1-logo" />
                                </div>
                                <div className='text'>Note</div>
                            </StyledItems>
                        </StyledNavlink>
                        <StyledNavlink to={"about"}>
                            <StyledItems>
                                <div className='noti-icons'>
                                    <img src={getStaticCDN("/Imagine/TopNavigation/icon_knife.svg")} alt="home2-logo" />
                                    <div className='notification'>1</div>
                                </div>
                                <div className='text'>Contact</div>
                            </StyledItems>
                        </StyledNavlink>
                    </div>

                    <PopupOver content={() => renderFloatSubMenu()} isOpenPopup={isOpenPopUp} setIsOpenPopUp={setIsOpenPopUp} >
                        <StyledMenuButton>
                            <img src={!isOpenPopUp ? getStaticCDN("/Imagine/TopNavigation/icon_menu.svg") : getStaticCDN("/Imagine/TopNavigation/icon_close.svg")} alt="" />

                        </StyledMenuButton>
                    </PopupOver>



                </StyledNavigator>
            </StyledWrapper>
        </StyledContainer>
    )
}

export default TopNavigation