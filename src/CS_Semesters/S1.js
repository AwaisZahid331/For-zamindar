import React from 'react';

const S1 = () => {
  const downloadPDF = () => {
    const link = document.createElement('a');
    link.href = `${process.env.PUBLIC_URL}/PDF's/p1.pdf`; // Replace with your PDF file name
    link.download = 'downloadedPDF.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <br /><br /><br />
      <div className="container mt-5">
        <h3>Download Past Papers</h3><hr />
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="d-flex justify-content-between">
              <div>
                <h5 className="text-center mb-4">Calculus & Analytical Geometry</h5>
              </div>
              <div>
                <button className="btn btn-primary" onClick={downloadPDF}>
                  Download PDF
                </button>
              </div>
            </div><hr />
            <div className="d-flex justify-content-between mt-3">
              <div>
                <h5 className="text-center mb-4">Programming Fundamental</h5>
              </div>
              <div>
                <button className="btn btn-primary" onClick={downloadPDF}>
                  Download PDF
                </button>
              </div>
            </div><hr />
            <div className="d-flex justify-content-between mt-3">
              <div>
                <h5 className="text-center mb-4">Islamic Studies</h5>
              </div>
              <div>
                <button className="btn btn-primary" onClick={downloadPDF}>
                  Download PDF
                </button>
              </div>
            </div><hr />
            <div className="d-flex justify-content-between mt-3">
              <div>
                <h5 className="text-center mb-4">ICT</h5>
              </div>
              <div>
                <button className="btn btn-primary" onClick={downloadPDF}>
                  Download PDF
                </button>
              </div>
            </div><hr />
            <div className="d-flex justify-content-between mt-3">
              <div>
                <h5 className="text-center mb-4">Applied Physics</h5>
              </div>
              <div>
                <button className="btn btn-primary" onClick={downloadPDF}>
                  Download PDF
                </button>
              </div>
            </div><hr />
            <div className="d-flex justify-content-between mt-3">
              <div>
                <h5 className="text-center mb-4">Functional English</h5>
              </div>
              <div>
                <button className="btn btn-primary" onClick={downloadPDF}>
                  Download PDF
                </button>
              </div>
            </div>

            <br /><br />
            <h2 style={{backgroundColor:"gray"}}>Additional Material</h2> <br />
            <div className="container">
              <div className="row">
                <div className="col-md-5">
                  <div className="card" style={{ "width": "13rem" }}>
                    <div className="card-body">
                      <h5 className="card-title">Download C Extra Questions</h5>
                      <button className="btn btn-primary" onClick={downloadPDF}>
                        Download PDF
                      </button>
                    </div>
                  </div>
                </div>

                <div className="col-md-5">
                  <div className="card" style={{ "width": "13rem" }}>
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                      <button className="btn btn-primary" onClick={downloadPDF}>
                        Download PDF
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default S1;
