<script lang="ts">
    import { Container, Column, Text, Divider } from "svelte-fomantic-ui";

    export let page = "start";


</script>

<Container ui grid style="padding-top:50px;min-height:200px;padding-bottom:50px;">
    <Column sixteen wide centered>
        <Text ui big>Strategy</Text>
    </Column>
    <Column sixteen wide justified>
        <Divider ui/>
        <Text ui large>
            The Imersia Mixed Reality Server allows your designers and developers to create complex simulations and games in the real world that can be experienced through mobile devices, WebApps and Websites. Get started with the free Community Edition, then upgrade when you are ready to go Commercial.  The Imersia platform has been designed from experience of using this platform with clients to create all manner of innovations in Digital Mobile Technologies and Mixed Reality.
        </Text>
    </Column>
    <Column five wide centered>
        <Text ui big>
            mixed reality
        </Text>
        <Divider ui/>
        <Text ui large>
            Leverage the Imersia multi-user, Mixed Reality engine to synchronise experiences in a place, thus engaging many people at the same time through their smart phones.
        </Text>
    </Column>
    <Column six wide centered>
        <Text ui big>
            contextual intelligence
        </Text>
        <Divider ui/>
        <Text ui large>
            Imersia’s Mixed Reality platform adapts to people on the move, tailoring experiences to their time and place. By reaching users at the right moment, your brand can inspire more positive decisions.
        </Text>
    </Column>
    <Column five wide centered>
        <Text ui big>
            realtime analytics
        </Text>
        <Divider ui/>
        <Text ui large>
            Success comes from understanding reactions. Imersia’s real-time engine adjusts experiences instantly, maximizing impact in the moment.
        </Text>
    </Column>
    <Column five wide centered>
        <Text ui big>
            design and development
        </Text>
        <Divider ui/>
        <Text ui large>
            Navigating a new medium is tough. With Imersia, your Mixed Reality experts guide ideation, explore possibilities, and focus on connecting with your customers effectively.
        </Text>
    </Column>
    <Column six wide centered>
        <Text ui big>
            ideation
        </Text>
        <Divider ui/>
        <Text ui large>
            Understanding the potential of a new medium can be challenging. With Imersia, your Mixed Reality experts can engage early, guiding ideation, exploring possibilities, and focusing on the best ways to connect with your customers.
        </Text>
    </Column>
    <Column five wide centered>
        <Text ui big>
            mobile digital strategy
        </Text>
        <Divider ui/>
        <Text ui large>
            Deliver location-aware, interactive experiences via mobile WebApps or Mixed Reality Apps, reaching your audience through the device they use most.
        </Text>
    </Column>
</Container>
