import React, { useEffect, useState } from 'react';

const VismeForm = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const scriptId = 'vismeforms-embed-script';
    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.src = 'https://static-bundles.visme.co/forms/vismeforms-embed.js';
      script.id = scriptId;
      script.async = true;
      script.onload = () => setLoading(false);
      document.body.appendChild(script);
    } else {
      setLoading(false);
    }
  }, []);

  return (
    <div>
      {loading ? (
        <div className="loading-indicator">Loading...</div>
      ) : (
        <div className="visme_d"
             data-title="Untitled Project" 
             data-url="n0e09z4m-untitled-project?fullPage=true" 
             data-domain="forms" 
             data-full-page="true" 
             data-min-height="100vh" 
             data-form-id="86070">
        </div>
      )}
    </div>
  );
};

export default VismeForm;
