import SocialLinks from "../SocialLinks/SocialLinks";
import { StyledBackgroundWrapper } from "./Home.styled";

const socials = [
  {
    name: "twitter",
    link: "//twitter.com/colt082295"
  }
];

const Home = () => (
  <div>
    <StyledBackgroundWrapper></StyledBackgroundWrapper>

    <div>This is home.</div>

    <SocialLinks socials={socials} />
  </div>
);

export default Home;
