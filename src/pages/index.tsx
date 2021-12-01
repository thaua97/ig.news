import { GetStaticProps } from 'next'
import Head from 'next/head';
import Image from 'next/Image';

import { SubscribeButton } from '../components/SubscribeButton';

// services
import { stripe } from '../services/stripe';
import { PriceFormatter } from '../services/formater';

// styles
import styles from './home.module.scss'
import GirlCoding from '../../public/images/avatar.svg';

// Interfaces
interface HomeProps { 
  product: {
    price_id: string,
    amount: string,
  }
}

export default function Home({ product }: HomeProps) {
  return (
    <>
      <Head>
        <title>Home | ig.news</title>
      </Head>
      
      <main className={styles.content}>
        <section className={styles.hero}>
          <span>👏  Hey, welcome</span>
          <h1>News about the <span>React</span> world</h1>
          <p>Get acess to all publications <br />
            <span> for {product.amount} mounth</span>
          </p>
          <SubscribeButton priceId={product.price_id} />
        </section>
        <Image 
          src={GirlCoding} 
          alt="girl coding"
        />
      </main>
    </>
  )
}

// execute in server side
export const getStaticProps: GetStaticProps = async () => {
  const price = await stripe.prices.retrieve('price_1K1fhQDU5oRTWWc4YnKtaAPy', {
    expand: ['product'],
  });  
  
  const product =  {
    price_id: price.id,
    amount: PriceFormatter(price.unit_amount / 100),
  };
  return {
    props: {
      product,
    },
    revalidate: 60 * 60 * 24 // 24hrs
  }
}