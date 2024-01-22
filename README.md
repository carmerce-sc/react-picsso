# React-Picsso

React-Picsso is a TypeScript-based npm library developed by Handle, a software development company. It's designed to simplify the building and cohesive management of styling for React components. This library aims for seamless integration with TypeScript, helping developers to perform styling tasks more quickly and efficiently.

## Features

- **Simplified Styling**: Allows for the easy injection of styling logic into your custom React components with an intuitive API.

## Installation

To install React-Picsso, use the following command:

```bash
npm install react-picsso
```

## Usage Example

Here's an example of how you can use React-Picsso to easily style your components:

```javascript
import picsso from "react-picsso";

const MyWrapper = ({ children, ...props }) => (
  <picsso.Div {...props}>{children}</picsso.Div>
);

export default MyWrapper;
```

Here is another example showing how to use `MyWrapper` in your application:

```javascript
import MyWrapper from "./MyComponents/MyWrapper";

function App() {
  return (
    <div>
      <MyWrapper marginLeft={13}>{"prop: marginLeft={13}"}</MyWrapper>
      <MyWrapper ml={13}>{"prop: ml={13}"}</MyWrapper>
      {/* Numerous configurations are available, and you can add your custom configs in root/picsso.config.ts if needed */}
    </div>
  );
}

export default App;
```

## TypeScript Usage

For TypeScript users, here's how you can integrate React-Picsso with type support:

```typescript
import picsso from "react-picsso";
import { PicssoDefaultConfigType } from "react-picsso/@picsso.defaultConfig";

type MyComponentType = {
  children?: any;
} & PicssoDefaultConfigType;

export default function MyWrapper({ children, ...props }: MyComponentType) {
  return (
    <picsso.Div {...(props as PicssoDefaultConfigType)}>{children}</picsso.Div>
  );
}
```

## TypeScript Support

React-Picsso fully supports usage in a TypeScript environment. All necessary type definitions are included, allowing for easy integration into TypeScript projects.

## Contributing

Interested in contributing to the React-Picsso project? Visit our GitHub page to learn more about how you can contribute.

## License

React-Picsso is distributed under the MIT License. For more details, refer to the LICENSE file in the project.

## Author

Handle Corp, Jaeyeon Kim <jykim@carmerce.co.kr>
