import './index.css';

const Post = () => {
  return (
    <div className='home-container'>
      <div className='content'>
        <h1 className='home-title'>Post Management</h1>
        <p className='home-subtitle'>Manage and search posts efficiently</p>
        <div className='form-container'>
          <div className='input-container'>
            <label className='label' htmlFor='search'>
              Search
            </label>
            <input
              className='input-field'
              type='number'
              placeholder='Enter User ID'
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
        <div className='post-list'>
          <div className='post-item'>
            <h3>{'Post Title'}</h3>
            <p>
              <strong>ID:</strong> {'Post ID'}
            </p>
            <p>
              <strong>User ID:</strong> {'Post Title'}
            </p>
          </div>
          <div className='post-item'>
            <h3>{'Post Title'}</h3>
            <p>
              <strong>ID:</strong> {'Post ID'}
            </p>
            <p>
              <strong>User ID:</strong> {'Post Title'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
