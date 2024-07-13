"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.squareArea = squareArea;
exports.rectangleArea = rectangleArea;
exports.circleArea = circleArea;
exports.triangleArea = triangleArea;
exports.parallelogramArea = parallelogramArea;
exports.rhombusArea = rhombusArea;
function squareArea(side) {
    if (side <= 0) {
        throw new Error("Side must be a positive number");
    }
    return side * side;
}
function rectangleArea(length, width) {
    if (length <= 0 || width <= 0) {
        throw new Error("Length and Width must be a positive number");
    }
    return length * width;
}
function circleArea(radius) {
    if (radius <= 0) {
        throw new Error("Radius must be a positive number");
    }
    return Math.PI * radius * radius;
}
function triangleArea(base, height) {
    if (base <= 0 || height <= 0) {
        throw new Error("Base and Height must be a positive number");
    }
    return 0.5 * base * height;
}
function parallelogramArea(base, height) {
    if (base <= 0 || height <= 0) {
        throw new Error("Base and Height must be a positive number");
    }
    return base * height;
}
function rhombusArea(diagonal1, diagonal2) {
    if (diagonal1 <= 0 || diagonal2 <= 0) {
        throw new Error("Both the Diagonals must be a positive");
    }
    return (diagonal1 * diagonal2) / 2;
}
