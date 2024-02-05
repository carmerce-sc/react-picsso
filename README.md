# 🎨 React-Picsso

React-Picsso is a TypeScript-based npm library developed by Handle, a software development company. It's designed to simplify the building and cohesive management of styling for React components. This library aims for seamless integration with TypeScript, helping developers to perform styling tasks more quickly and efficiently.

## Features

- **Simplified Styling**: Allows for the easy injection of styling logic into your custom React components with an intuitive API.
- **Cohesive Management**: Enables easy and consistent management of styles across your project.
- **TypeScript Support**: Offers full support and integration for TypeScript users.

## Installation

To install React-Picsso, use the following command:

```bash
npm install react-picsso
```

## Usage Example

Here's an example of how you can use React-Picsso to easily style your components:

```javascript
import picsso from "react-picsso";
import customConfig from "../picsso.config";{/** option, if you want to set your own configurations. # See custom configuration below. */}

const MyWrapper = ({ children, ...props }) => {
  return (
    <picsso.div {...props} customConfig={customConfig}{/** option, if you want to set your own configurations. # See custom configuration below. */}>
      {children}
    </picsso.div>
  );
};

export default MyWrapper;
```

Here is another example showing how to use `MyWrapper` in your application:

```javascript
import MyWrapper from "./MyComponents/MyWrapper";

function App() {
  return (
    <div>
      <MyWrapper marginLeft={13}>{"prop: marginLeft={12}"}</MyWrapper>
      <MyWrapper ml={13}>{"prop: ml={34}"}</MyWrapper>
      {/* Numerous configurations are available, and you can add your custom configs in root/picsso.config.ts if needed */}
      <MyWrapper yourRedBorder>{"A red border"}</MyWrapper>
    </div>
  );
}

export default App;
```

## TypeScript Usage

For TypeScript users, here's how you can integrate React-Picsso with type support:

```javascript
import picsso from "react-picsso";
import { PicssoDefaultConfigType } from "react-picsso/@config";
import customConfig, { PicssoCustomConfigType } from "../picsso.config";{/** option, if you want to set your own configurations. # See custom configuration below. */}

interface MyComponentType
  extends PicssoDefaultConfigType,
    PicssoCustomConfigType {
  children?: any;
}

export default function MyWrapper({ children, ...props }: MyComponentType) {
  return (
    <picsso.div
      {...(props as PicssoDefaultConfigType)}
      customConfig={customConfig}{/** option, if you want to set your own configurations. # See custom configuration below. */}
    >
      {children}
    </picsso.div>
  );
}
```

## Custom Configuration

If you need to set up your custom configuration, you can do so using a configuration file like below:

JavaScript:

picsso.config.js

```javascript
export default {
  yourRedBorder: { getValue: () => "border: 2px dotted red;" },
};
```

TypeScript:

picsso.config.ts

```javascript
export default {
  yourRedBorder: { getValue: () => "border: 2px dotted red;" },
};

export type PicssoCustomConfigType = {
  yourRedBorder?: boolean,
};
```

## Custom configuration example

```javascript
<MyWrapper yourRedBorder>{"A red border"}</MyWrapper>
```

## TypeScript Support

React-Picsso fully supports usage in a TypeScript environment. All necessary type definitions are included, allowing for easy integration into TypeScript projects.

## Contributing

Interested in contributing to the React-Picsso project? Visit our GitHub page to learn more about how you can contribute.

## License

React-Picsso is distributed under the MIT License. For more details, refer to the LICENSE file in the project.

## Author

Handle Corp, Jaeyeon Kim <jykim@carmerce.co.kr>
