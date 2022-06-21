import { AppShell } from "@mantine/core"
import { ReactNode } from "react"
import Footer from "../footer"
import Navbar from "../navbar"

interface LayoutProps {
    children: ReactNode,
}

const Layout = (props: LayoutProps) => {

    return (
        <AppShell
        padding="md"
        header={<Navbar />}
        footer={<Footer />}
        styles={(theme) => ({
          main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] },
        })}
      >
        {props.children}
      </AppShell>
    )
}

export default Layout