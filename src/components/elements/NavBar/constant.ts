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
    name: 'Forum UMKM',
    icon: ChatBubbleLeftRightIcon,
  },
  {
    path: '/Courses',
    name: 'Courses',
    icon: AcademicCapIcon,
  },
  {
    path: '/Workshops',
    name: 'Workshops',
    icon: GlobeAltIcon,
  },
  // {
  //   path: '/UMKM',
  //   name: 'UMKM',
  //   icon: UserIcon,
  // },
  {
    path: '/Wallet',
    name: 'Wallet',
    icon: WalletIcon,
  },
  {
    path: '/Products',
    name: 'Products',
    icon: TruckIcon,
  },
  {
    path: '/Vendor',
    name: 'Vendor',
    icon: IdentificationIcon,
  },
 {
    path: '/About',
    name: 'About',
    icon: QuestionMarkCircleIcon,
  },
  {
    path: '/Explore',
    name: 'Explore',
    icon: RocketLaunchIcon,
  }
]
