<script lang="ts">
    import { Segment, Message, Divider, Container } from 'svelte-fomantic-ui';

    import MainMenu from "./lib/MainMenu.svelte";

    import Start from "./lib/Start.svelte";
    import About from "./lib/About.svelte";
    import Clients from './lib/Clients.svelte';
    import Client_details from './lib/Client_details.svelte'
    import Contact from './lib/Contact.svelte';
    import Developer from './lib/Developer.svelte';

    import Client_Data from './lib/Client_data';

    import { onMount } from "svelte";
    import { onDestroy } from "svelte";

    const allImages = import.meta.glob('/src/assets/**/*.png', { eager: true, as: 'url' });

    let page = "start";

    let CD = new Client_Data();

    $: pageHeight = '600px';

    // ------------------------------------------------------------------------------------------------
    // What to do whe the page is loaded
    // ------------------------------------------------------------------------------------------------
    onMount(() => {
        // Add resize event listener
        window.addEventListener("resize", updateHeight);

        // Update the height for the first time
        updateHeight();
    });
    // ------------------------------------------------------------------------------------------------



    // ------------------------------------------------------------------------------------------------
    // What to do when the page is removed
    // ------------------------------------------------------------------------------------------------
    onDestroy(() => {
        window.removeEventListener("resize", updateHeight); 
    });
    // ------------------------------------------------------------------------------------------------



    // ------------------------------------------------------------------------------------------------
    // What to do when the window size is changed
    // ------------------------------------------------------------------------------------------------
    function updateHeight() {
        const height = window.innerHeight - 90;

        pageHeight = `${height - 30}px`;
    }
    // ------------------------------------------------------------------------------------------------
</script>

<main>
    <Segment ui inverted vertical center aligned style="min-height:2000px">

        <MainMenu bind:page/>

        {#if page==="start"}
            <Start {page} {allImages}/>
        {:else if page==="about"}
            <About {page} {allImages}/>
        {:else if page==="clients"}
            <Clients bind:page {CD}/>
        {:else if page==="developer"}
            <Developer {page}/>
        {:else if page==="contact"}
            <Contact {page}/>
        {:else if page.includes('client-')}
            <Client_details bind:page {CD}/>
        <!-- {:else if page==="marketplace"}
            <Marketplace {page} {pageHeight}/> -->
        {/if}

        <Container ui>
            <Divider ui/>
            <Message ui small inverted centered>© coypyright 2020-2025 Imersia Group Limited. All rights reserved.</Message>
            <Divider ui/>
        </Container>


    </Segment>
</main>

<style>

</style>
