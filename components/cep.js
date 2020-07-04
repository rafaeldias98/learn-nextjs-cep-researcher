import Link from 'next/link';
import utilStyles from '../styles/utils.module.css';

export default function Cep({ address, home }) {
  return (
    <>
      {address && (
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
          <h2 className={utilStyles.headingLg}>Address found:</h2>
          <ul className={utilStyles.list}>
            <li className={utilStyles.listItem}>
              CEP:{' '}
              {home ? (
                <Link href='/ceps/[cep]' as={`/ceps/${address.cep}`}>
                  <a id='cepFound'>{address.cep}</a>
                </Link>
              ) : (
                <span>{address.cep}</span>
              )}
              <br />
              {address.city} - {address.state}
              <br />
              {address.street}, {address.neighborhood}
            </li>
          </ul>
        </section>
      )}
    </>
  );
}
