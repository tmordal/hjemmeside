import React from 'react';
import styled from 'styled-components';

import Layout from '../components/Layout';
import Footer from '../components/Footer';
import SEO from '../components/Seo';
import Header from '../components/Header';
import PageHeader from '../components/PageHeader';
import { useStaticQuery, graphql } from 'gatsby';
import { COLOR_CLAVE_PEACH } from '../colors';
import { onDesktop, onMobile } from '../components/Breakpoints';

const PADDING_TOP_DESKTOP = '6rem';
const PADDING_TOP_MOBILE = '4.75rem';

const HvemViEr = props => {
  const images = useStaticQuery(graphql`
    query {
      header: file(relativePath: { eq: "190920_Clave_lowres_11.jpg" }) {
        ...fluidImage
      }
    }
  `);

  return (
    <>
      <main>
        <Header {...props} />
        <SEO title="Se hvem vi er" description="" />
        <TitleWrapper>
          <PageHeader
            title="Se hvem vi er"
            imageProps={{
              fluidImage: images.header,
              width: 1227,
              height: 728,
            }}
          />
        </TitleWrapper>
        <Layout>
          <h2>
            Vi mener at det er godt og litt annerledes å være en Claver. Vi
            føler en tilhørighet både til selskapet og til kollegaene våre.
          </h2>

          <p>
            Det er flest hverdager i året, og i denne hverdagen setter vi
            trivsel og trygghet høyt. Vi har det morsomt på jobb. Tverrfaglig
            samarbeid gjør oss sterke i møtet med faglige utfordringer. Lagånd,
            positivitet og omsorg for kollegaene våre gjør oss trygge på
            hverandre. Da kan vi lage de aller beste løsningene.
          </p>
          <p>
            Det er smart å ta avgjørelser sammen. Åpenhet gjør at vi vet hva som
            rører seg i selskapet, og da er det enkelt å påvirke hvilken retning
            vi skal gå. Clave er eid av oss ansatte, og derfor er det også vi
            som bestemmer.
          </p>

          <p>
            Sammen reiser vi ut i verden på jakt etter inspirasjon. Faglig
            utvikling er viktig for oss - både som team og for hver enkelt. Vi
            har innedager vi fyller med prosjekter og hobbyer. Sammen skaper vi
            et kreativt felleskap hvor vi får mulighet til å ta i bruk mange -
            og kanskje nye sider - av oss selv.
          </p>
          <p>
            Teknologi og brukeropplevelse er det beste vi vet. Når vi lærer nye
            ting, inspireres av hverandre og føler engasjement skaper vi verdi
            både for kundene våre og oss selv.
          </p>
        </Layout>
      </main>
      <Footer />
    </>
  );
};

const TitleWrapper = styled.div`
  background-color: ${COLOR_CLAVE_PEACH};
  ${onDesktop(`
  padding-top: ${PADDING_TOP_DESKTOP};
  
  `)}
  ${onMobile(`
  padding-top: ${PADDING_TOP_MOBILE};
  `)}
`;

export default HvemViEr;
