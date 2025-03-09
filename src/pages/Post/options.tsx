import { usePostDataMutate } from 'src/hooks/usePostData';

import { OptionsPropsType } from '@interfaces/post';

import './index.css';

const Options = ({
  searchKeyword,
  setSearchKeyword,
  newPost,
  setNewPost,
}: OptionsPropsType) => {
  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewPost({
      ...newPost,
      [event.target.name]: event.target.value,
    });
  };

  const { mutateAsync: addPostMutation } = usePostDataMutate(newPost);

  return (
    <div className='options'>
      <h1 className='home-title'>Post Management</h1>
      <p className='home-tertiary-title'>Manage and search posts efficiently</p>
      <form className='form-container'>
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
      </form>
      <form className='form-container'>
        <h2>Add New Post</h2>
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
        <button
          onClick={(e) => {
            e.preventDefault();
            addPostMutation();
          }}
          className='primary-button'
        >
          Add Post
        </button>
      </form>
    </div>
  );
};

export default Options;
