export const getExampleTasks = async () => {
  const response = await fetch("/ToDo-List--EN-CRMS--ReactApp/exampleTasks.json");

  if (!response.ok) {
    new Error(response.statusText);
  }

  return await response.json();
};