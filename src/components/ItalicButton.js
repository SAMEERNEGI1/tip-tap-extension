import React, { useState, useEffect } from 'react';

const ItalicButton = ({ editor }) => {
  const [isItalic, setIsItalic] = useState(editor?.isActive('italic') || false);

  
  useEffect(() => {
    if (!editor) return;

    const updateItalicState = () => {
      setIsItalic(editor.isActive('italic'));
    };

    
    editor.on('transaction', updateItalicState);

    
    return () => {
      editor.off('transaction', updateItalicState);
    };
  }, [editor]);

  const toggleItalic = () => {
    if (editor) {
      editor.chain().focus().toggleItalic().run();
    }
  };

  return (
    <button
      onClick={toggleItalic}
      style={{
        marginRight: '10px',
        marginLeft: '10px',
        padding: '10px 20px',
        backgroundColor: isItalic ? '#ff7f50' : '#4CAF50', // Color change based on italic state
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
        (e.target.style.backgroundColor = isItalic ? '#ff7f50' : '#4CAF50')
      }
    >
      <i
        style={{
          fontSize: '18px',
          transform: isItalic ? 'scaleY(1.2)' : 'scaleY(1)', // Increase icon size when italic is active
          transition: 'transform 0.2s, filter 0.2s', // Smooth transition for both scaling and filter effect
          filter: isItalic ? 'brightness(1.2)' : 'brightness(1)', // Make icon brighter when italic is active
        }}
      >
        I
      </i>
    </button>
  );
};

export default ItalicButton;
