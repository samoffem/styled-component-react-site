import React from 'react'
import { InfoSection, Pricing } from '../../components'
import { homeObjOne, homeObjTwo } from './Data'

const HomePage = () => {
    return (
        <>
            <InfoSection {...homeObjOne} />
            <InfoSection {...homeObjTwo} />
            <Pricing />
        </>
    )
}

export default HomePage
