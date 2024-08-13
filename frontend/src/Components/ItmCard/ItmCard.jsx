

import React from 'react';
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';

function ItemCard({ title, img }) {
  return (
    <div style={{display:'flex',justifyContent:'center'}}>
    <Card sx={{ minHeight: '300px', width: 300 }}>
      <CardCover>
        <img
          src={img}
          alt={title}
          loading="lazy"
          style={{ objectFit: 'cover', width: '100%', height: '100%' }}
        />
      </CardCover>
      <CardCover
        sx={{
          background:
            'linear-gradient(to top, rgba(0,0,0,0.2), rgba(0,0,0,0) 0px), linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 0px)',
        }}
      />
      <CardContent sx={{ justifyContent: 'flex-end' }}>
        <Typography level="title-lg" textColor="black">
          {title}
        </Typography>
      </CardContent>
    </Card>
    </div>
  );
}

export default ItemCard;