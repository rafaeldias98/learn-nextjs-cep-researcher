import Head from 'next/head';
import Link from 'next/link';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';

const name = 'Rafa Dias';
export const siteTitle = 'CEP Researcher';

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel='icon' href='/favicon.ico' />
        <meta name='description' content='CEP Researcher with NextJS' />
        <meta
          property='og:image'
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name='og:title' content={siteTitle} />
        <meta name='twitter:card' content='summary_large_image' />
      </Head>
      <main>{children}</main>
      <footer className={styles.footer}>
        <img
          src='/images/profile.jpeg'
          className={`${styles.footerImage} ${utilStyles.borderCircle}`}
          alt={name}
        />
        <h1 className={utilStyles.headingMd}>Made by: {name}</h1>
      </footer>
      {!home && (
        <div className={styles.backToHome}>
          <Link href='/'>
            <a id='backToHome'>Back to home</a>
          </Link>
        </div>
      )}
    </div>
  );
}
