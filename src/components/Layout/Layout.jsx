import { Outlet } from 'react-router-dom';
import { LayoutW, ListNav, Header, StyledLink, Item } from './Layout styled';
import { Suspense } from 'react';
export const Layout = () => {
  return (
    <LayoutW>
      <Header>
        <ListNav>
          <Item>
            <StyledLink to="/"> Home </StyledLink>
          </Item>
          <Item>
            <StyledLink to="/movies"> Movies </StyledLink>
          </Item>
        </ListNav>
      </Header>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </LayoutW>
  );
};
