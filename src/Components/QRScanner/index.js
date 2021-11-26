import { useState } from "react";
import QrReader from "react-qr-reader";

const QRScanner = (props) => {
  const { handleClose, setBinsHandler } = props;
  const [result, setResult] = useState("No Result");

  const handleScan = (data) => {
    if (data) {
      handleClose();
      setBinsHandler(data);
      alert(data);
      setResult(data);
    }
  };
  const handleError = (err) => {
    console.error(err);
  };

  return (
    <div>
      <QrReader
        delay={300}
        onError={handleError}
        onScan={handleScan}
        style={{ width: "100%" }}
        facingMode={"environment"}
      />
      <p>{result}</p>
      <h1>Hey</h1>
    </div>
  );
};

export default QRScanner;
