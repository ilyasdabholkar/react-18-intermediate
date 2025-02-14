import React from 'react'
import { Outlet } from 'react-router-dom'
import UserListPage from './UserListPage'

const UsersPage = () => {

  return (
    <div className='row'>
      <div className='col'>
        <UserListPage />
      </div>
      <div className='col'>
            <Outlet />
      </div>
    </div>
  )
}

export default UsersPage
