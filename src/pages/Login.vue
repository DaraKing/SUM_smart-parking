<template>
  <div id="login" class="p-10">
    <img src="https://www.sum.ba/logo.png" />
    <div>
      <InputText
        label="Korisničko ime"
        placeholder="Korisničko ime"
        mutation="storeLoginData"
        npx="username"
      ></InputText>
      <InputPassword
        label="Lozinka"
        placeholder="Lozinka"
        mutation="storeLoginData"
        npx="password"
      ></InputPassword>
      <Submit text="Login" @submitted="login"></Submit>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import InputText from "../components/reusable/inputs/InputText";
import InputPassword from "../components/reusable/inputs/InputPassword";
import Submit from "../components/reusable/buttons/Submit";
export default {
  name: "Login",
  components: {
    Submit,
    InputPassword,
    InputText
  },
  methods: {
    ...mapActions(["loginUser"]),
    login() {
      this.loginUser();
    }
  }
};
</script>

<style scoped></style>
