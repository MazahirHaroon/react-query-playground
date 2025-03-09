import { usePostData } from 'src/hooks/usePostData';

import { List as PostList, Item as PostItem } from '../../components/Post';
import { Loading, ContentContainer } from '../../components';

import { ContentPropsType } from '@interfaces/post';

import './index.css';

const Content = ({ newPost, searchKeyword }: ContentPropsType) => {
  const { isPending, data: posts } = usePostData(searchKeyword, newPost);

  return (
    <ContentContainer title={'Posts'}>
      <PostList>
        {isPending ? <Loading /> : <PostItem posts={posts} />}
      </PostList>
    </ContentContainer>
  );
};

export default Content;
