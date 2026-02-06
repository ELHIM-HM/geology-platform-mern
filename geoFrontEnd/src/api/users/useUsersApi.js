import {
  useMutation,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query'

import { getUsers, createUser } from './usersData'

export const useUsersApi = () => {
  return useQuery({
    queryKey: ['users'],
    queryFn: getUsers,
  })
}



export function useCreateUser() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (user) => createUser(user),
    
    onMutate: () => {
      console.log('mutate')
    },
    onError: () => {
      console.log('Error')
    },
    onSuccess: () => {
      console.log('success')
    },

    // use to realod the page automaticaly when a new item has been added
    onSettled: async (_, error) => {
      console.log('settled')
      if (error) {
        console.log(error)
      } else {
        await queryClient.invalidateQueries({
          queryKey: ['users'],
        })
      }
    },
  })
}

export const useUpdateUserApi = () => {}
