import React from 'react'
import { IconContext } from 'react-icons/lib'
import { PricingSection, PricingWrapper, PricingHeading,
    PricingContainer,
    PricingCard,
    PricingCardInfo,
    PricingCardIcon,
    PricingCardPlan,
    PricingCardCost,
    PricingCardLength,
    PricingCardFeature,
    PricingCardFeatures,
         
} from './Pricing.elements'
import { Button } from '../../globalStyles'
import {GiCutDiamond, GiRock, GiCrystalBars} from 'react-icons/gi'

const Pricing = () => {
    return (
        <IconContext.Provider value={{color: '#a9b3c1', size: 64 }} >
            <PricingSection>
                <PricingWrapper>
                    <PricingHeading>Our Services</PricingHeading>
                    <PricingContainer>
                        <PricingCard to='/sign-up'>
                            <PricingCardInfo>
                                <PricingCardIcon>
                                    <GiRock />
                                </PricingCardIcon>
                                <PricingCardPlan>Starter Pack</PricingCardPlan>
                                <PricingCardCost>N5,000</PricingCardCost>
                                <PricingCardLength>Per month</PricingCardLength>
                                <PricingCardFeatures>
                                    <PricingCardFeature>100 New Users</PricingCardFeature>
                                    <PricingCardFeature>N1million Budget</PricingCardFeature>
                                    <PricingCardFeature>Retargeting Analytics</PricingCardFeature>
                                </PricingCardFeatures>
                                <Button primary>Choose Plan</Button>
                            </PricingCardInfo>
                        </PricingCard>

                        <PricingCard to='/sign-up'>
                            <PricingCardInfo>
                                <PricingCardIcon>
                                    <GiCrystalBars />
                                </PricingCardIcon>
                                <PricingCardPlan>Starter Pack</PricingCardPlan>
                                <PricingCardCost>N5,000</PricingCardCost>
                                <PricingCardLength>Per month</PricingCardLength>
                                <PricingCardFeatures>
                                    <PricingCardFeature>100 New Users</PricingCardFeature>
                                    <PricingCardFeature>N1million Budget</PricingCardFeature>
                                    <PricingCardFeature>Retargeting Analytics</PricingCardFeature>
                                </PricingCardFeatures>
                                <Button primary>Choose Plan</Button>
                            </PricingCardInfo>
                        </PricingCard>

                        <PricingCard to='/sign-up'>
                            <PricingCardInfo>
                                <PricingCardIcon>
                                    <GiCutDiamond />
                                </PricingCardIcon>
                                <PricingCardPlan>Starter Pack</PricingCardPlan>
                                <PricingCardCost>N5,000</PricingCardCost>
                                <PricingCardLength>Per month</PricingCardLength>
                                <PricingCardFeatures>
                                    <PricingCardFeature>100 New Users</PricingCardFeature>
                                    <PricingCardFeature>N1million Budget</PricingCardFeature>
                                    <PricingCardFeature>Retargeting Analytics</PricingCardFeature>
                                </PricingCardFeatures>
                                <Button primary>Choose Plan</Button>
                            </PricingCardInfo>
                        </PricingCard>

                    </PricingContainer>
                </PricingWrapper>
            </PricingSection>
        </IconContext.Provider>
    )
}

export default Pricing
