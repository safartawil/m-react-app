import React from 'react';

import IntlMessages from '../../../utils/IntlMessages';
import {
  PostAdd,
  AccountCircle,
  ArrowForward,
  Category,
  Chat,
  CheckCircle,
  CloudUpload,
  Colorize,
  ContactMail,
  Contacts,
  Domain,
  DonutSmall,
  DragIndicator,
  Edit,
  EditAttributes,
  Email,
  Error,
  Event,
  Group,
  ImportContacts,
  InsertChart,
  LibraryBooks,
  LocalGroceryStore,
  LockOutlined,
  Map,
  MonetizationOn,
  NotificationImportant,
  Notifications,
  Pages,
  People,
  ShowChart,
  Timeline,
  VpnKey,
  Widgets,
} from '@material-ui/icons';


const dashboardsMenus = [
  {
    name: <IntlMessages id={'pages.samplePage'} />,
    type: 'item',
    icon: <PostAdd />,
    link: '/sample-page',
  },
  {
    name: <IntlMessages id={'Admin'} />,
    icon: <MonetizationOn />,
    type: 'item',
    link: '/dashboard/crypto',
  },
  {
    name: <IntlMessages id={'sidebar.dashboard.listing'} />,
    icon: <Domain />,
    type: 'item',
    link: '/dashboard/listing',
  },
  {
    name: <IntlMessages id={'sidebar.dashboard.crm'} />,
    icon: <Group />,
    type: 'item',
    link: '/dashboard/crm',
  },
  {
    name: <IntlMessages id={'sidebar.dashboard.intranet'} />,
    icon: <DonutSmall />,
    type: 'item',
    link: '/dashboard/intranet',
  },
  {
    name: <IntlMessages id={'sidebar.dashboard.ecommerce'} />,
    icon: <LocalGroceryStore />,
    type: 'item',
    link: '/dashboard/eCommerce',
  },
  {
    name: <IntlMessages id={'sidebar.dashboard.news'} />,
    icon: <ImportContacts />,
    type: 'item',
    link: '/dashboard/news',
  },
  {
    name: <IntlMessages id={'sidebar.dashboard.misc'} />,
    icon: <LibraryBooks />,
    type: 'item',
    link: '/dashboard/misc',
  },
];


export const sidebarNavs = [
  {
    name: <IntlMessages id={'sidebar.main'} />,
    type: 'section',
    children: dashboardsMenus
  },
];

export const horizontalDefaultNavs = [
  {
    name: <IntlMessages id={'sidebar.main'} />,
    type: 'collapse',
    children: dashboardsMenus
   
  },
];

export const minimalHorizontalMenus = [
  {
    name: <IntlMessages id={'sidebar.main'} />,
    type: 'collapse',
    children: dashboardsMenus
  },
];
