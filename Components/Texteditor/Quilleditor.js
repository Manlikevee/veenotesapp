
import React, { useEffect, useRef } from 'react';

import 'quill/dist/quill.snow.css'; // Import the Quill CSS theme

const Quilleditor = () => {
  const quillRef = useRef(null);
  useEffect(() => {
    // Import Quill dynamically on the client-side
    import('quill').then(({ default: Quill }) => {
      const quill = new Quill(quillRef.current, {
        theme: 'snow',
        modules: {
          toolbar: [
            [{ 'header': '1' }, { 'header': '2' }],
            ['bold', 'italic', 'underline'],
            ['link', 'image'],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
            ['clean']
          ]
        }
      });
    });
  }, []);

  return (
    <div>
      <div ref={quillRef} />
    </div>
  );
};

export default Quilleditor;
