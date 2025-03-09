import { usePostDataMutate } from 'src/hooks/usePostData';

import { OptionsPropsType } from '@interfaces/post';

import './index.css';
import { CustomInput, PrimaryButton } from 'src/components/Form';

const Options = ({ newPost, setNewPost }: OptionsPropsType) => {
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
        <h2 className='home-secondary-title'>Add New Post</h2>
        <CustomInput
          label={'Enter Title'}
          type='text'
          placeholder='Enter Post Title'
          name='title'
          value={newPost?.title}
          onChange={handleInput}
        />
        <CustomInput
          label={'Enter Body'}
          type='text'
          placeholder='Enter Post Body'
          name='body'
          value={newPost?.body}
          onChange={handleInput}
        />
        <PrimaryButton
          content={'Add Post'}
          onClick={(e) => {
            e.preventDefault();
            addPostMutation();
          }}
        />
      </form>
    </div>
  );
};

export default Options;
