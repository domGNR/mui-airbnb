import {Button, Divider, Stack, Box, Typography, Paper, ThemeProvider} from '@mui/material'
import {IoSearchCircleSharp} from 'react-icons/io5'
import { pink } from '@mui/material/colors'

const options = [
    {id:1,text:'Anywhere'},
    {id:2,text:'Any Week'},
    {id:3,text:'Add a guest',icon:true}
]

const LocationSearch = () => {
  return (
    <Paper 
    sx={{
        borderRadius:20,
        ml:15
    }} elevation={3} >
        <Stack
        sx={{
            borderRadius:20,
            pl:2
        }}
        divider={<Divider orientation='vertical' flexItem/>}>
            {options.map(el=>{
                return <Button key={el.id}>
                    <Typography sx={{
                        color: theme => theme.palette.primary,
                        fontWeight:'bold'
                    }}>
                        {el.text}
                    </Typography>
                    {el.icon && (
                        <Box sx={{
                            ml:1,mt:1,mr:1
                        }}>
                            <IoSearchCircleSharp color={pink[500]} size={32} />
                        </Box>
                    )}
                </Button>
            })}
        </Stack>
    </Paper>
  )
}

export default LocationSearch
