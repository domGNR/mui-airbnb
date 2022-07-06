import {Box, Stack, Button, Link} from '@mui/material'
import {BsGlobe} from 'react-icons/bs'
import {AiOutlineMenu} from 'react-icons/ai'
import {FaRegUserCircle} from 'react-icons/fa'
import { flexCenter } from '../themes/CommonStyles'

const ProfileSettings = () => {
    return (
        <Box sx={{...flexCenter}}>
            <Link>Diventa un host</Link>
            <Stack>
                <Button>
                    <BsGlobe size={24} />
                </Button>
            </Stack>

            <Button>
                <Stack sx={{
                    border:'1px solid #ddd',
                    borderRadius:10,
                    p:1
                }}>
                    <AiOutlineMenu />
                    <FaRegUserCircle />
                </Stack>
            </Button>
        </Box>
    )
}
    
export default ProfileSettings
