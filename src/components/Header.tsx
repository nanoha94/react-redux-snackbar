import React, { useState } from "react";
import { useNavigate } from "react-router";
import { AppBar, Toolbar, Box, Button } from "@mui/material";
import { styled } from "styled-components";

const Header = () => {
  const [navItems, setNavItemms] = useState([
    { label: "ホーム", link: "/" },
    { label: "マイページ", link: "/mypage" },
  ]);
  const navigate = useNavigate();

  return (
    <AppBar  sx={{ position: 'sticky' }}>
      <Toolbar>
      <Box sx={{ display: 'block' }}>
            {navItems.map((item) => (
              <Button key={item.label} sx={{ color: '#fff' }} onClick={() => navigate(item.link)}>
                {item.label}
              </Button>
            ))}
          </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
