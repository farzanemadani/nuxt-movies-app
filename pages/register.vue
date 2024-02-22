<template>
    <section class="register">
      <div class="container">
        <div class="columns">
          <div class="column is-4 is-offset-4">
            <h2 class="title has-text-centered">Register!</h2>
  
           
            <form @submit.prevent="submitForm">
                <div v-for="(field, index) in fields" :key="index" class="field">
                <label class="label">{{ field.label }}</label>
                <div class="control">
                    <component
                    :is="field.type"
                    v-model="field.value"
                    :name="field.name"
                    required
                    />
                </div>
                </div>
                <div class="control">
                <button type="submit" class="button is-dark is-fullwidth">Register</button>
                </div>
            </form> 
            <!-- <div class="has-text-centered" style="margin-top: 20px">
              Already got an account? <nuxt-link to="/login">Login</nuxt-link>
            </div> -->
          </div>
        </div>
      </div>
    </section>
</template>
  
<script setup lang="ts">
import InputFieldBuilder  from "~/builder/InputFieldBuilder";
const inputField = ref(new InputFieldBuilder());

    // Create a ref for the InputFieldBuilder instance
    onMounted(() => {
        inputField.value
        .setLabel("Username")
        .setName("username")
        .setType("input")
        .setValue("")
        .build()
        .setLabel("Email")
        .setName("email")
        .setType("input")
        .setValue("")
        .build()
        .setLabel("Password")
        .setName("password")
        .setType("input")
        .setValue("")
        .build();
    });

    // Create a computed property for the fields array
    const fields = computed(() => inputField.value?.fields);


    // Define a submit handler for the form
    function submitForm() {
      // Access the values of the input fields
      const username = fields.value[0].value;
      const email = fields.value[1].value;
      const password = fields.value[2].value;

      // Handle the form submission logic
    }

</script>

<style scoped>
.register{
  height: 100vh;
}
</style>