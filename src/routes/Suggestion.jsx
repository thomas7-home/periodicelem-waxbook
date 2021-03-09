import React from "react";
import Layout from "../components/Layout";
function Suggestion(props) {
  return (
    <Layout>
      <div className='block--page'>
        <h3>
          If you have some comments, questions or suggestions for this platform you can tell us through the
          form below:
        </h3>
        <iframe
          src='https://forms.gle/rcEBLumxftwkCTTj8?embedded=true'
          width={window.screen.width < 660 ? "325" : "660"}
          height='820'
          title='form'
          frameBorder='0'
          marginHeight='0'
          marginWidth='0'
        >
          Carregando…
        </iframe>
      </div>
    </Layout>
  );
}

export default Suggestion;
