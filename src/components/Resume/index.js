import React from "react";
import SampleFunctionalResume from "../../assets/cover/SampleFunctionalResume.pdf";

function Resume() {
  return (
    <section className="my-5">
      {/* <h1 id="Resume">Resume goes here?</h1> */}
      <iframe
        id="Resume"
        title="This is a unique title"
        src={SampleFunctionalResume}
        className="my-2"
        style={{ width: "100%", height: "1200px" }}
        alt="cover"
      />
    </section>
  );
}

export default Resume;
