import { usePostData } from 'src/hooks/usePostData';

import { ContentPropsType } from '@interfaces/post';

import './index.css';

const Content = ({ newPost, searchKeyword }: ContentPropsType) => {
  const { isPending, data: posts } = usePostData(searchKeyword, newPost);

  return (
    <div className='content'>
      <h2 className='home-secondary-title'>Posts</h2>
      <div className='post-list'>
        {isPending ? (
          <div className='loading-container'>
            <h2>Loading...</h2>
          </div>
        ) : (
          posts?.map((post) => (
            <div key={post.id} className='post-item'>
              <p className='post-ids'>
                <strong>ID:</strong> {post.id}
              </p>
              <p className='post-ids'>
                <strong>User ID:</strong> {post.userId}
              </p>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
              <hr />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Content;
