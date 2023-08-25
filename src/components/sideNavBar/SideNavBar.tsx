import React, { useEffect, useState } from 'react';
import color from 'layout/colors';
import transitions from 'layout/transitions';
import Box from '@mui/material/Box';
import useWindowSize from 'hooks/useWindowSize';
import { cappuccino, espresso, latte, americano, flatWhite, ContentI } from 'mockData/Content';

const menuList = ['Cappuccino', 'Latte', 'Americano', 'Espresso', 'FlatWhite'];
const data = [cappuccino, espresso, latte, americano, flatWhite];

interface PropI {
    setContent: (p: ContentI[]) => void;
}

const SideNavBar: React.FC<PropI> = ({ setContent }) => {
    useWindowSize();
    const [activePage, setActivePage] = useState(0);
    useEffect(() => {
        setContent(data[activePage]);
    }, [activePage, setContent]);
    return (
        <Box
            sx={{
                height: '452px',
                alignItems: 'center',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-around',
                background: color.sideNavBarBG,
                position: 'fixed',
                bottom: '78px',
                left: `${window.innerWidth <= 425 ? 0 : window.innerWidth / 2 - 212}px`,
                width: '32px',
                borderTopRightRadius: '60px',
                fontSize: '14px',
            }}>
            {menuList.map((item, index) => (
                <Box
                    key={index}
                    sx={{
                        color: activePage === index ? color.iconActiveColor : color.iconDefaultColor,
                        ...transitions.color,
                        writingMode: 'vertical-rl',
                        rotate: '180deg',
                        display: 'flex',
                        justifyContent: 'space-around',
                        cursor: 'pointer',
                    }}
                    onClick={() => {
                        setActivePage(index);
                    }}>
                    {item}
                </Box>
            ))}
        </Box>
    );
};

export default SideNavBar;
