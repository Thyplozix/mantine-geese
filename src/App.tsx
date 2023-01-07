import { MantineProvider } from '@mantine/core';
import Hero from "./Hero";
export default function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Hero/>
    </MantineProvider>
  );
}