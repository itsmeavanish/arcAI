export const generateSpherePositions = () => {
  const particlesCount = 15000; // Increased for better visual effect
  const positions = new Float32Array(particlesCount * 4);
  const radius =9;

  for (let i = 0; i < particlesCount; i++) {
    // Using spherical coordinates for more uniform distribution
    const phi = Math.acos(-1 + (2 * i) / particlesCount);
    const theta = Math.sqrt(particlesCount * Math.PI) * phi;

    positions[i * 3] = radius * Math.cos(theta) * Math.sin(phi);
    positions[i * 3 + 1] = radius * Math.sin(theta) * Math.sin(phi);
    positions[i * 3 + 2] = radius * Math.cos(phi);
  }

  return { positions, particlesCount };
};