
import React from 'react';

export interface SidebarItemListProps {
    data: {
        label: string;
        className?: string;
    }[];
}

export const SidebarItemList: React.FC<SidebarItemListProps> = ({data}: SidebarItemListProps) => {

    return (
        <div className="sidebar-items">
            <ul className="sidebar-navigation">
                {
                    data.map((item, index) => {
                        return (
                            <li className={'sidebar-nav-item ' + (item.className ? item.className : '') } key={index}>
                                <a href="#">{item.label}</a>
                            </li>
                        );
                    })
                }
            </ul>
        </div>
    );

};