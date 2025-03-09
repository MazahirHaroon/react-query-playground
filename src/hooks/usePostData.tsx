import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import { addPost, fetchPost } from '@api/post';

import { PostDataType, SearchKeyWordType } from '@interfaces/post';

export const usePostData = (
  searchKeyword: SearchKeyWordType,
  newPost: PostDataType
) => {
  return useQuery({
    queryKey: ['posts', { searchKeyword }],
    queryFn: () => fetchPost(searchKeyword, newPost),
    /* 
    newPost is passed above to append the data in the returned API. 
    In a scenario where post works, this is not needed.
    */
    refetchOnWindowFocus: false,
  });
};

export const usePostDataMutate = (newPost: PostDataType) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: () => addPost(newPost),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['posts'] });
    },
  });
};
