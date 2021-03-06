import React from 'react';

import { Container } from './styles';

const ProjectAnimation = {
  show: {
    y: 0,
    scale: 1,
    opacity: 1,
  },
  hide: {
    y: 50,
    scale: 0,
    opacity: 0,
  },
};

interface ProjectProps {
  data: {
    url: string;
    name: string;
    description: string;
    topics: {
      nodes: Array<{
        topic: {
          name: string;
        };
      }>;
    };
  };
}

const Project: React.FC<ProjectProps> = ({ data }) => {
  const tags = data.topics.nodes.map((item) =>
    item.topic.name.replace(/-/g, ' '),
  );

  const name = data.name.replace(/-/g, ' ');

  return (
    <Container variants={ProjectAnimation}>
      <a href={data.url} target="_blank" rel="noopener noreferrer">
        <h1>{name}</h1>
        <p>{data.description}</p>
        <ul>
          {tags.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
        <span>read more</span>
      </a>
    </Container>
  );
};

export default Project;
