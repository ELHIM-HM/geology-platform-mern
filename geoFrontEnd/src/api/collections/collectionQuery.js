import {
  useQuery,
  useMutation,
  useQueryClient,
} from '@tanstack/react-query'
import {
  getAllCollections,
  getFilteredCollections,
} from './collectionReq'

export const useGetAllCollections = () => {
  return useQuery({
    queryKey: ['collections'],
    queryFn: getAllCollections,
  })
}

export const useGetFilteredCollections = (filterParams) => {
  const queryResult = useQuery({
    queryKey: ['filteredCollections', filterParams],
    queryFn: () => getFilteredCollections(filterParams),
    enabled: !!filterParams, // Only run this query if filterParams is not null
  })

  return queryResult
}

// export const useApplyFilter = () => {
//   const queryClient = useQueryClient()

//   return useMutation(

//     {
//       mutationFn : (filterParams)=>getFilteredCollections(filterParams),
//       onSettled : async(_,error)=>{
//         console.log("setteled")
//         if(error){
//           console.log(error)
//         }else{
//           await queryClient.invalidateQueries({queryKey : ['filteredCollections']})
//         }
//       }
//     },
//   )
// }
