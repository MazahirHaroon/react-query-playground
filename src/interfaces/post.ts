export interface PostDataType {
  userId?: number | string;
  id?: number;
  title?: string;
  body?: string;
}
export interface SearchKeyWordType {
  userId: string;
}
export interface OptionPropsType {
  newPost: PostDataType;
  setNewPost: (arg0: PostDataType) => void;
  searchKeyword: SearchKeyWordType;
  setSearchKeyword: (arg0: SearchKeyWordType) => void;
}
export interface ContentPropsType {
  newPost: PostDataType;
  searchKeyword: SearchKeyWordType;
}
