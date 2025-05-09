import React from 'react';

interface TemplateSelectorProps {
  selectedTemplate: string;
  onTemplateChange: (template: string) => void;
}

const TemplateSelector: React.FC<TemplateSelectorProps> = ({
  selectedTemplate,
  onTemplateChange,
}) => {
  return (
    <div className="form-group">
      <label htmlFor="template">Template</label>
      <select
        name="template"
        id="template"
        value={selectedTemplate}
        onChange={e => onTemplateChange(e.target.value)}
      >
        <option value="">No template</option>
        <option value="basic">Basic</option>
        <option value="api">API</option>
      </select>
    </div>
  );
};

export default TemplateSelector;
