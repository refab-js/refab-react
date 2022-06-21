import { Footer as MFooter, Group } from "@mantine/core"


interface FooterProps {

}

const Footer = (props: FooterProps) => {

    return (
        <MFooter height={60} p="md">
            <Group position="center">
                © 2022 Refab
            </Group>
        </MFooter>
    )
}

export default Footer