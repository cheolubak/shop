import React from 'react';
import { PageResponse } from '@/models/response/pageResponse';
import { ProductResponse } from '@/models/response/productResponse';
import { Card, CardContent } from '@mui/material';
import Image from 'next/image';

interface ProductListProps {
  products: PageResponse<ProductResponse>;
}

function ProductList({ products }: ProductListProps) {
  return (
    <main>
      <ul>
        {products.content.map((product) => (
          <li key={product.id}>
            <Card>
              <CardContent>
                <Image
                  width={512}
                  height={512}
                  src={product.images[0].replace(/(\[\])/g, '')}
                  alt={product.title}
                />
              </CardContent>
            </Card>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default ProductList;
