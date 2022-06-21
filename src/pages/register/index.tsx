import { useState } from 'react';
import { useForm, zodResolver } from '@mantine/form';
import { PasswordInput, Group, Button, Box, TextInput, createStyles, Text, Anchor } from '@mantine/core';
import { z } from 'zod';
import Layout from '../../components/layout';

interface RegisterProps {

}

const useStyles = createStyles((theme) => ({

}));

const schema = z.object({
    username: z.string().min(6, { message: 'Your username must be at least 6 characters' }),
    email: z.string().email({ message: 'Your email format is wrong' }),
    password: z.string().min(8, { message: 'Your password must be at least 8 characters' }),
    confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"], // path of error
});

const Register = (props: RegisterProps) => {
    const [submitLoading, setSubmitLoading] = useState(false);

    const { classes } = useStyles();

    const form = useForm({
        initialValues: {
            username: '',
            email: '',
            password: '',
            confirmPassword: '',
        },
        schema: zodResolver(schema),
    });

    type FormValues = typeof form.values;

    const handleSubmit = async (values: FormValues) => {
        setSubmitLoading(true);
        try {
            setTimeout(() => {
                console.log(values)
                setSubmitLoading(false);
            }, 2000)
        } catch (error) {
            console.log(error)
            setSubmitLoading(false);
        }
    }

    return (
        <Layout>
            <Box sx={{ maxWidth: 340 }} mx="auto">
                <Group mt="lg" position={'center'}>
                    <Text weight={'bold'} size='xl'>
                        Welcome to Refab
                    </Text>
                </Group>
                <Group mb="lg" position={'center'}>
                    <Text color="dimmed">
                        Enter the world of high-speed prototyping
                    </Text>
                </Group>

                <form onSubmit={form.onSubmit(handleSubmit)}>
                    <TextInput
                        label="Username"
                        placeholder="Username"
                        {...form.getInputProps('username')}
                    />
                    <TextInput
                        required
                        label="Email"
                        placeholder="your@email.com"
                        mt="sm"
                        {...form.getInputProps('email')}
                    />
                    <PasswordInput
                        required
                        label="Password"
                        placeholder="Password"
                        mt="sm"
                        {...form.getInputProps('password')}
                    />

                    <PasswordInput
                        required
                        label="Confirm password"
                        placeholder="Confirm password"
                        mt="sm"
                        {...form.getInputProps('confirmPassword')}
                    />

                    <Group mt="xl">
                        <Button fullWidth={true} type="submit">Submit</Button>
                    </Group>
                    <Group position="center" mt="md">
                        <Text weight={'500'}>
                            Already a member?
                        </Text>
                        <Anchor href='/login'>
                            <Text weight={'500'}>
                                Login
                            </Text>
                        </Anchor>
                    </Group>
                </form>
            </Box>
        </Layout>
    )
}

export default Register