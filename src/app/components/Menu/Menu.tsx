import Label from "../Label/Label"
import SectionHeader from "../SectionHeader/SectionHeader"
import SectionLayout from "../SectionLayout/SectionLayout"
import Title from "../Title/Title"
import ImageWrapper from "./ImageWrapper"
import MenuCategory from "./MenuCategory"
import MenuColumn from "./MenuColumn"
import MenuItem from "./MenuItem"
import MenuPalette from "./MenuPalette"
import Image from 'next/image'


const Menu = () => {
  return (
    <SectionLayout>
      <SectionHeader>
        <Label>
          menu that fits your palette
        </Label>
        <Title>
          our food and drinks menu
        </Title>
      </SectionHeader>
      <MenuPalette>
        <MenuColumn>
          <MenuCategory>
            Starters & Light Bites
          </MenuCategory>
          <MenuItem
            title="1. Vietnamese Spring Roll - Chả Nem"
            desc="Deep fried spring rolls with mince pork and prawn (3ps)"
            price={8.5}
          />
          <MenuItem
            title="2. Fresh Summer Roll - Nem Cuốn"
            desc="Rice paper wrapped with prawn (2ps)"
            price={8.5}
          />
          <MenuItem
            title="3. Vietnamese Spring Roll - Chả Nem Chay (V)"
            desc="Deep fried spring rolls with vegan friendly ingredients"
            price={8.5}
          />
          <MenuItem
            title="4. Vegan Fresh Summer Roll - Nem Cuốn Chay (V)"
            desc="Rice paper wrapped with veggie"
            price={7.5}
          />
          <MenuItem
            title="5. Vietnamese Salad - Gỏi Nộm"
            desc="Papaya salad mixed with chicken - beef - prawn - tofu(V)"
            price={10}
          />
          <MenuItem
            title="6. Scallion Oil Tofu - Đậu Phụ Mỡ Hành"
            desc="Deep fried tofu topped with scallion oil"
            price={7}
          />
          <MenuItem
            title="7. Chicken Wing - Cánh Gà Chiên"
            desc="Deep fried chicken wings coated with peanut butter sauce"
            price={9}
          />
          <MenuItem
            title="8. Deep Fried Prawn - Tôm Chiên"
            desc="Deep fried prawns coated with golder bread crumbss"
            price={9.5}
          />
          <MenuItem
            title="9. Betel leaves Grilled Beef - Bò Nướng Lá Lốt"
            desc="Grilled beef wrapped in Betel leaves"
            price={9.5}
          />
        </MenuColumn>
        <MenuColumn>
          <ImageWrapper>
            <Image
              width={200}
              height={150}
              src="/images/menu-img-5.jpeg"
              alt="deco"
              className="rounded-[6px]"
            />
            <Image
              width={200}
              height={150}
              src="/images/menu-img-6.jpeg"
              alt="deco"
              className="rounded-[6px]"
            />
            <Image
              width={200}
              height={150}
              src="/images/img-placeholder.svg"
              alt="deco"
              className="rounded-[6px]"
            />
            <Image
              width={200}
              height={150}
              src="/images/img-placeholder.svg"
              alt="deco"
              className="rounded-[6px]"
            />
          </ImageWrapper>
        </MenuColumn>
        <MenuColumn>
          <MenuCategory>
            Drinks
          </MenuCategory>
          <MenuItem
            title="San Pellegrino Orange / Lemon 330ml"
            price={3.5}
          />
          <MenuItem
            title="Harrogate Spring Water Still / Sparkling 330ml"
            price={3.5}
          />
          <MenuItem
            title="Bottled Apple Juice 250ml"
            price={3.5}
          />
          <MenuItem
            title="Bottled Orange Juice 250ml"
            price={3.5}
          />
          <MenuItem
            title="Appletiser 275ml"
            price={3.5}
          />
          <MenuItem
            title="Coke Original / Diet / Zero 330ml"
            price={3}
          />
          <MenuItem
            title="Fanta / 7up 330ml"
            price={3}
          />
          <MenuItem
            title="Vietnamese Traditional Dripping Coffee"
            price={5.5}
          />
          <MenuItem
            title="Vietnamese Traditional Iced Coffee"
            price={5.5}
          />
          <MenuItem
            title="Lemon Iced Tea"
            price={5.5}
          />
        </MenuColumn>
        <MenuColumn>
          <MenuCategory>
            Banh Mi
          </MenuCategory>
          <MenuItem
            title="10. Special Banh Mi - Bánh Mì Đặc Biệt"
            desc="Crispy baguette filled with liver pate, grilled pork, pickled vegetables"
            price={9.5}
          />
          <MenuItem
            title="11. Veggie Banh Mi - Bánh Mì Chay"
            desc="Crispy baguette filled with vegetarian friendly ingredients"
            price={8.5}
          />
        </MenuColumn>
        <MenuColumn>
          <ImageWrapper>
            <Image
              width={200}
              height={150}
              src="/images/menu-img-5.jpeg"
              alt="deco"
              className="rounded-[6px]"
            />
            <Image
              width={200}
              height={150}
              src="/images/menu-img-6.jpeg"
              alt="deco"
              className="rounded-[6px]"
            />
            <Image
              width={200}
              height={150}
              src="/images/img-placeholder.svg"
              alt="deco"
              className="rounded-[6px]"
            />
          </ImageWrapper>
        </MenuColumn>
        <MenuColumn>
          <MenuCategory>
            Pho - Noodle Soups
          </MenuCategory>
          <MenuItem
            title="12. Beef Pho Special - Phở Bò Đặc Biệt"
            desc="Rice Noodle Soup with 4 different cuts of beef"
            price={3.5}
          />
          <MenuItem
            title="13. Hue Beef Noodle Soup - Bún Bò Huế"
            desc="Hue City Traditional Beef Noodle Soup"
            price={15.5}
          />
          <MenuItem
            title="14. Pho Combo - Phở Tổng Hợp"
            desc="Rice Noodle Soup with chicken, beef and prawn"
            price={15.5}
          />
          <MenuItem
            title="15. Well Done Beef Pho - Phở Bò Chín"
            desc="Rice Noodle Soup with well done brisket and flank"
            price={14.5}
          />
          <MenuItem
            title="16. Chicken Pho - Phở Gà"
            desc="Rice Noodle Soup with chicken"
            price={15.5}
          />
          <MenuItem
            title="17. Vegan Pho - Phở Chay"
            desc="Rice Noodle Soup with veggie ingredients"
            price={14}
          />
        </MenuColumn>
        <MenuColumn>
          <MenuCategory>
            Rice Vermicelli - Bún
          </MenuCategory>
          <MenuItem
            title="18. spring roll rice vermicelli - bún chả nem"
            desc="Rice Vermicelli served with spring rolls and fish sauce"
            price={14.5}
          />
          <MenuItem
            title="19. Ha Noi Special Bun Cha - Bún Chả Hà Nội"
            desc="Hue City Traditional Beef Noodle Soup"
            price={15.5}
          />
          <MenuItem
            title="20. Grilled pork with rice vermicelli"
            desc="Rice Vermicelli served with grilled pork and fish sauce"
            price={14.5}
          />
          <MenuItem
            title="21. Vegan spring roll with rice vermicelli (V)"
            desc="Rice Vermicelli served with vegetarian spring roll and soy sauce"
            price={13.5}
          />
          <MenuItem
            title="22. Rice vermicelli with stir-fried vegetables (V)"
            desc="Rice Vermicelli served with stir-fried vegetables"
            price={13.5}
          />
        </MenuColumn>
        <MenuColumn>
          <ImageWrapper>
            <Image
              width={200}
              height={150}
              src="/images/menu-img-5.jpeg"
              alt="deco"
              className="rounded-[6px]"
            />
            <Image
              width={200}
              height={150}
              src="/images/menu-img-6.jpeg"
              alt="deco"
              className="rounded-[6px]"
            />
            <Image
              width={200}
              height={150}
              src="/images/img-placeholder.svg"
              alt="deco"
              className="rounded-[6px]"
            />
          </ImageWrapper>
        </MenuColumn>
        <MenuColumn>
          <MenuCategory>
            Rice - cơm
          </MenuCategory>
          <MenuItem
            title="23. Special Rice - Cơm Đặc Biệt"
            desc="Rice served with grilled pork fried egg and pickled salade"
            price={15}
          />
          <MenuItem
            title="24. Grilled chicken rice - Cơm Gà Nướng"
            desc="lemon grass and ginger marinated chicken whole leg"
            price={14.5}
          />
          <MenuItem
            title="25. Beef Stew Rice - Cơm bò sốt vang"
            desc="Cay khe styled slow cooked beef stew served with ricee"
            price={16}
          />
          <MenuItem
            title="26. Vegetarian Rice - Cơm Chay (V)"
            desc="stir-fried vegetables served with plain rice"
            price={14.5}
          />
        </MenuColumn>
      </MenuPalette>
    </SectionLayout>
  )
}

export default Menu