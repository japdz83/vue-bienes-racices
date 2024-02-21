<script setup>
import { useForm, useField } from 'vee-validate'
import { loginSchema as validationSchema } from '../validation/loginShema'
import { useAuthStore } from '../stores/auth';


const { handleSubmit } = useForm({ validationSchema })
const auth = useAuthStore()

// console.log(auth)

const email = useField('email')
const password = useField('password')

const submit = handleSubmit((values) => {
  auth.login(values)
})

// const errorMsg = computed(() => {
//   return auth.loginError.value.code ?
//     errorCodes[auth.loginError.value.code] || auth.loginError.value.message : ""
// })

</script>

<template>
  <v-card flat max-width="600" class="mx-auto my-10">
    <v-card-title class="text-h4 font-weight-bold" tag="h3">
      Iniciar Sesión
    </v-card-title>
    <v-subtitle class="text-h5">
      Iniciar Sesión con tu cuenta
    </v-subtitle>

    <v-alert v-if="auth.hasError" class="my-5" type="error" :title="auth.errorMsg">
    </v-alert>


    <v-form class="mt-5">
      <v-text-field type="email" label="Email" bg-color="blue-grey-lighten-5" class="mb-3" v-model="email.value.value"
        :error-messages="email.errorMessage.value" />

      <v-text-field type="password" label="Password" bg-color="blue-grey-lighten-5" class="mb-3"
        v-model="password.value.value" :error-messages="password.errorMessage.value" />

      <v-btn block color="pink-accent-3" @click="submit" class="py-5">
        Iniciar Sesión
      </v-btn>

    </v-form>
  </v-card>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
