import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header/Header'
import Nav from '../components/Nav'
import request from '@/utils/request'
import Result from '../components/Result'
import styles from '../styles/Home.module.css'
import {useRouter} from 'next/router'
export default function Home(props) {
  console.log(props)
  const router = useRouter()
  console.log(router.query)
  return (
    <div>
      <Head>
        <title>Hulu 2.0</title>
      </Head>
      <Header />
      <Nav />
      <Result />
    </div>
  )
}

export async function getServerSideProps(context) {
  const genre = context.query.genre;
  console.log(context)
  const requests = await fetch(`https://api.themoviedb.org/3${request[genre]?.url || request.fetchTrending.url}`)
  const result = await requests.json()
  console.log(request)
  return {
    props: {
      results: result
    }
  }
}
