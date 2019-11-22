import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import Image from './image';
import { Container, onDesktop } from './Layout';

const GalleryImageWithSubtext = ({ image, children, alt }) => {
  const ImageWrapper = styled.div`
    padding-bottom: 60px;
  `;
  return (
    <GalleryImageContainer>
      <ImageWrapper>
        <Image alt={alt} width="833" height="566" fluidImage={image} />
      </ImageWrapper>
      {children}
    </GalleryImageContainer>
  );
};

export const ProjectGallery = ({
  leftImg,
  rightImg,
  methodology,
  technology,
  finalText,
  imageSpacing = 300,
}) => {
  const LeftTextWrapper = styled.div`
    ${onDesktop(`
    width: 50%;
    position: static;
  `)}
  `;

  const RightTextWrapper = styled.div`
    ${onDesktop(`
    width: 80%;
    position: static;
  `)}
  `;
  const [firstSectionHeight, setFirstSectionHeight] = useState(0);
  const firstSectionRef = useRef(null);

  useEffect(() => {
    const onResize = _ =>
      setFirstSectionHeight(firstSectionRef.current.clientHeight);
    window.addEventListener('resize', onResize);
    setFirstSectionHeight(firstSectionRef.current.clientHeight);
    return () => window.removeEventListener('resize', onResize);
  }, [firstSectionRef]);

  return (
    <GalleryContainer>
      <FirstImage ref={firstSectionRef} height={firstSectionHeight}>
        <GalleryImageWithSubtext image={leftImg} alt="FirstImage">
          <LeftTextWrapper>
            <h2>Metodologi</h2>
            <p>{methodology}</p>
            <h2>Teknologi</h2>
            <p>{technology}</p>
          </LeftTextWrapper>
        </GalleryImageWithSubtext>
      </FirstImage>
      <SecondImage
        desktopTopMargin={-Math.max(0, firstSectionHeight - imageSpacing)}
      >
        <GalleryImageWithSubtext image={rightImg} alt="SecondImage">
          <RightTextWrapper>
            <p>{finalText}</p>
          </RightTextWrapper>
        </GalleryImageWithSubtext>
      </SecondImage>
    </GalleryContainer>
  );
};

const GalleryContainer = props => {
  const ContainerPadding = styled.div`
    padding-left: 64px;
    position: relative;
    overflow: hidden;
  `;
  return (
    <Container>
      <ContainerPadding {...props} />
    </Container>
  );
};

styled(Container)`
  margin-left: 64px;
`;

const GalleryImageContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

const FirstImage = styled.div`
  ${onDesktop(`
  width: 62%;
  position: relative;
  float: left;
  `)}
`;
const SecondImage = ({ children, desktopTopMargin }) => {
  const SectionStyle = styled.div`
    ${onDesktop(`
  width: 60%;
  position: relative;
  float: right;
  margin-top: ${desktopTopMargin}px
  `)}
  `;
  return <SectionStyle>{children}</SectionStyle>;
};
