import React from 'react';

const Bba8 = () => {
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
      <div className="container mt-5" style={{ backgroundColor: 'lightGray' }}>
        <h3>Download Past Papers</h3><hr />
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="d-flex justify-content-between">
              <div>
                <h5 className="text-center mb-4">Production & Operations Management</h5>
              </div>
              <div>
                <button className="btn btn-primary" onClick={downloadPDF}>
                  Download PDF
                </button>
              </div>
            </div><hr />
            <div className="d-flex justify-content-between mt-3">
              <div>
                <h5 className="text-center mb-4">Entrepenurship</h5>
              </div>
              <div>
                <button className="btn btn-primary" onClick={downloadPDF}>
                  Download PDF
                </button>
              </div>
            </div><hr />
            <div className="d-flex justify-content-between mt-3">
              <div>
                <h5 className="text-center mb-4">Managerial Ecnomics</h5>
              </div>
              <div>
                <button className="btn btn-primary" onClick={downloadPDF}>
                  Download PDF
                </button>
              </div>
            </div><hr />


          </div>
        </div>
      </div><br /><br />
    </>
  );
};

export default Bba8;
