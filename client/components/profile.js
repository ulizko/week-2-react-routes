import React from 'react'
import { Link, useParams } from 'react-router-dom'

import Head from './head'

const Profile = () => {
  const { username } = useParams()
  return (
    <div>
      <Head title="Profile" />
      <div className="flex items-center justify-center h-screen">
        <div className="bg-indigo-800 text-white font-bold rounded-lg border shadow-lg p-10">
          <div id="title">Profile</div>
          <div id="username">{username}</div>
          <ul>
            <li>
              <Link to="/dashboard/">Go To Root</Link>
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

export default Profile
