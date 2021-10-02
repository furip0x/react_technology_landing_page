import DegIcon from './Assets/image/360-degree.svg'
import EasyOperationSystemIcon from './Assets/image/easy-opration-system.svg'
import EffectOfPresenceIcon from './Assets/image/effect-of-presence.svg'
import FeatureImg from './Assets/image/features-bg.jpg'
import ImmersiveIcon from './Assets/image/immersive.svg'
import LogoIcon from './Assets/image/logo-icon.png'
import LogoImg from './Assets/image/logo.png'
import ComfortIcon from './Assets/image/vr-glasses.svg'

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
    title: 'Gallery',
    url: '#gallery',
  },
  {
    id: 4,
    title: 'FAQ',
    url: '#faq',
  },
  {
    id: 5,
    title: 'Contact',
    url: '#contact',
  },
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
  subTitle: 'Need help? You can contact us using the form below.',
  namePlaceholder: 'Your name*',
  emailPlaceholder: 'Your e-mail*',
  messagePlaceholder: 'Your message*',
  sendBtnText: 'SEND',
}

const gallery = {
  title: 'Photo Gallery',
  desc: 'Explore our gallery',
}

const galleryItems = [
  {
    id: 1,
    category: 'Education',
    img: 'https://source.unsplash.com/DeyfdybVQhA/800x800',
  },
  {
    id: 2,
    category: 'Education',
    img: 'https://source.unsplash.com/IMUwe-p1yqs/800x800',
  },
  {
    id: 3,
    category: 'Education',
    img: 'https://source.unsplash.com/3eAByt3-eOw/800x800',
  },
  {
    id: 4,
    category: 'Games',
    img: 'https://source.unsplash.com/NN9HQkDgguc/800x800',
  },
  {
    id: 5,
    category: 'Games',
    img: 'https://source.unsplash.com/GLgjpN4MWaw/800x800',
  },
  {
    id: 6,
    category: 'Games',
    img: 'https://source.unsplash.com/hIz2lvAo6Po/800x800',
  },
  {
    id: 7,
    category: 'Entertainment',
    img: 'https://source.unsplash.com/l862hX_FET8/800x800',
  },
  {
    id: 8,
    category: 'Entertainment',
    img: 'https://source.unsplash.com/sTdZIYiWwuA/800x800',
  },
  {
    id: 9,
    category: 'Entertainment',
    img: 'https://source.unsplash.com/AplbmIMHwAE/800x800',
  },
]

const faq = {
  title: 'Frequently Asked Questions',
  desc: 'Do you have questions? Check the FAQ',
}

const faqItems = [
  {
    id: 1,
    title: 'What is Virtual Reality (VR)?',
    desc: 'Clients see and interact with the space because they utilize a headset. In other words, VR creates a virtual environment with full immersion.',
  },
  {
    id: 2,
    title: 'Can I wear my glasses inside of the headset?',
    desc: 'Yes, the VR headset is designed to accommodate users that wear glasses. You can telescope the lens closer to, and farther away from, your face to get the optimal fit.',
  },
  {
    id: 3,
    title: 'What is FOV (Field of View)?',
    desc: 'FOV is short for field of view. In the context of our eyes, our field of view is everything you can see at any given moment. In the context of VR headsets, the field of view refers to everything you can see in the virtual world at any given moment while using the headset.',
  },
  {
    id: 4,
    title: 'What is IPD?',
    desc: 'IPD is an abbreviation that stands for “interpupillary distance” – aka the distance between the center of your two pupils.',
  },
  {
    id: 5,
    title: 'How can I pay?',
    desc: 'You can pay by Credit card.',
  },
]

const signUp = {
  title: 'Sign up for updates',
  emailPlaceholder: 'Enter Your Email',
  sendBtnText: 'SEND',
}

export {
  nav,
  banner,
  images,
  about,
  features,
  explore,
  gallery,
  galleryItems,
  contact,
  faq,
  faqItems,
  signUp,
}
