import Label from "../Label/Label"
import SectionHeader from "../SectionHeader/SectionHeader"
import SectionLayout from "../SectionLayout/SectionLayout"
import Title from "../Title/Title"
import ReviewContent from "./ReviewContent"
import ReviewItem from "./ReviewItem"


const Review = () => {
  return (
    <SectionLayout id="review">
      <SectionHeader>
        <Label icon>
          Guests&apos; Feedback
        </Label>
        <Title>
          Happy Guests
        </Title>
      </SectionHeader>
      <ReviewContent>
        <ReviewItem />
        <ReviewItem />
        <ReviewItem />
        <ReviewItem />
      </ReviewContent>
    </SectionLayout>
  )
}

export default Review