import { useQuery } from '@tanstack/react-query'
import { getAllCollections , deleteCollection , createCollection , getCollection , updateCollection} from './collectionReq'
import {  useMutation, useQueryClient } from '@tanstack/react-query';

export const useGetAllCollections = () => {
  return useQuery({
    queryKey: ['collections'],
    queryFn: getAllCollections,
  })
}

export const useGetCollection = (id)=>{
  return useQuery(
    {
      queryKey : ['collection' , id],
      queryFn : ()=>getCollection(id)
    }
  )
}


export const useDeleteCollection = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id) => deleteCollection(id),
    onSuccess: () => {
      queryClient.invalidateQueries('collections');
    },
  });
};


export const useCreateCollection = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createCollection,
    onSuccess: () => {
      queryClient.invalidateQueries('collections');
    },
  });
};

