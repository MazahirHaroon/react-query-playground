import { PostDataType } from '@interfaces/post';
import Item from './item';

import './index.css';

interface ListPropType {
  posts: PostDataType[];
}

const List = ({ posts }: ListPropType) => (
  <div className='list'>
    {posts?.map((post: PostDataType) => (
      <Item post={post} />
    ))}
  </div>
);

export default List;
