import { adminRoot } from "./defaultValues";
// import { UserRole } from "../helpers/authHelper"

const data = [
  {
    id: 'dashboards',
    icon: 'iconsminds-shop-4',
    label: 'Lobby',
    to: `${adminRoot}/dashboards/default`,
    // roles: [UserRole.Admin, UserRole.Editor],
  },
  {
    id: 'applications',
    icon: 'simple-icon-screen-desktop',
    label: 'Sessions',
    to: `${adminRoot}/applications`,
    subs: [
      {
        icon: 'simple-icon-check',
        label: 'Agenda',
        to: `${adminRoot}/applications/todo`,
      },
      {
        icon: 'simple-icon-bubbles',
        label: 'Speakers Profile',
        to: `${adminRoot}/applications/speaker`,
      },
    ],
  },
  {
    id: 'menu',
    icon: 'simple-icon-calculator',
    label: 'Conference',
    to: `${adminRoot}/applications/conference`,
  },
  {
    id: 'docs',
    icon: 'simple-icon-phone',
    label: 'Lounge',
    to: `${adminRoot}/dashboards/analytics`,
    // roles: [UserRole.Admin, UserRole.Editor],
  },
  {
    id: 'pages',
    icon: 'iconsminds-library',
    label: 'Resources',
    to: `${adminRoot}/pages/blog`,
    subs: [
      {
        icon: 'simple-icon-check',
        label: 'Document library',
        to: `${adminRoot}/pages/doc-lib`,
      },
      {
        icon: 'simple-icon-calculator',
        label: 'Video library',
        to: `${adminRoot}/pages/video-lib`,
      },
    ],
  },
  {
    id: 'ui',
    icon: 'iconsminds-bucket',
    label: 'Support',
    to: `${adminRoot}/ui`,
    subs: [
      {
        icon: 'simple-icon-check',
        label: 'Help Desk',
        to: `${adminRoot}/ui/help`,
      },
      {
        icon: 'simple-icon-calculator',
        label: 'FAQs',
        to: `${adminRoot}/ui/faq`,
      },
    ],
  },
  
];
export default data;
