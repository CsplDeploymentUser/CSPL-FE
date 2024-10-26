import HeaderMenu from "@/Components/ClientSideComponents/HeaderComponents/HeaderMenu";
import HeaderTopStripe from "./HeaderTopStripe";

type Props = { HeaderResponse: any };
const Header = async ({ HeaderResponse }: Props) => {
  return (
    <div>
      <HeaderTopStripe StripeData={HeaderResponse} />
      <HeaderMenu MenuData={HeaderResponse} />
    </div>
  );
};

export default Header;
