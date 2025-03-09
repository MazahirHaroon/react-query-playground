export interface PostDataType {
  userId?: number | string;
  id?: number;
  title?: string;
  body?: string;
}
export interface SearchKeyWordType {
  userId: string;
}
export interface OptionsPropsType {
  newPost: PostDataType;
  setNewPost: (arg0: PostDataType) => void;
}
export interface ContentPropsType {
  newPost: PostDataType;
  searchKeyword: SearchKeyWordType;
  setSearchKeyword: (arg0: SearchKeyWordType) => void;
}
