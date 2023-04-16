import React from 'react'
import { Button, Popover } from 'antd';
import styled, { createGlobalStyle } from 'styled-components';


const StyedPopover = styled(Popover)`
display: flex; 
align-items: center;
justify-content: center;

`

const OverridePopoverStyled = createGlobalStyle`
.ant-popover{
    .ant-popover-content{
    
        .ant-popover-inner{
           padding: 0 !important ;
        }
    }

}
`


const PopupOver = ({ children, content, isOpenPopup, setIsOpenPopUp }: any) => {
    return (
        <StyedPopover
            placement="bottom"
            content={content}
            arrow={false}
            trigger={"click"}
            open={isOpenPopup}
            onOpenChange={(visible) => { setIsOpenPopUp(visible) }}


        >
            {children}
            <OverridePopoverStyled />
        </StyedPopover>
    )
}

export default PopupOver