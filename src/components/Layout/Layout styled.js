import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const LayoutW = styled.div`
  width: 1200px;
  margin-left: auto;
  margin-right: auto;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
`;
export const ListNav = styled.ul`
  display: flex;
  gap: 40px;
  list-style-type: none;
`;

export const Header = styled.header`
  width: 100%;
  background-color: #f6f6f6;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 5px;
  padding-top: 15px;
  padding-bottom: 10px;
  padding: 10px 30px;
  margin-bottom: 20px;
`;
export const StyledLink = styled(NavLink)`
  color: black;

  &.active {
    color: orange;
  }
  text-decoration: none;
`;
export const Item = styled.li`
  font-size: 36px;
  font-weight: 400;
  font-style: italic;
`;
