
import DriveAlert from '@/components/HomepageComponents/DrivingAlert/DriveAlert'
import DriveAlert1 from '@/components/Page1Components/DriveAlert/DriveAlert1'
import DynamicContent from '@/components/Page1Components/DynamicContent/DynamicContent'
import Features from '@/components/Page1Components/Features/Features'
import FieldOfVision from '@/components/Page1Components/FieldOfVision/FieldOfVision'
import GpsLogger from '@/components/Page1Components/GpsLogger/GpsLogger'
import GSensor from '@/components/Page1Components/GSensor/GSensor'
import HeroSection from '@/components/Page1Components/HeroSection/HeroSection'
import IpsDisplay from '@/components/Page1Components/IpsDisplay/IpsDisplay'
import OptionalParking from '@/components/Page1Components/OptionalParking/OptionalParking'
import SharpVision from '@/components/Page1Components/SharpVision/SharpVision'
import VideoResolution from '@/components/Page1Components/VideoResolution/VideoResolution'
import React from 'react'

const page = () => {
  return (
<>
<section>
    <HeroSection />
</section>
<section>
    <VideoResolution/>
</section>
<section>
    <SharpVision />
</section>
<section>
    <DynamicContent/>
</section>
<section>
    <GSensor/>
</section>

<section>
    <IpsDisplay/>
</section>

<section>
    <DriveAlert1/>
</section>

<section>
    <FieldOfVision/>
</section>
<section>
    <OptionalParking/>
</section>
<section>
    <GpsLogger/>
</section>

<Features/>

</>  )
}

export default page