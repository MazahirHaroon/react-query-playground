import { filterQuery, isEmpty } from '@utils';
import { PostData, SearchKeyWord } from '@interfaces/post';
import { POST_URL } from '@constants/post';

export const fetchPost = async (
  query: SearchKeyWord,
  newPost: PostData | object = {}
): Promise<PostData[] | object> => {
  try {
    const filteredQuery = filterQuery(query);
    const searchParams = new URLSearchParams(filteredQuery).toString();
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const response = await fetch(`${POST_URL}?${searchParams}`);
    if (!response.ok) {
      throw new Error('Something went wrong!');
    }
    return isEmpty(newPost)
      ? ((await response.json()) as PostData[])
      : [newPost, ...((await response.json()) as PostData[])];
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
