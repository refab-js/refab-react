import { ActionIcon, Box, Container, createStyles, Group, Header, Text, useMantineTheme } from "@mantine/core"


interface NavbarProps {

}

const useStyles = createStyles((theme) => ({

}));

const Navbar = (props: NavbarProps) => {
    const { classes } = useStyles();
    const theme = useMantineTheme();
  
    return (
        <Header height={50} p='sm'>
          <Box>
            <Container>
              <Group>
                <Text weight={'bolder'} size='lg'>
                  Refab
                </Text>
              </Group>
            </Container>
          </Box>
        </Header>
    )
}

export default Navbar