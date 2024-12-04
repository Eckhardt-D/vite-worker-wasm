(async () => {
  const wasm = await WebAssembly.instantiateStreaming(fetch('add.wasm'), {
    env: {},
  })

  const add = wasm.instance.exports.add as (a: number, b: number) => number;

  self.postMessage('ready');

  self.onmessage = (event) => {
    console.log({ worker_data: event.data });
    self.postMessage(add(1, 5));
  };
})();
