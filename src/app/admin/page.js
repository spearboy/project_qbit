import Dashboard from '@/components/admin/Dashboard'
import Head from '@/components/admin/Head'
import Sidebar from '@/components/admin/sidebar'
import React from 'react'

const page = () => {
  return (
    <div id='wrap'>
      <Sidebar />
      <div className='main'>
        <Head />
        <Dashboard />
      </div>
    </div>
  )
}

export default page