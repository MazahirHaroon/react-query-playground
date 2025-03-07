import { PostData } from '@interfaces/post';
import { POST_URL } from '@constants/post';

export const fetchPost = async (query = {}): Promise<PostData[]> => {
  try {
    const response = await fetch(`${POST_URL}?${query}`);
    if (!response.ok) {
      throw new Error('Something went wrong!');
    }
    return (await response.json()) as PostData[];
  } catch (error) {
    console.error('Something went wrong!', error);
    return [];
  }
};

export const addPost = async (post: PostData): Promise<void> => {
  try {
    const response = await fetch(POST_URL, {
      method: 'POST',
      body: JSON.stringify(post),
    });
    if (!response.ok) {
      throw new Error('Something went wrong');
    }
  } catch (error) {
    console.error('Something went wrong', error);
  }
};
