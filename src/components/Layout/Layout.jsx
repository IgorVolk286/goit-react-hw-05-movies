import { Outlet } from 'react-router-dom';
import { LayoutW, ListNav, Header, StyledLink, Item } from './Layout styled';

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
      <Outlet />
    </LayoutW>
  );
};
