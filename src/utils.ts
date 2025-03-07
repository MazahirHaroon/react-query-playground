import { SearchKeyWord } from '@interfaces/post';

export const filterQuery = (query: SearchKeyWord) =>
  Object.fromEntries(Object.entries(query).filter(([_, value]) => value));
