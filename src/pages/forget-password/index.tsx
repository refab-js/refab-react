import { useState } from 'react';
import { z } from 'zod';
import { useForm, zodResolver } from '@mantine/form';
import { PasswordInput, TextInput, Group, Button, Box, createStyles, Anchor, Text } from '@mantine/core';

import Layout from '../../components/layout';


interface ForgetPasswordProps {
    
}

const useStyles = createStyles((theme) => ({

}))

const schema = z.object({
    email: z.string().email({ message: 'Your email format is wrong' }),
})

const ForgetPassword = (props: ForgetPasswordProps) => {
    const [submitLoading, setSubmitLoading] = useState(false);
    const { classes } = useStyles();

    const form = useForm({
        initialValues: {
            email: '',
        },
        schema: zodResolver(schema),
    })

    type FormValues = typeof form.values;
    const handleSubmit = async (values: FormValues) => {
        setSubmitLoading(true);
        try {
            setTimeout(() => {
                console.log(values)
                setSubmitLoading(false);
            }, 2000)
        } catch (error) {
            console.error(error)
            setSubmitLoading(false);
        }
    }

    return (<Layout>
        <Box sx={{ maxWidth: 340 }} mx="auto">
            <Group mt="lg" position={'center'}>
                <Text weight={'bold'} size='xl'>
                    Reset your password
                </Text>
            </Group>
            <Group mb="lg" position={'center'}>
                <Text color="dimmed">
                    Enter your user account's verified email address and we will send you a password reset link.
                </Text>
            </Group>
            <form onSubmit={form.onSubmit(handleSubmit)}>
                <TextInput
                    required
                    label="Email"
                    placeholder="your@email.com"
                    {...form.getInputProps('email')}
                />
                <Group mt="md">
                    <Button fullWidth={true} type="submit">Submit</Button>
                </Group>
                <Group position="center" mt="md">
                    <Anchor href='/register'>
                        <Text weight={'500'}>
                            Back to login
                        </Text>
                    </Anchor>
                </Group>
            </form>
        </Box>
    </Layout>
    )
}

export default ForgetPassword