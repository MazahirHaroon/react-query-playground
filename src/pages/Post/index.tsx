import { useState } from 'react';

import Options from './options';
import Content from './content';

import { SearchKeyWordType, PostDataType } from '@interfaces/post';

import './index.css';

const Post = () => {
  const [newPost, setNewPost] = useState<PostDataType | object>({});
  const [searchKeyword, setSearchKeyword] = useState<SearchKeyWordType>({
    userId: '',
  });
  return (
    <div className='home-container'>
      <Options
        searchKeyword={searchKeyword}
        setSearchKeyword={setSearchKeyword}
        newPost={newPost}
        setNewPost={setNewPost}
      />
      <Content newPost={newPost} searchKeyword={searchKeyword} />
    </div>
  );
};

export default Post;
