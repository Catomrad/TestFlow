import React, { useEffect, useState } from 'react';

interface ContentTextareaProps {
  value: string;
  selectedTemplate: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const templateContents = {
  '': '',
  basic: `Предусловия:
1. 
2. 

Шаги:
1. 
2. 

Ожидаемый результат:`,
  api: `Endpoint: 
Method: 

Headers:
1. 

Request Body:
{
}

Expected Response:
{
}

Status Code: 200`,
};

const ContentTextarea: React.FC<ContentTextareaProps> = ({
  value,
  selectedTemplate,
  onChange,
}) => {
  const [content, setContent] = useState(value);

  useEffect(() => {
    setContent(templateContents[selectedTemplate] || '');
  }, [selectedTemplate]);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
    onChange(e);
  };

  return (
    <div className="form-group">
      <label htmlFor="content">Content</label>
      <textarea
        name="content"
        id="content"
        value={content}
        onChange={handleChange}
        required
      />
    </div>
  );
};

export default ContentTextarea;
