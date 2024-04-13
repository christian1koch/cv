# Color Theme - Next Themes License

This repository contains a color theme for our application, which includes code that has been copied from the "next-themes" package. In order to comply with the licensing requirements, we have added the "next-themes" MIT license to this project.

## License

The code in this repository is licensed under the MIT License. Please see the [LICENSE](./LICENSE) file for more details.

The "next-themes" package is also licensed under the MIT License. You can find the original license in the [next-themes repository](https://github.com/pacocoursey/next-themes).

## Usage

To use this color theme in your application, follow these steps:

1. Install the "next-themes" package by running the following command:

```bash
npm install next-themes
```

2. Import the color theme in your application:

```javascript
import { ThemeProvider } from "next-themes";
import { ColorTheme } from "color-theme";

function App() {
  return (
    <ThemeProvider>
      <ColorTheme />
      {/* Your application code */}
    </ThemeProvider>
  );
}

export default App;
```

3. Customize the color theme as needed by modifying the `ColorTheme` component.

## Contributing

We welcome contributions to improve this color theme. If you find any issues or have suggestions, please open an issue or submit a pull request.

## Acknowledgements

We would like to thank the authors of the "next-themes" package for their work and for providing a permissive license that allows us to use their code in our application.
