import { useRef } from 'react';
import { useNodesSphere } from '../hooks/useNodesSphere';
import type { NodesConfig } from '../types/nodes.types';

interface Background3DProps {
  config?: Partial<NodesConfig>;
  className?: string;
  opacity?: number;
}

export const Background3D = ({
  config,
  className = '',
  opacity = 0.4,
}: Background3DProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const defaultConfig: NodesConfig = {
    particleCount: 80,
    radius: 2.5,
    particleSize: 0.025,
    particleColor: 0x3b82f6, // blue-500
    lineColor: 0x3b82f6,
    lineOpacity: 0.2,
    maxConnectionDistance: 0.9,
    rotationSpeed: {
      x: 0.001,
      y: 0.002,
    },
  };

  const finalConfig = { ...defaultConfig, ...config };

  useNodesSphere(containerRef, finalConfig);

  return (
    <div
      ref={containerRef}
      className={className}
      style={{
        opacity,
        width: "100%",
        height: "100%",
        position: "absolute",
        top: 0,
        left: 0,
    }}
    />
  );
};