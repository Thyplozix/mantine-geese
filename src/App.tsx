import { MantineProvider } from '@mantine/core';
import Grid from "./Grid";
import Nav from "./Nav";

export default function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Nav/>
      <Grid/>
    </MantineProvider>
  );
}