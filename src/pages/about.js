import React from 'react'
import RootLayout from '../../components/Layouts/RootLayout'

function AboutUs() {
  return (
    <div>AboutUs</div>
  )
}

export default AboutUs

AboutUs.getLayout = function getLayout(page) {
    return (
      <RootLayout>
        {page}
      </RootLayout>
    )
  }