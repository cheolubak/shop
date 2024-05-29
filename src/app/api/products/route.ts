import { getRequestParams } from '@/utils/requestHelper';
import { fetchApis } from '@/utils/fetchApi';
import { ProductResponse } from '@/models/response/productResponse';
import { PageResponse } from '@/models/response/pageResponse';
import { ProductListRequest } from '@/models/request/productListRequest';

export async function GET(request: Request) {
  const queryParams = getRequestParams<ProductListRequest>(request);

  const { page = 0, size = 20 } = queryParams;

  const res = await fetchApis.product.get<ProductResponse[]>('products', {
    params: {
      offset: page,
      limit: size,
    },
  });

  const hasNext = res.length >= size;
  const result: PageResponse<ProductResponse> = {
    hasNext,
    content: res.map((x) => ({
      ...x,
      images: x.images.map((img) => {
        console.log(img.replaceAll(/["[\]]/g, ''));
        return img.replaceAll(/["[\]]/g, '');
      }),
    })),
    nextPage: hasNext ? page + 1 : undefined,
  };

  return Response.json(result);
}
