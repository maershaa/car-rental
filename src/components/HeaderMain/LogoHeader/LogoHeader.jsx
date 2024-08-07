import sprite from '/src/assets/icons/icons.svg';
import {  LogoLink, IconText } from './LogoHeader.styled';
import Logo from '../../../components/Logo/Logo'
const LogoHeader = ({handleClick}) => {
  return (
    <>
      <LogoLink to="/" onClick={handleClick}>
        <Logo></Logo>
      </LogoLink>
    </>
  );
};

export default LogoHeader;
