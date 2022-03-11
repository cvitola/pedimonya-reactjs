import React , { useState }from 'react';
import { Container, LogoContainer, Menu, MenuItem, MenuItemLink, MobileIcon, Wrapper, CantidadItem} from './NavBarStyles';
import { SiPokemon } from 'react-icons/si'
import { FaBars, FaTimes } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {

    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const navigate = useNavigate();

    const handleOnClickShop = () => {
        setShowMobileMenu(!showMobileMenu);
        navigate('/shopping');
    }

    const handleOnClickHome = () => {
        setShowMobileMenu(!showMobileMenu);
        navigate('/home');
    }

    const handleOnClickStore = () => {
        setShowMobileMenu(!showMobileMenu);
        navigate('/store');
    }

    const handleOnClickContact = () =>{
        setShowMobileMenu(!showMobileMenu);
        navigate('/contact');
    }


  return (
        <Container>
            <Wrapper>
                <LogoContainer>
                    <SiPokemon />
                </LogoContainer>
                <MobileIcon onClick={() => setShowMobileMenu(!showMobileMenu)}>
                    {
                        showMobileMenu ? <FaTimes /> : <FaBars />
                    }
                </MobileIcon>
                <Menu open={showMobileMenu}>
                    <MenuItem onClick={handleOnClickHome}>
                        <MenuItemLink>HOME</MenuItemLink>
                    </MenuItem>
                    <MenuItem onClick={handleOnClickStore}> 
                        <MenuItemLink>STORE</MenuItemLink>
                    </MenuItem>
                    <MenuItem onClick={handleOnClickContact}>
                        <MenuItemLink>CONTACT</MenuItemLink>
                    </MenuItem>
                    {/*<MenuItem onClick={() => setShowMobileMenu(!showMobileMenu)}>*/}
                    <MenuItem onClick={handleOnClickShop}>
                        <MenuItemLink>SHOPPING CART
                        <CantidadItem>0</CantidadItem>
                    </MenuItemLink>
                    </MenuItem>
                    
                </Menu>
            </Wrapper>
        </Container>

  )
};

export default NavBar;
