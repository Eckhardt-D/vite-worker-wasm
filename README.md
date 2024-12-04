## Vite, WebWorkers and Zig WebAssembly

Just a basic example of how to marry these ideas together.

### How to run

> [!NOTE]
> You need to have Zig installed on your machine.

#### Start a dev server

        bun run dev

#### Build the project

        bun run build

Check your console for the worker / wasm output.

### What happens

There is a single `zig` file in the `worker` directory that gets compiled to wasm when `dev` or `build` is run.
This wasm file gets instantiated in the `worker/worker.ts` file which is then used in `main.ts`.

When the final output is built, the wasm file is copied to the `dist/assets` directory, where the bundled worker code fetches it from.
