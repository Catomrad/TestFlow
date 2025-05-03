// TagSelector.tsx

import React, { useState } from 'react';

import Select from 'react-select';

// Пример списка тегов — его можно получить из API
const predefinedTags = [
  { value: 'frontend', label: 'Frontend' },
  { value: 'backend', label: 'Backend' },
  { value: 'devops', label: 'DevOps' },
  { value: 'design', label: 'Design' },
  { value: 'qa', label: 'QA' },
];

// Сначала определим интерфейс для тега
interface Tag {
  value: string;
  label: string;
}

const TagSelector = () => {
  const [selectedTags, setSelectedTags] = useState<Tag[]>([]);

  return (
    <div style={{ width: 400 }}>
      <Select
        isMulti
        options={predefinedTags}
        value={selectedTags}
        onChange={(newValue) => setSelectedTags(newValue as Tag[])}
        placeholder="Выберите теги..."
        closeMenuOnSelect={false}
      />
      <div style={{ marginTop: 16 }}>
        <strong>Выбранные теги:</strong>
        <ul>
          {selectedTags.map(tag => (
            <li key={tag.value}>{tag.label}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TagSelector;
