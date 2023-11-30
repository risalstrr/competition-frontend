import {
  HomeIcon,
  ChatBubbleLeftRightIcon,
  WalletIcon,
  AcademicCapIcon,
  GlobeAltIcon,
  UserIcon,
  TruckIcon,
  IdentificationIcon,
  QuestionMarkCircleIcon,
  RocketLaunchIcon
  
} from '@heroicons/react/24/outline'

export const routes = [
  {
    path: '/',
    name: 'Home',
    icon: HomeIcon,
  },
  {
    path: '/Forum',
    name: 'Forum',
    icon: ChatBubbleLeftRightIcon,
  },
  {
    path: '/Courses',
    name: 'Courses',
    icon: AcademicCapIcon,
  },
  {
    path: '/Workshops',
    name: 'Galeri Seni',
    icon: GlobeAltIcon,
  },
  {
    path: '/Wallet',
    name: 'Artikel',
    icon: WalletIcon,
  },
  // {
  //   path: '/Products',
  //   name: 'Products',
  //   icon: TruckIcon,
  // },
  {
    path: '/Vendor',
    name: 'Resep Masakan',
    icon: IdentificationIcon,
  },
  {
    path: '/Explore',
    name: 'Explore',
    icon: RocketLaunchIcon,
  }
]
