import React, { createContext, useContext, useState } from 'react'
import * as data from './data'

const AppContext = createContext()

const AppProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalInfo, setModalInfo] = useState({
    title: '',
    desc: ''
  })
  const showModal = (title, desc) => {
    setIsModalOpen(true)
    setModalInfo({title, desc})
  }
  const closeModal = () => {
    setIsModalOpen(false)
  }

  return <AppContext.Provider value={{ data, showModal, closeModal, isModalOpen, setIsModalOpen, modalInfo, setModalInfo }}>{children}</AppContext.Provider>
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }

