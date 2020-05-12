import React from 'react'
import { Link } from 'react-router-dom'

import Head from './head'

const username = '4fe5ef59-cba3-4073-8e76-7a0e6fd4a4bc'

const Dashboard = () => {
  return (
    <div>
      <Head title="Dashboard" />
      <div className="flex items-center justify-center h-screen">
        <div className="bg-indigo-800 text-white font-bold rounded-lg border shadow-lg p-10">
          <div id="title">Dashboard</div>
          <ul>
            <li>
              <Link to={`/dashboard/profile/${username}`}>Go To Profile</Link>
            </li>
            <li>
              <Link to="/dashboard/main">Go To Main</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
