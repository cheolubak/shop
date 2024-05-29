import React from 'react';
import { PageResponse } from '@/models/response/pageResponse';
import { ProductResponse } from '@/models/response/productResponse';
import { twclsx } from '@/utils/twclsx';
import Grid2 from '@mui/material/Unstable_Grid2';
import ProductCard from '@/components/ProductList/ProductCard';

interface ProductListProps {
  products: PageResponse<ProductResponse>;
}

function ProductList({ products }: ProductListProps) {
  return (
    <main className={twclsx('m-6')}>
      <Grid2
        container
        spacing={{ xs: 2, md: 3, lg: 4, xl: 6 }}
        columns={{ xs: 1, md: 2, lg: 4, xl: 5 }}
      >
        {products.content.map((product) => (
          <Grid2
            key={product.id}
            xs={1}
          >
            <ProductCard product={product} />
          </Grid2>
        ))}
      </Grid2>
    </main>
  );
}

export default ProductList;
