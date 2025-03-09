import { SearchKeyWord } from '@interfaces/post';

export const filterQuery = (query: SearchKeyWord) =>
  Object.fromEntries(Object.entries(query).filter(([_, value]) => value));

export const getPostID = (): number => Math.floor(Math.random() * 100);

export const isEmpty = (obj: object) => Object.keys(obj).length === 0;
