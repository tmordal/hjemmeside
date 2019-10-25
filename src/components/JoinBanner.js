import React from 'react';
import styled from 'styled-components';
import {
  COLOR_CLAVE_LIGHTBLUE,
  COLOR_CLAVE_BLAA,
  COLOR_CLAVE_SKIN,
} from '../colors';
import Layout, { onDesktop } from './Layout';
import CtaLink from './CtaLink';
import { Link } from 'gatsby';
import { Gallery, GalleryImage } from './Gallery';

const PaddedLayout = styled(Layout)`
  padding-top: 2em;

  ${onDesktop(`
    padding-top: 3em;
  `)}
`;

const JoinContent = () => (
  <div>
    <h3>Bli en av oss</h3>
    <BannerP>
      Vi mener det er godt og litt annerledes å være en Claver. Vi føler en
      tilhørlighet både til selskapet og til kollegaene våre. Fordi vi er
      ansatteid er det også vi som bestemmer.
    </BannerP>
    <PositionUl>
      <PositionLink to="/">Senior UX designer</PositionLink>
      <PositionLink to="/">Senior utvikler</PositionLink>
      <PositionLink to="/">UX deltid</PositionLink>
      <PositionLink to="/">Utvikler sommerjobb</PositionLink>
    </PositionUl>
    <ContactLinkContainer>
      <ContactLink to="/">Ta kontakt for en prat!</ContactLink>
    </ContactLinkContainer>
  </div>
);

const JoinBanner = () => (
  <PaddedLayout
    backgroundColor={COLOR_CLAVE_LIGHTBLUE}
    asideContent={
      <Gallery>
        <GalleryImage
          alt="Anniken"
          width="406"
          height="206"
          src="https://placehold.it/406x266/000/fff"
        />
        <GalleryImage
          alt="Karine"
          width="192"
          height="261"
          src="https://placehold.it/192x261/aa3/fff"
        />
      </Gallery>
    }
  >
    <JoinContent />
  </PaddedLayout>
);

const BORDER_COLOR = COLOR_CLAVE_SKIN;

const ContactLinkContainer = styled.div`
  margin-bottom: 3em;

  ${onDesktop(`
    margin-bottom: 0;
  `)}
`;

const ContactLink = styled(CtaLink)`
  border-bottom-color: ${BORDER_COLOR};
`;

const sectionSpacing = `
&:not(:last-child) {
  margin-bottom: 3em;
}`;

const BannerP = styled.p`
  ${sectionSpacing}
`;

const PositionUl = styled.ul`
  list-style-type: none;
  margin-left: 0;

  ${sectionSpacing}
`;

const PositionLink = props => (
  <PositionLi>
    <PositionLinkInner {...props} />
  </PositionLi>
);

const PositionLi = styled.li`
  border-top: 1px solid ${BORDER_COLOR};
  margin: 0;

  &:last-child {
    border-bottom: 1px solid ${BORDER_COLOR};
  }
`;

const PositionLinkInner = styled(Link)`
  padding: 0.75em 0;
  display: block;
  border: none;
  text-decoration: none;

  &,
  &:visited {
    color: ${COLOR_CLAVE_BLAA};
  }
`;

export default JoinBanner;
