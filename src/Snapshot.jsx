import { useRef } from 'react';

const Snapshot = () => {
  const formRef = useRef(null);

  const handleCaptureScreenshot = async () => {
    if (formRef.current) {
      // Send a request to the server to trigger Puppeteer screenshot capture
      const response = await fetch('http://localhost:3001/capture-screenshot', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          html: formRef.current.outerHTML,
        }),
      });

      if (response.ok) {
        console.log('Screenshot captured on the server!');
      } else {
        console.error('Error capturing screenshot on the server.');
      }
    }
  };

  return (
    <div>
      {/* Your form goes here */}
      <form ref={formRef}>
        {/* ... */}
      </form>

      {/* Screenshot button */}
      <button onClick={handleCaptureScreenshot}>Capture Screenshot</button>
    </div>
  );
};

export default Snapshot;
