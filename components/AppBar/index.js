import { AppBar, Button, Container, Toolbar } from "@material-ui/core";
import Link from "next/link";

const MyAppBar = () => (
    <AppBar position="fixed">
        <Container>
            <Toolbar>
                <Link href="/"><Button><a>Characters</a></Button></Link>
                <Link href="/locations"><Button>Locations</Button></Link>
                <Link href="/episodes"><Button>Episodes</Button></Link>
            </Toolbar>
        </Container>
    </AppBar>
)

export default MyAppBar;