import { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";

import { GET_REPOSITORIES } from '../graphql/queries'

export const useGraphQl = () => {
  const {data, loading, error} = useQuery(GET_REPOSITORIES,{fetchPolicy: 'cache-and-network',})
  
  if (error) {
    console.log('gql error:', error)
    const errMessage = 'error in loadgin data' + error.message;
    return { loading, repositories: [], error: errMessage }
  }
  
  console.log('qql fetched data: ', data)
  const repositories = data?.repositories?.edges?.map(x => x.node)
  return { loading, repositories, error: null }
};

export const useRestApi = () => {
  const [repositories, setRepositories] = useState()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const fetchRepo =  () => {
    setLoading(true)
    const URL = 'http://10.0.0.14:5000/api/repositories'
    fetch(URL)
      .then(resp => resp.json())
      .then(json => {
        console.log('fetch output: ', json)
        const repositories = json.edges.map(({ node }) => node)
        setLoading(false)
        setRepositories(repositories)
      })
      .catch(error => {
        setLoading(false)
        setError(`network error: ${error.message}`)
      })
  }

  useEffect(() => {
    fetchRepo()
  }, [])

  return { loading, repositories, error, refetch: fetchRepo }
};

const useRepositories = useGraphQl
export default useRepositories;

/*
  const fetchRepo = async () => {
    setLoading(true)
    const URL = 'http://10.0.0.14:5000/api/repositories'

    try {
      const json = await fetch(URL)
      .then( resp => { console.log(300, resp); return resp.json()})

    console.log('fetch output: ', json )
    const repositories = json.edges.map( ({node}) => node)

    setLoading(false)
    setRepositories(repositories)
    } catch (error) {
      console.log('network error:', error.message)
      setLoading(false)
      setError(`network error: ${error.message}`)
    }
  }
*/