# ts-svelte-component-bug

Repo that reproduces bug with TypeScript but for `<svelte:component/>`. The
component should accept unioned typed props, but instead accepts intersected
types.

Created for this issue: https://github.com/sveltejs/language-tools/issues/1669

## Steps to reproduce

1. Create a component with TypeScript enabled, that exports a prop.
2. Create a second component with the same prop name but different type.
3. Pass the props and types to a `<svelte:component/>` in an `{#each}` block.

## Expected

The `<svelte:component/>` accepts prop of type `a | b`

## Actual

Error is raised because  `<svelte:component/>` requires prop of type `a & b`

```
Type 'a | b' is not assignable to type 'a & b'.
```

Build succeeds, but frustrating because error cannot be ignored or dismissed
because it's generated within the HTML component body.

## How to run this repo

```bash
npm ci
npm run dev
```
