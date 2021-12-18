import React from 'react';
import type { SidebarItemListProps } from './sidebar-item-list';
import { SidebarItemList } from './sidebar-item-list';
import './sidebar.css';

export const Sidebar: React.FC = () => {


    const sidebarMenu: SidebarItemListProps = {
        data: [
            {
                label: 'Polarity',
                className: 'sidebar-brand'
            },
            {
                label: 'Debug',
            }
        ]
    };

    return (
        <div className="sidebar-wrapper-inner">
            <SidebarItemList data={sidebarMenu.data} />
        </div>
    );
};