'use client';

import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

type MenuOption = {
  label: string;
  onClick?: () => void;
  href?: string;
};

interface BasicMenuProps {
  buttonLabel: string;
  options: MenuOption[];
}

export default function MenuDropdown({ buttonLabel, options }: BasicMenuProps) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button-menu"
        
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        {buttonLabel}
      </Button>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        slotProps={{
          list: { 'aria-labelledby': 'basic-button-menu' },
        }}
      >
        {options.map((option, index) => {
          if (option.href) {
            return (
              <MenuItem
                key={index}
                component="a"
                href={option.href}
                onClick={handleClose}
              >
                {option.label}
              </MenuItem>
            );
          }

          return (
            <MenuItem
              key={index}
              onClick={() => {
                handleClose();
                option.onClick?.();
              }}
            >
              {option.label}
            </MenuItem>
          );
        })}
      </Menu>
    </div>
  );
}
