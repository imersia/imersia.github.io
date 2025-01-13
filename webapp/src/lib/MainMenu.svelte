<script lang="ts">
    import { Container, Menu, Link, Icon } from "svelte-fomantic-ui";

    export let page = "start";
</script>

<Container ui stackable>
    <Menu ui large secondary inverted pointing stackable>
        <Link item active={page==="start"} blue={page==="start"} on:click={()=>page="start"}>Home</Link>
        {#if page.includes('client-')}
            <Link item icon active={page.includes('client')} blue={page.includes('client')} on:click={()=>page="clients"}>
                <Icon white arrow left/>
            </Link>
        {:else}
            <Link item active={page.includes('client')} blue={page.includes('client')} on:click={()=>page="clients"}>
                Clients
            </Link>
        {/if}
        <Link item active={page==="strategy"} blue={page==="strategy"} on:click={()=>page="strategy"}>Strategy</Link>
        <Link item active={page==="resources"} blue={page==="resources"} on:click={()=>page="resources"}>Resources</Link>
        <Menu right>
            <Link item active={page==="contact"} green={page==="contact"} on:click={()=>page="contact"}>Contact</Link>
        </Menu>
    </Menu>
</Container>
