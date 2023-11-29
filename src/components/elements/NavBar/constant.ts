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
    name: 'Acara Budaya',
    icon: GlobeAltIcon,
  },
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
    path: '/Explore',
    name: 'Explore',
    icon: RocketLaunchIcon,
  }
]
