import '../styles/TestCase.css';
import 'reactflow/dist/style.css';

import React, { useCallback, useEffect, useState } from 'react';
import ReactFlow, {
  Background,
  Connection,
  Controls,
  Edge,
  MiniMap,
  Node,
  addEdge,
  useEdgesState,
  useNodesState,
} from 'reactflow';
import { useNavigate, useParams } from 'react-router-dom';

import { useAuth } from '../context/AuthContext.tsx';

interface Module {
  id: number;
  name: string;
}

interface DiagramNode {
  id: string;
  projectId: number;
  moduleId?: number;
  module?: { name: string };
  label: string;
  positionX: number;
  positionY: number;
}

interface DiagramEdge {
  id: string;
  projectId: number;
  sourceId: string;
  targetId: string;
}

const ProjectDiagram: React.FC = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [modules, setModules] = useState<Module[]>([]);
  const [newNodeLabel, setNewNodeLabel] = useState('');
  const [selectedModuleId, setSelectedModuleId] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  useEffect(() => {
    if (!user || !projectId) {
      setError('Вы должны быть авторизованы для просмотра схемы.');
      return;
    }
    fetchModules();
    fetchDiagram();
  }, [user, projectId]);

  const fetchModules = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) throw new Error('No authorization token found');
      const response = await fetch(
        `http://localhost:5000/api/module?projectId=${projectId}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(
          `Failed to fetch modules: ${response.status} ${errorText}`
        );
      }
      const data = await response.json();
      setModules(data.modules);
    } catch (err: any) {
      setError(err.message || 'Не удалось загрузить модули.');
    }
  };

  const fetchDiagram = async () => {
    try {
      console.log('Fetching diagram for projectId:', projectId);
      const token = localStorage.getItem('token');
      if (!token) throw new Error('No authorization token found');
      const response = await fetch(
        `http://localhost:5000/api/diagram?projectId=${projectId}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      if (!response.ok) {
        const errorText = await response.text();
        console.error('Fetch diagram response:', response.status, errorText);
        throw new Error(
          `Failed to fetch diagram: ${response.status} ${errorText}`
        );
      }
      const data = await response.json();
      const reactFlowNodes: Node[] = data.nodes.map((node: DiagramNode) => ({
        id: node.id,
        type: 'default',
        position: { x: node.positionX, y: node.positionY },
        data: { label: node.label },
      }));
      const reactFlowEdges: Edge[] = data.edges.map((edge: DiagramEdge) => ({
        id: edge.id,
        source: edge.sourceId,
        target: edge.targetId,
      }));
      setNodes(reactFlowNodes);
      setEdges(reactFlowEdges);
      console.log('Diagram fetched:', {
        nodes: reactFlowNodes.length,
        edges: reactFlowEdges.length,
      });
    } catch (err: any) {
      console.error('Error fetching diagram:', err);
      setError(err.message || 'Не удалось загрузить схему.');
    }
  };

  const onConnect = useCallback(
    async (params: Connection) => {
      try {
        const token = localStorage.getItem('token');
        if (!token) throw new Error('No authorization token found');
        const response = await fetch(
          `http://localhost:5000/api/diagram/new-edge`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
              projectId,
              sourceId: params.source,
              targetId: params.target,
            }),
          }
        );
        if (!response.ok) {
          const errorText = await response.text();
          throw new Error(
            `Failed to create edge: ${response.status} ${errorText}`
          );
        }
        const data = await response.json();
        setEdges(eds => addEdge({ ...params, id: data.edge.id }, eds));
        setSuccess('Связь создана!');
      } catch (err: any) {
        setError(err.message || 'Не удалось создать связь.');
      }
    },
    [setEdges, projectId]
  );

  const handleCreateNode = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newNodeLabel.trim()) {
      setError('Название узла обязательно.');
      return;
    }
    try {
      const token = localStorage.getItem('token');
      if (!token) throw new Error('No authorization token found');
      const response = await fetch(
        `http://localhost:5000/api/diagram/new-node`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            projectId,
            moduleId: selectedModuleId || null,
            label: newNodeLabel,
            positionX: Math.random() * 500,
            positionY: Math.random() * 500,
          }),
        }
      );
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(
          `Failed to create node: ${response.status} ${errorText}`
        );
      }
      const data = await response.json();
      setNodes(nds => [
        ...nds,
        {
          id: data.node.id,
          type: 'default',
          position: { x: data.node.positionX, y: data.node.positionY },
          data: { label: data.node.label },
        },
      ]);
      setNewNodeLabel('');
      setSelectedModuleId(null);
      setSuccess('Узел создан!');
    } catch (err: any) {
      setError(err.message || 'Не удалось создать узел.');
    }
  };

  const onNodeDragStop = useCallback(
    async (event: React.MouseEvent, node: Node) => {
      try {
        const token = localStorage.getItem('token');
        if (!token) throw new Error('No authorization token found');
        const response = await fetch(
          `http://localhost:5000/api/diagram/edit/${node.id}`,
          {
            method: 'PATCH',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
              label: node.data.label,
              positionX: node.position.x,
              positionY: node.position.y,
            }),
          }
        );
        if (!response.ok) {
          const errorText = await response.text();
          throw new Error(
            `Failed to update node: ${response.status} ${errorText}`
          );
        }
      } catch (err: any) {
        setError(err.message || 'Не удалось обновить позицию узла.');
      }
    },
    []
  );

  const onNodesDelete = useCallback(async (nodesToDelete: Node[]) => {
    try {
      const token = localStorage.getItem('token');
      if (!token) throw new Error('No authorization token found');
      for (const node of nodesToDelete) {
        const response = await fetch(
          `http://localhost:5000/api/diagram/node/${node.id}`,
          {
            method: 'DELETE',
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        if (!response.ok) {
          const errorText = await response.text();
          throw new Error(
            `Failed to delete node: ${response.status} ${errorText}`
          );
        }
      }
      setSuccess('Узел(ы) удален(ы)!');
    } catch (err: any) {
      setError(err.message || 'Не удалось удалить узел(ы).');
    }
  }, []);

  const onEdgesDelete = useCallback(async (edgesToDelete: Edge[]) => {
    try {
      const token = localStorage.getItem('token');
      if (!token) throw new Error('No authorization token found');
      for (const edge of edgesToDelete) {
        const response = await fetch(
          `http://localhost:5000/api/diagram/edge/${edge.id}`,
          {
            method: 'DELETE',
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        if (!response.ok) {
          const errorText = await response.text();
          throw new Error(
            `Failed to delete edge: ${response.status} ${errorText}`
          );
        }
      }
      setSuccess('Связь(и) удалена(ы)!');
    } catch (err: any) {
      setError(err.message || 'Не удалось удалить связь(и).');
    }
  }, []);

  if (error) {
    return <p style={{ color: 'red' }}>{error}</p>;
  }

  return (
    <div className="project-container" style={{ height: '80vh' }}>
      <h2>Блок-схема проекта</h2>
      <div style={{ marginBottom: '10px' }}>
        <form onSubmit={handleCreateNode}>
          <div className="form-group">
            <label htmlFor="newNodeLabel">Новый узел</label>
            <input
              type="text"
              id="newNodeLabel"
              value={newNodeLabel}
              onChange={e => setNewNodeLabel(e.target.value)}
              placeholder="Введите название узла"
              maxLength={255}
            />
          </div>
          <div className="form-group">
            <label htmlFor="moduleId">Модуль (опционально)</label>
            <select
              id="moduleId"
              value={selectedModuleId || ''}
              onChange={e =>
                setSelectedModuleId(
                  e.target.value ? parseInt(e.target.value) : null
                )
              }
            >
              <option value="">Без модуля</option>
              {modules.map(module => (
                <option key={module.id} value={module.id}>
                  {module.name}
                </option>
              ))}
            </select>
          </div>
          <button type="submit">Добавить узел</button>
        </form>
        <button
          onClick={() => navigate('/diagrams')}
          style={{ marginLeft: '10px' }}
        >
          Назад
        </button>
      </div>
      {success && <p style={{ color: 'green' }}>{success}</p>}
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onNodeDragStop={onNodeDragStop}
        onNodesDelete={onNodesDelete}
        onEdgesDelete={onEdgesDelete}
        fitView
      >
        <Background />
        <Controls />
        <MiniMap />
      </ReactFlow>
    </div>
  );
};

export default ProjectDiagram;
