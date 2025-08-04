'use client';

import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import Link from 'next/link';

interface MenuItemType {
  label: string;
  url: string;
}

interface ButtonNavbarProps {
  label_bnt: string;
  items: MenuItemType[];
}

export default function MenuPopupState(props: ButtonNavbarProps) {
  return (
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <>
          <button
            {...bindTrigger(popupState)}
            className="text-gray-500 hover:text-black text-xl flex items-center gap-1"
            type="button"
            aria-haspopup="menu"
            aria-expanded={popupState.isOpen ? 'true' : 'false'}
          >
            {props.label_bnt}
            <svg
              width="18"
              height="18"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
          </button>

          <Menu {...bindMenu(popupState)}>
            {props.items.map((item, index) => (
              <MenuItem
                key={index}
                component={Link}
                href={item.url}
                onClick={popupState.close}
              >
                {item.label}
              </MenuItem>
            ))}
          </Menu>
        </>
      )}
    </PopupState>
  );
}
