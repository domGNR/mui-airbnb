import {Paper,InputBase,IconButton} from '@mui/material'
import {FaSearch} from 'react-icons/fa'
import {VscSettings} from 'react-icons/vsc'

const MobileSearch = () => {
  return (
    <Paper component='form' sx={{
        p:'2px 4px',
        display:'flex',
        alignItems:'center',
        borderRadius:20,
        border:'1px solid #ccc',
        width:400
    }}>
        <IconButton sx={{p:'10px'}}>
            <FaSearch />
        </IconButton>
        <InputBase sx={{ml:1, flex:1}} placeholder='Dove andiamo?'/>
        <IconButton type='submit' sx={{p:'10px'}}>
            <VscSettings />
        </IconButton>
    </Paper>
  )
}

export default MobileSearch
