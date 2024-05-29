export type PageResponse<T> = {
  hasNext: boolean;
  content: T[];
  nextPage?: number;
};
