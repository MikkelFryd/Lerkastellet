import { Heading, Link, SimpleGrid } from '@chakra-ui/react'
import {PiInstagramLogoThin, PiFacebookLogoThin} from 'react-icons/pi'

export const Footer = () => {

    return ( 
        <footer style={{ backgroundColor:"beige", color:"black", display: "grid", justifyItems:"center"}}>
            <Heading as="h2" style={{ padding:"1rem"}} fontSize={{ base: "12px", md: "40px", lg: "32px"}}>Find mig her</Heading>
            <SimpleGrid style={{display: "grid", gridTemplateRows: "1fr 1fr"}}>
                <Link href="https://www.facebook.com/"><PiFacebookLogoThin style={{width: "100%", height: "4vh"}}/></Link>
                <Link href="https://www.instagram.com"><PiInstagramLogoThin style={{width: "100%", height: "100%"}}/></Link>
            </SimpleGrid>
            <div>
                <Heading as="h3" fontSize={{ base: "12px", md: "40px", lg: "24px"}}>Dorte Møller keramik - 2023</Heading>
                <Heading as="h3" fontSize={{ base: "12px", md: "40px", lg: "24px"}}>DESIGN OG WEB - MIKKEL FRYDENSBERG</Heading>
            </div>
        </footer>
    )
}