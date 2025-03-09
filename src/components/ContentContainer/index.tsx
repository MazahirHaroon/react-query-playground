import './index.css';

const ContentContainer = ({ title, children }) => (
  <div className='content'>
    <h2 className='home-secondary-title'>Posts</h2>
    {children}
  </div>
);

export default ContentContainer;
