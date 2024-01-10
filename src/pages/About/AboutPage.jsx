import { Fragment, useEffect } from "react";
import Introduction from "./Components/Introduction";

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Fragment>
      <Introduction />
    </Fragment>
  );
};

export default AboutPage;
