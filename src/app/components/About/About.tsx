import ButtonWrapper from "../ButtonWrapper/ButtonWrapper"
import CtaButton from "../CtaButton/CtaButton"
import Desc from "../Desc/Desc"
import Label from "../Label/Label"
import SectionHeader from "../SectionHeader/SectionHeader"
import SectionLayout from "../SectionLayout/SectionLayout"
import Title from "../Title/Title"


const About = () => {
  return (
    <SectionLayout id="about">
      <SectionHeader>
        <Label>
          Serving Quality
        </Label>
        <Title>
          We are serving our customers with the best vietnamese food.
        </Title>
        <Desc>
          Cay Khe Vietnamese Restaurant in Oxford offers an authentic taste of Vietnam, serving traditional dishes made with fresh ingredients in a warm and welcoming atmosphere.
        </Desc>
      </SectionHeader>
      <ButtonWrapper>
        <CtaButton primary>
          Book a table
        </CtaButton>
        <CtaButton>
          Contact us
        </CtaButton>
      </ButtonWrapper>
    </SectionLayout>
  )
}

export default About