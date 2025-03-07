import React from "react";
import styled from "styled-components";
import { onMobile } from '../Breakpoints';
import { COLOR_CLAVE_BLUE, COLOR_CLAVE_LIGHTBLUE } from '../../colors';
import Layout from "../Layout";


const SearchingForBanner = ({ positions }) => {
  const activePositions = positions.filter(p => p.active);

  return (
    <Layout>
      <Wrapper>
        <h2>
          Akkurat nå søker vi etter
        </h2>
        {
          activePositions.length === 0 ? 
            <p>...dyktige folk som ønsker å sende oss en åpen søknad.</p> :
            activePositions.map(p => 
              <a href={p.url}>{p.text}</a>
            )
        }
      </Wrapper>
    </Layout>
  )
}

const Wrapper = styled.div`
  background-color: ${COLOR_CLAVE_LIGHTBLUE};
  color: ${COLOR_CLAVE_BLUE};
  margin: -3rem -6rem -3rem 15%;
  padding: 3rem;

  & > a {
    color: ${COLOR_CLAVE_BLUE};
  }

  & > a:visited {
    color: ${COLOR_CLAVE_BLUE};
  }

  ${
    onMobile(`
      margin:0 -3rem;
    `)
  }
`

export default SearchingForBanner;