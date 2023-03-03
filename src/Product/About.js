import React from "react";

const About = () => {
  return (
    <div className="container">
      <div className="py-4">
        <h1>About</h1>
        <p>
          In traditional websites, the browser requests a document from a web
          server, downloads and evaluates CSS and JavaScript assets, and renders
          the HTML sent from the server. When the user clicks a link, it starts
          the process all over again for a new page. Client side routing allows
          your app to update the URL from a link click without making another
          request for another document from the server. Instead, your app can
          immediately render some new UI and make data requests with fetch to
          update the page with new information. This enables faster user
          experiences because the browser doesn't need to request an entirely
          new document or re-evaluate CSS and JavaScript assets for the next
          page. It also enables more dynamic user experiences with things like
          animation.
        </p>
      </div>
    </div>
  );
};
export default About;
