import React from 'react';
import { ProductResponse } from '@/models/response/productResponse';
import { Button, Card, CardContent, Typography } from '@mui/material';
import Image from 'next/image';
import { twclsx } from '@/utils/twclsx';

interface ProductCardProps {
  product: ProductResponse;
}

function ProductCard({ product }: ProductCardProps) {
  return (
    <Card>
      <CardContent>
        <Image
          className={twclsx('w-full', 'mb-4')}
          width={512}
          height={512}
          src={product.images[0]}
          alt={product.title}
        />
        <Typography
          variant='h5'
          component='h2'
          mb={2}
        >
          {product.title}
        </Typography>
        <Typography
          variant='body1'
          mb={2}
          height={48}
          className={twclsx('line-clamp-2')}
        >
          {product.description}
        </Typography>
        <Typography
          variant='h6'
          component='h3'
        >
          {product.category.name}
        </Typography>
        <Typography
          variant='h6'
          component='h3'
        >
          ${product.price.toLocaleString()}
        </Typography>
      </CardContent>
      <footer
        className={twclsx('flex', 'justify-stretch', 'items-center', 'gap-2')}
      >
        <Button
          size='large'
          fullWidth
        >
          ADD TO CART
        </Button>
        <Button
          size='large'
          fullWidth
        >
          PURCHASE
        </Button>
      </footer>
    </Card>
  );
}

export default ProductCard;
