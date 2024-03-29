import {Paper, Stack, Link, Box, Button, Container} from '@mui/material/';
// react icons
import { BsGlobe } from 'react-icons/bs';
import { IoChevronUpOutline } from 'react-icons/io5';
import {
  flexBetweenCenter,
  justifyCenter,
  fullWidthFlex,
} from '../themes/CommonStyles.js';

const footerLinks = [
  { id: 1, text: 'Privacy', url: '#' },
  { id: 2, text: 'Terms', url: '#' },
  { id: 3, text: 'Sitemap', url: '#' },
  { id: 4, text: 'Destinations', url: '#' },
];

const Footer = () => {
  return (
    <Box
      sx={{
        ...fullWidthFlex,
        borderTop: '1px solid #ddd',
       flexShrink: 0
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            ...flexBetweenCenter,
            width: '100%',
          }}
        >
          <Stack>
            <Paper>
              <Link href="#"> 2022 Airbnb Copyright </Link>
            </Paper>
            {footerLinks.map((link) => {
                console.log(link.id)
              return (
                <Paper key={link.id}>
                  <Link href={link.url}> {link.text}</Link>
                </Paper>
              );
            })}
          </Stack>

          <Stack>
            <Paper sx={justifyCenter}>
              <Button>
                <Box sx={{ ...justifyCenter, mr: 1 }}>
                  <BsGlobe size={24} />
                </Box>
                English (CA)
              </Button>
              <Button> $CAD </Button>
              <Button>
                Support & Resources
                <Box sx={{ ...justifyCenter, ml: 1 }}>
                  <IoChevronUpOutline size={24} />
                </Box>
              </Button>
            </Paper>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
