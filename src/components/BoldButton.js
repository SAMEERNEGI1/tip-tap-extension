import React, { useState, useEffect } from 'react';

const BoldButton = ({ editor }) => {
  const [isBold, setIsBold] = useState(editor?.isActive('bold') || false);

  
  useEffect(() => {
    if (!editor) return;

    const updateBoldState = () => {
      setIsBold(editor.isActive('bold'));
    };

    
    editor.on('transaction', updateBoldState);

    
    return () => {
      editor.off('transaction', updateBoldState);
    };
  }, [editor]);

  const toggleBold = () => {
    if (editor) {
      editor.chain().focus().toggleBold().run();
    }
  };

  return (
    <button
      onClick={toggleBold}
      style={{
        marginLeft: '10px',
        padding: '10px 20px',
        backgroundColor: isBold ? '#ff7f50' : '#4CAF50', // Color change based on bold state
        color: '#ffffff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        fontWeight: 'bold',
        fontSize: '16px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // Soft shadow for better visibility
        marginBottom: '20px',
        transition: 'background-color 0.3s, transform 0.2s, box-shadow 0.3s', // Smooth transition for all effects
        width: 'auto',
        display: 'inline-block',
        position: 'relative', 
      }}
      onMouseEnter={(e) => (e.target.style.backgroundColor = '#45a049')}
      onMouseLeave={(e) =>
        (e.target.style.backgroundColor = isBold ? '#ff7f50' : '#4CAF50')
      }
    >
      <b
        style={{
          fontSize: '18px',
          transform: isBold ? 'scaleY(1.2)' : 'scaleY(1)', // Increase icon size when bold is active
          transition: 'transform 0.2s, filter 0.2s', // Smooth transition for both scaling and filter effect
          filter: isBold ? 'brightness(1.2)' : 'brightness(1)', // Make icon brighter when bold is active
        }}
      >
        B
      </b>
    </button>
  );
};

export default BoldButton;
