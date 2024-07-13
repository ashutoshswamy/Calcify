function cubeArea(edge: number) {
  if (edge <= 0) {
    throw new Error("Edge must be a positive number");
  }

  return 6 * edge * edge;
}

function cuboidArea(length: number, width: number, height: number) {
  if (length <= 0 || width <= 0 || height <= 0) {
    throw new Error("Length, Width and Height must be a positive number");
  }

  return 2 * (length * width + width * height + length * height);
}

function sphereArea(radius: number) {
  if (radius <= 0) {
    throw new Error("Radius must be a positive number");
  }

  return 4 * Math.PI * radius * radius;
}

function coneArea(radius: number, height: number) {
  if (radius <= 0 || height <= 0) {
    throw new Error("Radius and Height must be a positive number");
  }

  return (
    Math.PI * radius * (radius * Math.sqrt(height * height + radius * radius))
  );
}

function cylinderArea(radius: number, height: number) {
  if (radius <= 0 || height <= 0) {
    throw new Error("Radius and Height must be a positive number");
  }

  return 2 * Math.PI * radius * height + 2 * Math.PI * radius * radius;
}

export { cubeArea, cuboidArea, sphereArea, coneArea, cylinderArea };
