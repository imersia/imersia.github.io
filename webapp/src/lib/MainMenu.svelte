<script lang="ts">
    import { Container, Menu, Link } from "svelte-fomantic-ui";

    export let page = "start";
</script>

<Container ui stackable>
    <Menu ui large secondary inverted pointing stackable>
        <Link item active={page==="start"} blue={page==="start"} on:click={()=>page="start"}>Home</Link>
        <!-- <Link item active={page==="about"} blue={page==="about"} on:click={()=>page="about"}>About</Link> -->
        <Link item active={page.includes('client')} blue={page.includes('client')} on:click={()=>page="clients"}>Clients</Link>
        <Link item active={page==="developer"} blue={page==="developer"} on:click={()=>page="developer"}>Developer</Link>
        <Menu right>
            <Link item active={page==="contact"} green={page==="contact"} on:click={()=>page="contact"}>Contact</Link>
        </Menu>
    </Menu>
</Container>
