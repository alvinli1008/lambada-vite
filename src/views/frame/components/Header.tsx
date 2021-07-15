import React from 'react';
import PropTypes from 'prop-types';
import menu from '../models/menu';
import classnames from 'classnames';
import { IHeaderProps } from '../types/header';

const Header = ({ history }: IHeaderProps) => {
  const jumpToPage = (path: string) => {
    history.push(path);
  };
  return (
    <div className="tw-h-[60px] tw-border-b-[1px] tw-border-solid tw-px-5">
      {menu.map((item) => (
        <a
          key={item.path}
          onClick={() => jumpToPage(item.path)}
          className={classnames(
            'tw-px-2 tw-mx-2 tw-leading-[58px] hover:tw-text-blue-500 tw-inline-block tw-cursor-pointer',
            {
              ['tw-border-solid tw-border-b-2 tw-border-blue-500']: item.path === location.pathname
            }
          )}
        >
          {item.name}
        </a>
      ))}
    </div>
  );
};

Header.propTypes = {
  history: PropTypes.object
};

export default Header;
