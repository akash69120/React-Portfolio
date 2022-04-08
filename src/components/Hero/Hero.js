import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Akash Kempwad<br />
           <br />
        </SectionTitle>
        <SectionText>
         Learning Computer science.<br />
         Currently At 3rd Year,eager to learn as many things as possible!
         Interested in AI and ML.<br />
         All in ,using my artwork skill to use in Computer science!
        </SectionText>
        <Button onClick={props.handleClick}>Learn More</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;