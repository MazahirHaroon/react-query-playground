import { filterQuery, isEmpty, getPostID } from '@utils';
import { PostData, SearchKeyWord } from '@interfaces/post';
import { POST_URL, USER_ID } from '@constants/post';

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

export const addPost = async (post: PostData | object): Promise<void> => {
  try {
    const newPost = {
      userId: USER_ID,
      id: getPostID(),
      title: 'Newly Added Title',
      body: 'This is newly added content body',
      ...post,
    };
    const response = await fetch(POST_URL, {
      method: 'POST',
      body: JSON.stringify(newPost),
    });
    if (!response.ok) {
      throw new Error('Something went wrong');
    }
  } catch (error) {
    console.error('Something went wrong', error);
  }
};
