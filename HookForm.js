import React from "react";
import { useForm, Controller } from "react-hook-form";
import { StyleSheet, TextInput, View, Text, Button } from 'react-native';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const schema = yup.object({
    firstName: yup.string().required(),
    lastName: yup.string().required().min(5),
    age: yup.number().positive().integer().required().min(18),
  }).required();

export const HookForm = () => {
    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });
    const onSubmit = data => {
        console.log(data);
    }
    return (
        <View style={styles.container}>
            <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput 
                        style={styles.input}
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                        placeholder="First Name"
                    />
                )}
                name="firstName"
                defaultValue=""
            />
            {errors.firstName && <Text style={styles.text}>First name is required</Text>}

            <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                        style={styles.input}
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                        placeholder="Last Name"
                    />
                )}
            name="lastName"
            defaultValue=""
            />
            {errors.lastName && <Text style={styles.text}>{errors.lastName.message}</Text>}

            <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                        style={styles.input}
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                        placeholder="Age"
                    />
                )}
            name="age"
            defaultValue=""
            />
            {errors.age && <Text style={styles.text}>{errors.age.message}</Text>}
            <Button title="Submit" onPress={handleSubmit(onSubmit)}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
        color: 'red',
        fontSize: 20
    },
  });