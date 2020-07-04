import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import Cep from '../components/cep'
import utilStyles from '../styles/utils.module.css'
import CepApi from '../lib/cep'
import cepInputStyles from '../styles/cepInput.module.css'

export default function Home({ address }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <h1 className={utilStyles.heading2Xl}>CEP Researcher</h1>
      <form action="/" method="get">
        <input
          type="text"
          placeholder="Eg: 06243170"
          name="cep"
          id="cep"
          label="cep"
          className={cepInputStyles.cepInput}
          minLength="8"
          maxLength="8"
          pattern="^[0-9]*$"
          required
        />
        <input
          type="submit"
          value="Search Address by CEP"
          className={cepInputStyles.cepSearchSubmit}
        />
      </form>
      <Cep address={address} home></Cep>
    </Layout>
  )
}

// STATIC GENERATION: Página gerada no momento do build, ou seja, 1 vez só.
// Contra: Não permite interação do usuário
// export async function getStaticProps() {
//   const cepApi = new CepApi()
//   const address = await cepApi.getAddressByCep('06243170')
//   return {
//     props: {
//       address
//     }
//   }
// }

// SERVER SIDE RENDERING: Página gerada pelo servidor a cada request, permitindo interação do usuário e bem atrativas pra robots
// Contra: Mais devagar que static generation
export async function getServerSideProps(context) {
  const cepApi = new CepApi()
  const address = await cepApi.getAddressByCep(context.query.cep)

  return {
    props: {
      address
    }
  }
}
