import { Box, Container } from '@mui/material'

import Logo from './Logo'
import { flexBetweenCenter, dFlex }  from '../themes/CommonStyles'

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
            </Box>
        </Container>
    </Box>
  )
}

export default Header
