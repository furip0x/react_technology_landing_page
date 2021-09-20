import LogoImg from './Assets/image/logo.png'
import LogoIcon from './Assets/image/logo-icon.png'
import ImmersiveIcon from './Assets/image/immersive.svg'
import DegIcon from './Assets/image/360-degree.svg'
import ComfortIcon from './Assets/image/vr-glasses.svg'
import EffectOfPresenceIcon from './Assets/image/effect-of-presence.svg'
import EasyOperationSystemIcon from './Assets/image/easy-opration-system.svg'
import FeatureImg from './Assets/image/features-bg.jpg'

const images = {
  logo: LogoImg,
  logoIcon: LogoIcon,
}

const nav = [
  {
    id: 1,
    title: 'Home',
    url: '#banner',
  },
  {
    id: 2,
    title: 'About',
    url: '#about',
  },
  {
    id: 3,
    title: 'Contact',
    url: '#contact',
  },
  // {
  //   id: 4,
  //   title: 'FAQ',
  // },
]

const banner = {
  id: 1,
  title: 'TECHNOLOGY & INNOVATION FOR EVERYBODY',
  subtitleText1: 'vr',
  subtitleText2: 'Innovations',
  btnText: 'DISCOVER',
}

const about = {
  title: 'The future is immersive',
  descs: [
    {
      id: 1,
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, veniam. Magnam recusandae nam sunt distinctio omnis modi labore voluptatibus, tenetur ducimus alias quaerat veritatis id ipsum cumque rerum repellendus consequuntur quis. Maiores, dolor.',
    },
    {
      id: 2,
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, neque! Quam eum blanditiis sed laborum mollitia laboriosam, quisquam rerum similique nihil veniam cupiditate odio minus nemo optio nostrum doloremque quibusdam! Architecto ut amet quis consequatur, tempore consectetur repellendus!',
    },
  ],
}

const features = [
  {
    id: 1,
    icon: DegIcon,
    title: '360 viewing angle',
  },
  {
    id: 2,
    icon: EffectOfPresenceIcon,
    title: 'Effect of Presence',
  },
  {
    id: 3,
    icon: ComfortIcon,
    title: 'Extra Comfort for Head',
  },
  {
    id: 4,
    icon: EasyOperationSystemIcon,
    title: 'Easy Operation System',
  },
  {
    id: 5,
    icon: ImmersiveIcon,
    title: 'High Resolution and Density',
  },
]

const explore = {
  id: 1,
  img: FeatureImg,
  title: 'Reach out & let your mind explore',
  desc: 'Find yourself in the center of the fascinating universe.',
  link: '#',
  linkText: 'EXPLORE MORE',
}

const contact = {
  title: 'Contact Us',
  namePlaceholder: 'Your name*',
  emailPlaceholder: 'Your e-mail*',
  messagePlaceholder: 'Your message*',
  sendBtnText: 'SEND',
}

export { nav, banner, images, about, features, explore, contact }
