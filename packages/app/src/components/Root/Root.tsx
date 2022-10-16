/*
 * Copyright 2020 The Backstage Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React, { PropsWithChildren, useEffect } from 'react';
import { Link, makeStyles } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import ExtensionIcon from '@material-ui/icons/Extension';
import MapIcon from '@material-ui/icons/MyLocation';
import LibraryBooks from '@material-ui/icons/LibraryBooks';
import CreateComponentIcon from '@material-ui/icons/AddCircleOutline';
import LogoFull from './LogoFull';
import LogoIcon from './LogoIcon';
import { NavLink, useLocation } from 'react-router-dom';
import {
  Settings as SidebarSettings,
  UserSettingsSignInAvatar,
} from '@backstage/plugin-user-settings';
import { SidebarSearchModal } from '@backstage/plugin-search';
import {
  Sidebar,
  sidebarConfig,
  SidebarDivider,
  SidebarGroup,
  SidebarItem,
  SidebarPage,
  SidebarScrollWrapper,
  SidebarSpace,
  useSidebarOpenState,
} from '@backstage/core-components';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import Star from './icons/starfilled.png';
import StarOutline from './icons/staroutline.png';
import Person from './icons/person.png'
import Help from './icons/help.png'
import NotificationOn from './icons/notificationon.png'
import NotificationOff from './icons/notificationoff.png'

const useSidebarLogoStyles = makeStyles({
  root: {
    width: sidebarConfig.drawerWidthClosed,
    height: 3 * sidebarConfig.logoHeight,
    display: 'flex',
    flexFlow: 'row nowrap',
    alignItems: 'center',
    marginBottom: -14,
  },
  link: {
    width: sidebarConfig.drawerWidthClosed,
    marginLeft: 24,
  },
});

const SidebarLogo = () => {
  const classes = useSidebarLogoStyles();
  const { isOpen } = useSidebarOpenState();

  return (
    <div className={classes.root}>
      <Link
        component={NavLink}
        to="/"
        underline="none"
        className={classes.link}
        aria-label="Home"
      >
        {isOpen ? <LogoFull /> : <LogoIcon />}
      </Link>
    </div>
  );
};

const customHeaderComponent = () => {
    const headerElement = document.getElementsByTagName('header');
    const textElement = headerElement[0].getElementsByTagName('h1')[0].textContent
    console.log(textElement);

    if(headerElement && headerElement.length>0){
      const iconElement = document.createElement('div');
      if(textElement=="My Company Catalog"){
        iconElement.innerHTML = `
        <div style="display: inline-flex; align-items: center;">
          <img src=${Person} />
          <img src=${Help} />
        </div>
        `;
      }
      if(textElement=="Documentation" || textElement=="APIs"){
        iconElement.innerHTML = `
        <div style="display: inline-flex; align-items: center;">
          <img src=${StarOutline} />
          <img src=${NotificationOn} />
          <img src=${Person} />
          <img src=${Help} />
        </div>
        `;
        const icon = iconElement.getElementsByTagName('img')
        console.log(icon)
        let startoggle=true
        let notificationtoggle=true

        icon[0].addEventListener("click", function() {
          startoggle=!startoggle
          if(startoggle){
            icon[0].src=StarOutline;
          }
          else{
            icon[0].src=Star
          }
        })

        icon[1].addEventListener("click", function() {
          notificationtoggle=!notificationtoggle
          if(notificationtoggle){
            icon[1].src=NotificationOn
          }
          else{
            icon[1].src=NotificationOff
          }
        })
      }
      headerElement[0].appendChild(iconElement)
    }    
  }

export const Root = ({ children }: PropsWithChildren<{}>) => {
  const location = useLocation();
  useEffect(()=> {
    setTimeout(() => {
      customHeaderComponent();
    }, 400);
  }, [location]);
  return(<SidebarPage>
    <Sidebar>
      <SidebarLogo />
      <SidebarGroup label="Search" icon={<SearchIcon />} to="/search">
        <SidebarSearchModal />
      </SidebarGroup>
      <SidebarDivider />
      <SidebarGroup label="Menu" icon={<MenuIcon />}>
        {/* Global nav, not org-specific */}
        <SidebarItem icon={HomeIcon} to="catalog" text="Home" />
        <SidebarItem icon={ExtensionIcon} to="api-docs" text="APIs" />
        <SidebarItem icon={LibraryBooks} to="docs" text="Docs" />
        <SidebarItem icon={CreateComponentIcon} to="create" text="Create..." />
        {/* End global nav */}
        <SidebarDivider />
        <SidebarScrollWrapper>
          <SidebarItem icon={MapIcon} to="tech-radar" text="Tech Radar" />
        </SidebarScrollWrapper>
      </SidebarGroup>
      <SidebarSpace />
      <SidebarDivider />
      <SidebarGroup
        label="Settings"
        icon={<UserSettingsSignInAvatar />}
        to="/settings"
      >
        <SidebarSettings />
      </SidebarGroup>
    </Sidebar>
    {children}
  </SidebarPage>)
  
  
  };
