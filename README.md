# Next JS Todo List with IndexedDB and WatermelonDB

This project implements a todo list application using Next.js and TypeScript, with client-side data storage powered by IndexedDB through WatermelonDB and the LokiJS Adapter.

## Features

- Create, read, update, and delete todo items
- Store todo text and associated images
- Offline-capable using IndexedDB
- Reactive updates with WatermelonDB

## Tech Stack

- Next.js
- TypeScript
- IndexedDB
- WatermelonDB
- LokiJS Adapter for WatermelonDB

## Setup

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

You'll need [Git](https://git-scm.com), and [Node.js](https://nodejs.org/en/download/) (which comes with [pnpm](https://pnpm.io)) installed on your computer.

```
node@20.0.0 or higher
pnpm@9.0.0 or higher
git@2.39.0 or higher
```

## Clone the repo

```shell
git clone https://github.com/AbubakarWebDev/nextjs-watermelondb-indexeddb-typescript
cd nextjs-watermelondb-indexeddb-typescript
```

## Install npm packages

Install the `npm` packages described in the `package.json` and verify that it works:

```shell
pnpm install
pnpm run dev
```

## Database Configuration

The project uses IndexedDB for client-side storage. Configuration can be found in `src/libs/idb/database.ts`.

## Todo Item Model

The Todo model is defined in `src/libs/idb/models/todo-model.ts`.

## UI Components

- Todo list components are located in `src/features/todo-list/`
- Form components for adding and editing todos are in `src/features/todo-list/todo-form/`

## State Management

- React Context is used for state management (see `src/contexts/todo-form-provider/`)
- Custom hooks for fetching data from DB (e.g., `src/hooks/idb/todos/get-todos/`)

## Image Handling

Image utilities can be found in `src/utils/image/`.

## Styling

The project uses global CSS (`src/app/globals.css`) and likely uses a utility for conditional class names (`src/utils/cn/`).

## WatermelonDB with Next.js: Limitations and Considerations

This detail outlines the challenges and limitations encountered when implementing WatermelonDB with Next.js, particularly focusing on IndexedDB usage.

### Key Findings

### 1. Babel Configuration Issues

WatermelonDB requires custom Babel configuration, which presents challenges when used with Next.js:

- Simple React apps using Babel for compilation can easily accommodate WatermelonDB.
- Next.js uses the SWC compiler by default for optimized builds.
- Switching to Babel in Next.js involves significant trade-offs in build optimization.

### 2. IndexedDB Limitations

WatermelonDB doesn't fully leverage IndexedDB's capabilities:

#### a. File and Blob Storage

- Unable to store file and Blob objects directly in IndexedDB.

#### b. Data Type Restrictions

- Primarily supports string number and boolean datatypes only even though indexed db supports any datatype.
- Limited diversity in efficiently storable data types.
- Watermelon DB stores all your data as a single serialized string.

#### c. Indexing Underutilization

- Doesn't fully utilize IndexedDB's indexing features.
- May impact query performance.

## Conclusion

These limitations may affect the overall performance and flexibility of applications using WatermelonDB with Next.js, especially for projects requiring advanced data storage and retrieval capabilities.

## Next Steps

Consider evaluating alternative solutions or implementing workarounds for projects requiring full IndexedDB functionality within a Next.js environment.

## Contributing

Contributions are welcome! if anyone want to contribute to make it further improve, do not think more, and start submitting a Pull request for this.

## License

This project is licensed under the [GNU GENERAL PUBLIC LICENSE] License - see the LICENSE.md file for details.
