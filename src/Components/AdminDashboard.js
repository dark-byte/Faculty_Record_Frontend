import React, { useState } from 'react';
import Data from './Admin.Data';
import Report from './Admin.Report';
import UsersPermissions from './Admin.UsersPermissions';
import { TbDatabase } from "react-icons/tb";
import { TbReportAnalytics } from "react-icons/tb";
import { TbUserEdit } from "react-icons/tb";


const AdminDashboard = () => {
  const [selectedTab, setSelectedTab] = useState('Data');

  const handleTabChange = (tab) => {
    setSelectedTab(tab);
  };

  const renderContent = () => {
    switch (selectedTab) {
      case 'Data':
        return <Data />;
      case 'Report':
        return <Report />;
      case 'UsersPermissions':
        return <UsersPermissions />;
      default:
        return null;
    }
  };

  return (
    <div className="admin-dashboard">
      <Sidebar onTabChange={handleTabChange} selectedTab={selectedTab} />
      <main className='admin-main'>{renderContent()}</main>
    </div>
  );
};

const Sidebar = ({ onTabChange, selectedTab }) => (
  <nav className='sidebar'>
    <h1>PESITM</h1>
    <ul>
      <li
        className={selectedTab === 'Data' ? 'active tab' : 'tab'}
        onClick={() => onTabChange('Data')}
      >
        <TbDatabase /> Data
      </li>
      <li
        className={selectedTab === 'Report' ? 'active tab' : 'tab'}
        onClick={() => onTabChange('Report')}
      >
        <TbReportAnalytics /> Report
      </li>
      <li
        className={selectedTab === 'UsersPermissions' ? 'active tab' : 'tab'}
        onClick={() => onTabChange('UsersPermissions')}
      >
        <TbUserEdit /> Users & Permissions
      </li>
    </ul>
  </nav>
);

export default AdminDashboard;
