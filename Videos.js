import React from 'react';

import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import './videos.css';



const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

function VideoComponent() {
  return (
    <div className='youPage'>
        <center>
        <img className='yimg' src="https://play-lh.googleusercontent.com/lMoItBgdPPVDJsNOVtP26EKHePkwBg-PkuY9NOrc-fumRtTFP4XhpUNk_22syN4Datc"/>
        <h4 className='heading2'>Welcome to the Videos Page</h4></center>
        <Box>
         <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
  <Grid item xs={6} sm={12} md={6}> 
    <Item>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/3E3-I9tnvPg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
        
            </iframe>
            </Item>
  </Grid>
  <Grid item xs={6} sm={12} md={6}>
    <Item>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/MBsZ9q_guTg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
            </iframe>  </Item>
  </Grid><Grid item xs={6} sm={12}  md={6}>
    <Item>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/byUbhCt952U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>

            </iframe>  </Item>
  </Grid><Grid item xs={6} sm={12} md={6}>
    <Item>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/x6Q7c9RyMzk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>

            </iframe>
            </Item>
  </Grid><Grid item  xs={6} sm={12} md={6}>
    <Item>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/VkmXX_jKmZw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>

            </iframe>
            </Item>
  </Grid><Grid item xs={6} md={6}>
    <Item>
<iframe width="560" height="315" src="https://www.youtube.com/embed/IV0V51EzKY0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            
</Item>
  </Grid>

  <Grid item xs={6} md={6}>
    <Item>
  <iframe width="560" height="315" src="https://www.youtube.com/embed/6_TavfvdMSc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>

  </iframe>
  </Item>
  </Grid>
  <Grid item xs={6} md={6}>
    <Item>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/Px5nHPQZ-1o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

    </Item>
  </Grid>
  <Grid item xs={6} md={6}>
    <Item>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/0H5u09nd_4w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

    </Item>
  </Grid>
  <Grid item xs={6} md={6}>
    <Item>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/qkD5juVLDgM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

    </Item>
  </Grid>
  <Grid item xs={6} md={6}>
    <Item>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/ezzKQOZu7fg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

    </Item>
  </Grid>
  <Grid item xs={6} md={6}>
    <Item>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/h1WdbfoHeac" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

    </Item>
  </Grid>
  <Grid item xs={6} md={6}>
    <Item>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/_Nq2m5LRQ3g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

    </Item>
  </Grid>
  <Grid item xs={6} md={6}>
    <Item>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/4ufFYeHm0YI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </Item>
  </Grid>
  <Grid item xs={6} md={6}>
    <Item>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/Ub7a_ZRtqcQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </Item>
  </Grid>
  <Grid item xs={6} md={6}>
    <Item>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/fdEzDqiSC3U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </Item>
  </Grid>
  <Grid item xs={6} md={6}>
    <Item>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/8xVtZGFaOCY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </Item>
  </Grid>
  <Grid item xs={6} md={6}>
    <Item>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/-1JplOVKt7U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </Item>
  </Grid>
  <Grid item xs={6} md={6}>
    <Item>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/-1JplOVKt7U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </Item>
  </Grid>
  <Grid item xs={6} md={6}>
    <Item>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/6DP7cMN99zQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </Item>
  </Grid>
  <Grid item xs={6} md={6}>
    <Item>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/ZQuQ-wHuPlg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </Item>
  </Grid>
  <Grid item xs={6} md={6}>
    <Item>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/DBTOvHKRgZ4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </Item>
  </Grid>
  <Grid item xs={6} md={6}>
    <Item>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/TMdVO8IYG5M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </Item>
  </Grid>
  <Grid item xs={6} md={6}>
    <Item>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/C5X_D_lKlwI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </Item>
  </Grid>
      </Grid>
    </Box>
    </div>
  );
}

export default VideoComponent;
