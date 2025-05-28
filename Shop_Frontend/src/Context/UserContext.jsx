import React, { useEffect, useContext, useState, createContext } from 'react'

export const UserContext = createContext()
export const useUser = () => useContext(UserContext)

export const UserProvider = ({ children }) => {
  const [User, setUser] = useState(() => {
    const Userdata = localStorage.getItem("user")
    return Userdata ? JSON.parse(Userdata) : null;
  })

  useEffect(() => {
    if (User) {
      localStorage.setItem('user', JSON.stringify(User))
    }
    else {
      localStorage.removeItem('user')
    }
  }, [User])

  return (
    <UserContext.Provider value={{ User, setUser }}>
      {children}
    </UserContext.Provider>
  )
}

export default UserContext
