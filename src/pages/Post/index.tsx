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
    <div className='container'>
      <h1 className='home-title'>
        React Query Playground with JSON Placeholder API
      </h1>
      <div className='home-container'>
        <Options newPost={newPost} setNewPost={setNewPost} />
        <Content
          newPost={newPost}
          searchKeyword={searchKeyword}
          setSearchKeyword={setSearchKeyword}
        />
      </div>
    </div>
  );
};

export default Post;
