export default function env(envName) {
  if (!envName) {
    return undefined;
  }

  if (typeof window !== undefined) {
    return window.__ENV[envName];
  } else {
    return process.env[envName];
  }
}
