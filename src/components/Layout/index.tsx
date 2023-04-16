import React, { ReactNode } from 'react'
import styled from 'styled-components'
import Footer from '../Footer';
import TopNavigation from '../TopNavigation';


interface PropsChildren {
    children: ReactNode;
}

const StyledContainer = styled.div``

const Layout = ({ children }: PropsChildren) => {
    return (
        <StyledContainer>
            <TopNavigation />
            {children}
            <Footer />
        </StyledContainer>
    )
}

export default Layout