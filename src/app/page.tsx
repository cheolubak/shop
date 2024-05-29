import { PageResponse } from '@/models/response/pageResponse';
import { ProductResponse } from '@/models/response/productResponse';
import { fetchApis } from '@/utils/fetchApi';
import ProductList from '@/components/ProductList/ProductList';

export default async function Home() {
  let products: PageResponse<ProductResponse> | undefined;

  try {
    products =
      await fetchApis.dynamic.get<PageResponse<ProductResponse>>('products');
  } catch (err) {
    products = undefined;
  }

  if (!products) {
    return null;
  }

  return <ProductList products={products} />;
}
