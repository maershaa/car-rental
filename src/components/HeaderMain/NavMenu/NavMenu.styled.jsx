import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavigationList = styled.ul`
  display: none;

  @media screen and (min-width: 1280px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    column-gap: 16px;
  }
`;

export const NavItem = styled.li`
  width: auto;
`;

export const StyledLink = styled(NavLink)`
  padding: 8px 16px;
  border: 1px solid var(--primary-text-color);
  border-radius: 40px;
  color: var(--primary-text-color);
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.43;
  transition: all 400ms ease;

  &.active,
  &:hover,
  &:focus {
    background-color: #9cc33c;
    border: 1px solid #9cc33c;
    color: white;
  }

  @media screen and (min-width: 768px) {
    line-height: 1.6;
  }
`;
