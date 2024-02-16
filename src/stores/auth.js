import { ref, computed, onMounted } from 'vue'
import { defineStore } from 'pinia'
import { useFirebaseAuth } from 'vuefire'
import { signInWithEmailAndPassword } from 'firebase/auth'

export const useAuthStore = defineStore('auth', () => {
    const auth = useFirebaseAuth()

    console.log(auth)

    const errorMsg = ref('')
    const errorCodes = {
        'auth/invalid-credential': 'El Usuario y la Contraseña son incorrectas',
        // 'auth/invalid-credential': 'Contraseña incorrecta',

    }

    const login = ({ email, password }) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log(userCredential)
            })
            .catch(error => {
                console.log(error.code)
                console.log(error.message)
                errorMsg.value = errorCodes[error.code]

            })
    }

    const hasError = computed(() => {
        return errorMsg.value
    })

    return {
        login,
        hasError,
        errorMsg
    }
})
