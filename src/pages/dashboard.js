import React from 'react'
import DashboardLayout from '@/components/Layouts/DashboardLayout'

function Dashboard() {
  return (
    <div>Dashboard</div>
  )
}

export default Dashboard

Dashboard.getLayout = function getLayout(page) {
    return <DashboardLayout>
        {page}
    </DashboardLayout>
}