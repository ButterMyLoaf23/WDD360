<script lang="ts">

    let {
        label,
        value = $bindable(),
        type = "text"
    } = $props< {
        label: string;
        value: string;
        type?: "text" | "email" | "textarea";
    } >();

    let isEditing = $state(false);
    let originalValue = value;
    let displayEl: HTMLElement | null = null;

    function startEdit() {
        originalValue = value;
        isEditing = true;
    }

    function commitEdit() {
        isEditing = false;
        displayEl?.focus();
    }

    function cancelEdit() {
        value = originalValue;
        isEditing = false;
        displayEl?.focus();
    }

    function onInputKeyDown(event: KeyboardEvent) {
        if (event.key === "Enter" && type !== "textarea") {
            event.preventDefault();
            commitEdit();
        }

        if (event.key === "Escape") {
            event.preventDefault();
            cancelEdit();
        }
    }
    
</script>

<div class="field">
    <div class="label">{label}</div>
    {#if isEditing}
        {#if type === "textarea"}
            <textarea
            bind:value
            onblur = {commitEdit}
            onkeydown = {onInputKeyDown}>
            </textarea>
        {:else}
            <input
                {type}
                bind:value
                onblur = {commitEdit}
                onkeydown = {onInputKeyDown} />
        {/if}
    {:else}
        <p
            class = "value"
            onclick = {startEdit}>{value}</p>
    {/if}
</div>

<style></style>

