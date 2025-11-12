// Allow importing CSS files in TypeScript without errors
declare module "*.css";

// Allow importing GLSL shader files as strings
declare module "*.glsl" {
  const value: string;  // The content of the shader file will be treated as a string
  export default value;  // Export it as the default export
}
