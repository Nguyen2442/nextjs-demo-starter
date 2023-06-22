import { useEffect } from 'react'

import Head from 'next/head'

import testApi from '../service/testApi'
import Header from '../components/header/header'

export default function Home() {
  useEffect(() => {
    const fetch = async () => {
      try {
        const data = await testApi.get()
        console.log({ data })
      } catch (error) {
        console.log({ error })
      }
    }
    fetch()
  }, [])

  return (
    <div>
      <Head>
        <title>Home Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>

      
    </div>
  )
}
