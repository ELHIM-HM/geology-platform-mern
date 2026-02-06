import { useQuery } from '@tanstack/react-query'
import { getEvents } from './eventsReq'

export const useGetEvents = () => {
  return useQuery({
    queryKey: ['events'],
    queryFn: getEvents,
  })
}


