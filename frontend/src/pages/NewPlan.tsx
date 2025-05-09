import '../styles/TestCase.css';

import React, { useState } from 'react';

import { useAuth } from '../context/AuthContext.tsx';

interface TestPlanForm {
  name: string;
  description: string;
  projectId: number;
}

const NewPlan: React.FC = () => {
  const { user, projects, currentProjectId, createTestPlan } = useAuth();
  const [formData, setFormData] = useState<TestPlanForm>({
    name: '',
    description: '',
    projectId: currentProjectId || 0,
  });
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'projectId' ? parseInt(value) : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) {
      setError('You must be logged in to create a test plan.');
      return;
    }
    if (!formData.projectId) {
      setError('Please select a project.');
      return;
    }

    try {
      await createTestPlan(
        formData.name,
        formData.description,
        formData.projectId
      );
      setSuccess('Test plan created successfully!');
      setFormData({ name: '', description: '', projectId: formData.projectId });
    } catch (err: any) {
      setError(err.message || 'Failed to create test plan.');
    }
  };

  return (
    <div>
      <form id="testCaseForm" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Test Plan Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            name="description"
            id="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="projectId">Project</label>
          <select
            name="projectId"
            id="projectId"
            value={formData.projectId}
            onChange={handleChange}
            required
            disabled={!!currentProjectId}
          >
            <option value={0}>Select a project</option>
            {projects.map(project => (
              <option key={project.id} value={project.id}>
                {project.name}
              </option>
            ))}
          </select>
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {success && <p style={{ color: 'green' }}>{success}</p>}
        <button type="submit">Create Test Plan</button>
      </form>
    </div>
  );
};

export default NewPlan;
