import './index.css';

const Item = ({ posts }) =>
  posts?.map((post) => (
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
  ));

export default Item;
