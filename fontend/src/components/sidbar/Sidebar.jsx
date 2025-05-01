import React from 'react';
import { Menu } from 'antd';
import {
  HomeOutlined,
  ThunderboltOutlined,
  UsergroupAddOutlined,
  UserOutlined,
  HistoryOutlined,
  UnorderedListOutlined,
  VideoCameraOutlined,
  FieldTimeOutlined,
  HeartOutlined,
  RiseOutlined,
// Music,
// Gamepad,
  TrophyOutlined,
  CrownOutlined,
  VideoCameraAddOutlined,
  CustomerServiceOutlined,
  SmileOutlined,
  SettingOutlined,
  FileTextOutlined,
  MessageOutlined
} from '@ant-design/icons';

const { SubMenu } = Menu;

export default function Sidebar() {
  return (
    <aside className="hidden sm:flex sm:flex-col w-60 h-screen bg-white overflow-y-auto">
      <Menu
        mode="inline"
        style={{ height: '100%', borderRight: 0 }}
        className="w-full"
      >
        {/* Main navigation links */}
        <Menu.Item key="home" icon={<HomeOutlined />}>
          Home
        </Menu.Item>
        <Menu.Item key="shorts" icon={<ThunderboltOutlined />}>
          Shorts
        </Menu.Item>

        {/* Subscriptions */}
        <SubMenu key="subscriptions" icon={<UsergroupAddOutlined />} title="Subscriptions">
          <Menu.Item key="channel1" icon={<UserOutlined />}>
            Channel 1
          </Menu.Item>
          <Menu.Item key="channel2" icon={<UserOutlined />}>
            Channel 2
          </Menu.Item>
          <Menu.Item key="channel3" icon={<UserOutlined />}>
            Channel 3
          </Menu.Item>
        </SubMenu>

        {/* Other links */}
        <Menu.Item key="history" icon={<HistoryOutlined />}>
          History
        </Menu.Item>
        <Menu.Item key="playlists" icon={<UnorderedListOutlined />}>
          Playlists
        </Menu.Item>
        <Menu.Item key="your-videos" icon={<VideoCameraOutlined />}>
          Your Videos
        </Menu.Item>
        <Menu.Item key="watch-later" icon={<FieldTimeOutlined />}>
          Watch Later
        </Menu.Item>
        <Menu.Item key="liked-videos" icon={<HeartOutlined />}>
          Liked Videos
        </Menu.Item>

        {/* Explore section */}
        <Menu.ItemGroup key="explore" title="Explore">
          <Menu.Item key="trending" icon={<RiseOutlined />}>
            Trending
          </Menu.Item>
          {/* <Menu.Item key="music" icon={<Music />}>
            Music
          </Menu.Item> */}
          {/* <Menu.Item key="gaming" icon={<Gamepad />}>
            Gaming
          </Menu.Item> */}
          <Menu.Item key="sports" icon={<TrophyOutlined />}>
            Sports
          </Menu.Item>
          <Menu.Item key="fashion" icon={<CrownOutlined />}>
            Fashion
          </Menu.Item>
          <Menu.Item key="movies" icon={<VideoCameraAddOutlined />}>
            Movies
          </Menu.Item>
          <Menu.Item key="podcasts" icon={<CustomerServiceOutlined />}>
            Podcasts
          </Menu.Item>
          <Menu.Item key="comedy" icon={<SmileOutlined />}>
            Comedy
          </Menu.Item>
        </Menu.ItemGroup>

        {/* Settings Section */}
        <Menu.ItemGroup key="settings" title="Settings">
          <Menu.Item key="settings" icon={<SettingOutlined />}>
            Settings
          </Menu.Item>
          <Menu.Item key="report-history" icon={<FileTextOutlined />}>
            Report History
          </Menu.Item>
          <Menu.Item key="feedback" icon={<MessageOutlined />}>
            Send Feedback
          </Menu.Item>
        </Menu.ItemGroup>
      </Menu>
    </aside>
  );
}