import React from 'react';
import styled from 'styled-components';
import Card from '../modules/Card';
import Header from '../modules/Header';

function Main(props) {
    return (
        <div>
            <Header />
            <Section>
                <Card card={props.card} />
            </Section>
        </div>
    )
}

const Section = styled.section`
  max-width: 1400px;
  margin: 0 auto;
  padding-top: 120px;
`

export default Main;