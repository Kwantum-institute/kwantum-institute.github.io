import { Link } from "react-router-dom";
import Section from "./Section";

function NoPage() {
  return (
    <Section
      title="Page not found!"
      content={
        <>
          <section>
            <div className="flex flex-col gap-7">
              <p>
                Unfortunately, the page you're looking for doesn't exist or
                there was an error in the link you followed or typed.
              </p>
              <Link className="button" to="/">
                Return to Homepage
              </Link>
            </div>
          </section>
        </>
      }
    />
  );
}

export default NoPage;
