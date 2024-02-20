import React from 'react'
import Navbar from './Navbar'
import GenerateReport from './GenerateReport'

const Report = () => {
  return (
    <div>
      <Navbar title="Reports"/>
      <div className="admin-content">
        <GenerateReport/>
      </div>
    </div>
  )
}

export default Report
