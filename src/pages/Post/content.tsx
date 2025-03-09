import { usePostData } from 'src/hooks/usePostData';

import { CustomInput } from '@form-components';
import { List as PostList } from '@post-components';
import { Loading } from '@components';

import { ContentPropsType } from '@interfaces/post';

import './index.css';

const Content = ({
  newPost,
  searchKeyword,
  setSearchKeyword,
}: ContentPropsType) => {
  const { isPending, data: posts } = usePostData(searchKeyword, newPost);

  return (
    <div className='content'>
      <div className='top-bar'>
        <h2 className='home-secondary-title'>Posts</h2>
        <CustomInput
          type='number'
          placeholder='Search using User ID'
          value={searchKeyword.userId}
          name='search'
          customContainerStyle={{
            margin: 0,
          }}
          onChange={(e) => setSearchKeyword({ userId: e.target.value })}
        />
      </div>
      <div className='content-area'>
        {isPending ? (
          <Loading />
        ) : posts && posts?.length > 0 ? (
          <PostList posts={posts} />
        ) : (
          <h2 className='home-secondary-title'>{`Sorry, we don't have any post with for the ID: ${searchKeyword.userId}`}</h2>
        )}
      </div>
    </div>
  );
};

export default Content;
