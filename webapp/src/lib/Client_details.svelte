<script lang="ts">
    import { Container, Column, Text, Divider, Image, Button, Icon } from "svelte-fomantic-ui";
    import { onMount } from "svelte";

    export let page = "client-0";

    export let CD: any;

    let youtube;
    let width = 0;
    let index = parseInt(page.split('-')[1], 10);


    const updateWidth = () => {
        if (youtube) {
            width = youtube.offsetWidth - 25;
            console.log(width);
        }
    };

    onMount(() => {
        updateWidth();
        window.addEventListener("resize", updateWidth); // Update on window resize
        return () => window.removeEventListener("resize", updateWidth); // Cleanup
    });
</script>

<Container ui grid style="padding-top:50px;min-height:200px;padding-bottom:50px;">
    <div bind:this={youtube} style="width:100%"></div>
    <Column one wide centered>
        <Button ui basic icon inverted on:click={()=>{page="clients"}}><Icon white caret square left large/></Button>
    </Column>
    <Column fifteen wide centered>
        <Text ui big>
            {CD.title[index]}
        </Text>
    </Column>
    <Column sixteen wide justified>
        <Divider ui/>
        <Text ui large>
            {CD.description[index]}
        </Text>
        <Divider ui/>
        <Image ui src={CD.hero_picture[index]}></Image>
    </Column>
    {#if CD.youtube_link[index] !== ""}
        <Column sixten wide>
            <iframe width="{width}" height="{width*664/1024}" src="{CD.youtube_link[index]}" title="{CD.title[index]}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </Column>
    {/if}
    <Column sixteen wide justified>
        <Text ui large>
            {@html CD.main_text[index]}
        </Text>
    </Column>
</Container>


