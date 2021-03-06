import React from 'react'
import { Button } from '../../globalStyles'
import {FooterContainer, FooterSubText, FooterSubheading,
        FooterSubscription, Form, FormInput, FooterLinksContainer,
        FooterLinksWrapper, FooterLinksItems, FooterLink, FooterLinkTitle,
        SocialIcon, SocialIconLink, SocialIcons, SocialLogo, SocialMedia,
        SocialMediaWrap, WebsiteRights
} from './Footer.elements'
import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin, FaTwitter } from 'react-icons/fa'

const Footer = () => {
    return (
       <FooterContainer>
           <FooterSubscription>
               <FooterSubheading>
                   Join Our Exclusive members to receive
                   the latest news and trends
               </FooterSubheading>
               <FooterSubText>
                   You can unsubscribe at any time.
               </FooterSubText>
               <Form>
                   <FormInput name="email" type="email" placeholder="Your email" />
                   <Button fontBig>Subscribe</Button>
               </Form>
           </FooterSubscription>

           <FooterLinksContainer>
               <FooterLinksWrapper>
                   <FooterLinksItems>
                       <FooterLinkTitle>About Us</FooterLinkTitle>
                       <FooterLink to='sign-up'>How it Works</FooterLink>
                       <FooterLink to=''>Testimonials</FooterLink>
                       <FooterLink to=''>Careers</FooterLink>
                       <FooterLink to=''>Investors</FooterLink>
                       <FooterLink to=''>Terms of service</FooterLink>
                   </FooterLinksItems>

                   <FooterLinksItems>
                       <FooterLinkTitle>Contact Us</FooterLinkTitle>
                       <FooterLink to='sign-up'>How it Works</FooterLink>
                       <FooterLink to=''>Testimonials</FooterLink>
                       <FooterLink to=''>Careers</FooterLink>
                       <FooterLink to=''>Investors</FooterLink>
                       <FooterLink to=''>Terms of service</FooterLink>
                   </FooterLinksItems>
                </FooterLinksWrapper>

                <FooterLinksWrapper>
                   <FooterLinksItems>
                       <FooterLinkTitle>Videos</FooterLinkTitle>
                       <FooterLink to='sign-up'>How it Works</FooterLink>
                       <FooterLink to=''>Testimonials</FooterLink>
                       <FooterLink to=''>Careers</FooterLink>
                       <FooterLink to=''>Investors</FooterLink>
                       <FooterLink to=''>Terms of service</FooterLink>
                   </FooterLinksItems>

                   <FooterLinksItems>
                       <FooterLinkTitle>Social Media</FooterLinkTitle>
                       <FooterLink to='sign-up'>How it Works</FooterLink>
                       <FooterLink to=''>Testimonials</FooterLink>
                       <FooterLink to=''>Careers</FooterLink>
                       <FooterLink to=''>Investors</FooterLink>
                       <FooterLink to=''>Terms of service</FooterLink>
                   </FooterLinksItems>
               </FooterLinksWrapper>
           </FooterLinksContainer>

           <SocialMedia>
               <SocialMediaWrap>
                   <SocialLogo to='/'>
                       <SocialIcon />
                       ULTRA
                    </SocialLogo>
                    <WebsiteRights> ULTRA 2020</WebsiteRights>
                    <SocialIcons>
                        <SocialIconLink href='/' target='_blank' aria-label="Facebook">
                            <FaFacebook />
                        </SocialIconLink>

                        <SocialIconLink href='/' target='_blank' aria-label="Instagram">
                            <FaInstagram />
                        </SocialIconLink>

                        <SocialIconLink href='/' target='_blank' aria-label="Youtube">
                            <FaYoutube />
                        </SocialIconLink>

                        <SocialIconLink href='/' target='_blank' aria-label="Twitter">
                            <FaTwitter />
                        </SocialIconLink>

                        <SocialIconLink href='/' target='_blank' aria-label="LinkedIn">
                            <FaLinkedin />
                        </SocialIconLink>
                    </SocialIcons>
               </SocialMediaWrap>
           </SocialMedia>
       </FooterContainer>
    )
}

export default Footer
