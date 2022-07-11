import { Box, Grid, Typography, Checkbox, IconButton } from "@mui/material";
import { locations } from "../data/db";

// swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// styles
import "../index.css";
import { flexBetween, dFlex } from "../themes/CommonStyles";
// icons
import { AiFillStar } from "react-icons/ai";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
const LocationCards = () => {
  return (

      <Grid container columnSpacing={3}>
        {locations.map((el) => {
          return (
            <Grid
              item
              key={el.id}
              xs={12}
              sm={6}
              md={4}
              lg={3}
              sx={{ height: 300, width: 300, mb: 15 }}
            >
              <Swiper
                pagination={{
                  dynamicBullets: true,
                }}
                modules={[Navigation, Pagination]}
                navigation={true}
              >
                {el.locationImages.map((el) => {
                  return (
                    <>
                      <SwiperSlide>
                      <IconButton
                          aria-label="add to favorites"
                          sx={{ position: "absolute", top: 0, right: 0 }}
                        >
                          <Checkbox
                            icon={
                              <FavoriteIcon
                                sx={{
                                  stroke: "white",
                                  strokeWidth: 2,
                                  fill: "rgba(0, 0, 0, 0.5)",
                                }}
                              />
                            }
                            checkedIcon={
                              <FavoriteIcon
                                sx={{
                                  stroke: "white",
                                  strokeWidth: 2,
                                  fill: "red",
                                }}
                              />
                            }
                          />
                        </IconButton>
                        <img
                          key={el.id}
                          src={el.url}
                          style={{ borderRadius: "5%" }}
                          alt="asd"
                        />
                      </SwiperSlide>
                    </>
                  );
                })}
              </Swiper>
              <Box sx={{ ...flexBetween, alignItems: "start" }}>
                <Box sx={{ mt: 2 }}>
                  <Typography variant="h3" fontWeight="bold">
                    {el.location}
                  </Typography>
                  <Typography variant="h4">
                    {el.rating > 4.2 ? "Host Professionista" : "Host Privato"}
                  </Typography>
                  <Typography variant="h4">{el.days}</Typography>
                  <Typography variant="h5" fontWeight="bold">
                    {el.price}{" "}
                    <Typography component="span" textTransform="none">
                      /notte
                    </Typography>
                  </Typography>
                </Box>
                <Box sx={{ mt: 2 }}>
                  <Box sx={dFlex}>
                    {el.isNew ? (
                      <>
                        <Typography variant="h3">Nuovo</Typography>
                        <AiFillStar size={18} />
                      </>
                    ) : (
                      <>
                        <Typography variant="h5">{el.rating}</Typography>
                        <AiFillStar size={18} />
                      </>
                    )}
                  </Box>
                </Box>
              </Box>
            </Grid>
          );
        })}
      </Grid>
  );
};

export default LocationCards;
