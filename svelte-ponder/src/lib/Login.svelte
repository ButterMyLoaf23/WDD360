<script lang="ts">
let email = "";
let password = "";
let message = "";

    function loginHandler(event: SubmitEvent) {
        event.preventDefault();

        if (!email.includes("@")) {
            message = "Please Enter a valid email";
            return;
        }

        if (password.length < 6) {
            message = "Password must be longer than 6 characters";
        }
    }

</script>

<form onsubmit = {loginHandler}>
    <div>
        <label for="email">Email:</label>
        <input 
            id = "email"
            type = "email"
            bind:value={email}
            placeholder = "Please enter an email"
        />
    </div>

    <div>
        <label for="password">Password:</label>
        <input 
            id = "password"
            type = "password"
            bind:value={password}
            placeholder = "Please enter your password"
        />
    </div>

    <button type = "submit">Log In</button>
</form>

<style>
    form {
        width: 500px;
        margin: 15px auto;
        display: flex;
        flex-direction: column;
    }
</style>
