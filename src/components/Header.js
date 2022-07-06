import { Box, Container } from '@mui/material'
import Logo from './Logo'
import LocationSearch from './LocationSearch'
import { flexBetweenCenter, dFlex }  from '../themes/CommonStyles'
import ProfileSettings from './ProfileSettings'

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
                <Logo />
                <LocationSearch />
                <ProfileSettings />
            </Box>
        </Container>
    </Box>
  )
}

export default Header
