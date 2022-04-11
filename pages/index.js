import Head from 'next/head'
import Image from 'next/image'
import ArticleList from '../components/ArticleList'
import Header from '../components/Header'
import styles from '../styles/Home.module.css'

export default function Home({articles}) {


  return (
    <div className={styles.container}>
      <Head>
        <title>Blog</title>
        <meta name="description" content="Blog website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <ArticleList articles={articles} />

    </div>
  )
}

export const getStaticProps = async () => {

  
  const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=6");
  const articles = await res.json();

  return {
    props: {
      articles
    }
  }
}
