
import Link from "next/link";
import { useAuth } from "../components/context/authUserContext";
import Description from "../components/mainPage/Description";

const Home = () => {
  console.log(useAuth());
  return (
    <>
      <Description />

      <Link href={"/mainPageSections/housingfood"} passHref>
        <h3>Housing And Food</h3>
      </Link>

      <Link href={"/mainPageSections/educationlanguage"} passHref>
        <h3>Education and Language</h3>
      </Link>
    </>
  );
};
export default Home;
