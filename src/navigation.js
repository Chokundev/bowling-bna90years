import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'หน้าแรก',
      links: [
        {
          text: 'เกี่ยวกับการแข่งขัน',
          href: getPermalink('/homes/saas'),
        },
        {
          text: 'รอบการแข่งขัน',
          href: getPermalink('/homes/startup'),
        },
        {
          text: 'สถานที่จัดการแข่งขัน',
          href: getPermalink('/homes/mobile-app'),
        },
      ],
    },
    {
      text: 'ลงทะเบียนแข่งขัน',
      links: [
        {
          text: 'เช็กสถานะการลงทะเบียน',
          href: getPermalink('/#features'),
        },
      ],
    },
    {
      text: 'สนับสนุนการแข่งขัน',
      links: [
        {
          text: 'เช็กสถานะการสนับสนุน',
          href: getPermalink('/landing/lead-generation'),
        },
      ],
    },
    {
      text: 'ติดต่อเรา',
      links: [
        {
          text: 'Blog List',
          href: getBlogPermalink(),
        },
        {
          text: 'Article',
          href: getPermalink('get-started-website-with-astro-tailwind-css', 'post'),
        },
        {
          text: 'Article (with MDX)',
          href: getPermalink('markdown-elements-demo-post', 'post'),
        },
        {
          text: 'Category Page',
          href: getPermalink('tutorials', 'category'),
        },
        {
          text: 'Tag Page',
          href: getPermalink('astro', 'tag'),
        },
      ],
    },
  ],
  actions: [{ text: 'ไปที่ระบบ BEMS', href: 'https://mis.bn-alumni.org/bems', target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: 'Product',
      links: [
        { text: 'Features', href: '#' },
        { text: 'Security', href: '#' },
        { text: 'Team', href: '#' },
        { text: 'Enterprise', href: '#' },
        { text: 'Customer stories', href: '#' },
        { text: 'Pricing', href: '#' },
        { text: 'Resources', href: '#' },
      ],
    },
    {
      title: 'Platform',
      links: [
        { text: 'Developer API', href: '#' },
        { text: 'Partners', href: '#' },
        { text: 'Atom', href: '#' },
        { text: 'Electron', href: '#' },
        { text: 'AstroWind Desktop', href: '#' },
      ],
    },
    {
      title: 'Support',
      links: [
        { text: 'Docs', href: '#' },
        { text: 'Community Forum', href: '#' },
        { text: 'Professional Services', href: '#' },
        { text: 'Skills', href: '#' },
        { text: 'Status', href: '#' },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About', href: '#' },
        { text: 'Blog', href: '#' },
        { text: 'Careers', href: '#' },
        { text: 'Press', href: '#' },
        { text: 'Inclusion', href: '#' },
        { text: 'Social Impact', href: '#' },
        { text: 'Shop', href: '#' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://www.facebook.com/profile.php?id=100063673533771' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://www.facebook.com/profile.php?id=100064718254766' },
  ],
  footNote: `
   2025 &copy Teerachanon <a class="text-blue-600 underline dark:text-muted" href="https://www.facebook.com/profile.php?id=100064718254766"> Bowonniwet Society</a> · All rights reserved.
  `,
};
