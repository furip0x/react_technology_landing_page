export interface IContextData {
  images: {
    logo: string
    logoIcon: string
  }
  nav: {
    id: number
    title: string
    url: string
  }[]
  banner: {
    id: number
    title: string
    subtitleText1: string
    subtitleText2: string
    btnText: string
  }
  about: {
    title: string
    descs: {
      id: number
      text: string
    }[]
  }
  features: {
    id: number
    icon: string
    title: string
  }[]
  explore: {
    id: number
    img: string
    title: string
    desc: string
    link: string
    linkText: string
  }
  contact: {
    title: string
    subTitle: string
    namePlaceholder: string
    emailPlaceholder: string
    messagePlaceholder: string
    sendBtnText: string
  }
  gallery: {
    title: string
    desc: string
  }
  galleryItems: {
    id: number
    category: string
    img: string
  }[]
  testimonial: {
    title: string
    desc: string
  }
  testimonialItems: {
    id: number
    img: string
    name: string
    title: string
    desc: string
  }[]
  faq: {
    title: string
    desc: string
  }
  faqItems: {
    id: number
    title: string
    desc: string
  }[]
  signUp: {
    title: string
    emailPlaceholder: string
    sendBtnText: string
  }
}
