import axios from "axios";
import Articles from "../components/Articles/Articles";
import Banner from "../components/Banner/Banner";
import Brands from "../components/Brands/Brands";
import Campaign from "../components/Campaign/Campaign";
import Editors from "../components/Editors/Editors";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Matches from "../components/Matches/Matches";
import Popular from "../components/Popular/Popular";
import Review from "../components/Review/Review";
import Trending from "../components/Trending/Trending";
import Video from "../components/Video/Video";

export default function Home(props) {
  return (
    <>
      <Header />
      <Banner />
      <Editors editors={props.data["editor's choice"]} />
      <Matches />
      <Campaign />
      <Articles articles={props.data["latest articles"]} />
      <Review reviews={props.data["latest review"]} />
      <Popular />
      <Video />
      <Trending />
      <Brands />
      <Footer />
    </>
  );
}

export async function getServerSideProps(context) {
  try {
  const response = await axios({
    method: "get",
    url: `${process.env.HOST_API}/hqms/FDN-WP/0.1/wp`,
  });
  return {
    props: { data: response.data },
  };
  } catch (error) {
    return {
      props: { data: null, error },
    };
  }
}
