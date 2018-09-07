import './BookingLinkPageSidebar.scss';
import React from 'react';
import SideBar from 'components/sidebar/Sidebar';
import SideBarItem from 'components/sidebar/sidebar-item/SidebarItem';

export default class BookingLinkPageSideBar extends React.PureComponent {
    render() {
        return (
            <SideBar>
                <div className="ch-icon-marketing"><span className="ch-icon-marketing__status"></span>
                    <span className="ch-icon-marketing__text">Marketing</span>
                    <span className="ch-icon-marketing__icon"></span>
                </div>
                <div className="ch-side-bar-list">
                    <SideBarItem text="Events" icon="bg-icon_events_sidebar"/>
                    <SideBarItem text="Reports" icon="bg-icon_reports_sidebar"/>
                    <SideBarItem text="Booking Links" icon="bg-icon_link_sidebar" isActive/>
                    <SideBarItem text="Meetings Templates" icon="bg-icon_layers_sidebar"/>
                    <SideBarItem text="Reminders" icon="bg-icon_beel_reminder_sidebar"/>
                    <SideBarItem text="Conference Rooms" icon="bg-icon_conference_room_side_bar"/>
                    <SideBarItem text="Forms" icon="bg-icon_form_sidebar"/>
                    <SideBarItem text="Inbound Router" icon="bg-icon_inbound_router_sidebare"/>
                    <SideBarItem text="Integration" icon="bg-icon_user_sidebar"/>
                    <SideBarItem text="Integration" icon="bg-icon_integration"/>
                    <SideBarItem text="Hide Sidebar" icon="bg-icon_log_out"/>
                </div>
            </SideBar>
        );
    }
}

BookingLinkPageSideBar.propTypes = {};