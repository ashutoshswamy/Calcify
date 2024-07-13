function cubeVolume(edge: number) {
  if (edge <= 0) {
    throw new Error("Edge must be a positive number");
  }

  return edge * edge * edge;
}

function cuboidVolume(length: number, width: number, height: number) {
  if (length <= 0 || width <= 0 || height <= 0) {
    throw new Error("Length, Width and Height must be a positive number");
  }

  return length * width * height;
}

function sphereVolume(radius: number) {
  if (radius <= 0) {
    throw new Error("Radius must be a positive number");
  }

  return (4 / 3) * Math.PI * radius * radius * radius;
}

function coneVolume(radius: number, height: number) {
  if (radius <= 0 || height <= 0) {
    throw new Error("Radius and Height must be a positive number");
  }

  return Math.PI * radius * radius * (height / 3);
}

function cylinderVolume(radius: number, height: number) {
  if (radius <= 0 || height <= 0) {
    throw new Error("Radius and Height must be a positive number");
  }

  return Math.PI * radius * radius * height;
}

export { cubeVolume, cuboidVolume, sphereVolume, coneVolume, cylinderVolume };
