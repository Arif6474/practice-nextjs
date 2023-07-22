import React from 'react'
import RootLayout from '../../components/Layouts/RootLayout'

function HomePage() {
  return (
    <div>HomePage</div>
  )
}

export default HomePage

HomePage.getLayout = function getLayout(page) {
  return (
    <RootLayout>
      {page}
    </RootLayout>
  )
}