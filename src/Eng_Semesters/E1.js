import React from 'react';

const E1 = () => {
  const downloadPDF = () => {
    const link = document.createElement('a');
    link.href = `${process.env.PUBLIC_URL}/PDF's/p1.pdf`; // Replace with your PDF file name
    link.download = 'downloadedPDF.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <> <br /><br /><br />
    <div className="container mt-5" style={{backgroundColor:'lightGray'}}>
      <h3>Download Past Papers</h3><hr />
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="d-flex justify-content-between">
            <div>
              <h5 className="text-center mb-4">Study Skills</h5>
            </div>
            <div>
              <button className="btn btn-primary" onClick={downloadPDF}>
                Download PDF
              </button>
            </div>
          </div><hr />
          <div className="d-flex justify-content-between mt-3">
            <div>
              <h5 className="text-center mb-4">Introduction to Linuistics</h5>
            </div>
            <div>
              <button className="btn btn-primary" onClick={downloadPDF}>
                Download PDF
              </button>
            </div>
          </div><hr />
          <div className="d-flex justify-content-between mt-3">
            <div>
              <h5 className="text-center mb-4">History of english lifenature</h5>
            </div>
            <div>
              <button className="btn btn-primary" onClick={downloadPDF}>
                Download PDF
              </button>
            </div>
          </div><hr />
          <div className="d-flex justify-content-between mt-3">
            <div>
              <h5 className="text-center mb-4">Advance reading skills</h5>
            </div>
            <div>
              <button className="btn btn-primary" onClick={downloadPDF}>
                Download PDF
              </button>
            </div>
          </div><hr />
          <div className="d-flex justify-content-between mt-3">
            <div>
              <h5 className="text-center mb-4">Pakistan Studies</h5>
            </div>
            <div>
              <button className="btn btn-primary" onClick={downloadPDF}>
                Download PDF
              </button>
            </div>
          </div><hr />
          <div className="d-flex justify-content-between mt-3">
            <div>
              <h5 className="text-center mb-4">Sociology</h5>
            </div>
            <div>
              <button className="btn btn-primary" onClick={downloadPDF}>
                Download PDF
              </button>
            </div>
          </div>
        </div>
      </div>
    </div><br /><br />
    </>
  );
};

export default E1;
