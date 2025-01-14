<script lang="ts">
    import { Container, Header, Table, Table_Row, Table_Body, Table_Col, Link, Icon, Column, Text, Divider } from "svelte-fomantic-ui";

    export let page = "start";


</script>

<Container ui grid style="padding-top:50px;min-height:200px;padding-bottom:50px;">
    <Column sixteen wide centered>
        <Text ui big>Resources</Text>
    </Column>
    <Column sixteen wide justified>
        <Divider ui/>
        <Text ui large>
            The Imersia Mixed Reality Server is programmed in Erlang.  Erlang’s real-time engine offers scalability, fault tolerance, and low latency, making it perfect for Imersia’s interactive and dynamic experiences. With seamless distribution, hot code swapping, and efficient memory use, Erlang ensures high performance and resilience, even under heavy loads. Combined with Imersia’s RESTful API and Websockets, it provides a reliable, scalable solution for real-time engagement at scale.    
        </Text>
    </Column>
    <Table ui inverted centered huge>
        <Table_Body>
            <Table_Row>
                <Table_Col right aligned>Documentation&nbsp;<Icon ui file/></Table_Col>
                <Table_Col><Link href="https://bitbucket.org/imersiageneral/cloud-mixed-reality-server-erlang-rel/wiki/Home" target="_blank">https://bitbucket.org/imersiageneral/cloud-mixed-reality-server-erlang-rel/wiki/Home</Link></Table_Col>
            </Table_Row>
            <Table_Row>
                <Table_Col right aligned>Release Version&nbsp;<Icon ui running/></Table_Col>
                <Table_Col><Link href="https://bitbucket.org/imersiageneral/cloud-mixed-reality-server-erlang-rel/src/master/">https://bitbucket.org/imersiageneral/cloud-mixed-reality-server-erlang-rel/src/master/</Link></Table_Col>
            </Table_Row>
            <Table_Row>
                <Table_Col right aligned>REST API&nbsp;<Icon ui code branch/></Table_Col>
                <Table_Col><Link href="https://bitbucket.org/imersiageneral/cloud-mixed-reality-server-erlang-rel/src/master/STARTHERE/Documentation/API%20COMMANDS.md">.../STARTHERE/Documentation/API%20COMMANDS.md</Link></Table_Col>
            </Table_Row>
        </Table_Body>
    </Table>
    <Column sixteen wide justified>
        <Divider ui/>
        <Text ui large>
            If you are curious about how this website was created, it is a static site created using Svelte, with the graphics library Fomantic UI using the vite framework.  It is hosted on github.io.
        </Text>
    </Column>
    <Table ui inverted centered huge>
        <Table_Body>
            <Table_Row>
                <Table_Col right aligned>Imersia Website <Icon ui globe/></Table_Col>
                <Table_Col><Link href="https://github.com/imersia/imersia.github.io" target="_blank">https://github.com/imersia/imersia.github.io</Link></Table_Col>
            </Table_Row>
        </Table_Body>
    </Table>
</Container>
