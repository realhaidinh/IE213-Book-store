import React from 'react';
import { Box, Card, CardContent, CardMedia, Rating, Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { AddShoppingCart } from '@mui/icons-material';
import IconButton from '@mui/material/IconButton';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const Product = ({ product }) => {
  const [value, setValue] = React.useState(2);


  return (
    <Card 
      className='product-card'  
      sx={{ 
        position: 'relative',
        transition: 'transform 0.2s ease-in-out',
        '&:hover': { 
          boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
          transform: 'scale(1.05)'
        } 
      }}
    >
      <Box width="174px" margin="0 auto" height="174px" marginTop="24px">
        <Link to={`/product/${product._id}`} >
          <CardMedia
            sx={{ padding: "16px", height: '174px' }}
            component="img"
            width="100%"
            image="https://cdn0.fahasa.com/media/catalog/product/8/9/8935246938126_1.jpg"
            alt="Product"
          />
        </Link >
      </Box>

      <CardContent>
        <Link to={`/product/${product._id}`}>
          <Typography className='product-name' gutterBottom variant="h6" fontSize={16}>
            {product.name}
          </Typography>
        </Link>

        <Stack direction="row" className='product-special-price'>
          <Typography className='price' variant="h6" mr={3} fontSize={4}>
            {product.salePrice}
          </Typography>

          <Typography className='discount-percent' variant='h6' fontSize={14}>
            {(product.salePrice/product.price)}
          </Typography>
        </Stack>

        <Typography className='product-old-price' variant="body2">
          {product.price}
        </Typography>

        <Stack direction="row" className='ratting-sold'>
          {product.ratings && product.ratings > 0 && (
            <Rating
              className='rating-custom'
              size="small"
              name="simple-controlled"
              value={product.ratings}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
            />
          )}

          <Box component="div" className='sold-container'>
            <Typography component="div" className='sold-qty-num' fontSize="12px">
              <Typography component="span" fontSize="13px" mr={0.5}>
                | Đã bán
              </Typography>
              {product.soldQty}
            </Typography>
          </Box>
        </Stack>

        {/* StackButton sử dụng position absolute */}
        <Stack 
          direction="row" 
          spacing={4} 
          className='stack-button'
          
        >
          <IconButton color="primary" aria-label="add to wishlist cart">
            <FavoriteBorderIcon />
          </IconButton>

          <IconButton color="primary" aria-label="add to shopping cart">
            <AddShoppingCart />
          </IconButton>
        </Stack>
      </CardContent>
    </Card>
  )
}

export default Product;
