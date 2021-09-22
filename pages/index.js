import Head from 'next/head'
import AppLayout from '../components/AppLayout';
import Header from '../components/Header';
import { appName } from '../libs/constant';
export default function Home() {
  return (
    <>
      <Head>
        <title>Resume {appName}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
     <AppLayout >
       <div className="p-5">
       <Header/>
       </div>
     </AppLayout>
    </>
  )
}
