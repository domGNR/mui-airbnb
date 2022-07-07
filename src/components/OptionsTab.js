import {useState} from 'react'
import {Box, Tabs, tabsClasses, Tab, Button, Container} from '@mui/material'
import {FaFilter} from 'react-icons/fa'
import {locationsTab} from '../data/db'

const OptionsTab = () => {
    const [value, setValue] = useState(0)
    const handleChange = (e,newValue) => {
        setValue(newValue)
    }
    return (
    <Container maxWidth='xl'>
        <Box sx={{
            display:'flex',
            flexGrow:1,
            px: {xs:0, md:2}, 
            alignItems:'center',
            mt:2,
            md:2
        }}>
            <Tabs value={value}
            onChange={handleChange}
            variant='scrollable'
            scrollButtons
            sx={{
                [`&.${tabsClasses.scrollButtons}`] : {
                    '&.Mui-disabled':{opacity:0.3},
                },
            }}
            >
                {locationsTab.map(el=>{
                    return <Tab key={el.id} icon={el.icon} label={el.label}>  </Tab>
                })}
            </Tabs>
            <Button sx={{
                display: {xs:'none', md:'block'},
                border:'1px solid #ddd',
                minWidth:90,
                justifyContent:'space-between',
                borderRadius:2,
                textTransform:'capitalize',
                py:1,
                color:'theme.palette.text.primary'
            }}>
                <FaFilter/>

            </Button>
        </Box>
    </Container>
  )
}

export default OptionsTab
