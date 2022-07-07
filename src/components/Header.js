import { Box, Container } from '@mui/material'
import Logo from './Logo'
import LocationSearch from './LocationSearch'
import { flexBetweenCenter, dFlex, displayOnDesktop }  from '../themes/CommonStyles'
import ProfileSettings from './ProfileSettings'
import MobileSearch from './MobileSearch'

const Header = () => {
  return (
    <Box
    sx={{
      ...dFlex,
      minWidth:100,
        minHeight:70,
        borderBottom:'1px solid #ddd',
    }}>
        <Container maxWidth='xl'>
            <Box
            sx={{
              ...flexBetweenCenter,
              minHeight:70,
              px:4,
            }}>
              <Box sx={{...displayOnDesktop}}>
                <Logo />
              </Box>
              <Box sx={{...displayOnDesktop}}>
                <LocationSearch />
              </Box>
              <Box sx={{...displayOnDesktop}}>
                <ProfileSettings />
              </Box>
              <Box sx={{display:{xs:'flex',md:'none'}}}>
                <MobileSearch />
              </Box>
            </Box>
        </Container>
    </Box>
  )
}

export default Header
