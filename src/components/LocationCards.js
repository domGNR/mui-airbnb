import React from 'react'
import "../index.css";
import {Box,Grid} from '@mui/material'
import locations from '../data/db'


// swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import {Pagination} from 'swiper'
import "swiper/css";
import "swiper/css/pagination";
const LocationCards = () => {
  return (
    <Box>
        <Grid container rowSpacing={2} columnSpacing={2}>
            {locations.map(el=>{
                return(
                    <Box
                    sx={{width:400,height:400}}>
                    <Swiper
                      pagination={{
                        dynamicBullets: true,
                      }}
                      modules={[Pagination]}
                      className="mySwiper"
                    >
                      <SwiperSlide key={el.id}>{el.location}</SwiperSlide>
                    </Swiper>
                    </Box>
                )
            })}
        </Grid>
    </Box>
  )
}

export default LocationCards
