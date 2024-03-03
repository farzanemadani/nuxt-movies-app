<template>
    <section class="register">
      <div class="container">
        <div class="columns">
          <div class="column is-4 is-offset-4">
            <h2 class="title text-center mt-4">Register!</h2>
  
           
            <form class="flex flex-col justify-center items-center" @submit.prevent="submitForm">
                <div v-for="(field, index) in fields" :key="index" class="field my-2">
                <label class="text-m text-gray-500">{{ field.label }}</label>
                <div class="control">
                    <component
                    :is="field.type"
                    v-model="field.value"
                    :name="field.name"
                    required
                    class="px-2 py-1 border border-grey-800 rounded-md min-w-64"
                    />
                </div>
                </div>
                <div class="control min-w-64">
                <button type="submit" class="w-full btn bg-blue-500 mt-3 border rounded-md px-3 py-2 w-full">Register</button>
                </div>
            </form> 
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