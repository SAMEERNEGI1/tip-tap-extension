import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import BoldButton from './BoldButton';
import ItalicButton from './ItalicButton';
import UnderlineButton from './UnderlineButton';
import Underline from '@tiptap/extension-underline';



const TiptapEditor = () => {
  const editor = useEditor({
    extensions: [StarterKit, Underline],
    content: '',
  });

  if (!editor) {
    return null;
  }

  return (
    <>
      <BoldButton editor={editor} />
      <ItalicButton editor={editor} />
      <UnderlineButton editor={editor} />

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh', 
          backgroundColor: '#f0f0f0', 
        }}
      >
        <div
          style={{
            width: '80%', 
            height: '80%', 
            padding: '16px', 
            backgroundColor: '#ffffff', 
            border: '2px solid #ccc', 
            borderRadius: '12px', 
            fontSize: '16px', 
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.15)', 
            overflowY: 'auto', 
            display: 'flex',
            alignItems: 'flex-start', 
            outline: 'none', 
          }}
          onClick={() => editor?.commands.focus()} // Focus editor on click
        >
          <EditorContent
            editor={editor}
            style={{
              width: '100%',
              minHeight: '100%',
              outline: 'none',
              cursor: 'text', 
              whiteSpace: 'pre-wrap', 
              border: 'none', 
              boxShadow: 'none', 
            }}
          />

        </div>
      </div>
    </>
  );
};

export default TiptapEditor;
