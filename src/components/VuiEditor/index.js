/** 

=========================================================
* Open Delivery Bot React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/vision-ui-dashboard-pro-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com/)

* Design and Coded by Simmmple & Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Visionware.

*/

// react-quill components
import ReactQuill from "react-quill";

// react-quill styles
import "react-quill/dist/quill.snow.css";

// Custom styles for the VuiEditor
import VuiEditorRoot from "components/VuiEditor/VuiEditorRoot";

function VuiEditor(props) {
  return (
    <VuiEditorRoot>
      <ReactQuill theme="snow" {...props} />
    </VuiEditorRoot>
  );
}

export default VuiEditor;
