<script lang="ts">
    import { Container, Column, Text, Image, Divider, Button } from "svelte-fomantic-ui";

    import Client_Data from './Client_data';

    export let page = "start";
    export let CD: Client_Data;

    function changepage(newpage) {
        page = newpage;
    }
</script>

<Container ui grid style="padding-top:50px;min-height:200px;padding-bottom:50px;">
    <Column sixteen wide centered>
        <Text ui big>A selection of past clients and projects</Text>
    </Column>
    <Column sixteen wide justified>
        <Divider ui/>
        <Text ui large>
            Imersia was active for just over six years, with a dedicated team working on innovative client projects.  We worked with over 20 clients in that time, big and small, but all on the cutting edge of consumer engagement.
        </Text>
    </Column>

    {#each CD.front_picture as front_picture, index}
        <Column four wide centered>
            <Button ui image style="padding: 0px;" on:click={()=>{changepage("client-"+index.toString())}} popup data={{tooltip : CD.title[index], variation : "blue"}}>
                <Image src={front_picture} />
            </Button>
        </Column>
    {/each}
</Container>
