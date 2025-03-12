<template>
  <div class="h-full bg-black">
    <div class="flex justify-center items-center h-full">
      <Card>
        <template #title>
          <p>LOGIN</p>
        </template>

        <template #content>
          <div class="flex flex-col gap-4">
            <InputText type="email" v-model="credentials.email" placeholder="Email" />
            <InputText type="password" v-model="credentials.password" placeholder="Password" />
            <Button type="submit" @click="doLogin">Submit</Button>
          </div>
        </template>

      </Card>
    </div>
  </div>

</template>

<script setup lang="ts">
import { ref } from 'vue';
import { getAuth, signInWithEmailAndPassword } from '@firebase/auth';

let auth = getAuth();
let router = useRouter();

const credentials = ref({
  email: '',
  password: ''
});

async function doLogin() {
  try {
    let signedUser = await signInWithEmailAndPassword(auth, credentials.value.email, credentials.value.password);
    if (signedUser.user.uid != null) {
      await router.push('/');
    }
  } catch (error) {
    console.log(error);
  }
}

</script>

<style scoped>

</style>