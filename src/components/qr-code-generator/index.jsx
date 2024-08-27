import React, { useEffect, useState } from "react";
import QRCode from "react-qr-code";

const QrCodeGenerator = () => {
  const [QrCode, setQrCode] = useState("");
  const [Input, SetInput] = useState("");

  const HandleGenerator = () => {
    setQrCode(Input);
    SetInput('');
  };

  return (
    <div>
      <h2>Qr Code Generator</h2>
      <div>
        <input
          onChange={(e) => SetInput(e.target.value)}
          type="text"
          name="qr-code"
          placeholder="enter text"
          value={Input}
        />
        <button
          disabled={Input && Input.trim() !== "" ? false : true}
          onClick={() => HandleGenerator()}
        >
          Generate Qr Code
        </button>
      </div>
      <div>
        <QRCode value={QrCode} />
      </div>
    </div>
  );
};

export default QrCodeGenerator;
