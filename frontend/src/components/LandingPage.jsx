import { useEffect, useState } from "react";
import { getContent } from "../services";

const LandingPage = () => {
  const [contents, setContents] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const result = await getContent();
        console.log(result);
        setContents(result?.data);
      } catch (e) {
        console.log("error", e);
      }
    })();
  }, []);

  return (
    <div>
      {contents?.map((content) => (
        <div>
          <h3>{content.body}</h3>
        </div>
      ))}
    </div>
  );
};

export default LandingPage;
