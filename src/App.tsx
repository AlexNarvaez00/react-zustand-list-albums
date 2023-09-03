import {
  Container,
  List,
  ListItem,
  ListItemText,
  Typography,
  ThemeProvider
} from "@mui/material";
import { useAlbumsStore } from "./store/AlbumsStore";
import { useEffect } from "react";
import theme from "./theme/PoppinsFont";

export default function App() {
  const loadAlbums = useAlbumsStore((state) => state.loadAlbums);
  const albums = useAlbumsStore((state) => state.albums);

  useEffect(() => {
    loadAlbums();
  }, []);

  if (albums.length == 0) {
    return <div>Cargando...</div>;
  }

  return (
    <ThemeProvider theme={theme}>
      <div>
        <Container maxWidth="md">
          <Typography variant="h3" component="h2" gutterBottom marginTop="1em">
            Ejemplo de Estados globales con Zustands.
          </Typography>
          <Typography variant="body1" gutterBottom>
            Ejemplo simple del uso de Axios, Material UI junto con Zustands para los estado globales 👽.
          </Typography>
          <List>
            {albums.map((album) => (
              <ListItem key={album.id}>
                <ListItemText primary={`${album.id}) - ${album.title}`} />
              </ListItem>
            ))}
          </List>
        </Container>
      </div>
    </ThemeProvider>
  );
}
