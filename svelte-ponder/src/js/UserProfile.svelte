<script lang="ts">
    import InlineField from "./InlineField.svelte";

    let name = "Madeupman";
    let email = "madeupman@gmail.com";

</script>

<h2>User Profile</h2>

<InlineField 
    label = "Name"
    bind:value={name}
/>

<InlineField
    label = "email"
    type = "email"
    bind:value={email}
/>

<p>Name: {name}</p>
<p>Email: {email}</p>