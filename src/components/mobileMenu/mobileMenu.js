import React from 'react';
import { navigate, FormattedMessage } from 'gatsby-plugin-intl';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Location } from '@reach/router';

const options = [
  {
    link: '/',
    translationId: 'home',
  },
  {
    link: '/poets',
    translationId: 'poets',
  },
];

const ITEM_HEIGHT = 48;

export default function mobileMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose(link) {
    console.log('link', link);
    if (typeof link === 'string') {
      navigate(link);
    }
    setAnchorEl(null);
  }

  function isCurrentPage(link, pathname) {
    return pathname.slice(3) === link;
  }

  return (
    <Location>
      {({ location }) => (
        <div>
          <IconButton
            aria-label="more"
            aria-controls="mobile-menu"
            aria-haspopup="true"
            onClick={handleClick}
          >
            <MoreVertIcon color="primary" />
          </IconButton>
          <Menu
            id="mobile-menu"
            anchorEl={anchorEl}
            keepMounted
            open={open}
            onClose={handleClose}
            PaperProps={{
              style: {
                maxHeight: ITEM_HEIGHT * 4.5,
                width: 200,
              },
            }}
          >

            {options.map(option => (
              <MenuItem
                key={option.translationId}
                selected={isCurrentPage(option.link, location.pathname)}
                onClick={() => handleClose(option.link)}
              >
                <FormattedMessage id={option.translationId} />
              </MenuItem>
            ))}

          </Menu>
        </div>
      )
      }
    </Location>
  );
}
