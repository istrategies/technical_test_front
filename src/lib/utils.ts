const IS_BROWSER = typeof document !== 'undefined' && !!document;

//If on the browser show a prompt box
async function getInputBrowser(question: string, _default: string): Promise<string> {

  return Promise.resolve(prompt(question, _default)).then((promptInput) => {
    return promptInput || _default;
  }).catch(() => _default)
}

//If on nodejs retrieve data from console
// eslint-disable-next-line @typescript-eslint/no-unused-vars
async function getInputNode(question: string, _default: string) {
  const rl = (await import('readline')).createInterface({
    input: process.stdin,
    output: process.stdout
  });

  return new Promise<string>((resolve) => {
    rl.question(question, (name: string) => {
      rl.close();
      resolve(name);
    })
  })

}

//Function to get the method to execute
export async function getInput(question: string, _default: string): Promise<string> {
  if (IS_BROWSER) {
    return await getInputBrowser(question, _default);
  }
  return getInputNode(question, _default);
}

