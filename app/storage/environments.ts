// @ts-ignore
import * as Store from 'electron-store';
import { EditorEnvironment } from "../components/Editor";

const EnvironmentStore = new Store({
  name: "environments",
});

const KEYS = {
  ENVIRONMENTS: "ENVIRONMENTS",
};

export function saveEnvironment(environment: EditorEnvironment) {
  const environments: EditorEnvironment[] = EnvironmentStore.get(KEYS.ENVIRONMENTS) || [];

  const existingEnvironment = environments.find(env => env.name === environment.name);

  if (existingEnvironment) {
    const updatedEnvironment = {
      ...existingEnvironment,
      ...environment,
    };

    const envIndex = environments.findIndex(env => env.name === environment.name);
    environments[envIndex] = updatedEnvironment;

    EnvironmentStore.set(KEYS.ENVIRONMENTS, environments);
    return;
  }

  EnvironmentStore.set(KEYS.ENVIRONMENTS, [
    ...environments,
    environment
  ]);
}

export function getEnvironments(): EditorEnvironment[] {
  return EnvironmentStore.get(KEYS.ENVIRONMENTS, []);
}

export function deleteEnvironment(environmentName: string) {
  const envs = getEnvironments();
  EnvironmentStore.set(KEYS.ENVIRONMENTS, envs.filter(env => env.name !== environmentName));
}

export function removeAllEnvironments() {
  return EnvironmentStore.delete(KEYS.ENVIRONMENTS);
}
