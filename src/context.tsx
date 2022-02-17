import React, { createContext, useContext, useState } from "react"
import * as data from "./data"
import { IContextData } from "./context-types"

interface IModalInfo {
  title: string
  desc: string
}

interface IContext {
  data: IContextData
  showModal: (title: string, desc: string) => void
  closeModal: () => void
  isModalOpen: boolean
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>
  modalInfo: IModalInfo
  setModalInfo: React.Dispatch<React.SetStateAction<IModalInfo>>
}

const AppContext = createContext<IContext>(undefined!)

const AppProvider: React.FC = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const [modalInfo, setModalInfo] = useState<IModalInfo>({
    title: "",
    desc: "",
  })

  const showModal = (title: string, desc: string) => {
    setIsModalOpen(true)
    setModalInfo({ title, desc })
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  return (
    <AppContext.Provider
      value={{
        data,
        showModal,
        closeModal,
        isModalOpen,
        setIsModalOpen,
        modalInfo,
        setModalInfo,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
