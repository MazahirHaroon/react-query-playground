import { PostDataType } from '@interfaces/post';

import './index.css';

interface ItemPropType {
  post: PostDataType;
}

const Item = ({ post }: ItemPropType) => (
  <div key={post.id} className='item'>
    <p className='ids'>
      <strong>ID:</strong> {post.id}
    </p>
    <p className='ids'>
      <strong>User ID:</strong> {post.userId}
    </p>
    <h3>{post.title}</h3>
    <p>{post.body}</p>
    <hr />
  </div>
);

export default Item;
