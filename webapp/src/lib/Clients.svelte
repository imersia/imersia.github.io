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
        <Text ui big>A selections of clients and projects</Text>
    </Column>
    <Column sixteen wide justified>
        <Divider ui/>
    </Column>

    {#each CD.front_picture as front_picture, index}
        <Column four wide centered>
            <Button ui image style="padding: 0px;" on:click={()=>{changepage("client-"+index.toString())}}>
                <Image src={front_picture} />
            </Button>
        </Column>
    {/each}

    <!-- <Column four wide centered>
        <Button ui image style="padding: 0px;" on:click={()=>{console.log("HERE"); changepage("client-twentycfox")}}>
            <Image src={CD.hero_picture[index]} />
        </Button>
    </Column>
    <Column four wide centered>
        <Image ui src={artquest}/>
    </Column>
    <Column four wide centered>
        <Image ui src={generationz}/>
    </Column>
    <Column four wide centered>
        <Image ui src={kiwiyo}/>
    </Column>
    <Column four wide centered>
        <Image ui src={lotto}/>
    </Column>
    <Column four wide centered>
        <Image ui src={otukapua}/>
    </Column>
    <Column four wide centered>
        <Image ui src={tangaroa}/>
    </Column>
    <Column four wide centered>
        <Image ui src={windsong}/>
    </Column> -->
</Container>
