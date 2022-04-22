import { useEffect, useState } from "react";
import { getContent } from "../services";

const LandingPage = () => {
  const [contents, setContents] = useState([]);

  useEffect(() => {
    (async () => {
      const result = await getContent();
      console.log(result);
      setContents(result?.data);
    
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
