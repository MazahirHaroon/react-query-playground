import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';

import { fetchPost } from '@api/post';

import { SearchKeyWord, PostData } from '@interfaces/post';

import { USER_ID } from '@constants/post';

import { getPostID } from '@utils';

import './index.css';

const Post = () => {
  const [searchKeyword, setSearchKeyword] = useState<SearchKeyWord>({
    userId: '',
  });
  const [newPost, setNewPost] = useState<PostData>({
    userId: USER_ID,
    id: getPostID(),
    title: '',
    body: '',
  });

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewPost({
      ...newPost,
      [event.target.name]: event.target.value,
    });
  };

  const { isPending, data: posts } = useQuery({
    queryKey: ['posts', { searchKeyword }],
    queryFn: () => fetchPost(searchKeyword),
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
              name='search'
              onChange={(e) => setSearchKeyword({ userId: e.target.value })}
            />
          </div>
          <h2 className='home-secondary-title'>Add New Post</h2>
          <form className='form-container'>
            <div className='input-container'>
              <label className='label' htmlFor='search'>
                Enter Title
              </label>
              <input
                className='input-field'
                type='text'
                placeholder='Enter Post Title'
                name='title'
                onChange={handleInput}
              />
            </div>
            <div className='input-container'>
              <label className='label' htmlFor='search'>
                Enter Body
              </label>
              <input
                className='input-field'
                type='text'
                name='body'
                placeholder='Enter Post Body'
                onChange={handleInput}
              />
            </div>
            <button className='primary-button'>Add Post</button>
          </form>
        </div>
        <h2 className='home-secondary-title'>Posts</h2>
        <div className='post-list'>
          {isPending ? (
            <h2 className='home-tertiary-title'>Loading...</h2>
          ) : (
            posts?.map((post) => (
              <div key={post.id} className='post-item'>
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
