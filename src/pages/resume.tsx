import react from "react";
const PDFViewer = () => {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      <iframe
        src="https://www.bilalsiddique.tech//Software-Engineer.pdf"
        width="100%"
        height="100%"
        title="PDF Viewer"
      />
    </div>
  );
};

export default PDFViewer;
