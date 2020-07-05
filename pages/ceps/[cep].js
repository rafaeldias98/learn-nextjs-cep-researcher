import Head from 'next/head';
import Layout from '../../components/layout';
import CepApi from '../../lib/cep';
import Cep from '../../components/cep';

export default function CepPage({ address }) {
  return (
    <Layout>
      <Head>
        <title>{address.cep}</title>
      </Head>
      <Cep address={address} />
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const cepApi = new CepApi();
  const address = await cepApi.getAddressByCep(context.params.cep);

  return {
    props: {
      address,
    },
  };
}

/// ////////////////////////////////////////// ///
/// COMMENTED CODE BELOW IS A TEST TO          ///
/// STATIC GENERATION FOR DYNAMIC NEXTJS ROUTE ///
/// ////////////////////////////////////////// ///
// export async function getStaticProps({ params }) {
//   const cepApi = new CepApi()
//   const address = await cepApi.getAddressByCep(params.cep)

//   return {
//     props: {
//       address
//     }
//   }
// }

// export async function getStaticPaths() {
//   return {
//     paths: [
//       {
//         params: {
//           cep: '06243170'
//         }
//       },
//       {
//         params: {
//           cep: '06460090'
//         }
//       },
//     ],
//     fallback: true
//   }
// }
