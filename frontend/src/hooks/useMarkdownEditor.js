import { useEffect, useRef } from 'react';
import SimpleMDE from 'simplemde';

export const useMarkdownEditor = (elementId, placeholder) => {
  const editorRef = useRef(null);

  useEffect(() => {
    // Инициализация редактора
    editorRef.current = new SimpleMDE({
      element: document.getElementById(elementId),
      placeholder: placeholder,
      spellChecker: false,
      toolbar: ["bold", "italic", "heading", "|", "unordered-list", "ordered-list", "|", "code", "table", "|", "preview"]
    });

    // Очистка при размонтировании
    return () => {
      if (editorRef.current) {
        editorRef.current.toTextArea();
      }
    };
  }, [elementId, placeholder]);

  return editorRef.current;
};