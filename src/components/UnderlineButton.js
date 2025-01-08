import React, { useState, useEffect } from 'react';

const UnderlineButton = ({ editor }) => {
  const [isUnderlined, setIsUnderlined] = useState(editor?.isActive('underline') || false);

  
  useEffect(() => {
    if (!editor) return;

    const updateUnderlineState = () => {
      setIsUnderlined(editor.isActive('underline'));
    };

    
    editor.on('transaction', updateUnderlineState);

    
    return () => {
      editor.off('transaction', updateUnderlineState);
    };
  }, [editor]);

  const toggleUnderline = () => {
    if (editor) {
      editor.chain().focus().toggleUnderline().run();
    }
  };

  return (
    <button
      onClick={toggleUnderline}
      style={{
        padding: '10px 20px',
        backgroundColor: isUnderlined ? '#1e90ff' : '#4CAF50', // Color change based on underline state
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
        (e.target.style.backgroundColor = isUnderlined ? '#1e90ff' : '#4CAF50')
      }
    >
      <u
        style={{
          fontSize: '18px',
          transform: isUnderlined ? 'scaleY(1.2)' : 'scaleY(1)', // Increase icon size when underline is active
          transition: 'transform 0.2s, filter 0.2s', // Smooth transition for both scaling and filter effect
          filter: isUnderlined ? 'brightness(1.2)' : 'brightness(1)', // Make icon brighter when underline is active
        }}
      >
        U
      </u>
    </button>
  );
};

export default UnderlineButton;
