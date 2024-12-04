const worker = new Worker(new URL('./worker/index.ts', import.meta.url));

worker.onmessage = (event) => {
  console.log({ client_data: event.data });

  if (event.data === 'ready') {
    worker.postMessage('hello');
  }
};


