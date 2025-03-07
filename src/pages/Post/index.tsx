import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';

import { fetchPost } from '@api/post';

import { SearchKeyWord } from '@interfaces/post';

import './index.css';

const Post = () => {
  const [searchKeyword, setSearchKeyword] = useState<SearchKeyWord>({
    userId: '',
  });

  const { isPending, data: posts } = useQuery({
    queryKey: [['posts']],
    queryFn: () => fetchPost(),
  });

  return (
    <div className='home-container'>
      <div className='content'>
        <h1 className='home-title'>Post Management</h1>
        <p className='home-tertiary-title'>
          Manage and search posts efficiently
        </p>
        <div className='form-container'>
          <div className='input-container'>
            <label className='label' htmlFor='search'>
              Search
            </label>
            <input
              className='input-field'
              type='number'
              placeholder='Enter User ID'
              value={searchKeyword.userId}
              onChange={(e) => setSearchKeyword({ userId: e.target.value })}
            />
          </div>
          <div className='input-container'>
            <label className='label' htmlFor='search'>
              Add Post
            </label>
            <input
              className='input-field'
              type='text'
              placeholder='Enter Post Title'
            />
          </div>
          <button className='primary-button'>Add Post</button>
        </div>
        <h2 className='home-secondary-title'>Posts</h2>
        <div className='post-list'>
          {isPending ? (
            <h2 className='home-tertiary-title'>Loading...</h2>
          ) : (
            posts?.map((post) => (
              <div className='post-item'>
                <h3>{post.title}</h3>
                <p>
                  <strong>ID:</strong> {post.id}
                </p>
                <p>
                  <strong>User ID:</strong> {post.userId}
                </p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Post;
