export const rocketsList = [
  {
    id: '01',
    name: 'Explorer',
    src: '/img/rocketman.png',
    price: '$',
    description: 'Affordable Exploration',
  },
  {
    id: '02',
    name: 'Adventurer',
    src: '/img/rocketman.png',
    price: '$$',
    description: 'Best Selling Rocket!',
  },
  {
    id: '03',
    name: 'Infinity',
    src: '/img/rocketride.png',
    price: '$$$',
    description: 'Luxury Starship',
  },
];

export const mobileMenu = [
  {
    id: '0',
    name: 'Home',
    href: '#hero',
  },
  {
    id: '1',
    name: 'Our Rockets',
    href: '#rockets',
  },
  {
    id: '2',
    name: 'Testimonials',
    href: '#testimonials',
  },
  {
    id: '3',
    name: 'Contact Us',
    href: '#contact',
  },
  {
    id: '4',
    name: 'Legal',
    href: '#footer',
  },
];

export const headerMenu = mobileMenu.slice(1, 4);
